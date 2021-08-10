<script>
  import {
    ColorPicker,
    Table,
    TableRow,
    TableHeader,
    TableHeaderCell,
    TableBody,
    TableCell,
    Panel,
  } from "svelte-toolkit";

  let value = null;
  let placeholder = "";

  $: exampleCode = `
import { ColorPicker } from "svelte-toolkit";

<ColorPicker value={${value}} placeholder="${placeholder}" />`.trim();
</script>

<svelte:head>
  <title>Color Picker | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h1>Color Picker</h1>
  <p>A dropdown color picker that can be used to enter or select a color.</p>

  <h2>Demo</h2>
  <div class="block">
    <ColorPicker bind:value {placeholder} />
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
          <td />
          <TableCell>the selected value</TableCell>
          <TableCell>{value}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>placeholder</TableCell>
          <td />
          <TableCell>Placeholder text to show when the input is empty.</TableCell>
          <TableCell>
            <input type="text" bind:value={placeholder} />
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
