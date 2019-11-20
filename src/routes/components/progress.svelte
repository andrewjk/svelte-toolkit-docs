<script>
  import { Progress } from "svelte-toolkit";

  let type = "info";
  let size = "medium";
  let value = 50;
  let total = 100;

  $: exampleCode = `
import { Progress } from "svelte-toolkit";

<Progress type="${type}" size="${size}" value={${value}} total={${total}} />`;
</script>

<svelte:head>
  <title>Progress | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h1>Progress</h1>
  <p>A progress bar.</p>

  <h2>Colors</h2>
  <div class="block">
    Info
    <Progress value={15} type="info" />
    Success
    <Progress value={30} type="success" />
    Warning
    <Progress value={45} type="warning" />
    Danger
    <Progress value={60} type="danger" />
  </div>

  <h2>Sizes</h2>
  <div class="block">
    Default
    <Progress value={45} />
    Small
    <Progress value={60} size="small" type="success" />
    Medium
    <Progress value={75} size="medium" type="warning" />
    Large
    <Progress value={90} size="large" type="danger" />
  </div>

  <h2>Demo</h2>
  <div class="block">
    <Progress {type} {size} {value} {total} />
    <br />
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
          <td>primary, info, success, warning, danger</td>
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
          <td>size</td>
          <td>medium</td>
          <td>small, medium, large</td>
          <td>
            <select bind:value={size}>
              <option>-</option>
              <option>small</option>
              <option>medium</option>
              <option>large</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>value</td>
          <td>0</td>
          <td>0 to 100 (or the value of total, below)</td>
          <td>
            <input type="number" bind:value />
          </td>
        </tr>
        <tr>
          <td>total</td>
          <td>100</td>
          <td />
          <td>
            <input type="number" bind:value={total} />
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <h2>Code</h2>
  <div class="block">
    <pre>{exampleCode}</pre>
  </div>
</div>
