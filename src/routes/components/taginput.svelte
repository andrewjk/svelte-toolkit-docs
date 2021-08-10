<script>
  import {
    TagInput,
    TagInputItem,
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
  let tagClass = null;
  let tagType = "info";

  let source = countries.map(c => c.name);

  $: exampleCode = `
import { TagInput, TagInputItem } from "svelte-toolkit";

<TagInput
  source={countries}  
  value={${value}}
  placeholder="${placeholder}"
  delay={${delay}}
  minChars={${minChars}}
  tagClass="${tagClass}"
  tagType="${tagType}" />

~ OR ~

<TagInput
  {items}
  value={${value}}
  placeholder="${placeholder}"
  delay={${delay}}
  minChars={${minChars}}
  tagClass="${tagClass}"
  tagType="${tagType}"
  on:search={loadItems} />

~ OR ~

<TagInput
    value={${value}}
    placeholder="${placeholder}"
    delay={${delay}}
    minChars={${minChars}}
    tagClass="${tagClass}"
    tagType="${tagType}"
    on:search={loadItems}>
  <div slot="items">
    {#each items as item}
      <TagInputItem>{item.name}</TagInputItem>
    {/each}
  </div>
</TagInput>
`.trim();
</script>

<svelte:head>
  <title>Tag Input | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h1>Tag Input</h1>
  <p>
    An input that can be used to enter or select from a drop down list of
    matching items.
  </p>

  <h2>Demo</h2>
  <div class="block">
    <TagInput
      {source}
      bind:value
      {placeholder}
      {delay}
      {minChars}
      {tagClass}
      {tagType} />
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
          <TableCell>{value}</TableCell>
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
            an array of source items that will be filtered by the TagInput,
            which may be strings or objects with a 'text' property
          </TableCell>
          <td />
        </TableRow>
        <TableRow>
          <TableCell>items</TableCell>
          <TableCell>[ ]</TableCell>
          <TableCell>
            The items to display in the TagInput's drop down list, which may be
            strings or objects with a 'text' property
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
        <TableRow>
          <TableCell>tagClass</TableCell>
          <td />
          <TableCell>the class to set on each tag</TableCell>
          <TableCell>
            <input type="text" bind:value={tagClass} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>tagType</TableCell>
          <TableCell>info</TableCell>
          <TableCell>primary, info, success, warning, or danger</TableCell>
          <TableCell>
            <select bind:value={tagType}>
              <option>-</option>
              <option>primary</option>
              <option>info</option>
              <option>success</option>
              <option>warning</option>
              <option>danger</option>
            </select>
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
