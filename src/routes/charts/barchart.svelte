<script>
  import { BarChart, BarChartItem } from "svelte-toolkit";

  let width = 400;
  let height = 200;
  let value = 25;
  let label = "Item 1"
  let color = "";

  $: exampleCode = `
import { BarChart, BarChartItem } from "svelte-toolkit";

<BarChart width={${width}} height={${height}}>
  <BarChartItem value="${value}" label="${label}"></BarChartItem>
  <BarChartItem value="35" label="Item 2"></BarChartItem>
  <BarChartItem value="40" label="Item 3"></BarChartItem>
</BarChart>
`.trim();
</script>

<svelte:head>
  <title>Bar Chart | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h2>Bar Chart</h2>
  <p>A simple SVG bar chart for displaying data.</p>

  <h3>Demo</h3>
  <div class="block">
    <BarChart {width} {height}>
      <BarChartItem {value} {label} />
      <BarChartItem value="35" label="Item 2" />
      <BarChartItem value="40" label="Item 3" />
    </BarChart>
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
          <td>width</td>
          <td>400</td>
          <td>The width of the chart, in pixels</td>
          <td>
            <input type="number" bind:value={width} />
          </td>
        </tr>
        <tr>
          <td>height</td>
          <td>200</td>
          <td>The height of the chart, in pixels</td>
          <td>
            <input type="number" bind:value={height} />
          </td>
        </tr>
        <tr>
          <td>BarChartItem: value</td>
          <td />
          <td>The value of the item</td>
          <td>
            <input type="number" bind:value />
          </td>
        </tr>
        <tr>
          <td>BarChartItem: label</td>
          <td />
          <td>The label of the item to show along bottom of the chart</td>
          <td>
            <input type="text" bind:value={label} />
          </td>
        </tr>
        <tr>
          <td>BarChartItem: color</td>
          <td>A default color, chosen from a list</td>
          <td>The color of the item</td>
          <td>
            <input type="text" bind:value={color} />
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
