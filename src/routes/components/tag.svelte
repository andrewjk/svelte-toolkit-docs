<script>
  import {
    Tag,
    Table,
    TableRow,
    TableHeader,
    TableHeaderCell,
    TableBody,
    TableCell,
    Panel,
  } from "svelte-toolkit";

  let type = "info";
  let content = "Awesome!";
  let closable = false;

  $: exampleCode = `
import { Tag } from "svelte-toolkit";

<Tag type="${type}" closable={${closable}}>${content}</Tag>

~ OR ~

<Tag content="${content}" type="${type}" closable={${closable}} />`.trim();
</script>

<svelte:head>
  <title>Tag | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h1>Tag</h1>
  <p>A tag for displaying information about an item.</p>

  <h2>Demo</h2>
  <div class="block">
    <Tag {type} {content} {closable} />
    <Tag {type} {closable}>Great Job!</Tag>
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
          <TableCell>info</TableCell>
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
          <TableCell>content</TableCell>
          <td />
          <TableCell>
            The content to display in the tag, which can also come from slot
            content
          </TableCell>
          <TableCell>
            <input type="text" bind:value={content} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>closable</TableCell>
          <TableCell>false</TableCell>
          <TableCell>
            Set to true to display a close button at the right of the tag
          </TableCell>
          <TableCell>
            <label>
              <input type="checkbox" bind:checked={closable} />
              Allow closing the tag
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
