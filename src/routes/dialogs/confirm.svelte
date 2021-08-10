<script>
  import {
    Button,
    showConfirm,
    Table,
    TableRow,
    TableHeader,
    TableHeaderCell,
    TableBody,
    TableCell,
    Panel,
  } from "svelte-toolkit";

  export let header = "Header";
  export let content =
    "Click the OK button to accept the very reasonable terms and conditions.";
  export let buttons = [
    { content: "OK", confirm: true },
    { content: "Um", result: "Um..." },
    { content: "Cancel", cancel: true }
  ];

  let message = "";

  async function openConfirm() {
    const result = await showConfirm({
      header,
      content,
      buttons
    });
    if (result === true) {
      message = "You accepted!";
    } else if (result === false) {
      message = "You didn't accept :(";
    } else {
      message = result;
    }
  }

  $: exampleCode = `
import { showConfirm } from "svelte-toolkit";

const result = await showConfirm({
  header: '${header}',
  content: '${content}',
  buttons
});`.trim();
</script>

<svelte:head>
  <title>Confirm Dialog | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h1>Confirm</h1>
  <p>
    A dialog, per
    <a
      href="https://www.w3.org/TR/wai-aria-practices-1.1/#dialog_modal"
      target="_blank">
      https://www.w3.org/TR/wai-aria-practices-1.1/#dialog_modal
    </a>
    .
  </p>

  <h2>Demo</h2>
  <div class="block">
    <Button on:click={e => openConfirm()}>Open the confirm dialog</Button>
  </div>
  {#if message}
    <div class="block">{message}</div>
  {/if}

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
          <TableCell>header</TableCell>
          <td />
          <TableCell>
            The header to display in the dialog, which can also come from slot
            content
          </TableCell>
          <TableCell>
            <input type="text" bind:value={header} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>content</TableCell>
          <td />
          <TableCell>
            The content to display in the dialog, which can also come from slot
            content
          </TableCell>
          <TableCell>
            <input type="text" bind:value={content} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>buttons</TableCell>
          <TableCell>OK, Cancel</TableCell>
          <TableCell>
            The buttons to display in the dialog, which can also come from slot
            content. Buttons can have the properties content, confirm, cancel
            and result
          </TableCell>
          <TableCell>
            <input type="text" bind:value={content} />
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
