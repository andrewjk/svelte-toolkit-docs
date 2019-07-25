<script>
  import { Badge } from "svelte-toolkit";

  let type = "info";
  let content = "5";

  $: exampleCode = `
import { Badge } from "svelte-toolkit";

Notifications <Badge type="${type}">${content}</Badge>

~ OR ~

Notifications <Badge content="${content}" type="${type}" />`.trim();
</script>

<svelte:head>
  <title>Badge | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h2>Badge</h2>
  <p>A badge for displaying information such as an unread count.</p>

  <h3>Demo</h3>
  <div class="block">
    Notifications
    <Badge {type} {content} />
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
            The content to display in the badge, which can also come from slot
            content
          </td>
          <td>
            <input type="text" bind:value={content} />
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3>Code</h3>
  <div class="block">
    <pre>{exampleCode} </pre>
  </div>
</div>
