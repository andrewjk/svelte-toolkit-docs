<script>
  import { DatePicker } from "../../../../svelte-toolkit/main.js";

  let value = null;
  let dateFormat = "d MMM yyyy"
  let dateOrder = "mdy"

  $: exampleCode = `<DatePicker value={${value}} dateFormat="${dateFormat}" dateOrder="${dateOrder}" />`.trim();
</script>

<svelte:head>
  <title>DatePicker | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h2>DatePicker</h2>
  <p>
    A dropdown date picker that can be used to enter or select a date.
  </p>

  <h3>Demo</h3>
  <div class="block">
    <DatePicker {value} {dateFormat} {dateOrder} />
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
          <td>value</td>
          <td></td>
          <td>
            the selected value
          </td>
          <td>

          </td>
        </tr>
        <tr>
          <td>dateFormat</td>
          <td>d MMM yyyy</td>
          <td>
            the format to display the date in, where 'd' is days, 'M' is months and 'y' is years
          </td>
          <td>
            <input type="text" bind:value={dateFormat}>
          </td>
        </tr>
        <tr>
          <td>dateOrder</td>
          <td>mdy</td>
          <td>
            the order to process dates entered by the user (e.g. 31/1 vs 1/31)
          </td>
          <td>
            <input type="text" bind:value={dateOrder}>
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
