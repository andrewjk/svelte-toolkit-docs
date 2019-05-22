<script>
  import { Button } from "../../../../svelte-toolkit/main.js";

  let type = "";
  let size = "";
  let disabled = false;
  let loading = false;

  function handleClick(e) {
    alert('Hooray!');
  }
</script>

<div class="container">
  <h2>Button</h2>
  <p>
    A button, per <a href="https://www.w3.org/TR/wai-aria-practices-1.1/#button" target="_blank">https://www.w3.org/TR/wai-aria-practices-1.1/#button</a>.
  </p>

  <h3>Colors</h3>
  <div class="block">
    <Button>Default</Button> 
    <Button type="info">Info</Button>
    <Button type="success">Success</Button>
    <Button type="warning">Warning</Button>
    <Button type="danger">Danger</Button>
    <Button type="cancel">Cancel</Button>
  </div>

  <h3>Sizes</h3>
  <div class="block">
    <Button>Default</Button> 
    <Button size="small">Small</Button>
    <Button size="medium">Medium</Button>
    <Button size="large">Large</Button>
    <Button size="inline">Inline</Button>
  </div>

  <h3>Demo</h3>
  <div class="block">
    <Button bind:type bind:size bind:disabled bind:loading on:click={handleClick}>Click me</Button><br/>
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
        <tr>
          <td>disabled</td>
          <td>false</td>
          <td>
            Set to true to disable the button
          </td>
          <td>
            <label>
              <input type="checkbox" bind:checked={disabled} />
              Disable the button
            </label>
          </td>
        </tr>
        <tr>
          <td>loading</td>
          <td>false</td>
          <td>
            Set to true to replace the button's text with a loading animation
          </td>
          <td>
            <label>
              <input type="checkbox" bind:checked={loading} />
              Show loading animation
            </label>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3>Code</h3>
  <div class="block">
    <pre>
&lt;Button&gt;Click me&lt;/Button&gt;
    </pre>
  </div>
</div>