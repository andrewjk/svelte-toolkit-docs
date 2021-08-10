<script>
  import {
    DatePicker,
    Table,
    TableRow,
    TableHeader,
    TableHeaderCell,
    TableBody,
    TableCell,
    Panel,
  } from "svelte-toolkit";

  let value = new Date();
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
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Default</TableHeaderCell>
          <TableHeaderCell>Description</TableHeaderCell>
          <TableHeaderCell>Change</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>value</TableCell>
          <TableCell></TableCell>
          <TableCell>
            the selected value
          </TableCell>
          <TableCell>
            {value}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>placeholder</TableCell>
          <td />
          <TableCell>Placeholder text to show when the input is empty.</TableCell>
          <TableCell>
            <input type="text" bind:value={placeholder} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>dateFormat</TableCell>
          <TableCell>d MMM yyyy</TableCell>
          <TableCell>
            the format to display the date in, where 'd' is days, 'M' is months and 'y' is years
          </TableCell>
          <TableCell>
            <input type="text" bind:value={dateFormat}>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>dateOrder</TableCell>
          <TableCell>mdy</TableCell>
          <TableCell>
            the order to process dates entered by the user (e.g. 31/1 vs 1/31)
          </TableCell>
          <TableCell>
            <input type="text" bind:value={dateOrder}>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>

  <h2>Code</h2>
  <div class="block">
    <Panel>
      <pre>{exampleCode}</pre>
    </Panel>
  </div>
</div>
