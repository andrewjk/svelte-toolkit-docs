<script>
  import {
    Stack,
    StackItem,
    Table,
    TableRow,
    TableHeader,
    TableHeaderCell,
    TableBody,
    TableCell,
    Panel,
  } from "svelte-toolkit";

  let direction = "vertical";
  let size = "auto";

  $: exampleCode = `
import { Stack, StackItem } from "svelte-toolkit";

<Stack direction="${direction}">
  <StackItem size="${size}">
    Item 1
  </StackItem>
  <StackItem>Item 2</StackItem>
  <StackItem>Item 3</StackItem>
  <StackItem>...</StackItem>
</Stack>`.trim();
</script>

<style>
  .inner-panel {
    height: 100%;
  }
</style>

<svelte:head>
  <title>Stack | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h1>Stack</h1>
  <p>Stacks allow you to lay items out vertically or horizontally.</p>

  <h2>Demo</h2>
  <div class="block" style={direction === 'vertical' ? 'height: 280px' : null}>
    <Stack {direction}>
      <StackItem {size}>
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
          <TableCell>direction</TableCell>
          <TableCell>vertical</TableCell>
          <TableCell>vertical, horizontal</TableCell>
          <TableCell>
            <select bind:value={direction}>
              <option>vertical</option>
              <option>horizontal</option>
            </select>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>StackItem size</TableCell>
          <TableCell>auto</TableCell>
          <TableCell>grow, auto</TableCell>
          <TableCell>
            <select bind:value={size}>
              <option>auto</option>
              <option>grow</option>
            </select>
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
