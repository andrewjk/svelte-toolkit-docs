<script>
  import { DropDown, DropDownMenuItem } from "svelte-toolkit";
  import { items } from "../../stores/items";

  let type = "info";

  $: exampleCode = `
import { DropDown, DropDownMenuItem } from "svelte-toolkit";

<DropDown type="${type}">
  Items...
  <div slot="menu">
    {#each items as item}
      <DropDownMenuItem>
        <a href={item.href}>{item.name}</a>
      </DropDownMenuItem>
    {/each}
  </div>
</DropDown>`.trim();
</script>

<svelte:head>
  <title>Drop Down | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h1>Drop Down</h1>
  <p>A select.</p>

  <h2>Demo</h2>
  <div class="block">
    <DropDown {type}>
      Items...
      <div slot="menu">
        {#each $items as item}
          <DropDownMenuItem>
            <a href={item.href}>{item.name}</a>
          </DropDownMenuItem>
        {/each}
      </div>
    </DropDown>
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
          <td>type</td>
          <td>info</td>
          <td>info, success, warning, or danger</td>
          <td>
            <select bind:value={type}>
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
