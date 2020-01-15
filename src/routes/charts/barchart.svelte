<script>
  import { BarChart } from "svelte-toolkit";

  let height = 200;
  let width = 400;

  let xlabel = "Things";
  let ylabel = "";
  let labels = "Item1, Item2, Item3";
  let data = "25, 35, 45";
  let color = "";
  let data2 = "";
  let color2 = "";
  let stepCount = 2;
  let showXaxis = true;
  let showYaxis = true;
  let showHlines = false;

  $: labelsArray = labels.split(/[\s,;]/).filter(Boolean);
  $: dataArray = data2 ? null : data.split(/[\s,;]/).filter(Boolean);
  $: seriesArray = data2
    ? [
        { color, data: data.split(/[\s,;]/).filter(Boolean) },
        { color: color2, data: data2.split(/[\s,;]/).filter(Boolean) }
      ]
    : null;

  $: exampleCode = data2
    ? `
import { BarChart } from "svelte-toolkit";

<BarChart
  width={${width}}
  height={${height}} 
  xlabel="${xlabel}"
  ylabel="${ylabel}"
  labels={[${labelsArray.map(l => `"${l}"`)}]}
  series={[${seriesArray.map(s => `
    {
      color: "${s.color}",
      data: [${s.data}]
    }`)}
  ]}
  stepCount={${stepCount}}
  showXaxis={${showXaxis}}
  showYaxis={${showYaxis}}
  showHlines={${showHlines}} />
`.trim()
    : `
import { BarChart } from "svelte-toolkit";

<BarChart
  width={${width}}
  height={${height}} 
  xlabel="${xlabel}"
  ylabel="${ylabel}"
  labels={[${labelsArray.map(l => `"${l}"`)}]}
  data={[${dataArray}]}
  color="${color}"
  stepCount={${stepCount}}
  showXaxis={${showXaxis}}
  showYaxis={${showYaxis}}
  showHlines={${showHlines}} />
`.trim();
</script>

<svelte:head>
  <title>Bar Chart | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h1>Bar Chart</h1>
  <p>A simple SVG bar chart for displaying data.</p>

  <h2>Demo</h2>
  <div class="block">
    <BarChart
      {height}
      {width}
      {xlabel}
      {ylabel}
      labels={labelsArray}
      data={dataArray}
      {color}
      series={seriesArray}
      {stepCount}
      {showXaxis}
      {showYaxis}
      {showHlines} />
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
          <td>height</td>
          <td>200</td>
          <td>The height of the chart, in pixels</td>
          <td>
            <input type="number" bind:value={height} />
          </td>
        </tr>
        <tr>
          <td>width</td>
          <td>400</td>
          <td>The width of the chart, in pixels. Set to 0 to auto-size</td>
          <td>
            <input type="number" bind:value={width} />
          </td>
        </tr>
        <tr>
          <td>xlabel</td>
          <td />
          <td>A label to display along the x-axis</td>
          <td>
            <input type="text" bind:value={xlabel} />
          </td>
        </tr>
        <tr>
          <td>ylabel</td>
          <td />
          <td>A label to display along the y-axis</td>
          <td>
            <input type="text" bind:value={ylabel} />
          </td>
        </tr>
        <tr>
          <td>labels</td>
          <td />
          <td>The labels to display for each bar</td>
          <td>
            <input type="text" bind:value={labels} />
          </td>
        </tr>
        <tr>
          <td>data</td>
          <td />
          <td>The data to display as bars</td>
          <td>
            <input type="text" bind:value={data} />
          </td>
        </tr>
        <tr>
          <td>color</td>
          <td />
          <td>The color of the bars</td>
          <td>
            <input type="text" bind:value={color} />
          </td>
        </tr>
        <tr>
          <td>data 2</td>
          <td />
          <td>You can pass multiple data arrays in a series property</td>
          <td>
            <input type="text" bind:value={data2} />
          </td>
        </tr>
        <tr>
          <td>color 2</td>
          <td />
          <td>You can pass multiple colors in a series property</td>
          <td>
            <input type="text" bind:value={color2} />
          </td>
        </tr>
        <tr>
          <td>stepCount</td>
          <td>2</td>
          <td>The number of steps to show on the y-axis</td>
          <td>
            <input type="number" bind:value={stepCount} />
          </td>
        </tr>
        <tr>
          <td>showXaxis</td>
          <td>true</td>
          <td>set to true to show the x-axis line, or false to hide it</td>
          <td>
            <label>
              <input type="checkbox" bind:checked={showXaxis} />
              Show the x-axis
            </label>
          </td>
        </tr>
        <tr>
          <td>showYaxis</td>
          <td>true</td>
          <td>set to true to show the y-axis line, or false to hide it</td>
          <td>
            <label>
              <input type="checkbox" bind:checked={showYaxis} />
              Show the y-axis
            </label>
          </td>
        </tr>
        <tr>
          <td>showHlines</td>
          <td>false</td>
          <td>set to true to show horizontal gridlines</td>
          <td>
            <label>
              <input type="checkbox" bind:checked={showHlines} />
              Show horizontal gridlines
            </label>
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
