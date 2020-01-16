<script>
  import { BarChart } from "svelte-toolkit";

  let height = 200;
  let width = 400;

  let xLabel = "Things";
  let yLabel = "";
  let labels = "Item1, Item2, Item3";
  let data = "35, 25, 45";
  let color = "";
  let data2 = "";
  let color2 = "";
  let stepCount = 2;
  let stepValue = 0;
  let showXAxis = true;
  let showYAxis = true;
  let showHLines = false;
  let showVLines = false;

  $: labelsArray = labels.split(/[\s,;]/).filter(Boolean);
  $: dataArray = data2 ? null : data.split(/[\s,;]/).filter(Boolean);
  $: seriesArray = data2
    ? [
        { color, data: data.split(/[\s,;]/).filter(Boolean) },
        { color: color2, data: data2.split(/[\s,;]/).filter(Boolean) }
      ]
    : null;

  $: exampleCode = data2
    ? `
import { BarChart } from "svelte-toolkit";

<BarChart
  width={${width}}
  height={${height}} 
  xLabel="${xLabel}"
  yLabel="${yLabel}"
  labels={[${labelsArray.map(l => `"${l}"`)}]}
  series={[${seriesArray.map(
    s => `
    {
      name: "",
      color: "${s.color}",
      data: [${s.data}]
    }`
  )}
  ]}
  stepCount={${stepCount}}
  stepValue={${stepValue}}
  showXAxis={${showXAxis}}
  showYAxis={${showYAxis}}
  showHLines={${showHLines}}
  showVLines={${showVLines}} />
`.trim()
    : `
import { BarChart } from "svelte-toolkit";

<BarChart
  width={${width}}
  height={${height}} 
  xLabel="${xLabel}"
  yLabel="${yLabel}"
  labels={[${labelsArray.map(l => `"${l}"`)}]}
  data={[${dataArray}]}
  color="${color}"
  stepCount={${stepCount}}
  stepValue={${stepValue}}
  showXAxis={${showXAxis}}
  showYAxis={${showYAxis}}
  showHLines={${showHLines}}
  showVLines={${showVLines}} />
`.trim();

  function addRandom() {
    const darray = data.split(/[\s,;]/).filter(Boolean);
    darray.push(Math.floor(Math.random() * 100) + 1);
    data = darray.join(", ");
    if (data2) {
      const d2array = data2.split(/[\s,;]/).filter(Boolean);
      while (d2array.length < darray.length) {
        d2array.push(Math.floor(Math.random() * 100) + 1);
      }
      data2 = d2array.join(", ");
    }
    const larray = labels.split(/[\s,;]/).filter(Boolean);
    while (larray.length < darray.length) {
      larray.push(`Item${larray.length}`);
    }
    labels = larray.join(", ");
  }
</script>

<svelte:head>
  <title>Bar Chart | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h1>Bar Chart</h1>
  <p>A simple SVG bar chart for displaying data.</p>

  <h2>Demo</h2>
  <div class="block">
    <BarChart
      {height}
      {width}
      {xLabel}
      {yLabel}
      labels={labelsArray}
      data={dataArray}
      {color}
      series={seriesArray}
      {stepCount}
      {stepValue}
      {showXAxis}
      {showYAxis}
      {showHLines}
      {showVLines} />
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
          <td>height</td>
          <td>200</td>
          <td>The height of the chart, in pixels</td>
          <td>
            <input type="number" bind:value={height} />
          </td>
          <td />
        </tr>
        <tr>
          <td>width</td>
          <td>400</td>
          <td>The width of the chart, in pixels. Set to 0 to auto-size</td>
          <td>
            <input type="number" bind:value={width} />
          </td>
          <td />
        </tr>
        <tr>
          <td>xLabel</td>
          <td />
          <td>A label to display along the x-axis</td>
          <td>
            <input type="text" bind:value={xLabel} />
          </td>
          <td />
        </tr>
        <tr>
          <td>yLabel</td>
          <td />
          <td>A label to display along the y-axis</td>
          <td>
            <input type="text" bind:value={yLabel} />
          </td>
          <td />
        </tr>
        <tr>
          <td>labels</td>
          <td />
          <td>The labels to display for each bar</td>
          <td>
            <input type="text" bind:value={labels} />
          </td>
          <td />
        </tr>
        <tr>
          <td>data</td>
          <td />
          <td>The data to display as bars</td>
          <td>
            <input type="text" bind:value={data} />
          </td>
          <td>
            <button on:click={addRandom}>++</button>
          </td>
        </tr>
        <tr>
          <td>color</td>
          <td />
          <td>The color of the bars</td>
          <td>
            <input type="text" bind:value={color} />
          </td>
          <td />
        </tr>
        <tr>
          <td>data 2</td>
          <td />
          <td>You can pass multiple data arrays in a series property</td>
          <td>
            <input type="text" bind:value={data2} />
          </td>
          <td />
        </tr>
        <tr>
          <td>color 2</td>
          <td />
          <td>You can pass multiple colors in a series property</td>
          <td>
            <input type="text" bind:value={color2} />
          </td>
          <td />
        </tr>
        <tr>
          <td>stepCount</td>
          <td>2</td>
          <td>The number of steps to show on the y-axis</td>
          <td>
            <input type="number" bind:value={stepCount} />
          </td>
          <td />
        </tr>
        <tr>
          <td>stepValue</td>
          <td />
          <td>
            The value of each step on the y-axis. By default, this is
            automatically calculated
          </td>
          <td>
            <input type="number" bind:value={stepValue} />
          </td>
          <td />
        </tr>
        <tr>
          <td>showXAxis</td>
          <td>true</td>
          <td>set to true to show the x-axis line, or false to hide it</td>
          <td>
            <label>
              <input type="checkbox" bind:checked={showXAxis} />
              Show the x-axis
            </label>
          </td>
          <td />
        </tr>
        <tr>
          <td>showYAxis</td>
          <td>true</td>
          <td>set to true to show the y-axis line, or false to hide it</td>
          <td>
            <label>
              <input type="checkbox" bind:checked={showYAxis} />
              Show the y-axis
            </label>
          </td>
          <td />
        </tr>
        <tr>
          <td>showHLines</td>
          <td>false</td>
          <td>set to true to show horizontal gridlines</td>
          <td>
            <label>
              <input type="checkbox" bind:checked={showHLines} />
              Show horizontal gridlines
            </label>
          </td>
          <td />
        </tr>
        <tr>
          <td>showVLines</td>
          <td>false</td>
          <td>set to true to show vertical gridlines</td>
          <td>
            <label>
              <input type="checkbox" bind:checked={showVLines} />
              Show vertical gridlines
            </label>
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
