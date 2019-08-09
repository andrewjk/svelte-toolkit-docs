<script>
  import { File } from "svelte-toolkit";

  let name = "";
  let accept = "";
  let placeholder = "";

  $: exampleCode = `
import { File } from "svelte-toolkit";

<File name="${name}" accept="${accept}" placeholder="${placeholder}" />`.trim();
</script>

<svelte:head>
  <title>File | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h2>File</h2>
  <p>
    A file selection control that can be used with drap-and-drop or by selecting
    a file from a browse dialog.
  </p>

  <h3>Demo</h3>
  <div class="block">
    <File {name} {accept} {placeholder} />
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
          <td>name</td>
          <td />
          <td>The name of the field entered into the checkbox</td>
          <td>
            <input type="text" bind:value={name} />
          </td>
        </tr>
        <tr>
          <td>accept</td>
          <td />
          <td>
            The type of files that can be selected, e.g. "audio/*", "video/*",
            "image/*", or a media type
          </td>
          <td>
            <input type="text" bind:value={accept} />
          </td>
        </tr>
        <tr>
          <td>placeholder</td>
          <td />
          <td>Placeholder text to show when no file has been selected.</td>
          <td>
            <input type="text" bind:value={placeholder} />
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3>Code</h3>
  <div class="block">
    <pre>{exampleCode}</pre>
  </div>
</div>
