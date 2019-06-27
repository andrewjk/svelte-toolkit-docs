<script>
  import { OffScreen } from "svelte-toolkit";

  let visible = false;
  let position = "left";

  $: exampleCode =
    "<OffScreen visible={" +
    visible +
    '} position="' +
    position +
    "\"}>Here's your hidden content</OffScreen>\n";

  function toggleOffScreen(e) {
    visible = !visible;
  }
</script>

<svelte:head>
  <title>Off-Screen | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h2>Off-Screen</h2>
  <p>A panel that can appear from off-screen.</p>

  <h3>Demo</h3>
  <div class="block">
    <OffScreen bind:visible {position}>Here's your hidden content</OffScreen>
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
