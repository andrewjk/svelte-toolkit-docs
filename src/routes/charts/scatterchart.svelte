<script>
  import { ScatterChart } from "svelte-toolkit";

  let height = 200;
  let width = 400;

  let xLabel = "Things";
  let yLabel = "";
  let labels = "Item1, Item2, Item3";
  let data = "(5, 35), (10, 25), (15, 45)";
  let color = "";
  let labels2 = "";
  let data2 = "";
  let color2 = "";
  let xStepCount = 2;
  let xStepValue = 0;
  let yStepCount = 2;
  let yStepValue = 0;
  let showXAxis = true;
  let showYAxis = true;
  let showHLines = false;
  let showVLines = false;

  $: dataArray = data2 ? null : buildDataArray(labels, data);
  $: seriesArray = data2
    ? [
        { color, data: buildDataArray(labels, data) },
        { color: color2, data: buildDataArray(labels2, data2) }
      ]
    : null;

  $: exampleCode = data2
    ? `
import { ScatterChart } from "svelte-toolkit";

<ScatterChart
  width={${width}}
  height={${height}} 
  xLabel="${xLabel}"
  yLabel="${yLabel}"
  series={[${seriesArray.map(
    s => `
    {
      name: "",
      color: "${s.color}",
      data: [${s.data
        .map(
          d => `
      {
        label: "${d.label}",
        x: ${d.x},
        y: ${d.y}
      }`
        )
        .join(", ")}}]
    }`
  )}
  ]}
  xStepCount={${xStepCount}}
  xStepValue={${xStepValue}}
  yStepCount={${yStepCount}}
  yStepValue={${yStepValue}}
  showXAxis={${showXAxis}}
  showYAxis={${showYAxis}}
  showHLines={${showHLines}}
  showVLines={${showVLines}} />
`.trim()
    : `
import { ScatterChart } from "svelte-toolkit";

<ScatterChart
  width={${width}}
  height={${height}} 
  xLabel="${xLabel}"
  yLabel="${yLabel}"
  data={[${dataArray
    .map(
      d => `
    {
      label: "${d.label}",
      x: ${d.x},
      y: ${d.y}
    }`
    )
    .join(", ")}
  ]}
  color="${color}"
  xStepCount={${xStepCount}}
  xStepValue={${xStepValue}}
  yStepCount={${yStepCount}}
  yStepValue={${yStepValue}}
  showXAxis={${showXAxis}}
  showYAxis={${showYAxis}}
  showHLines={${showHLines}}
  showVLines={${showVLines}} />
`.trim();

  function addRandom() {
    const darray = data.split(/[\s,;]/).filter(Boolean);
    darray.push(
      `(${Math.floor(Math.random() * 100) + 1}, ${Math.floor(
        Math.random() * 100
      ) + 1})`
    );
    data = darray.join(", ");
    const larray = labels.split(/[\s,;]/).filter(Boolean);
    while (larray.length < darray.length) {
      larray.push(`Item${larray.length}`);
    }
    labels = larray.join(", ");
    if (data2) {
      const d2array = data2.split(/[\s,;]/).filter(Boolean);
      while (d2array.length < darray.length) {
        d2array.push(
          `(${Math.floor(Math.random() * 100) + 1}, ${Math.floor(
            Math.random() * 100
          ) + 1})`
        );
      }
      data2 = d2array.join(", ");
      const l2array = labels2.split(/[\s,;]/).filter(Boolean);
      while (l2array.length < darray.length) {
        l2array.push(`Item10${l2array.length}`);
      }
      labels2 = l2array.join(", ");
    }
  }

  function buildDataArray(theLabels, theData) {
    const labelsArray = theLabels.split(/[\s,;]/).filter(Boolean);
    const dataArray = theData.split(/[\(\)]/).filter(Boolean);
    let labelIndex = -1;
    return dataArray
      .map((d, i) => {
        const parts = d
          .trim()
          .split(/[\s,;]/)
          .filter(Boolean);
        if (parts.length === 2) {
          labelIndex += 1;
          return {
            label: labelsArray[labelIndex],
            x: parts[0],
            y: parts[1]
          };
        }
      })
      .filter(Boolean);
  }
</script>

<svelte:head>
  <title>Scatter Chart | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h1>Scatter Chart</h1>
  <p>A simple SVG scatter chart for displaying data.</p>

  <h2>Demo</h2>
  <div class="block">
    <ScatterChart
      {height}
      {width}
      {xLabel}
      {yLabel}
      data={dataArray}
      {color}
      series={seriesArray}
      {xStepCount}
      {xStepValue}
      {yStepCount}
      {yStepValue}
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
          <td>The labels to display for each point</td>
          <td>
            <input type="text" bind:value={labels} />
          </td>
          <td />
        </tr>
        <tr>
          <td>data</td>
          <td />
          <td>The data to display as points</td>
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
          <td>The color of the points</td>
          <td>
            <input type="text" bind:value={color} />
          </td>
          <td />
        </tr>
        <tr>
          <td>labels 2</td>
          <td />
          <td>You can pass multiple labels in a series property</td>
          <td>
            <input type="text" bind:value={labels2} />
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
          <td>xStepCount</td>
          <td>2</td>
          <td>The number of steps to show on the x-axis</td>
          <td>
            <input type="number" bind:value={xStepCount} />
          </td>
          <td />
        </tr>
        <tr>
          <td>xStepValue</td>
          <td />
          <td>
            The value of each step on the x-axis. By default, this is
            automatically calculated
          </td>
          <td>
            <input type="number" bind:value={xStepValue} />
          </td>
          <td />
        </tr>
        <tr>
          <td>yStepCount</td>
          <td>2</td>
          <td>The number of steps to show on the y-axis</td>
          <td>
            <input type="number" bind:value={yStepCount} />
          </td>
          <td />
        </tr>
        <tr>
          <td>yStepValue</td>
          <td />
          <td>
            The value of each step on the y-axis. By default, this is
            automatically calculated
          </td>
          <td>
            <input type="number" bind:value={yStepValue} />
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
