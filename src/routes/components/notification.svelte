<script>
  import {
    Notification,
    Table,
    TableRow,
    TableHeader,
    TableHeaderCell,
    TableBody,
    TableCell,
    Panel,
  } from "svelte-toolkit";

  let content = "You might be interested to know this...";
  let type = "info";
  let closable = true;
  let duration = 0;
  let solid = false;

  $: exampleCode = `
import { Notification } from "svelte-toolkit";

<Notification content="${content}" type="${type}" closable={${closable}} duration={${duration}} solid={${solid}} />

~ OR ~

<Notification type="${type}" closable={${closable}} duration={${duration}} solid={${solid}}>
  ${content}
</Notification>`.trim();
</script>

<svelte:head>
  <title>Notification | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h1>Notification</h1>
  <p>A notification that can be shown to the user.</p>

  <h2>Demo</h2>
  <div class="block">
    <Notification {content} {type} {closable} {duration} {solid} />
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
            The content to display in the notification, which can also come from
            slot content
          </TableCell>
          <TableCell>
            <input type="text" bind:value={content} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>closable</TableCell>
          <TableCell>false</TableCell>
          <TableCell>
            Set to true to display a close button at the right of the
            notification
          </TableCell>
          <TableCell>
            <label>
              <input type="checkbox" bind:checked={closable} />
              Allow closing the notification
            </label>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>duration</TableCell>
          <TableCell>-1</TableCell>
          <TableCell>
            The number of milliseconds to wait before closing the notification.
            Set to -1 to never close
          </TableCell>
          <TableCell>
            <input type="number" bind:value={duration} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>solid</TableCell>
          <TableCell>true</TableCell>
          <TableCell>Set to true to make the notification have a solid background</TableCell>
          <TableCell>
            <label>
              <input type="checkbox" bind:checked={solid} />
              Solid notification
            </label>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>

  <h2>Events</h2>
  <div class="block">
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Args</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>closed</TableCell>
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
