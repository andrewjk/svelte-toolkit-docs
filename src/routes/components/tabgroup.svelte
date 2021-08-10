<script>
  import {
    TabGroup,
    TabItem,
    TabHeader,
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
  let boxed = false;

  $: exampleCode = `
import { TabGroup, TabItem } from "svelte-toolkit";

<TabGroup boxed={${boxed}} index={${index}}>
  {#each items as item}
    <TabItem id={item.id} header={item.header}>{item.text}</TabItem>
  {/each}
</TabGroup>

~ OR ~

<TabGroup boxed={${boxed}} index={${index}}>
  {#each items as item}
    <TabItem id={item.id}>
      <div slot="header">{item.header}</div>
      <div>{item.text}</div>
    </TabItem>
  {/each}
</TabGroup>`.trim();
</script>

<svelte:head>
  <title>Tab Group | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h1>Tab Group</h1>
  <p>
    Tabs, per
    <a
      href="https://www.w3.org/TR/wai-aria-practices-1.1/#tabpanel"
      target="_blank">
      https://www.w3.org/TR/wai-aria-practices-1.1/#tabpanel
    </a>
    .
  </p>

  <h2>Demo</h2>
  <div class="block">
    <TabGroup {boxed} bind:index>
      {#each $items as item}
        <TabItem id={item.id} header={item.name}>{item.text}</TabItem>
      {/each}
    </TabGroup>
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
        <TableRow>
          <TableCell>boxed</TableCell>
          <TableCell>false</TableCell>
          <TableCell>true to draw the tabs with a squarish border around them</TableCell>
          <TableCell>
            <label>
              <input type="checkbox" bind:checked={boxed} />
              Make the tabs boxed
            </label>
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
          <TableCell>activeChange (TabItem)</TableCell>
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
