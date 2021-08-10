<script>
  import {
    Switcher,
    SwitcherItem,
    StoryNav,
    Table,
    TableRow,
    TableHeader,
    TableHeaderCell,
    TableBody,
    TableCell,
    Panel,
  } from "svelte-toolkit";

  let index = 0;
  let itemCount = 5;
  let type = "";

  $: items = [...Array(itemCount).keys()].map(i => ++i);

  $: exampleCode = `
import { StoryNav } from "svelte-toolkit";

<StoryNav index={${index}} itemCount={${itemCount}} type="${type}" />`.trim();
</script>

<style>
  .number {
    color: darkgray;
    font-size: 96px;
    line-height: 1.4;
    text-align: center;
  }

  :global(.story-nav) {
    background-color: #222;
    border-radius: 2px;
    margin: 20px 0;
  }
</style>

<svelte:head>
  <title>Story Navigation | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h1>Story Navigation</h1>
  <p>Story-style navigation for use with a switcher.</p>

  <h2>Demo</h2>
  <div class="block">
    <Switcher bind:index>
      {#each items as item}
        <SwitcherItem>
          <div class="inner-panel">
            <div class="number">{item}</div>
          </div>
        </SwitcherItem>
      {/each}
    </Switcher>
    <StoryNav bind:index {itemCount} {type} />
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
          <TableCell>index</TableCell>
          <TableCell>0</TableCell>
          <TableCell>the current index</TableCell>
          <TableCell>
            <input type="number" bind:value={index} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>itemCount</TableCell>
          <td />
          <TableCell>the total number of items</TableCell>
          <TableCell>
            <input type="number" bind:value={itemCount} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>type</TableCell>
          <td />
          <TableCell>vertical</TableCell>
          <TableCell>
            <select bind:value={type}>
              <option>-</option>
              <option>vertical</option>
            </select>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>

  <h2>Events</h2>
  <div class="block">
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Args</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>change</TableCell>
          <TableCell>value: the number of the current page</TableCell>
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
