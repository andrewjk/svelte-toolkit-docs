<script>
  import { PieChart } from "svelte-toolkit";

  let size = 200;
  let radius = 50;
  let cutout = 0;
  let labels = "Item1, Item2, Item3";
  let data = "35, 25, 45";
  let colors = "";

  $: dataArray = buildDataArray(labels, data, colors);

  $: exampleCode = `
import { PieChart } from "svelte-toolkit";

<PieChart
  size={${size}}
  radius={${radius}}
  cutout={${cutout}}
  data={[${dataArray.map(
    d => `
    {
      label: "${d.label || ""}",
      value: ${d.value || ""},
      color: "${d.color || ""}"
    }`
  )}
  ]} />
`.trim();

  function buildDataArray(theLabels, theData, theColors) {
    const labelsArray = theLabels.split(/[\s,;]/).filter(Boolean);
    const dataArray = theData.split(/[\s,;]/).filter(Boolean);
    const colorsArray = theColors.split(/[\s,;]/).filter(Boolean);
    return dataArray.map((d, i) => {
      return {
        label: labelsArray[i] || "",
        value: d || "",
        color: colorsArray[i] || ""
      };
    });
  }

  function addRandom() {
    const darray = data.split(/[\s,;]/).filter(Boolean);
    darray.push(Math.floor(Math.random() * 100) + 1);
    data = darray.join(", ");
    const larray = labels.split(/[\s,;]/).filter(Boolean);
    while (larray.length < darray.length) {
      larray.push(`Item${larray.length}`);
    }
    labels = larray.join(", ");
  }
</script>

<svelte:head>
  <title>Pie Chart | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h1>Pie Chart</h1>
  <p>A simple SVG pie chart for displaying data.</p>

  <h2>Demo</h2>
  <div class="block">
    <PieChart {size} {radius} {cutout} data={dataArray} />
  </div>

  <h2>Properties</h2>
  <div class="block">
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Default</th>
          <th>Description</th>
          <th>Change</th>
          <th />
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>size</td>
          <td>200</td>
          <td>The size of the chart, in pixels</td>
          <td>
            <input type="number" bind:value={size} />
          </td>
          <td />
        </tr>
        <tr>
          <td>radius</td>
          <td>50</td>
          <td>The size of the chart's radius as a percentage of size</td>
          <td>
            <input type="number" bind:value={radius} />
          </td>
          <td />
        </tr>
        <tr>
          <td>cutout</td>
          <td>0</td>
          <td>The size of the chart's cutout as a percentage of size</td>
          <td>
            <input type="number" bind:value={cutout} />
          </td>
          <td />
        </tr>
        <tr>
          <td>labels</td>
          <td />
          <td>The labels to display for each segment</td>
          <td>
            <input type="text" bind:value={labels} />
          </td>
          <td />
        </tr>
        <tr>
          <td>values</td>
          <td />
          <td>The value to display for each segment</td>
          <td>
            <input type="text" bind:value={data} />
          </td>
          <td>
            <button on:click={addRandom}>++</button>
          </td>
        </tr>
        <tr>
          <td>colors</td>
          <td />
          <td>The color to display for each segment</td>
          <td>
            <input type="text" bind:value={colors} />
          </td>
          <td />
        </tr>
      </tbody>
    </table>
  </div>

  <h2>Code</h2>
  <div class="block">
    <pre>{exampleCode}</pre>
  </div>
</div>
