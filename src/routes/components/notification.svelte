<script>
  import { Notification } from "svelte-toolkit";

  let content = "You might be interested to know this...";
  let type = "info";
  let closable = true;
  let duration = 0;

  $: exampleCode =
    '<Notification content="' +
    content +
    '" type={' +
    type +
    "} closable={" +
    closable +
    "} duration={" +
    duration +
    "}/>\n" +
    "\n" +
    "~ OR ~\n" +
    "\n" +
    "<Notification type={" +
    type +
    "} closable={" +
    closable +
    "} duration={" +
    duration +
    "}/>" +
    content +
    "</Notification>";
</script>

<svelte:head>
  <title>Notification | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h2>Notification</h2>
  <p>A notification that can be shown to the user.</p>

  <h3>Demo</h3>
  <div class="block">
    <Notification {content} {type} {closable} {duration} />
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
          <td>info, success, warning, or danger</td>
          <td>
            <select bind:value={type}>
              <option>info</option>
              <option>success</option>
              <option>warning</option>
              <option>danger</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>content</td>
          <td />
          <td>
            The content to display in the notification, which can also come from
            slot content
          </td>
          <td>
            <input type="text" bind:value={content} />
          </td>
        </tr>
        <tr>
          <td>closable</td>
          <td>true</td>
          <td>
            Set to true to display a close button at the right of the
            notification
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
            The number of milliseconds to wait before closing the notification.
            Set to -1 to never close
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
          <td />
        </tr>
      </tbody>
    </table>
  </div>

  <h3>Code</h3>
  <div class="block">
    <pre> {exampleCode} </pre>
  </div>
</div>
