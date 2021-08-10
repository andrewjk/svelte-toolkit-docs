<script>
  import {
    Button,
    showPrompt,
    Table,
    TableRow,
    TableHeader,
    TableHeaderCell,
    TableBody,
    TableCell,
    Panel,
  } from "svelte-toolkit";

  let header = "Header";
  let content = "Enter your name below:";
  let options = "";
  let buttonContent = "OK";
  let placeholder = "";

  let message = "";

  $: optionsArray = options.split(/[\s,;]/).filter(Boolean);

  async function openPrompt() {
    const result = await showPrompt({
      header,
      content,
      options: optionsArray,
      buttonContent,
      placeholder
    });
    if (result) {
      message = `Hi, ${result}!`.trim();
    }
  }

  $: exampleCode = `
import { showPrompt } from "svelte-toolkit";

const result = await showPrompt({
  header: '${header}',
  content: '${content}',
  options: [${optionsArray}],
  buttonContent: '${buttonContent}',
  placeholder: '${placeholder}'
});`.trim();
</script>

<svelte:head>
  <title>Prompt Dialog | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h1>Prompt</h1>
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
    <Button on:click={e => openPrompt()}>Open the prompt dialog</Button>
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
          <TableCell>options</TableCell>
          <td />
          <TableCell>
            An array of options, which will be displayed in a select element
          </TableCell>
          <TableCell>
            <input type="text" bind:value={options} />
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
        <TableRow>
          <TableCell>placeholder</TableCell>
          <td />
          <TableCell>Placeholder text to show when the input is empty.</TableCell>
          <TableCell>
            <input type="text" bind:value={placeholder} />
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
