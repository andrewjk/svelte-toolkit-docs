<script>
  import { DatePicker } from "svelte-toolkit";

  let value = null;
  let placeholder = "";
  let dateFormat = "d MMM yyyy"
  let dateOrder = "mdy"

  $: exampleCode = `
import { DatePicker } from "svelte-toolkit";

<DatePicker value={${value}} placeholder="${placeholder}" dateFormat="${dateFormat}" dateOrder="${dateOrder}" />`.trim();
</script>

<svelte:head>
  <title>Date Picker | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h1>Date Picker</h1>
  <p>
    A dropdown date picker that can be used to enter or select a date.
  </p>

  <h2>Demo</h2>
  <div class="block">
    <DatePicker {value} {placeholder} {dateFormat} {dateOrder} />
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
          <td>value</td>
          <td></td>
          <td>
            the selected value
          </td>
          <td>
            {value}
          </td>
        </tr>
        <tr>
          <td>placeholder</td>
          <td />
          <td>Placeholder text to show when the input is empty.</td>
          <td>
            <input type="text" bind:value={placeholder} />
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

  <h2>Code</h2>
  <div class="block">
    <pre>{exampleCode}</pre>
  </div>
</div>
