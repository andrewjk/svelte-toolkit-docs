<script>
  import { SubNavMenu, SubNavMenuItem } from "svelte-toolkit";
  import { items } from "../../stores/items";

  let type = "";

  $: exampleCode = `
import { SubNavMenu, SubNavMenuItem } from "svelte-toolkit";

<SubNavMenu type="${type}">
  {#each items as item}
    <SubNavMenuItem>
      <a href={item.href}>{item.title}</a>
    </SubNavMenuItem>
  {/each}
</SubNavMenu>`.trim();
</script>

<svelte:head>
  <title>Sub Nav Menu | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h2>Sub Nav Menu</h2>
  <p>
    A non-top-level navigation menu, per
    <a
      href="https://www.w3.org/TR/wai-aria-practices-1.1/#menu"
      target="_blank">
      https://www.w3.org/TR/wai-aria-practices-1.1/#menu
    </a>
    .
  </p>

  <h3>Demo</h3>
  <div class="block">
    <SubNavMenu {type}>
      {#each $items as item, index}
        <SubNavMenuItem>
          <a href={item.href}>{item.name}</a>
        </SubNavMenuItem>
      {/each}
    </SubNavMenu>
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
          <td>type</td>
          <td />
          <td>line, vertical</td>
          <td>
            <select bind:value={type}>
              <option>-</option>
              <option>line</option>
              <option>vertical</option>
            </select>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3>Code</h3>
  <div class="block">
    <pre>{exampleCode} </pre>
  </div>
</div>
