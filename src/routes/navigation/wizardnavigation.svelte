<script>
  import {
    Switcher,
    SwitcherItem,
    WizardNav,
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

  $: items = [...Array(itemCount).keys()].map(i => ++i);

  $: exampleCode = `
import { WizardNav } from "svelte-toolkit";

<WizardNav index={${index}} itemCount={${itemCount}} on:finished={handleFinished} />`.trim();

  function handleFinished(e) {
    alert("Hooray!");
  }
</script>

<style>
  .number {
    color: darkgray;
    font-size: 96px;
    line-height: 1.4;
    text-align: center;
  }
</style>

<svelte:head>
  <title>Wizard Navigation | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h1>Wizard Navigation</h1>
  <p>Wizard-style navigation for use with a switcher.</p>

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
    <WizardNav bind:index {itemCount} on:finished={handleFinished} />
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
        <TableRow>
          <TableCell>finished</TableCell>
          <td />
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
