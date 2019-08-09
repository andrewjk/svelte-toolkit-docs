<script>
  import { Notification } from "svelte-toolkit";

  let content = "You might be interested to know this...";
  let type = "info";
  let closable = true;
  let duration = 0;
  let solid = false;

  $: exampleCode = `
import { Notification } from "svelte-toolkit";

<Notification content="${content}" type="${type}" closable={${closable}} duration={${duration}} solid={${solid}} />

~ OR ~

<Notification type="${type}" closable={${closable}} duration={${duration}} solid={${solid}}>
  ${content}
</Notification>`.trim();
</script>

<svelte:head>
  <title>Notification | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h1>Notification</h1>
  <p>A notification that can be shown to the user.</p>

  <h2>Demo</h2>
  <div class="block">
    <Notification {content} {type} {closable} {duration} {solid} />
  </div>

  <h2>Properties</h2>
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
          <td>false</td>
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
        <tr>
          <td>solid</td>
          <td>true</td>
          <td>Set to true to make the notification have a solid background</td>
          <td>
            <label>
              <input type="checkbox" bind:checked={solid} />
              Solid notification
            </label>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <h2>Events</h2>
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

  <h2>Code</h2>
  <div class="block">
    <pre>{exampleCode}</pre>
  </div>
</div>
