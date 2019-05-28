<script>
  import { Accordion, AccordionItem } from "../../../../svelte-toolkit/main.js";
  import { items } from '../../stores/items'

  let value = -1;
  let multiple = false;
</script>

<div class="container">
  <h2>Accordion</h2>
  <p>
    An accordion, per <a href="https://www.w3.org/TR/wai-aria-practices-1.1/#accordion" target="_blank">https://www.w3.org/TR/wai-aria-practices-1.1/#accordion</a>.
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
            the index of the expanded item, or an array of indices if multiple is true (see below)
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
    <pre>
&lt;Accordion &lbrace;multiple&rbrace;&gt;
  &lbrace;#each items as item&rbrace;
    &lt;AccordionItem header=&lbrace;item.name&rbrace;&gt;&lbrace;item.text&rbrace;&lt;/AccordionItem&gt;
  &lbrace;/each&rbrace;
&lt;/Accordion&gt;

~ OR ~

&lt;Accordion &lbrace;multiple&rbrace;&gt;
  &lbrace;#each items as item&rbrace;
    &lt;AccordionItem&gt;
      &lt;div slot="header"&gt;&lbrace;item.name&rbrace;&lt;/div&gt;
      &lt;div&gt;&lbrace;item.text&rbrace;&lt;/div&gt;
    &lt;/AccordionItem&gt;
  &lbrace;/each&rbrace;
&lt;/Accordion&gt;
    </pre>
  </div>
</div>
