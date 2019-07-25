<script>
  import { OffScreen } from "svelte-toolkit";

  let visible = false;
  let position = "left";

  $: exampleCode = `
import { OffScreen } from "svelte-toolkit";

<OffScreen visible={${visible}} position="${position}\">
  Off-screen content
</OffScreen>`.trim();

  function toggleOffScreen(e) {
    visible = !visible;
  }
</script>

<style>
  .bigtext {
    color: darkgray;
    font-size: 96px;
    line-height: 1.4;
    margin: 0 2rem;
    min-width: 140px;
    text-align: center;
    text-transform: uppercase;
  }
</style>

<svelte:head>
  <title>Off-Screen | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h2>Off-Screen</h2>
  <p>A panel that can appear from off-screen.</p>

  <h3>Demo</h3>
  <div class="block">
    <OffScreen bind:visible {position}>
      <div class="bigtext">{position.substring(0, 1)}</div>
    </OffScreen>
    <button class="button full-width" on:click={toggleOffScreen}>
      Show the off-screen
    </button>
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
          <td>visible</td>
          <td>false</td>
          <td>true to show the off-screen</td>
          <td>
            <label>
              <input type="checkbox" bind:checked={visible} />
              Show the off-screen
            </label>
          </td>
        </tr>
        <tr>
          <td>position</td>
          <td>left</td>
          <td>left, top, right, or bottom</td>
          <td>
            <select bind:value={position}>
              <option>left</option>
              <option>top</option>
              <option>right</option>
              <option>bottom</option>
            </select>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3>Code</h3>
  <div class="block">
    <pre>{exampleCode}</pre>
  </div>
</div>
