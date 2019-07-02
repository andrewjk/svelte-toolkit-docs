<script>
  import { PieChart, PieChartItem } from "svelte-toolkit";

  let size = 200;
  let radius = 100;
  let value = 25;
  let color = "";

  $: exampleCode = `
<PieChart size={${size}} radius={${radius}}>
  <PieChartItem value="${value}"></PieChartItem>
  <PieChartItem value="35"></PieChartItem>
  <PieChartItem value="40"></PieChartItem>
</PieChart>
`.trim();
</script>

<svelte:head>
  <title>Pie Chart | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h2>Pie Chart</h2>
  <p>A simple SVG pie chart for displaying data.</p>

  <h3>Demo</h3>
  <div class="block">
    <PieChart {size} {radius}>
      <PieChartItem {value} />
      <PieChartItem value="35" />
      <PieChartItem value="40" />
    </PieChart>
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
          <td>size</td>
          <td>200</td>
          <td>The size of the chart, in pixels</td>
          <td>
            <input type="number" bind:value={size} />
          </td>
        </tr>
        <tr>
          <td>radius</td>
          <td>100</td>
          <td>The size of the chart's radius, in pixels</td>
          <td>
            <input type="number" bind:value={radius} />
          </td>
        </tr>
        <tr>
          <td>PieChartItem: value</td>
          <td />
          <td>The value of the item</td>
          <td>
            <input type="number" bind:value />
          </td>
        </tr>
        <tr>
          <td>PieChartItem: color</td>
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
