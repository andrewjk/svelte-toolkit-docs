<script>
  import { TagInput, TagInputItem } from "svelte-toolkit";

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
          <td>{value}</td>
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
            an array of source items that will be filtered by the TagInput,
            which may be strings or objects with a 'text' property
          </td>
          <td />
        </tr>
        <tr>
          <td>items</td>
          <td>[ ]</td>
          <td>
            The items to display in the TagInput's drop down list, which may be
            strings or objects with a 'text' property
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
        <tr>
          <td>tagClass</td>
          <td />
          <td>the class to set on each tag</td>
          <td>
            <input type="text" bind:value={tagClass} />
          </td>
        </tr>
        <tr>
          <td>tagType</td>
          <td>info</td>
          <td>primary, info, success, warning, or danger</td>
          <td>
            <select bind:value={tagType}>
              <option>-</option>
              <option>primary</option>
              <option>info</option>
              <option>success</option>
              <option>warning</option>
              <option>danger</option>
            </select>
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
