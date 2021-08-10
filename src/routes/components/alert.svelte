<script>
  import {
    Button,
    showAlert,
    Table,
    TableRow,
    TableHeader,
    TableHeaderCell,
    TableBody,
    TableCell,
    Panel,
  } from "svelte-toolkit";

  let type = "info";
  let content = "Pay attention to me!";
  let position = "top";
  let closable = true;
  let duration = 5000;

  $: exampleCode = `
import { showAlert } from "svelte-toolkit";

showAlert({
  type: '${type}',
  content: '${content}'
  position: '${position}',
  closable: ${closable},
  duration: ${duration}
});`.trim();

  function openAlert() {
    showAlert({
      type,
      content,
      position,
      closable,
      duration
    });
  }
</script>

<svelte:head>
  <title>Alert | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h1>Alert</h1>
  <p>
    An alert, per
    <a
      href="https://www.w3.org/TR/wai-aria-practices-1.1/#alert"
      target="_blank">
      https://www.w3.org/TR/wai-aria-practices-1.1/#alert
    </a>
    .
  </p>

  <h2>Demo</h2>
  <div class="block">
    <Button {type} on:click={e => openAlert()}>
      Show an alert
    </Button>
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
            The content to display in the alert, which can also come from slot
            content
          </TableCell>
          <TableCell>
            <input type="text" bind:value={content} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>position</TableCell>
          <TableCell>top</TableCell>
          <TableCell>
            top-left, top, top-right, bottom-left, bottom, or bottom-right
          </TableCell>
          <TableCell>
            <select bind:value={position}>
              <option>top-left</option>
              <option>top</option>
              <option>top-right</option>
              <option>bottom-left</option>
              <option>bottom</option>
              <option>bottom-right</option>
            </select>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>closable</TableCell>
          <TableCell>true</TableCell>
          <TableCell>
            Set to true to display a close button at the right of the alert
          </TableCell>
          <TableCell>
            <label>
              <input type="checkbox" bind:checked={closable} />
              Allow closing the alert
            </label>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>duration</TableCell>
          <TableCell>5000</TableCell>
          <TableCell>
            The number of milliseconds to wait before closing the alert. Set to
            -1 to never close (but make sure you leave closable true!)
          </TableCell>
          <TableCell>
            <input type="number" bind:value={duration} />
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
