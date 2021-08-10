<script>
  import {
    BarChart,
    Table,
    TableRow,
    TableHeader,
    TableHeaderCell,
    TableBody,
    TableCell,
    Panel,
  } from "svelte-toolkit";

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
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Default</TableHeaderCell>
          <TableHeaderCell>Description</TableHeaderCell>
          <TableHeaderCell>Change</TableHeaderCell>
          <th />
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>height</TableCell>
          <TableCell>200</TableCell>
          <TableCell>The height of the chart, in pixels</TableCell>
          <TableCell>
            <input type="number" bind:value={height} />
          </TableCell>
          <td />
        </TableRow>
        <TableRow>
          <TableCell>width</TableCell>
          <TableCell>400</TableCell>
          <TableCell>The width of the chart, in pixels. Set to 0 to auto-size</TableCell>
          <TableCell>
            <input type="number" bind:value={width} />
          </TableCell>
          <td />
        </TableRow>
        <TableRow>
          <TableCell>xLabel</TableCell>
          <td />
          <TableCell>A label to display along the x-axis</TableCell>
          <TableCell>
            <input type="text" bind:value={xLabel} />
          </TableCell>
          <td />
        </TableRow>
        <TableRow>
          <TableCell>yLabel</TableCell>
          <td />
          <TableCell>A label to display along the y-axis</TableCell>
          <TableCell>
            <input type="text" bind:value={yLabel} />
          </TableCell>
          <td />
        </TableRow>
        <TableRow>
          <TableCell>labels</TableCell>
          <td />
          <TableCell>The labels to display for each bar</TableCell>
          <TableCell>
            <input type="text" bind:value={labels} />
          </TableCell>
          <td />
        </TableRow>
        <TableRow>
          <TableCell>data</TableCell>
          <td />
          <TableCell>The data to display as bars</TableCell>
          <TableCell>
            <input type="text" bind:value={data} />
          </TableCell>
          <TableCell>
            <button on:click={addRandom}>++</button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>color</TableCell>
          <td />
          <TableCell>The color of the bars</TableCell>
          <TableCell>
            <input type="text" bind:value={color} />
          </TableCell>
          <td />
        </TableRow>
        <TableRow>
          <TableCell>data 2</TableCell>
          <td />
          <TableCell>You can pass multiple data arrays in a series property</TableCell>
          <TableCell>
            <input type="text" bind:value={data2} />
          </TableCell>
          <td />
        </TableRow>
        <TableRow>
          <TableCell>color 2</TableCell>
          <td />
          <TableCell>You can pass multiple colors in a series property</TableCell>
          <TableCell>
            <input type="text" bind:value={color2} />
          </TableCell>
          <td />
        </TableRow>
        <TableRow>
          <TableCell>stepCount</TableCell>
          <TableCell>2</TableCell>
          <TableCell>The number of steps to show on the y-axis</TableCell>
          <TableCell>
            <input type="number" bind:value={stepCount} />
          </TableCell>
          <td />
        </TableRow>
        <TableRow>
          <TableCell>stepValue</TableCell>
          <td />
          <TableCell>
            The value of each step on the y-axis. By default, this is
            automatically calculated
          </TableCell>
          <TableCell>
            <input type="number" bind:value={stepValue} />
          </TableCell>
          <td />
        </TableRow>
        <TableRow>
          <TableCell>showXAxis</TableCell>
          <TableCell>true</TableCell>
          <TableCell>set to true to show the x-axis line, or false to hide it</TableCell>
          <TableCell>
            <label>
              <input type="checkbox" bind:checked={showXAxis} />
              Show the x-axis
            </label>
          </TableCell>
          <td />
        </TableRow>
        <TableRow>
          <TableCell>showYAxis</TableCell>
          <TableCell>true</TableCell>
          <TableCell>set to true to show the y-axis line, or false to hide it</TableCell>
          <TableCell>
            <label>
              <input type="checkbox" bind:checked={showYAxis} />
              Show the y-axis
            </label>
          </TableCell>
          <td />
        </TableRow>
        <TableRow>
          <TableCell>showHLines</TableCell>
          <TableCell>false</TableCell>
          <TableCell>set to true to show horizontal gridlines</TableCell>
          <TableCell>
            <label>
              <input type="checkbox" bind:checked={showHLines} />
              Show horizontal gridlines
            </label>
          </TableCell>
          <td />
        </TableRow>
        <TableRow>
          <TableCell>showVLines</TableCell>
          <TableCell>false</TableCell>
          <TableCell>set to true to show vertical gridlines</TableCell>
          <TableCell>
            <label>
              <input type="checkbox" bind:checked={showVLines} />
              Show vertical gridlines
            </label>
          </TableCell>
          <td />
        </TableRow>
      </TableBody>
    </Table>
  </div>

  <h2>Code</h2>
  <div class="block">
    <Panel>
      <pre>{exampleCode}</pre>
    </Panel>
  </div>
</div>
