<script>
  import {
    ScatterChart,
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
          <TableCell>The labels to display for each point</TableCell>
          <TableCell>
            <input type="text" bind:value={labels} />
          </TableCell>
          <td />
        </TableRow>
        <TableRow>
          <TableCell>data</TableCell>
          <td />
          <TableCell>The data to display as points</TableCell>
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
          <TableCell>The color of the points</TableCell>
          <TableCell>
            <input type="text" bind:value={color} />
          </TableCell>
          <td />
        </TableRow>
        <TableRow>
          <TableCell>labels 2</TableCell>
          <td />
          <TableCell>You can pass multiple labels in a series property</TableCell>
          <TableCell>
            <input type="text" bind:value={labels2} />
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
          <TableCell>xStepCount</TableCell>
          <TableCell>2</TableCell>
          <TableCell>The number of steps to show on the x-axis</TableCell>
          <TableCell>
            <input type="number" bind:value={xStepCount} />
          </TableCell>
          <td />
        </TableRow>
        <TableRow>
          <TableCell>xStepValue</TableCell>
          <td />
          <TableCell>
            The value of each step on the x-axis. By default, this is
            automatically calculated
          </TableCell>
          <TableCell>
            <input type="number" bind:value={xStepValue} />
          </TableCell>
          <td />
        </TableRow>
        <TableRow>
          <TableCell>yStepCount</TableCell>
          <TableCell>2</TableCell>
          <TableCell>The number of steps to show on the y-axis</TableCell>
          <TableCell>
            <input type="number" bind:value={yStepCount} />
          </TableCell>
          <td />
        </TableRow>
        <TableRow>
          <TableCell>yStepValue</TableCell>
          <td />
          <TableCell>
            The value of each step on the y-axis. By default, this is
            automatically calculated
          </TableCell>
          <TableCell>
            <input type="number" bind:value={yStepValue} />
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
