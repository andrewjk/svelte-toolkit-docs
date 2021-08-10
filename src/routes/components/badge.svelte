<script>
  import {
    Badge,
    Table,
    TableRow,
    TableHeader,
    TableHeaderCell,
    TableBody,
    TableCell,
    Panel,
  } from "svelte-toolkit";

  let type = "info";
  let content = "5";

  $: exampleCode = `
import { Badge } from "svelte-toolkit";

Notifications <Badge type="${type}">${content}</Badge>

~ OR ~

Notifications <Badge content="${content}" type="${type}" />`.trim();
</script>

<svelte:head>
  <title>Badge | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h1>Badge</h1>
  <p>A badge for displaying information such as an unread count.</p>

  <h2>Demo</h2>
  <div class="block">
    Notifications
    <Badge {type} {content} />
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
            The content to display in the badge, which can also come from slot
            content
          </TableCell>
          <TableCell>
            <input type="text" bind:value={content} />
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
