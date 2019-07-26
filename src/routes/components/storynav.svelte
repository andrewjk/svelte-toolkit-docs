<script>
  import { Switcher, SwitcherItem, StoryNav } from "svelte-toolkit";

  let index = 0;
  let itemCount = 5;
  let type = "";

  $: items = [...Array(itemCount).keys()].map(i => ++i);

  $: exampleCode = `
import { StoryNav } from "svelte-toolkit";

<StoryNav index={${index}} itemCount={${itemCount}} type="${type}" />`.trim();
</script>

<style>
  .bignum {
    color: darkgray;
    font-size: 96px;
    line-height: 1.4;
    text-align: center;
  }

  :global(.story-nav) {
    background-color: #222;
    border-radius: 2px;
    margin: 20px 0;
  }
</style>

<svelte:head>
  <title>Story Navigation | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h2>Story Navigation</h2>
  <p>Story-style navigation for use with a switcher.</p>

  <h3>Demo</h3>
  <div class="block">
    <Switcher bind:index>
      {#each items as item}
        <SwitcherItem>
          <div class="panel">
            <div class="bignum">{item}</div>
          </div>
        </SwitcherItem>
      {/each}
    </Switcher>
    <StoryNav bind:index {itemCount} {type}/>
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
          <td>the current index</td>
          <td>
            <input type="number" bind:value={index} />
          </td>
        </tr>
        <tr>
          <td>itemCount</td>
          <td />
          <td>the total number of items</td>
          <td>
            <input type="number" bind:value={itemCount} />
          </td>
        </tr>
        <tr>
          <td>type</td>
          <td />
          <td>vertical</td>
          <td>
            <select bind:value={type}>
              <option>-</option>
              <option>vertical</option>
            </select>
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
          <td>value: the number of the current page</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3>Code</h3>
  <div class="block">
    <pre>{exampleCode}</pre>
  </div>
</div>
