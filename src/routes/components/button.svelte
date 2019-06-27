<script>
  import { Button } from "svelte-toolkit";

  let type = "info";
  let size = "";
  let submit = false;
  let reset = false;
  let disabled = false;
  let loading = false;

  $: exampleCode = `
<Button type="${type}" size="${size}" submit={${submit}} reset={${reset}} disabled={${disabled}} loading={${loading}}>
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
  <h2>Button</h2>
  <p>
    A button, per
    <a
      href="https://www.w3.org/TR/wai-aria-practices-1.1/#button"
      target="_blank">
      https://www.w3.org/TR/wai-aria-practices-1.1/#button
    </a>
    .
  </p>

  <h3>Colors</h3>
  <div class="block">
    <Button type="info">Info</Button>
    <Button type="success">Success</Button>
    <Button type="warning">Warning</Button>
    <Button type="danger">Danger</Button>
    <Button type="select">Select</Button>
    <Button type="cancel">Cancel</Button>
  </div>

  <h3>Sizes</h3>
  <div class="block">
    <Button>Default</Button>
    <Button size="small" type="success">Small</Button>
    <Button size="medium" type="warning">Medium</Button>
    <Button size="large" type="danger">Large</Button>
    <Button size="inline" type="cancel">Inline</Button>
  </div>

  <h3>Demo</h3>
  <div class="block">
    <Button
      {type}
      {size}
      {submit}
      {reset}
      {disabled}
      {loading}
      on:click={handleClick}>
      Click me
    </Button>
    <br />
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
          <td>type</td>
          <td>info</td>
          <td>info, success, warning, danger, select, cancel</td>
          <td>
            <select bind:value={type}>
              <option>info</option>
              <option>success</option>
              <option>warning</option>
              <option>danger</option>
              <option>select</option>
              <option>cancel</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>size</td>
          <td />
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
      </tbody>
    </table>
  </div>

  <h3>Code</h3>
  <div class="block">
    <pre>{exampleCode}</pre>
  </div>
</div>
