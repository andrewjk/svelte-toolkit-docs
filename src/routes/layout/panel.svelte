<script>
  import {
    Panel,
    Table,
    TableRow,
    TableHeader,
    TableHeaderCell,
    TableBody,
    TableCell,
  } from "svelte-toolkit";

  let type = "";

  $: exampleCode = `
import { Panel } from "svelte-toolkit";

<Panel type="${type}">This is a panel.</Panel>`.trim();
</script>

<svelte:head>
  <title>Panel | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h1>Panel</h1>
  <p>
    The panel can be used to group elements together. By default, the panel has
    a white background, but this can be changed to different colors.
  </p>

  <h2>Demo</h2>
  <div class="block">
    <Panel {type}>This is a panel.</Panel>
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
          <TableCell>type</TableCell>
          <TableCell>-</TableCell>
          <TableCell>
            transparent, light, dark, primary, info, success, warning, or danger
          </TableCell>
          <TableCell>
            <select bind:value={type}>
              <option>-</option>
              <option>transparent</option>
              <option>light</option>
              <option>dark</option>
              <option>primary</option>
              <option>info</option>
              <option>success</option>
              <option>warning</option>
              <option>danger</option>
            </select>
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
