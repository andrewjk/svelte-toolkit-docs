<script>
  import {
    AutoComplete,
    AutoCompleteItem
  } from "svelte-toolkit";

  import { countries } from "../../stores/countries";

  let value = null;
  let placeholder = "";
  let delay = 300;
  let minChars = 1;

  let source = countries.map(c => c.name);

  //let items = [];
  //function loadItems(e) {
  //  items = countries
  //    .map(c => c.name)
  //    .filter(
  //      c => c.toLocaleLowerCase().indexOf(e.detail.toLocaleLowerCase()) !== -1
  //    );
  //}

  $: exampleCode = `
import { AutoComplete, AutoCompleteItem } from "svelte-toolkit";

<AutoComplete source={countries} value={${value}} placeholder="${placeholder}" delay={${delay}} minChars={${minChars}} />

~ OR ~

<AutoComplete {items} value={${value}} delay={${delay}} minChars={${minChars}} on:search={loadItems} />

~ OR ~

<AutoComplete value={${value}} delay={${delay}} minChars={${minChars}} on:search={loadItems}>
  <div slot="items">
    {#each items as item}
      <AutoCompleteItem>{item.name}</AutoCompleteItem>
    {/each}
  </div>
</AutoComplete>
`.trim();
</script>

<svelte:head>
  <title>Auto Complete | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h1>Auto Complete</h1>
  <p>
    An input that can be used to enter or select from a drop down list of
    matching items.
  </p>

  <h2>Demo</h2>
  <div class="block">
    <AutoComplete {source} bind:value {placeholder} {delay} {minChars} />
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
          <td>value</td>
          <td />
          <td>the selected value</td>
          <td> {value} </td>
        </tr>
        <tr>
          <td>placeholder</td>
          <td />
          <td>Placeholder text to show when the input is empty.</td>
          <td>
            <input type="text" bind:value={placeholder} />
          </td>
        </tr>
        <tr>
          <td>source</td>
          <td>[ ]</td>
          <td>
            an array of source items that will be filtered by the AutoComplete,
            which may be strings or objects with a 'text' property
          </td>
          <td />
        </tr>
        <tr>
          <td>items</td>
          <td>[ ]</td>
          <td>
            The items to display in the AutoComplete's drop down list, which may
            be strings or objects with a 'text' property
          </td>
          <td />
        </tr>
        <tr>
          <td>delay</td>
          <td>300</td>
          <td>a delay (in milliseconds) to wait before filtering items</td>
          <td>
            <input type="number" bind:value={delay} />
          </td>
        </tr>
        <tr>
          <td>minChars</td>
          <td>1</td>
          <td>
            the minimum number of characters to wait before filtering items
          </td>
          <td>
            <input type="number" bind:value={minChars} />
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <h2>Code</h2>
  <div class="block">
    <pre>{exampleCode}</pre>
  </div>
</div>
