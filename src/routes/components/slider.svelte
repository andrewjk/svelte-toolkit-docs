<script>
  import {
    Slider,
    Table,
    TableRow,
    TableHeader,
    TableHeaderCell,
    TableBody,
    TableCell,
    Panel,
  } from "svelte-toolkit";

  let value = 50;
  let total = 100;

  $: exampleCode = `
import { Slider } from "svelte-toolkit";

<Slider value={${value}} total={${total}} />`;
</script>

<svelte:head>
  <title>Slider | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h1>Slider</h1>
  <p>A slider that a user can drag and move to select a value.</p>

  <h2>Demo</h2>
  <div class="block">
    <Slider bind:value bind:total />
    <br />
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
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>value</TableCell>
          <TableCell>0</TableCell>
          <TableCell>0 to 100 (or the value of total, below)</TableCell>
          <TableCell>
            <input type="number" bind:value />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>total</TableCell>
          <TableCell>100</TableCell>
          <TableCell></TableCell>
          <TableCell>
            <input type="number" bind:value={total} />
          </TableCell>
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
