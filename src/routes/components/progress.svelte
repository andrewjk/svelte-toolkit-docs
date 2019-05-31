<script>
  import { Progress } from "../../../../svelte-toolkit/main.js";

  let type = "info";
  let size = "";
  let value = 50;

  $: exampleCode = '<Progress type="' + type + '" size="' + size + '" value={' + value + '}/>';
</script>

<div class="container">
  <h2>Progress</h2>
  <p>A progress bar.</p>

  <h3>Colors</h3>
  <div class="block">
    <Progress value={15} type="info"/>
    <Progress value={30} type="success"/>
    <Progress value={45} type="warning"/>
    <Progress value={60} type="danger"/>
  </div>

  <h3>Sizes</h3>
  <div class="block">
    <Progress value={45}/>
    <Progress value={60} size="small" type="success"/>
    <Progress value={75} size="medium" type="warning"/>
    <Progress value={90} size="large" type="danger"/>
  </div>

  <h3>Demo</h3>
  <div class="block">
    <Progress {type} {size} {value} />
    <br />
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
          <td>info, success, warning, danger</td>
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
          <td>size</td>
          <td />
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
          <td>0 to 100</td>
          <td>
            <input type="number" bind:value={value}/>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3>Code</h3>
  <div class="block">
    <pre>{exampleCode}</pre>
  </div>
</div>
