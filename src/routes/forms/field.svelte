<script>
  import {
    Field,
    TextBox,
    Table,
    TableRow,
    TableHeader,
    TableHeaderCell,
    TableBody,
    TableCell,
    Panel,
  } from "svelte-toolkit";

  let label = "Your location:";
  let name = "location";
  let value = "";
  let info = "";

  $: exampleCode = `
import { Field, TextBox } from "svelte-toolkit";

<Field label="${label}" name="${name}" bind:value info="${info}">
  <TextBox bind:value />
</Field>`.trim();
</script>

<svelte:head>
  <title>Field | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h1>Field</h1>
  <p>
    A field wraps a form control, providing it with a label, validation etc.
  </p>

  <h2>Demo</h2>
  <div class="block">
    <Field {label} name="field" bind:value {info}>
      <TextBox />
    </Field>
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
          <TableCell>label</TableCell>
          <td />
          <TableCell>
            The label to display for the field. A label can also be placed into
            the named "label" slot
          </TableCell>
          <TableCell>
            <input type="text" bind:value={label} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>name</TableCell>
          <td />
          <TableCell>The name of the data held in this field</TableCell>
          <TableCell>
            <input type="text" bind:value={name} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>value</TableCell>
          <td />
          <TableCell>The value held in this field's control</TableCell>
          <TableCell>
            <input type="text" bind:value />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>info</TableCell>
          <td />
          <TableCell>Some informational text to display underneath the field</TableCell>
          <TableCell>
            <input type="text" bind:value={info} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Validation</TableCell>
          <td />
          <TableCell>
            Various validation fields. See
            <a href="/forms/validation">validation</a>
            for info.
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
