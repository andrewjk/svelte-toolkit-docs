<script>
  import { Switcher, SwitcherItem, WizardNav } from "svelte-toolkit";

  let index = 0;
  let itemCount = 5;

  $: items = [...Array(itemCount).keys()].map(i => ++i);

  $: exampleCode = `<WizardNav index={${index}} itemCount={${itemCount}} on:finished={handleFinished} />`.trim();

  function handleFinished(e) {
    alert("Hooray!");
  }
</script>

<style>
  .bignum {
    color: darkgray;
    font-size: 96px;
    line-height: 1.4;
  }
</style>

<svelte:head>
  <title>Wizard Navigation | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h2>Wizard Navigation</h2>
  <p>Wizard-style navigation for use with a switcher.</p>

  <h3>Demo</h3>
  <div class="block">
    <Switcher bind:index>
      {#each items as item}
        <SwitcherItem>
          <div class="bignum">{item}</div>
        </SwitcherItem>
      {/each}
    </Switcher>
    <WizardNav bind:index {itemCount} on:finished={handleFinished} />
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
        <tr>
          <td>finished</td>
          <td />
        </tr>
      </tbody>
    </table>
  </div>

  <h3>Code</h3>
  <div class="block">
    <pre>{exampleCode}</pre>
  </div>
</div>
