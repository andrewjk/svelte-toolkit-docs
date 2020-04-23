<script>
  import { Button, Cross, ChevronDown } from "svelte-toolkit";

  let type = "primary";
  let size = "medium";
  let submit = false;
  let reset = false;
  let disabled = false;
  let loading = false;
  let rounded = false;
  let outlined = false;

  $: exampleCode = `
import { Button } from "svelte-toolkit";

<Button type="${type}" size="${size}" submit={${submit}} reset={${reset}} disabled={${disabled}} loading={${loading}} rounded={${rounded}} outlined={${outlined}}>
  Click me
</Button>`.trim();

  function handleClick(e) {
    alert("Hooray!");
  }
</script>

<svelte:head>
  <title>Button | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h1>Button</h1>
  <p>
    A button, per
    <a
      href="https://www.w3.org/TR/wai-aria-practices-1.1/#button"
      target="_blank">
      https://www.w3.org/TR/wai-aria-practices-1.1/#button
    </a>
    .
  </p>

  <h2>Colors</h2>
  <div class="block">
    <Button type="primary">Primary</Button>
    <Button type="info">Info</Button>
    <Button type="success">Success</Button>
    <Button type="warning">Warning</Button>
    <Button type="danger">Danger</Button>
    <Button type="cancel">Cancel</Button>
  </div>

  <h2>Sizes</h2>
  <div class="block">
    <Button size="small" type="info">Small</Button>
    <Button size="medium" type="success">Medium</Button>
    <Button size="large" type="warning">Large</Button>
    <Button size="inline" type="danger">Inline</Button>
  </div>

  <h2>Demo</h2>
  <div class="block">
    <Button
      {type}
      {size}
      {submit}
      {reset}
      {disabled}
      {loading}
      {rounded}
      {outlined}
      on:click={handleClick}>
      Click me
    </Button>
    <br />
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
          <td>type</td>
          <td>primary</td>
          <td>primary, info, success, warning, danger, cancel</td>
          <td>
            <select bind:value={type}>
              <option>-</option>
              <option>primary</option>
              <option>info</option>
              <option>success</option>
              <option>warning</option>
              <option>danger</option>
              <option>cancel</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>size</td>
          <td>medium</td>
          <td>small, medium, large, or inline</td>
          <td>
            <select bind:value={size}>
              <option>-</option>
              <option>small</option>
              <option>medium</option>
              <option>large</option>
              <option>inline</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>submit</td>
          <td>false</td>
          <td>Set to true to make this a submit button</td>
          <td>
            <label>
              <input type="checkbox" bind:checked={submit} />
              Make a submit button
            </label>
          </td>
        </tr>
        <tr>
          <td>reset</td>
          <td>false</td>
          <td>Set to true to make this a reset button</td>
          <td>
            <label>
              <input type="checkbox" bind:checked={reset} />
              Make a reset button
            </label>
          </td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>false</td>
          <td>Set to true to disable the button</td>
          <td>
            <label>
              <input type="checkbox" bind:checked={disabled} />
              Disable the button
            </label>
          </td>
        </tr>
        <tr>
          <td>loading</td>
          <td>false</td>
          <td>
            Set to true to replace the button's text with a loading animation
          </td>
          <td>
            <label>
              <input type="checkbox" bind:checked={loading} />
              Show loading animation
            </label>
          </td>
        </tr>
        <tr>
          <td>rounded</td>
          <td>false</td>
          <td>
            Set to true for rounded borders
          </td>
          <td>
            <label>
              <input type="checkbox" bind:checked={rounded} />
              Rounded borders
            </label>
          </td>
        </tr>
        <tr>
          <td>outlined</td>
          <td>false</td>
          <td>
            Set to true for an outlined button
          </td>
          <td>
            <label>
              <input type="checkbox" bind:checked={outlined} />
              Outlined button
            </label>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <h2>Code</h2>
  <div class="block">
    <pre>{exampleCode}</pre>
  </div>
</div>
