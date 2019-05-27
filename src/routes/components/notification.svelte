<script>
  import { Notification } from "../../../../svelte-toolkit/main.js";

  let content = "You might be interested to know this..."
  let type = "";
  let closable = true;
  let duration = 0;
</script>

<div class="container">
  <h2>Notification</h2>
  <p>
    A notification that can be shown to the user.
  </p>

  <h3>Demo</h3>
  <div class="block">
    <Notification bind:content bind:type bind:closable bind:duration/>
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
            info, success, warning, or danger
          </td>
          <td>
            <select bind:value="{type}">
              <option>default</option>
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
            The content to display in the notification, which can also come from slot content
          </td>
          <td>
            <input type="text" bind:value="{content}">
          </td>
        </tr>
        <tr>
          <td>closable</td>
          <td>true</td>
          <td>
            Set to true to display a close button at the right of the notification
          </td>
          <td>
            <label>
              <input type="checkbox" bind:checked={closable} />
              Allow closing the notification
            </label>
          </td>
        </tr>
        <tr>
          <td>duration</td>
          <td>-1</td>
          <td>
            The number of milliseconds to wait before closing the notification. Set to -1 to never close
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
&lt;Notification type="info"&gt;
  You might be interested to know this...
&lt;/Notification&gt;

~ OR ~

&lt;Notification type="info" content="You might be interested to know this..."/&gt;
    </pre>
  </div>
</div>
