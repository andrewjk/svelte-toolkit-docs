<script>
  import {
    File,
    Table,
    TableRow,
    TableHeader,
    TableHeaderCell,
    TableBody,
    TableCell,
    Panel,
  } from "svelte-toolkit";

  let name = "";
  let accept = "";
  let placeholder = "";

  $: exampleCode = `
import { File } from "svelte-toolkit";

<File name="${name}" accept="${accept}" placeholder="${placeholder}" />`.trim();
</script>

<svelte:head>
  <title>File | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h1>File</h1>
  <p>
    A file selection control that can be used with drap-and-drop or by selecting
    a file from a browse dialog.
  </p>

  <h2>Demo</h2>
  <div class="block">
    <File {name} {accept} {placeholder} />
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
          <TableCell>accept</TableCell>
          <td />
          <TableCell>
            The type of files that can be selected, e.g. "audio/*", "video/*",
            "image/*", or a media type
          </TableCell>
          <TableCell>
            <input type="text" bind:value={accept} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>placeholder</TableCell>
          <td />
          <TableCell>Placeholder text to show when no file has been selected.</TableCell>
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
