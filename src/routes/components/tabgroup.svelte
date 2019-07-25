<script>
  import { TabGroup, TabItem } from "svelte-toolkit";
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
  <h2>Tab Group</h2>
  <p>
    Tabs, per
    <a
      href="https://www.w3.org/TR/wai-aria-practices-1.1/#tabpanel"
      target="_blank">
      https://www.w3.org/TR/wai-aria-practices-1.1/#tabpanel
    </a>
    .
  </p>

  <h3>Demo</h3>
  <div class="block">
    <TabGroup {boxed} bind:index>
      {#each $items as item}
        <TabItem id={item.id} header={item.name}>{item.text}</TabItem>
      {/each}
    </TabGroup>
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
          <td>index</td>
          <td>0</td>
          <td>the index of the active item</td>
          <td>
            <input type="number" bind:value={index} />
          </td>
        </tr>
        <tr>
          <td>boxed</td>
          <td>false</td>
          <td>true to draw the tabs with a squarish border around them</td>
          <td>
            <label>
              <input type="checkbox" bind:checked={boxed} />
              Make the tabs boxed
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
          <td>hanged</td>
          <td>index: the index of the active item</td>
        </tr>
        <tr>
          <td>activeChange (TabItem)</td>
          <td>active: whether the changed item is active</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3>Code</h3>
  <div class="block">
    <pre>{exampleCode}</pre>
  </div>
</div>
