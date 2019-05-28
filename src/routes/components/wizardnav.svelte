<script>
  import { Switcher, SwitcherItem } from "../../../../svelte-toolkit/main.js";
  import { WizardNav } from "../../../../svelte-toolkit/main.js";

  let index = 0;
  let itemCount = 5;

  $: items = [...Array(itemCount).keys()].map(i => ++i);

  function handleFinished(e) {
    alert('Hooray!');
  }
</script>

<style>
  .bignum {
    color: darkgray;
    font-size: 96px;
    line-height: 1.4;
  }
</style>

<div class="container">
  <h2>WizardNav</h2>
  <p>
    Wizard-style navigation for use with a switcher.
  </p>

  <h3>Demo</h3>
  <div class="block">
    <Switcher bind:index>
      {#each items as item}
        <SwitcherItem>
          <div class="bignum">{item}</div>
        </SwitcherItem>
      {/each}
    </Switcher>
    <WizardNav bind:index bind:itemCount on:finished={handleFinished}/>
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
          <td>1</td>
          <td>
            the current index
          </td>
          <td>
            <input type="number" bind:value={index} />
          </td>
        </tr>
        <tr>
          <td>itemCount</td>
          <td>&nbsp;</td>
          <td>
            the total number of items
          </td>
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
          <td>&nbsp;</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3>Code</h3>
  <div class="block">
    <pre>
&lt;WizardNav bind:index bind:pageSize bind:itemCount/&gt;
    </pre>
  </div>
</div>
