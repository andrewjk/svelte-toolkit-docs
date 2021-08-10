<script>
  import {
    SubNavMenu,
    SubNavMenuItem,
    Table,
    TableRow,
    TableHeader,
    TableHeaderCell,
    TableBody,
    TableCell,
    Panel,
  } from "svelte-toolkit";
  import { items } from "../../stores/items";

  let type = "";

  $: exampleCode = `
import { SubNavMenu, SubNavMenuItem } from "svelte-toolkit";

<SubNavMenu type="${type}">
  {#each items as item}
    <SubNavMenuItem>
      <a href={item.href}>{item.title}</a>
    </SubNavMenuItem>
  {/each}
</SubNavMenu>`.trim();
</script>

<svelte:head>
  <title>Sub Nav Menu | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h1>Sub Nav Menu</h1>
  <p>
    A non-top-level navigation menu, per
    <a
      href="https://www.w3.org/TR/wai-aria-practices-1.1/#menu"
      target="_blank">
      https://www.w3.org/TR/wai-aria-practices-1.1/#menu
    </a>
    .
  </p>

  <h2>Demo</h2>
  <div class="block">
    <SubNavMenu {type}>
      {#each $items as item, index}
        <SubNavMenuItem>
          <a href={item.href}>{item.name}</a>
        </SubNavMenuItem>
      {/each}
    </SubNavMenu>
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
          <td />
          <TableCell>line, vertical</TableCell>
          <TableCell>
            <select bind:value={type}>
              <option>-</option>
              <option>line</option>
              <option>vertical</option>
            </select>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>

  <h2>Code</h2>
  <div class="block">
    <pre>{exampleCode} </pre>
  </div>
</div>
