<script>
  import {
    Sparkline,
    Table,
    TableRow,
    TableHeader,
    TableHeaderCell,
    TableBody,
    TableCell,
    Panel,
  } from "svelte-toolkit";

  let height = 20;
  let width = 100;

  let data = "35, 25, 45";
  let color = "";

  $: dataArray = data.split(/[\s,;]/).filter(Boolean);

  $: exampleCode = `
import { Sparkline } from "svelte-toolkit";

<Sparkline
  width={${width}}
  height={${height}} 
  data={[${dataArray}]}
  color="${color}" />
`.trim();

  function addRandom() {
    const darray = data.split(/[\s,;]/).filter(Boolean);
    darray.push(Math.floor(Math.random() * 100) + 1);
    data = darray.join(", ");
  }
</script>

<svelte:head>
  <title>Sparkline | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h1>Sparkline</h1>
  <p>A small SVG line chart for displaying data.</p>

  <h2>Demo</h2>
  <div class="block">
    <Sparkline {height} {width} data={dataArray} {color} />
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
          <TableCell>data</TableCell>
          <td />
          <TableCell>The data to display as lines</TableCell>
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
          <TableCell>The color of the lines</TableCell>
          <TableCell>
            <input type="text" bind:value={color} />
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
