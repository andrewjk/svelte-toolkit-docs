<script>
  import { Alert } from "../../../../svelte-toolkit/main.js";

  let message = "Pay attention to me!"

  function openAlert(e) {
    var type = e.target.dataset.type
    const alert = new Alert({
      target: document.body,
      props: { type, message },
      intro: true
    });
  }
</script>

<div class="container">
  <h2>Alert</h2>
  <p>
    An alert, per <a href="https://www.w3.org/TR/wai-aria-practices-1.1/#alert" target="_blank">https://www.w3.org/TR/wai-aria-practices-1.1/#alert</a>.
  </p>

  <h3>Demo</h3>
  <div class="block">
    <button data-type="info" on:click={openAlert}>Open an info alert</button><br/>
    <button data-type="success" on:click={openAlert}>Open a success alert</button><br/>
    <button data-type="warning" on:click={openAlert}>Open a warning alert</button><br/>
    <button data-type="danger" on:click={openAlert}>Open a danger alert</button><br/>
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
          <td>info</td>
          <td>
            info, success, warning, or danger
          </td>
          <td>
            <select>
              <option>info</option>
              <option>success</option>
              <option>warning</option>
              <option>danger</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>message</td>
          <td>-</td>
          <td>
            The message to display in the alert, which can also come from slot content
          </td>
          <td>
            <input type="text" bind:value="{message}">
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
