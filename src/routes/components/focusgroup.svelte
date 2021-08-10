<script>
  import { onMount } from "svelte";
  import {
    FocusGroup,
    FocusGroupItem,
    ImageButton,
    Table,
    TableRow,
    TableHeader,
    TableHeaderCell,
    TableBody,
    TableCell,
    Panel,
  } from "svelte-toolkit";
  import { items } from "../../stores/items";

  var numbers = ["1", "2", "3", "4", "5"];

  let tagName = "button";
  let container;

  onMount(() => {
    container.getElementsByTagName("button")[0].focus();
  });

  $: exampleCode =
    tagName === "button"
      ? `
import { FocusGroup, FocusGroupItem } from "svelte-toolkit";

<FocusGroup tagName="${tagName}">
  {#each items as item}
    <FocusGroupItem>
      <ImageButton>{item}</ImageButton>
    </FocusGroupItem>
  {/each}
</FocusGroup>`.trim()
      : `
import { FocusGroup, FocusGroupItem } from "svelte-toolkit";

<FocusGroup tagName="${tagName}">
  {#each items as item}
    <FocusGroupItem>
      <a href={item.href}>{item.name}</a>
    </FocusGroupItem>
  {/each}
</FocusGroup>`.trim();
</script>

<style>
  .focus-link {
    margin-right: 1rem;
  }
</style>

<svelte:head>
  <title>Focus Group | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h1>Focus Group</h1>
  <p>
    A list of items that is focused as a whole. The user can use the left and
    right arrow keys to move between the items.
  </p>

  <h2>Demo</h2>
  <div bind:this={container} class="block">
    {#if tagName === 'button'}
      <FocusGroup {tagName}>
        {#each numbers as item}
          <FocusGroupItem>
            <ImageButton>{item}</ImageButton>
          </FocusGroupItem>
        {/each}
      </FocusGroup>
    {:else}
      <FocusGroup {tagName}>
        {#each $items as item}
          <FocusGroupItem>
            <a class="focus-link" href={item.href}>{item.name}</a>
          </FocusGroupItem>
        {/each}
      </FocusGroup>
    {/if}
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
          <TableCell>tagName</TableCell>
          <TableCell>button</TableCell>
          <TableCell>the tag of the item to focus e.g. button, a, etc</TableCell>
          <TableCell>
            <select bind:value={tagName}>
              <option>button</option>
              <option>a</option>
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
