<script>
  import { TextBox } from "svelte-toolkit";

  let name = "field1";
  let value = "";
  let type = "";
  let contentType = "text";
  let placeholder = "";
  let maxlength = 10;
  let readonly = false;

  $: exampleCode = `
import { TextBox } from "svelte-toolkit";

<TextBox name="${name}" type="${type}" contentType="${contentType}" placeholder="${placeholder}" maxlength={${maxlength}} readonly={${readonly}} bind:value />`.trim();
</script>

<svelte:head>
  <title>TextBox | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h1>TextBox</h1>
  <p>A textbox.</p>

  <h2>Demo</h2>
  <div class="block">
    <TextBox {name} {type} {contentType} {placeholder} {maxlength} {readonly} bind:value />
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
          <td>The name of the field entered into the textbox</td>
          <td>
            <input type="text" bind:value={name} />
          </td>
        </tr>
        <tr>
          <td>type</td>
          <td />
          <td>primary, info, success, warning, or danger</td>
          <td>
            <select bind:value={type}>
              <option>-</option>
              <option>primary</option>
              <option>info</option>
              <option>success</option>
              <option>warning</option>
              <option>danger</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>contentType</td>
          <td>text</td>
          <td>text, password, email, url, tel</td>
          <td>
            <select bind:value={contentType}>
              <option>text</option>
              <option>password</option>
              <option>email</option>
              <option>url</option>
              <option>tel</option>
              <option>file</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>value</td>
          <td />
          <td>The value entered into the textbox</td>
          <td>
            <input type="text" bind:value />
          </td>
        </tr>
        <tr>
          <td>placeholder</td>
          <td />
          <td>Placeholder text to show when the textbox is empty.</td>
          <td>
            <input type="text" bind:value={placeholder} />
          </td>
        </tr>
        <tr>
          <td>maxlength</td>
          <td />
          <td>
            The maximum length of text that can be entered into the textbox
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
