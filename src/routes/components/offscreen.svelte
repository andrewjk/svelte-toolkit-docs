<script>
  import {
    OffScreen,
    Table,
    TableRow,
    TableHeader,
    TableHeaderCell,
    TableBody,
    TableCell,
    Panel,
  } from "svelte-toolkit";

  let visible = false;
  let position = "left";

  $: exampleCode = `
import { OffScreen } from "svelte-toolkit";

<OffScreen visible={${visible}} position="${position}\">
  Off-screen content
</OffScreen>`.trim();

  function toggleOffScreen(e) {
    visible = !visible;
  }
</script>

<style>
  .bigtext {
    color: darkgray;
    font-size: 96px;
    line-height: 1.4;
    margin: 0 2rem;
    min-width: 140px;
    text-align: center;
    text-transform: uppercase;
  }
</style>

<svelte:head>
  <title>Off-Screen | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h1>Off-Screen</h1>
  <p>A panel that can appear from off-screen.</p>

  <h2>Demo</h2>
  <div class="block">
    <OffScreen bind:visible {position}>
      <div class="bigtext">{position.substring(0, 1)}</div>
    </OffScreen>
    <button class="button full-width" on:click={toggleOffScreen}>
      Show the off-screen
    </button>
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
          <TableCell>visible</TableCell>
          <TableCell>false</TableCell>
          <TableCell>true to show the off-screen</TableCell>
          <TableCell>
            <label>
              <input type="checkbox" bind:checked={visible} />
              Show the off-screen
            </label>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>position</TableCell>
          <TableCell>left</TableCell>
          <TableCell>left, top, right, or bottom</TableCell>
          <TableCell>
            <select bind:value={position}>
              <option>left</option>
              <option>top</option>
              <option>right</option>
              <option>bottom</option>
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
