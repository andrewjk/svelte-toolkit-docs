<script>
  import {
    Palette,
    Table,
    TableRow,
    TableHeader,
    TableHeaderCell,
    TableBody,
    TableCell,
    Panel,
  } from "svelte-toolkit";

  let value = "green";

  $: exampleCode = `
import { Palette } from "svelte-toolkit";

<Palette value="${value}"`.trim();
</script>

<svelte:head>
  <title>Palette | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h1>Palette</h1>
  <p>A palette that you can use to choose a color.</p>

  <h2>Demo</h2>
  <div class="block">
    <Palette bind:value />
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
          <TableCell>
            the value of the color that is selected, which can be hex, rgb() or
            a named CSS color
          </TableCell>
          <TableCell>
            <input type="text" bind:value />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>standardColors</TableCell>
          <TableCell>an array of generic standard colors</TableCell>
          <TableCell>
            you can pass in an array of custom standard colors that the user can
            select
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
