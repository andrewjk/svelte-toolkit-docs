<script>
  import { Switcher, SwitcherItem } from "svelte-toolkit";
  import { items } from "../../stores/items";

  let index = 0;

  $: exampleCode =
    "<Switcher index={" +
    index +
    "}>\n" +
    "  {#each $items as item}\n" +
    "    <SwitcherItem>\n" +
    "      <h4>{item.header}</h4>\n" +
    "      <p>{item.text}</p>\n" +
    "    </SwitcherItem>\n" +
    "  {/each}\n" +
    "</Switcher>";
</script>

<svelte:head>
  <title>Switcher | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h2>Switcher</h2>
  <p>
    A set of panels that can be switched between, either programmatically or
    using one of the navigation components.
  </p>

  <h3>Demo</h3>
  <div class="block">
    <Switcher bind:index>
      {#each $items as item}
        <SwitcherItem>
          <h4>{item.name}</h4>
          <p>{item.text}</p>
        </SwitcherItem>
      {/each}
    </Switcher>
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
          <td>activeChange (SwitcherItem)</td>
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
