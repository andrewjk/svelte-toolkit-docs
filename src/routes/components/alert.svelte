<script>
  import { Alert } from "../../../../svelte-toolkit/main.js";
  import { Button } from "../../../../svelte-toolkit/main.js";

  let content = "Pay attention to me!"
  let direction = "top";
  let closable = true;
  let duration = 5000;

  function openAlert(type) {
    const alert = new Alert({
      target: document.body,
      props: { type, content, direction, closable, duration },
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
    <Button type="info" on:click={e => openAlert('info')}>Open an info alert</Button>
    <Button type="success" on:click={e => openAlert('success')}>Open a success alert</Button>
    <Button type="warning" on:click={e => openAlert('warning')}>Open a warning alert</Button>
    <Button type="danger" on:click={e => openAlert('danger')}>Open a danger alert</Button>
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
          <td>content</td>
          <td>&nbsp;</td>
          <td>
            The content to display in the alert, which can also come from slot content
          </td>
          <td>
            <input type="text" bind:value="{content}">
          </td>
        </tr>
        <tr>
          <td>direction</td>
          <td>top</td>
          <td>
            top-left, top, top-right, bottom-left, bottom, or bottom-right
          </td>
          <td>
            <select bind:value={direction}>
              <option>top-left</option>
              <option>top</option>
              <option>top-right</option>
              <option>bottom-left</option>
              <option>bottom</option>
              <option>bottom-right</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>closable</td>
          <td>true</td>
          <td>
            Set to true to display a close button at the right of the alert
          </td>
          <td>
            <label>
              <input type="checkbox" bind:checked={closable} />
              Allow closing the alert
            </label>
          </td>
        </tr>
        <tr>
          <td>duration</td>
          <td>5000</td>
          <td>
            The number of milliseconds to wait before closing the alert. Set to -1 to never close (but make sure you leave closable true!)
          </td>
          <td>
            <input type="number" bind:value={duration} />
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3>Events</h3>
  <div class="block">
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Args</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>closed</td>
          <td>&nbsp;</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3>Code</h3>
  <div class="block">
    <pre>
const alert = new Alert(&lbrace;
  target: document.body,
  props: &lbrace; type, content, direction, closable, duration &rbrace;,
  intro: true
&rbrace);
alert.$on('closed', onclosed);
    </pre>
  </div>
</div>
