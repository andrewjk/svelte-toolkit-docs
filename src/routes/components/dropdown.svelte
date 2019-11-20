<script>
  import {
    DropDown,
    DropDownMenuItem,
    ChevronDown
  } from "svelte-toolkit";
  import { items } from "../../stores/items";

  let buttonType = "info";
  let buttonSize = "medium";
  let buttonImage = false;
  let position = "below";
  let alignment = "left";

  $: exampleCode = `
import { DropDown, DropDownMenuItem } from "svelte-toolkit";

<DropDown buttonType="${buttonType}" buttonSize="${buttonSize}" buttonImage={${buttonImage}} position="${position}" alignment="${alignment}">
  <span>Items...</span>
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
  <p>A drop-down menu for selecting.</p>

  <h2>Demo</h2>
  <div class="block">
    <DropDown {buttonType} {buttonSize} {buttonImage} {position} {alignment}>
      {#if buttonImage}
        <ChevronDown />
      {:else}
        <span>Items...</span>
      {/if}
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
          <td>buttonType</td>
          <td>info</td>
          <td>primary, info, success, warning, or danger</td>
          <td>
            <select bind:value={buttonType}>
              <option>-</option>
              <option>primary</option>
              <option>info</option>
              <option>success</option>
              <option>warning</option>
              <option>danger</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>buttonSize</td>
          <td>medium</td>
          <td>small, medium, large, or inline</td>
          <td>
            <select bind:value={buttonSize}>
              <option>-</option>
              <option>small</option>
              <option>medium</option>
              <option>large</option>
              <option>inline</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>buttonImage</td>
          <td>false</td>
          <td>
            Set to true to make this a button that contains an image only. The
            image must have the class name `icon` for styling.
          </td>
          <td>
            <label>
              <input type="checkbox" bind:checked={buttonImage} />
              Make an image button
            </label>
          </td>
        </tr>
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
          <td>left</td>
          <td>left, center, right</td>
          <td>
            <select bind:value={alignment}>
              <option>left</option>
              <option>center</option>
              <option>right</option>
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
