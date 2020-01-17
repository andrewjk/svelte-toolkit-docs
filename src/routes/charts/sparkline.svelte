<script>
  import { Sparkline } from "svelte-toolkit";

  let height = 20;
  let width = 100;

  let data = "35, 25, 45";
  let color = "";

  $: dataArray = data.split(/[\s,;]/).filter(Boolean);

  $: exampleCode = `
import { Sparkline } from "svelte-toolkit";

<Sparkline
  width={${width}}
  height={${height}} 
  data={[${dataArray}]}
  color="${color}" />
`.trim();

  function addRandom() {
    const darray = data.split(/[\s,;]/).filter(Boolean);
    darray.push(Math.floor(Math.random() * 100) + 1);
    data = darray.join(", ");
  }
</script>

<svelte:head>
  <title>Sparkline | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h1>Sparkline</h1>
  <p>A small SVG line chart for displaying data.</p>

  <h2>Demo</h2>
  <div class="block">
    <Sparkline {height} {width} data={dataArray} {color} />
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
          <th />
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>height</td>
          <td>200</td>
          <td>The height of the chart, in pixels</td>
          <td>
            <input type="number" bind:value={height} />
          </td>
          <td />
        </tr>
        <tr>
          <td>width</td>
          <td>400</td>
          <td>The width of the chart, in pixels. Set to 0 to auto-size</td>
          <td>
            <input type="number" bind:value={width} />
          </td>
          <td />
        </tr>
        <tr>
          <td>data</td>
          <td />
          <td>The data to display as lines</td>
          <td>
            <input type="text" bind:value={data} />
          </td>
          <td>
            <button on:click={addRandom}>++</button>
          </td>
        </tr>
        <tr>
          <td>color</td>
          <td />
          <td>The color of the lines</td>
          <td>
            <input type="text" bind:value={color} />
          </td>
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
