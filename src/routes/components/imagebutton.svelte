<script>
  import {
    ImageButton,
    Cross,
    Table,
    TableRow,
    TableHeader,
    TableHeaderCell,
    TableBody,
    TableCell,
    Panel,
  } from "svelte-toolkit";

  let type = "";
  let size = "medium";
  let submit = false;
  let reset = false;
  let disabled = false;
  let loading = false;

  $: exampleCode = `
import { ImageButton } from "svelte-toolkit";

<ImageButton type="${type}" size="${size}" submit={${submit}} reset={${reset}} disabled={${disabled}} loading={${loading}}>
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
      {loading}
      on:click={handleClick}>
      <Cross />
    </ImageButton>
    <br />
  </div>

  <h2>Properties</h2>
  <div class="block">
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Default</TableHeaderCell>
          <TableHeaderCell>Description</TableHeaderCell>
          <TableHeaderCell>Change</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>type</TableCell>
          <TableCell>-</TableCell>
          <TableCell>primary, info, success, warning, danger, cancel</TableCell>
          <TableCell>
            <select bind:value={type}>
              <option>-</option>
              <option>primary</option>
              <option>info</option>
              <option>success</option>
              <option>warning</option>
              <option>danger</option>
              <option>cancel</option>
            </select>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>size</TableCell>
          <TableCell>medium</TableCell>
          <TableCell>small, medium, large, or inline</TableCell>
          <TableCell>
            <select bind:value={size}>
              <option>-</option>
              <option>small</option>
              <option>medium</option>
              <option>large</option>
              <option>inline</option>
            </select>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>submit</TableCell>
          <TableCell>false</TableCell>
          <TableCell>Set to true to make this a submit button</TableCell>
          <TableCell>
            <label>
              <input type="checkbox" bind:checked={submit} />
              Make a submit button
            </label>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>reset</TableCell>
          <TableCell>false</TableCell>
          <TableCell>Set to true to make this a reset button</TableCell>
          <TableCell>
            <label>
              <input type="checkbox" bind:checked={reset} />
              Make a reset button
            </label>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>disabled</TableCell>
          <TableCell>false</TableCell>
          <TableCell>Set to true to disable the button</TableCell>
          <TableCell>
            <label>
              <input type="checkbox" bind:checked={disabled} />
              Disable the button
            </label>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>loading</TableCell>
          <TableCell>false</TableCell>
          <TableCell>
            Set to true to replace the button's text with a loading animation
          </TableCell>
          <TableCell>
            <label>
              <input type="checkbox" bind:checked={loading} />
              Show loading animation
            </label>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>

  <h2>Code</h2>
  <div class="block">
    <Panel>
      <pre>{exampleCode}</pre>
    </Panel>
  </div>
</div>
