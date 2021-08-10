<script>
  import {
    Select,
    Table,
    TableRow,
    TableHeader,
    TableHeaderCell,
    TableBody,
    TableCell,
    Panel,
  } from "svelte-toolkit";

  let name = "field1";
  let value = "";
  let type = "";
  let placeholder = "";

  import { countries } from "../../stores/countries";

  $: exampleCode = `
import { Select } from "svelte-toolkit";

<Select name="${name}" type="${type}" bind:value placeholder="${placeholder}">
  <option value="">-</option>
  {#each countries as country}
    <option>{country.name}</option>
  {/each}
</Select>`.trim();
</script>

<svelte:head>
  <title>Select | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h1>Select</h1>
  <p>A select.</p>

  <h2>Demo</h2>
  <div class="block">
    <Select {name} {type} bind:value {placeholder}>
      <option value="">-</option>
      {#each countries as country}
        <option>{country.name}</option>
      {/each}
    </Select>
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
          <TableCell>name</TableCell>
          <td />
          <TableCell>The name of the field entered into the textbox</TableCell>
          <TableCell>
            <input type="text" bind:value={name} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>type</TableCell>
          <td />
          <TableCell>primary, info, success, warning, or danger</TableCell>
          <TableCell>
            <select bind:value={type}>
              <option>-</option>
              <option>primary</option>
              <option>info</option>
              <option>success</option>
              <option>warning</option>
              <option>danger</option>
            </select>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>value</TableCell>
          <td />
          <TableCell>The value entered into the textbox</TableCell>
          <TableCell>
            <input type="text" bind:value />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>placeholder</TableCell>
          <td />
          <TableCell>Placeholder text to show when the textbox is empty.</TableCell>
          <TableCell>
            <input type="text" bind:value={placeholder} />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>

  <h2>Code</h2>
  <div class="block">
    <pre>{exampleCode} </pre>
  </div>
</div>
