<script>
  import { Stack, StackItem } from "svelte-toolkit";

  let direction = "vertical";
  let width = "grow";

  $: exampleCode = `
import { Stack, StackItem } from "svelte-toolkit";

<Stack direction="${direction}">
  <StackItem width="${width}">
    Item 1
  </StackItem>
  <StackItem>Item 2</StackItem>
  <StackItem>Item 3</StackItem>
  <StackItem>...</StackItem>
</Stack>`.trim();
</script>

<style>
  .block {
    height: 400px;
  }
</style>

<svelte:head>
  <title>Stack | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h1>Stack</h1>
  <p>Stacks allow you to lay items out vertically or horizontally.</p>

  <h2>Demo</h2>
  <div class="block">
    <Stack {direction}>
      <StackItem {width}>
        <div class="inner-panel">Item 1</div>
      </StackItem>
      <StackItem>
        <div class="inner-panel">Item 2</div>
      </StackItem>
      <StackItem>
        <div class="inner-panel">Item 3</div>
      </StackItem>
    </Stack>
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
          <td>direction</td>
          <td>vertical</td>
          <td>vertical, horizontal</td>
          <td>
            <select bind:value={direction}>
              <option>vertical</option>
              <option>horizontal</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>StackItem width</td>
          <td>grow</td>
          <td>grow, auto</td>
          <td>
            <select bind:value={width}>
              <option>grow</option>
              <option>auto</option>
            </select>
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
