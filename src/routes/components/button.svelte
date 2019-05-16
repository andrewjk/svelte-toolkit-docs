<script>
  import { Button } from "../../../../svelte-toolkit/main.js";

  let type = "";
  let size = "";

  function handleClick(e) {
    alert('Hooray!');
  }
</script>

<div class="container">
  <h2>Button</h2>
  <p>
    A button, per <a href="https://www.w3.org/TR/wai-aria-practices-1.1/#button" target="_blank">https://www.w3.org/TR/wai-aria-practices-1.1/#button</a>.
  </p>

  <h3>Demo</h3>
  <div class="block">
    <Button bind:type bind:size on:click={handleClick}>Click me</Button><br/>
  </div>

  <h3>Properties</h3>
  <div class="block">
    <table>
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
          <td>&nbsp;</td>
          <td>
            info, success, warning, danger, cancel
          </td>
          <td>
            <select bind:value={type}>
              <option>-</option>
              <option>info</option>
              <option>success</option>
              <option>warning</option>
              <option>danger</option>
              <option>cancel</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>size</td>
          <td>&nbsp;</td>
          <td>
            small, medium, large, or inline
          </td>
          <td>
            <select bind:value={size}>
              <option>-</option>
              <option>small</option>
              <option>medium</option>
              <option>large</option>
              <option>inline</option>
            </select>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3>Code</h3>
  <div class="block">
    <pre>
      TODO: I don't know how to put this stuff in here?!
    </pre>
  </div>
</div>