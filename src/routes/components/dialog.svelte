<script>
  import { showDialog } from "../../../../svelte-toolkit/main.js";
  import { Button } from "../../../../svelte-toolkit/main.js";

  export let header = "Header";
  export let content =
    "Click the OK button to accept the very reasonable terms and conditions.";
  export let buttons = [
    { content: "OK", confirm: true },
    { content: "Um", result: 'Um...' },
    { content: "Cancel", cancel: true }
  ];

  async function openDialog() {
    const result = await showDialog({
      header,
      content,
      buttons
    });
    if (result === true) {
      alert("You accepted!");
    } else if (result === false) {
      alert("You didn't accept :(");
    } else {
      alert(result)
    }
  }

  $: exampleCode =
    "const result = await showDialog({\n" + 
    "  header: '" + header + "',\n" + 
    "  content: '" + content + "',\n" + 
    "  buttons\n" + 
    "});";
</script>

<div class="container">
  <h2>Dialog</h2>
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
    <Button on:click={e => openDialog()}>Open a dialog</Button>
  </div>

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
