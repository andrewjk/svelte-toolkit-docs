<script>
  import {
    CheckBox,
    Table,
    TableRow,
    TableHeader,
    TableHeaderCell,
    TableBody,
    TableCell,
    Panel,
  } from "svelte-toolkit";

  let type = "";
  let name = "field1";
  let label = "Please tick the box";
  let checked = false;

  $: exampleCode = `
import { CheckBox } from "svelte-toolkit";

<CheckBox type="${type}" name="${name}" label="${label}" bind:checked />`.trim();
</script>

<svelte:head>
  <title>CheckBox | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h1>CheckBox</h1>
  <p>A box that can be ticked.</p>

  <h2>Demo</h2>
  <div class="block">
    <CheckBox {type} {name} {label} bind:checked />
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
          <TableCell>The name of the field entered into the checkbox</TableCell>
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
          <TableCell>checked</TableCell>
          <td />
          <TableCell>Whether the checkbox is checked</TableCell>
          <TableCell>
            <input type="checkbox" bind:checked />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>group</TableCell>
          <td />
          <TableCell>
            The value of the group field selected with the checkbox when there
            are multiple checkboxes
          </TableCell>
          <td />
        </TableRow>
        <TableRow>
          <TableCell>value</TableCell>
          <td />
          <TableCell>
            The group value to set when this checkbox is selected and there are
            multiple checkboxes
          </TableCell>
          <td />
        </TableRow>
        <TableRow>
          <TableCell>label</TableCell>
          <td />
          <TableCell>The text label to display next to the checkbox</TableCell>
          <TableCell>
            <input type="text" bind:value={label} />
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
