<script>
  import {
    Button,
    showInfo,
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
  export let buttonContent = "OK";

  let message = "";

  async function openInfo() {
    const result = await showInfo({
      header,
      content,
      buttonContent
    });
    message = "You accepted!";
  }

  $: exampleCode = `
import { showInfo } from "svelte-toolkit";

const result = await showInfo({
  header: '${header}',
  content: '${content}',
  buttonContent: '${buttonContent}'
});`.trim();
</script>

<svelte:head>
  <title>Info Dialog | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h1>Info</h1>
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
    <Button on:click={e => openInfo()}>Open the info dialog</Button>
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
          <TableCell>buttonContent</TableCell>
          <TableCell>OK</TableCell>
          <TableCell>The content to display in the dialog's button</TableCell>
          <TableCell>
            <input type="text" bind:value={buttonContent} />
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
