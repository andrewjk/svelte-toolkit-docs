<script>
  import {
    DropDown,
    DropDownMenuItem,
    ImageButton,
    ChevronDown
  } from "svelte-toolkit";
  import { items } from "../../stores/items";

  let buttonType = "info";
  let buttonSize = "medium";
  let position = "below";
  let alignment = "start";

  let imageButton = false;
  let expanded = false;

  $: exampleCode = imageButton
    ? `
import { DropDown, DropDownMenuItem, ImageButton, ChevronDown } from "svelte-toolkit";

<DropDown buttonType="${buttonType}" buttonSize="${buttonSize}" position="${position}" alignment="${alignment}">
  <div slot="element">
    <ImageButton hasPopup={true} on:click={e => expanded = !expanded}>
      <ChevronDown />
    </ImageButton>
  </div>
  <div slot="menu">
    {#each $items as item}
      <DropDownMenuItem>
        <a href={item.href}>{item.name}</a>
      </DropDownMenuItem>
    {/each}
  </div>
</DropDown>`.trim()
    : `
import { DropDown, DropDownMenuItem } from "svelte-toolkit";

<DropDown buttonType="${buttonType}" buttonSize="${buttonSize}" position="${position}" alignment="${alignment}">
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
    {#if imageButton}
      <DropDown {buttonType} {buttonSize} {position} {alignment} bind:expanded>
        <div slot="element">
          <ImageButton hasPopup on:click={e => (expanded = !expanded)}>
            <ChevronDown />
          </ImageButton>
        </div>
        <div slot="menu">
          {#each $items as item}
            <DropDownMenuItem>
              <a href={item.href}>{item.name}</a>
            </DropDownMenuItem>
          {/each}
        </div>
      </DropDown>
    {:else}
      <DropDown {buttonType} {buttonSize} {position} {alignment}>
        Items...
        <div slot="menu">
          {#each $items as item}
            <DropDownMenuItem>
              <a href={item.href}>{item.name}</a>
            </DropDownMenuItem>
          {/each}
        </div>
      </DropDown>
    {/if}
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
          <td>
            <label>
              <input type="checkbox" bind:checked={imageButton} />
              Use an image button
            </label>
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
