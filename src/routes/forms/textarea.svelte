<script>
  import { TextArea } from "svelte-toolkit";

  let name = "field1";
  let value = "";
  let type = "";
  let rows = 4;
  let placeholder = "";
  let maxlength = 100;
  let readonly = false;

  $: exampleCode = `
import { TextArea } from "svelte-toolkit";

<TextArea name="${name}" type="${type}" rows="${rows}" placeholder="${placeholder}" maxlength={${maxlength}} readonly={${readonly}} bind:value />`.trim();
</script>

<svelte:head>
  <title>TextArea | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h1>TextArea</h1>
  <p>A textarea.</p>

  <h2>Demo</h2>
  <div class="block">
    <TextArea {name} {type} {rows} {maxlength} {readonly} bind:value {placeholder} />
  </div>

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
          <td>name</td>
          <td />
          <td>The name of the field entered into the textarea</td>
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
          <td>rows</td>
          <td>4</td>
          <td>the visible number of rows to display</td>
          <td>
            <input type="number" bind:value={rows} />
          </td>
        </tr>
        <tr>
          <td>value</td>
          <td />
          <td>The value entered into the textarea</td>
          <td>
            <input type="text" bind:value />
          </td>
        </tr>
        <tr>
          <td>placeholder</td>
          <td />
          <td>Placeholder text to show when the textarea is empty.</td>
          <td>
            <input type="text" bind:value={placeholder} />
          </td>
        </tr>
        <tr>
          <td>maxlength</td>
          <td />
          <td>
            The maximum length of text that can be entered into the textarea
          </td>
          <td>
            <input type="number" bind:value={maxlength} />
          </td>
        </tr>
        <tr>
          <td>readonly</td>
          <td>false</td>
          <td>Set to true to prevent the field from taking input</td>
          <td>
            <label>
              <input type="checkbox" bind:checked={readonly} />
              Set readonly
            </label>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <h2>Code</h2>
  <div class="block">
    <pre>{exampleCode} </pre>
  </div>
</div>
