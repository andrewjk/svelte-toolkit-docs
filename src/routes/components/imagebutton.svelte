<script>
  import { ImageButton, Cross } from "svelte-toolkit";

  let type = "";
  let size = "medium";
  let submit = false;
  let reset = false;
  let disabled = false;

  $: exampleCode = `
import { ImageButton } from "svelte-toolkit";

<ImageButton type="${type}" size="${size}" submit={${submit}} reset={${reset}} disabled={${disabled}}>
  <Cross />
</ImageButton>`.trim();

  function handleClick(e) {
    alert("Hooray!");
  }
</script>

<svelte:head>
  <title>Image Button | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h1>Image Button</h1>
  <p>
    A round button with an image, per
    <a
      href="https://www.w3.org/TR/wai-aria-practices-1.1/#button"
      target="_blank">
      https://www.w3.org/TR/wai-aria-practices-1.1/#button
    </a>
    .
  </p>

  <h2>Demo</h2>
  <div class="block">
    <ImageButton
      {type}
      {size}
      {submit}
      {reset}
      {disabled}
      on:click={handleClick}>
      <Cross />
    </ImageButton>
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
          <td>-</td>
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
      </tbody>
    </table>
  </div>

  <h2>Code</h2>
  <div class="block">
    <pre>{exampleCode}</pre>
  </div>
</div>
