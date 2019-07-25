<script>
  import { Accordion, AccordionItem } from "svelte-toolkit";
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
  <h2>Accordion</h2>
  <p>
    An accordion, per
    <a
      href="https://www.w3.org/TR/wai-aria-practices-1.1/#accordion"
      target="_blank">
      https://www.w3.org/TR/wai-aria-practices-1.1/#accordion
    </a>
    .
  </p>

  <h3>Demo</h3>
  <div class="block">
    <Accordion {multiple} bind:value>
      {#each $items as item}
        <AccordionItem header={item.name}>{item.text}</AccordionItem>
      {/each}
    </Accordion>
  </div>

  <h3>Properties</h3>
  <div class="block">
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Default</th>
          <th>Description</th>
          <th>Change</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>value</td>
          <td>-1</td>
          <td>
            the index of the expanded item, or an array of indices if multiple
            is true (see below)
          </td>
          <td>
            {#if multiple}
              <input type="text" bind:value />
            {:else}
              <input type="number" bind:value />
            {/if}
          </td>
        </tr>
        <tr>
          <td>multiple</td>
          <td>false</td>
          <td>set to true to allow multiple items to be expanded at once</td>
          <td>
            <label>
              <input type="checkbox" bind:checked={multiple} />
              Allow multiple expanded items
            </label>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3>Events</h3>
  <div class="block">
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Args</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>change</td>
          <td>value: the index of the expanded item</td>
        </tr>
        <tr>
          <td>expandedChange (AccordionItem)</td>
          <td>expanded: whether the changed item is expanded</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3>Code</h3>
  <div class="block">
    <pre>{exampleCode}</pre>
  </div>
</div>
