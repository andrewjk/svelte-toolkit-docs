<script>
  import { Switcher, SwitcherItem } from "svelte-toolkit";
  import { items } from "../../stores/items";

  let index = 0;

  $: exampleCode = `
import { Switcher, SwitcherItem } from "svelte-toolkit";

<Switcher index={${index}}>
  {#each $items as item}
    <SwitcherItem>
      <div class="panel">
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
          <div class="panel">
            <h4>{item.name}</h4>
            <p>{item.text}</p>
          </div>
        </SwitcherItem>
      {/each}
    </Switcher>
  </div>

  <h2>Properties</h2>
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
      </tbody>
    </table>
  </div>

  <h2>Events</h2>
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
          <td>activeChange (SwitcherItem)</td>
          <td>active: whether the changed item is active</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h2>Code</h2>
  <div class="block">
    <pre>{exampleCode}</pre>
  </div>
</div>
