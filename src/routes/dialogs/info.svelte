<script>
  import { Button, showInfo } from "svelte-toolkit";

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
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Default</th>
          <th>Description</th>
          <th>Change</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>header</td>
          <td />
          <td>
            The header to display in the dialog, which can also come from slot
            content
          </td>
          <td>
            <input type="text" bind:value={header} />
          </td>
        </tr>
        <tr>
          <td>content</td>
          <td />
          <td>
            The content to display in the dialog, which can also come from slot
            content
          </td>
          <td>
            <input type="text" bind:value={content} />
          </td>
        </tr>
        <tr>
          <td>buttonContent</td>
          <td>OK</td>
          <td>The content to display in the dialog's button</td>
          <td>
            <input type="text" bind:value={buttonContent} />
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <h2>Events</h2>
  <div class="block">
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Args</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>closed</td>
          <td />
        </tr>
      </tbody>
    </table>
  </div>

  <h2>Code</h2>
  <div class="block">
    <pre>{exampleCode}</pre>
  </div>
</div>
