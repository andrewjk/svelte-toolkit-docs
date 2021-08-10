<script>
  import {
    AutoComplete,
    AutoCompleteItem,
    Table,
    TableRow,
    TableHeader,
    TableHeaderCell,
    TableBody,
    TableCell,
    Panel,
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
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Default</TableHeaderCell>
          <TableHeaderCell>Description</TableHeaderCell>
          <TableHeaderCell>Change</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>value</TableCell>
          <td />
          <TableCell>the selected value</TableCell>
          <TableCell> {value} </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>placeholder</TableCell>
          <td />
          <TableCell>Placeholder text to show when the input is empty.</TableCell>
          <TableCell>
            <input type="text" bind:value={placeholder} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>source</TableCell>
          <TableCell>[ ]</TableCell>
          <TableCell>
            an array of source items that will be filtered by the AutoComplete,
            which may be strings or objects with a 'text' property
          </TableCell>
          <td />
        </TableRow>
        <TableRow>
          <TableCell>items</TableCell>
          <TableCell>[ ]</TableCell>
          <TableCell>
            The items to display in the AutoComplete's drop down list, which may
            be strings or objects with a 'text' property
          </TableCell>
          <td />
        </TableRow>
        <TableRow>
          <TableCell>delay</TableCell>
          <TableCell>300</TableCell>
          <TableCell>a delay (in milliseconds) to wait before filtering items</TableCell>
          <TableCell>
            <input type="number" bind:value={delay} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>minChars</TableCell>
          <TableCell>1</TableCell>
          <TableCell>
            the minimum number of characters to wait before filtering items
          </TableCell>
          <TableCell>
            <input type="number" bind:value={minChars} />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>

  <h2>Code</h2>
  <div class="block">
    <Panel>
      <pre>{exampleCode}</pre>
    </Panel>
  </div>
</div>
