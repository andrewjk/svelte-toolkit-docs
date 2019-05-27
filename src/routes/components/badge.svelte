<script>
  import { Badge } from "../../../../svelte-toolkit/main.js";

  let type = "";
  let boxed = false;
  let content = "5";
</script>

<div class="container">
  <h2>Badge</h2>
  <p>
     A badge for displaying information such as an unread count.
  </p>

  <h3>Demo</h3>
  <div class="block">
    Notifications <Badge bind:type bind:boxed bind:content></Badge>
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
            The content to display in the badge, which can also come from slot content
          </td>
          <td>
            <input type="text" bind:value="{content}">
          </td>
        </tr>
        <tr>
          <td>boxed</td>
          <td>false</td>
          <td>
            true to draw the badge with a squarish border around it
          </td>
          <td>
            <label>
              <input type="checkbox" bind:checked={boxed} />
              Make the badge boxed
            </label>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3>Code</h3>
  <div class="block">
    <pre>
Notifications &lt;Badge type="info"&gt;5&lt;/Badge&gt;

~ OR ~

Notifications &lt;Badge type="info" content="5"/&gt;
    </pre>
  </div>
</div>
