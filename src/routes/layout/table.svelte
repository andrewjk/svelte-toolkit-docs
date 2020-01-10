<script>
  import {
    Table,
    TableHeader,
    TableBody,
    TableRow,
    TableFooter,
    TableHeaderCell,
    TableCell
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

  <h2>Properties</h2>
  <div class="block">
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Default</th>
          <th>Description</th>
          <th>Change</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>type</td>
          <td>-</td>
          <td>line</td>
          <td>
            <select bind:value={type}>
              <option>-</option>
              <option>line</option>
            </select>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <h2>Code</h2>
  <div class="block">
    <pre>{exampleCode}</pre>
  </div>
</div>
