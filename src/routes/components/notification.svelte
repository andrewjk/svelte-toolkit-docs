<script>
  import { Notification } from "../../../../svelte-toolkit/main.js";

  let type = "info";
  let message = "You might be interested to know this..."
</script>

<div class="content">
  <h2>Notification</h2>
  <p>
    A notification that can be shown to the user.
  </p>

  <h3>Demo</h3>
  <Notification bind:type bind:message/>

  <h3>Code</h3>
  <pre>
  &lt;Notification type="info"&gt;
    You might be interested to know this...
  &lt;/Notification&gt;

  ~ OR ~

  &lt;Notification type="info" message="You might be interested to know this..."/&gt;
  </pre>

  <h3>Properties</h3>
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
          <select bind:value="{type}">
            <option>info</option>
            <option>success</option>
            <option>warning</option>
            <option>danger</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>message</td>
        <td>&nbsp;</td>
        <td>
          The message to display in the notification, which can also come from slot content
        </td>
        <td>
          <input type="text" bind:value="{message}">
        </td>
      </tr>
    </tbody>
  </table>
</div>
