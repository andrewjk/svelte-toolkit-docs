<script>
  import {
    Accordion,
    AccordionItem,
    Table,
    TableRow,
    TableHeader,
    TableHeaderCell,
    TableBody,
    TableCell,
    Panel,
  } from "svelte-toolkit";
  import { items } from "../../stores/items";

  let value = -1;
  let multiple = false;

  $: exampleCode = `
import { Accordion, AccordionItem } from "svelte-toolkit";

<Accordion multiple={${multiple}} value={${value}}>
  {#each items as item}
    <AccordionItem header={item.header}>{item.text}</AccordionItem>
  {/each}
</Accordion>

~ OR ~

<Accordion multiple={${multiple}} value={${value}}>
  {#each items as item}
    <AccordionItem>
      <div slot="header">{item.header}</div>
      <div>{item.text}</div>
    </AccordionItem>
  {/each}
</Accordion>`.trim();
</script>

<svelte:head>
  <title>Accordion | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h1>Accordion</h1>
  <p>
    An accordion, per
    <a
      href="https://www.w3.org/TR/wai-aria-practices-1.1/#accordion"
      target="_blank">
      https://www.w3.org/TR/wai-aria-practices-1.1/#accordion
    </a>
    .
  </p>

  <h2>Demo</h2>
  <div class="block">
    <Accordion {multiple} bind:value>
      {#each $items as item}
        <AccordionItem header={item.name}>{item.text}</AccordionItem>
      {/each}
    </Accordion>
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
          <TableCell>value</TableCell>
          <TableCell>-1</TableCell>
          <TableCell>
            the index of the expanded item, or an array of indices if multiple
            is true (see below)
          </TableCell>
          <TableCell>
            {#if multiple}
              <input type="text" bind:value />
            {:else}
              <input type="number" bind:value />
            {/if}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>multiple</TableCell>
          <TableCell>false</TableCell>
          <TableCell>set to true to allow multiple items to be expanded at once</TableCell>
          <TableCell>
            <label>
              <input type="checkbox" bind:checked={multiple} />
              Allow multiple expanded items
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
          <TableCell>change</TableCell>
          <TableCell>value: the index of the expanded item</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>expandedChange (AccordionItem)</TableCell>
          <TableCell>expanded: whether the changed item is expanded</TableCell>
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
