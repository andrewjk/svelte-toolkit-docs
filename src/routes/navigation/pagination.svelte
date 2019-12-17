<script>
  import { Switcher, SwitcherItem, Pagination } from "svelte-toolkit";

  let pageNumber = 1;
  let pageSize = 10;
  let itemCount = 50;

  $: index = pageNumber - 1;
  $: items = [...Array(itemCount).keys()].map(i => ++i);

  $: exampleCode = `
import { Pagination } from "svelte-toolkit";

<Pagination pageNumber={${pageNumber}} pageSize={${pageSize}} itemCount={${itemCount}} />`.trim();
</script>

<svelte:head>
  <title>Pagination | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h1>Pagination</h1>
  <p>Numbers for navigating through components that contain paged data.</p>

  <h2>Demo</h2>
  <div class="block">
    <Switcher bind:index>
      {#each items as item}
        <SwitcherItem>
          <div class="inner-panel">
            <div class="number">{item}</div>
          </div>
        </SwitcherItem>
      {/each}
    </Switcher>
    <Pagination bind:pageNumber {pageSize} {itemCount} />
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
          <td>pageNumber</td>
          <td>1</td>
          <td>the current page number</td>
          <td>
            <input type="number" bind:value={pageNumber} />
          </td>
        </tr>
        <tr>
          <td>pageSize</td>
          <td>10</td>
          <td>the number of items displayed on each page</td>
          <td>
            <input type="number" bind:value={pageSize} />
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
          <td>change</td>
          <td>value: the number of the current page</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h2>Code</h2>
  <div class="block">
    <pre>{exampleCode}</pre>
  </div>
</div>
