<script>
  import { Upload, File } from "svelte-toolkit";

  let name = "";
  let type = "";
  let placeholder = "Drag and drop a file here";

  $: exampleCode = `
import { Upload } from "svelte-toolkit";

<Upload name="${name}" type="${type}" placeholder="${placeholder}" />

~ OR ~ 

<Upload name="${name}" type="${type}">
  <File placeholder="${placeholder}" />
</Upload>`.trim();
</script>

<svelte:head>
  <title>Upload | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h2>Upload</h2>
  <p>
    A file upload control, that can be used with drap-and-drop or by selecting a
    file from a browse dialog.
  </p>

  <h3>Demo</h3>
  <div class="block">
    <Upload {name} {type} {placeholder} />

    <p>~ OR ~</p>

    <Upload {name} {type}>
      <File placeholder={placeholder + ', or click to select a file'} />
    </Upload>
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
          <td>type</td>
          <td />
          <td>info, success, warning, or danger</td>
          <td>
            <select bind:value={type}>
              <option>-</option>
              <option>info</option>
              <option>success</option>
              <option>warning</option>
              <option>danger</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>placeholder</td>
          <td>Drag and drop a file here</td>
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
