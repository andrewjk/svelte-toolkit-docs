<script>
  import {
    TextArea,
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
  let rows = 4;
  let placeholder = "";
  let maxlength = 100;
  let readonly = false;

  $: exampleCode = `
import { TextArea } from "svelte-toolkit";

<TextArea name="${name}" type="${type}" rows="${rows}" placeholder="${placeholder}" maxlength={${maxlength}} readonly={${readonly}} bind:value />`.trim();
</script>

<svelte:head>
  <title>TextArea | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h1>TextArea</h1>
  <p>A textarea.</p>

  <h2>Demo</h2>
  <div class="block">
    <TextArea {name} {type} {rows} {maxlength} {readonly} bind:value {placeholder} />
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
          <TableCell>The name of the field entered into the textarea</TableCell>
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
          <TableCell>rows</TableCell>
          <TableCell>4</TableCell>
          <TableCell>the visible number of rows to display</TableCell>
          <TableCell>
            <input type="number" bind:value={rows} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>value</TableCell>
          <td />
          <TableCell>The value entered into the textarea</TableCell>
          <TableCell>
            <input type="text" bind:value />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>placeholder</TableCell>
          <td />
          <TableCell>Placeholder text to show when the textarea is empty.</TableCell>
          <TableCell>
            <input type="text" bind:value={placeholder} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>maxlength</TableCell>
          <td />
          <TableCell>
            The maximum length of text that can be entered into the textarea
          </TableCell>
          <TableCell>
            <input type="number" bind:value={maxlength} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>readonly</TableCell>
          <TableCell>false</TableCell>
          <TableCell>Set to true to prevent the field from taking input</TableCell>
          <TableCell>
            <label>
              <input type="checkbox" bind:checked={readonly} />
              Set readonly
            </label>
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
