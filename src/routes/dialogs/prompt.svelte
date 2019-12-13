<script>
  import { Button, showPrompt } from "svelte-toolkit";

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
          <td>options</td>
          <td />
          <td>
            An array of options, which will be displayed in a select element
          </td>
          <td>
            <input type="text" bind:value={options} />
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
        <tr>
          <td>placeholder</td>
          <td />
          <td>Placeholder text to show when the input is empty.</td>
          <td>
            <input type="text" bind:value={placeholder} />
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
