<script>
  import { Tag } from "svelte-toolkit";

  let type = "info";
  let content = "Awesome!";
  let closable = false;

  $: exampleCode = `
import { Tag } from "svelte-toolkit";

<Tag type="${type}" closable={${closable}}>${content}</Tag>

~ OR ~

<Tag content="${content}" type="${type}" closable={${closable}} />`.trim();
</script>

<svelte:head>
  <title>Tag | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h1>Tag</h1>
  <p>A tag for displaying information about an item.</p>

  <h2>Demo</h2>
  <div class="block">
    <Tag {type} {content} {closable} />
    <Tag {type} {closable}>Great Job!</Tag>
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
          <td>primary, info, success, warning, or danger</td>
          <td>
            <select bind:value={type}>
              <option>-</option>
              <option>primary</option>
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
            The content to display in the tag, which can also come from slot
            content
          </td>
          <td>
            <input type="text" bind:value={content} />
          </td>
        </tr>
        <tr>
          <td>closable</td>
          <td>false</td>
          <td>
            Set to true to display a close button at the right of the tag
          </td>
          <td>
            <label>
              <input type="checkbox" bind:checked={closable} />
              Allow closing the tag
            </label>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <h2>Code</h2>
  <div class="block">
    <pre>{exampleCode} </pre>
  </div>
</div>
