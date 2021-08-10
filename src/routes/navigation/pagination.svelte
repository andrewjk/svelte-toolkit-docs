<script>
  import {
    Switcher,
    SwitcherItem,
    Pagination,
    Table,
    TableRow,
    TableHeader,
    TableHeaderCell,
    TableBody,
    TableCell,
    Panel,
  } from "svelte-toolkit";

  let pageNumber = 1;
  let pageSize = 10;
  let itemCount = 50;

  $: index = pageNumber - 1;
  $: items = [...Array(itemCount).keys()].map(i => ++i);

  $: exampleCode = `
import { Pagination } from "svelte-toolkit";

<Pagination pageNumber={${pageNumber}} pageSize={${pageSize}} itemCount={${itemCount}} />`.trim();
</script>

<svelte:head>
  <title>Pagination | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h1>Pagination</h1>
  <p>Numbers for navigating through components that contain paged data.</p>

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
    <Pagination bind:pageNumber {pageSize} {itemCount} />
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
          <TableCell>pageNumber</TableCell>
          <TableCell>1</TableCell>
          <TableCell>the current page number</TableCell>
          <TableCell>
            <input type="number" bind:value={pageNumber} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>pageSize</TableCell>
          <TableCell>10</TableCell>
          <TableCell>the number of items displayed on each page</TableCell>
          <TableCell>
            <input type="number" bind:value={pageSize} />
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
