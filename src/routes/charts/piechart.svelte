<script>
  import {
    PieChart,
    Table,
    TableRow,
    TableHeader,
    TableHeaderCell,
    TableBody,
    TableCell,
    Panel,
  } from "svelte-toolkit";

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
          <TableCell>size</TableCell>
          <TableCell>200</TableCell>
          <TableCell>The size of the chart, in pixels</TableCell>
          <TableCell>
            <input type="number" bind:value={size} />
          </TableCell>
          <td />
        </TableRow>
        <TableRow>
          <TableCell>radius</TableCell>
          <TableCell>50</TableCell>
          <TableCell>The size of the chart's radius as a percentage of size</TableCell>
          <TableCell>
            <input type="number" bind:value={radius} />
          </TableCell>
          <td />
        </TableRow>
        <TableRow>
          <TableCell>cutout</TableCell>
          <TableCell>0</TableCell>
          <TableCell>The size of the chart's cutout as a percentage of size</TableCell>
          <TableCell>
            <input type="number" bind:value={cutout} />
          </TableCell>
          <td />
        </TableRow>
        <TableRow>
          <TableCell>labels</TableCell>
          <td />
          <TableCell>The labels to display for each segment</TableCell>
          <TableCell>
            <input type="text" bind:value={labels} />
          </TableCell>
          <td />
        </TableRow>
        <TableRow>
          <TableCell>values</TableCell>
          <td />
          <TableCell>The value to display for each segment</TableCell>
          <TableCell>
            <input type="text" bind:value={data} />
          </TableCell>
          <TableCell>
            <button on:click={addRandom}>++</button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>colors</TableCell>
          <td />
          <TableCell>The color to display for each segment</TableCell>
          <TableCell>
            <input type="text" bind:value={colors} />
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
