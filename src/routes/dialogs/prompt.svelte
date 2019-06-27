<script>
  import { Button, showPrompt } from "svelte-toolkit";

  export let header = "Header";
  export let content = "Enter your name below:";
  export let buttonContent = "OK";

  let message = "";

  async function openPrompt() {
    const result = await showPrompt({
      header,
      content,
      buttonContent
    });
    if (result) {
      message = `Hi, ${result}!`.trim();
    }
  }

  $: exampleCode = `
const result = await showPrompt({
  header: '${header}',
  content: '${content}',
  buttonContent: '${buttonContent}'
});`.trim();
</script>

<svelte:head>
  <title>Prompt Dialog | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h2>Prompt</h2>
  <p>
    A dialog, per
    <a
      href="https://www.w3.org/TR/wai-aria-practices-1.1/#dialog_modal"
      target="_blank">
      https://www.w3.org/TR/wai-aria-practices-1.1/#dialog_modal
    </a>
    .
  </p>

  <h3>Demo</h3>
  <div class="block">
    <Button on:click={e => openPrompt()}>Open the prompt dialog</Button>
  </div>
  {#if message}
    <div class="block">{message}</div>
  {/if}

  <h3>Properties</h3>
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

  <h3>Events</h3>
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

  <h3>Code</h3>
  <div class="block">
    <pre>{exampleCode}</pre>
  </div>
</div>
