<script>
  import { showConfirm } from "svelte-toolkit";
  import { Button } from "svelte-toolkit";

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

  $: exampleCode =
    "const result = await showConfirm({\n" +
    "  header: '" +
    header +
    "',\n" +
    "  content: '" +
    content +
    "',\n" +
    "  buttons\n" +
    "});";
</script>

<svelte:head>
  <title>Confirm Dialog | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h2>Confirm</h2>
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
    <Button on:click={e => openConfirm()}>Open the confirm dialog</Button>
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
          <td>buttons</td>
          <td>OK, Cancel</td>
          <td>
            The buttons to display in the dialog, which can also come from slot
            content. Buttons can have the properties content, confirm, cancel
            and result
          </td>
          <td>
            <input type="text" bind:value={content} />
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
