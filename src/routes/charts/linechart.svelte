<script>
  import { LineChart, LineChartSeries } from "svelte-toolkit";

  let width = 400;
  let height = 200;
  let value = 25;
  let label = "Item 1";
  let color = "";

  $: exampleCode = `
import { LineChart, LineChartSeries } from "svelte-toolkit";

<LineChart width={${width}} height={${height}}>
  <LineChartSeries
    values={[${value}, 35, 40]}
    labels={['${label}', 'Item 2', 'Item 3']} />
</LineChart>
`.trim();
</script>

<svelte:head>
  <title>Line Chart | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h1>Line Chart</h1>
  <p>A simple SVG line chart for displaying data.</p>

  <h2>Demo</h2>
  <div class="block">
    <LineChart {width} {height}>
      <LineChartSeries
        values={[value, 35, 40]}
        labels={[label, 'Item 2', 'Item 3']} />
      <LineChartSeries values={[50, 25, 32]} />
      <LineChartSeries values={[18, 66, 23]} />
    </LineChart>
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
          <td>LineChartSeries: value</td>
          <td>[]</td>
          <td>The values of the items</td>
          <td>
            <input type="number" bind:value />
          </td>
        </tr>
        <tr>
          <td>LineChartSeries: label</td>
          <td>[]</td>
          <td>The labels of the items to show along bottom of the chart</td>
          <td>
            <input type="text" bind:value={label} />
          </td>
        </tr>
        <tr>
          <td>LineChartSeries: color</td>
          <td>A default color, chosen from a list</td>
          <td>The color of the series</td>
          <td>
            <input type="text" bind:value={color} />
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
