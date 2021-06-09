<script>
  import {
    DropDownLink,
    DropDownMenuItem,
  } from "svelte-toolkit";
  import { items } from "../../stores/items";

  let position = "below";
  let alignment = "start";

  let expanded = false;

  $: exampleCode = `
import { DropDownLink, DropDownMenuItem } from "svelte-toolkit";

<DropDownLink position="${position}" alignment="${alignment}">
  <span>Items...</span>
  <div slot="menu">
    {#each items as item}
      <DropDownMenuItem>
        <a href={item.href}>{item.name}</a>
      </DropDownMenuItem>
    {/each}
  </div>
</DropDownLink>`.trim();
</script>

<svelte:head>
  <title>Drop Down Link | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h1>Drop Down Link</h1>
  <p>A drop-down link menu for selecting.</p>

  <h2>Demo</h2>
  <div class="block">
    <DropDownLink {position} {alignment}>
      <span>Items...</span>
      <div slot="menu">
        {#each $items as item}
          <DropDownMenuItem>
            <a href={item.href}>{item.name}</a>
          </DropDownMenuItem>
        {/each}
      </div>
    </DropDownLink>
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
          <td>position</td>
          <td>below</td>
          <td>below, above</td>
          <td>
            <select bind:value={position}>
              <option>below</option>
              <option>above</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>alignment</td>
          <td>start</td>
          <td>start, center, end</td>
          <td>
            <select bind:value={alignment}>
              <option>start</option>
              <option>center</option>
              <option>end</option>
            </select>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <h2>Slots</h2>
  <div class="block">
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Change</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>element</td>
          <td>Replace the button with components of your choice.</td>
          <td />
        </tr>
      </tbody>
    </table>
  </div>

  <h2>Code</h2>
  <div class="block">
    <pre>{exampleCode}</pre>
  </div>
</div>
