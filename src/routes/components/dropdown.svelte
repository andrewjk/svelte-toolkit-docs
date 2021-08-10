<script>
  import {
    Notification,
    DropDown,
    DropDownMenuItem,
    ImageButton,
    ChevronDown,
    Table,
    TableRow,
    TableHeader,
    TableHeaderCell,
    TableBody,
    TableCell,
    Panel,
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
  <Notification type="warning">
    Note: DropDown is obsolete -- use
    <a href="components/dropdownbutton">DropDownButton</a> or
    <a href="components/dropdownlink">DropDownLink</a> instead.
  </Notification>
  <p>A drop-down menu for selecting.</p>

  <h2>Demo</h2>
  <div class="block">
    {#if imageButton}
      <DropDown {buttonType} {buttonSize} {position} {alignment} bind:expanded>
        <div slot="element">
          <ImageButton hasPopup on:click={(e) => (expanded = !expanded)}>
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
        <span>Items...</span>
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
          <TableCell>buttonType</TableCell>
          <TableCell>info</TableCell>
          <TableCell>primary, info, success, warning, or danger</TableCell>
          <TableCell>
            <select bind:value={buttonType}>
              <option>-</option>
              <option>primary</option>
              <option>info</option>
              <option>success</option>
              <option>warning</option>
              <option>danger</option>
            </select>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>buttonSize</TableCell>
          <TableCell>medium</TableCell>
          <TableCell>small, medium, large, or inline</TableCell>
          <TableCell>
            <select bind:value={buttonSize}>
              <option>-</option>
              <option>small</option>
              <option>medium</option>
              <option>large</option>
              <option>inline</option>
            </select>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>position</TableCell>
          <TableCell>below</TableCell>
          <TableCell>below, above</TableCell>
          <TableCell>
            <select bind:value={position}>
              <option>below</option>
              <option>above</option>
            </select>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>alignment</TableCell>
          <TableCell>start</TableCell>
          <TableCell>start, center, end</TableCell>
          <TableCell>
            <select bind:value={alignment}>
              <option>start</option>
              <option>center</option>
              <option>end</option>
            </select>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>

  <h2>Slots</h2>
  <div class="block">
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Description</TableHeaderCell>
          <TableHeaderCell>Change</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>element</TableCell>
          <TableCell>Replace the button with components of your choice.</TableCell>
          <TableCell>
            <label>
              <input type="checkbox" bind:checked={imageButton} />
              Use an image button
            </label>
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
