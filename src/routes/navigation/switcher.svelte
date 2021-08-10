<script>
  import {
    Switcher,
    SwitcherItem,
    Table,
    TableRow,
    TableHeader,
    TableHeaderCell,
    TableBody,
    TableCell,
    Panel,
  } from "svelte-toolkit";
  import { items } from "../../stores/items";

  let index = 0;

  $: exampleCode = `
import { Switcher, SwitcherItem } from "svelte-toolkit";

<Switcher index={${index}}>
  {#each $items as item}
    <SwitcherItem>
      <div class="inner-panel">
        <h4>{item.header}</h4>
        <p>{item.text}</p>
      </div>
    </SwitcherItem>
  {/each}
</Switcher>`.trim();
</script>

<svelte:head>
  <title>Switcher | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h1>Switcher</h1>
  <p>
    A set of panels that can be switched between, either programmatically or
    using one of the navigation components.
  </p>

  <h2>Demo</h2>
  <div class="block">
    <Switcher bind:index>
      {#each $items as item}
        <SwitcherItem>
          <div class="inner-panel">
            <h4>{item.name}</h4>
            <p>{item.text}</p>
          </div>
        </SwitcherItem>
      {/each}
    </Switcher>
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
          <TableCell>the index of the active item</TableCell>
          <TableCell>
            <input type="number" bind:value={index} />
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
          <TableCell>changed</TableCell>
          <TableCell>index: the index of the active item</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>activeChange (SwitcherItem)</TableCell>
          <TableCell>active: whether the changed item is active</TableCell>
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
