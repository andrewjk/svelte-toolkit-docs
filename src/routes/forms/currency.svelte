<script>
  import {
    Currency,
    Table,
    TableRow,
    TableHeader,
    TableHeaderCell,
    TableBody,
    TableCell,
    Panel,
  } from "svelte-toolkit";

  let type = "";
  let name = "field1";
  let value = null;
  let format = "USD";
  let placeholder = "";
  let min = null;
  let max = null;
  let readonly = false;

  $: exampleCode = `
import { Currency } from "svelte-toolkit";

<Currency type="${type}" name="${name}" format="${format}" placeholder="${placeholder}" min={${min}} max={${max}} readonly={${readonly}} bind:value />`.trim();
</script>

<svelte:head>
  <title>Currency | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h1>Currency</h1>
  <p>A box for entering a currency, formatted against a specific locale.</p>

  <h2>Demo</h2>
  <div class="block">
    <Currency
      {type}
      {name}
      {format}
      {placeholder}
      {min}
      {max}
      {readonly}
      bind:value />
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
          <TableCell>name</TableCell>
          <td />
          <TableCell>The name of the field entered into the currency box</TableCell>
          <TableCell>
            <input type="text" bind:value={name} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>type</TableCell>
          <td />
          <TableCell>primary, info, success, warning, or danger</TableCell>
          <TableCell>
            <select bind:value={type}>
              <option>-</option>
              <option>primary</option>
              <option>info</option>
              <option>success</option>
              <option>warning</option>
              <option>danger</option>
            </select>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>value</TableCell>
          <td />
          <TableCell>The currency value</TableCell>
          <TableCell>
            <input type="number" bind:value />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>format</TableCell>
          <TableCell>USD</TableCell>
          <TableCell>The currency's format, as an ISO currency code (see https://www.currency-iso.org/dam/downloads/lists/list_one.xml)</TableCell>
          <TableCell>
            <select bind:value={format}>
              <option value="USD">United States dollar</option>
              <option value="EUR">Euro</option>
              <option value="JPY">Japanese yen</option>
              <option value="GBP">Pound sterling</option>
              <option value="AUD">Australian dollar</option>
              <option value="CAD">Canadian dollar</option>
              <option value="CHF">Swiss franc</option>
              <option value="CNY">Renminbi</option>
              <option value="HKD">Hong Kong dollar</option>
              <option value="NZD">New Zealand dollar</option>
              <option value="SEK">Swedish krona</option>
              <option value="KRW">South Korean won</option>
              <option value="SGD">Singapore dollar</option>
              <option value="NOK">Norwegian krone</option>
              <option value="MXN">Mexican peso</option>
              <option value="INR">Indian rupee</option>
              <option value="RUB">Russian ruble</option>
              <option value="ZAR">South African rand</option>
              <option value="TRY">Turkish lira</option>
              <option value="BRL">Brazilian real</option>
              <option value="TWD">New Taiwan dollar</option>
              <option value="DKK">Danish krone</option>
              <option value="PLN">Polish zloty</option>
              <option value="THB">Thai baht</option>
              <option value="IDR">Indonesian rupiah</option>
              <option value="HUF">Hungarian forint</option>
              <option value="CZK">Czech koruna</option>
              <option value="ILS">Israeli new shekel</option>
              <option value="CLP">Chilean peso</option>
              <option value="PHP">Philippine peso</option>
              <option value="AED">UAE dirham</option>
              <option value="COP">Colombian peso</option>
              <option value="SAR">Saudi riyal</option>
              <option value="MYR">Malaysian ringgit</option>
              <option value="RON">Romanian leu</option>
            </select>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>placeholder</TableCell>
          <td />
          <TableCell>Placeholder text to show when the textbox is empty.</TableCell>
          <TableCell>
            <input type="text" bind:value={placeholder} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>min</TableCell>
          <td />
          <TableCell>The minimum allowed currency value</TableCell>
          <TableCell>
            <input type="number" bind:value={min} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>max</TableCell>
          <td />
          <TableCell>The maximum allowed currency value</TableCell>
          <TableCell>
            <input type="number" bind:value={max} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>readonly</TableCell>
          <TableCell>false</TableCell>
          <TableCell>Set to true to prevent the field from taking input</TableCell>
          <TableCell>
            <label>
              <input type="checkbox" bind:checked={readonly} />
              Set readonly
            </label>
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
