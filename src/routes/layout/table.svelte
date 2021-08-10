<script>
  import {
    Table,
    TableHeader,
    TableBody,
    TableRow,
    TableFooter,
    TableHeaderCell,
    TableCell,
    Panel,
  } from "svelte-toolkit";

  import { countries } from "../../stores/countries";

  let type = "";

  $: exampleCode = `
import { Table } from "svelte-toolkit";

<Table type="${type}">
  <TableHeader>
    <TableHeaderCell>Name</TableHeaderCell>
    <TableHeaderCell>Title</TableHeaderCell>
  </TableHeader>
  <TableBody>
    {#each countries as item}
      <TableRow>
        <TableCell>{item.name}</TableCell>
        <TableCell>{item.title}</TableCell>
      </TableRow>
    {/each}
  </TableBody>
  <TableFooter>
    <TableCell>Total</TableCell>
    <TableCell>{countries.length}</TableCell>
  </TableFooter>
</Table>`.trim();
</script>

<svelte:head>
  <title>Table | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h1>Table</h1>
  <p>The table can be used to present data.</p>

  <h2>Demo</h2>
  <div class="block">
    <Table {type}>
      <TableHeader>
        <TableHeaderCell>Name</TableHeaderCell>
        <TableHeaderCell>Title</TableHeaderCell>
      </TableHeader>
      <TableBody>
        {#each countries.filter(c => c.name[0] === 'A') as item}
          <TableRow>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.title}</TableCell>
          </TableRow>
        {/each}
        <TableRow>
          <TableCell colspan="2">...</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableCell>Total</TableCell>
        <TableCell>{countries.length}</TableCell>
      </TableFooter>
    </Table>
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
          <TableCell>line</TableCell>
          <TableCell>
            <select bind:value={type}>
              <option>-</option>
              <option>line</option>
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
