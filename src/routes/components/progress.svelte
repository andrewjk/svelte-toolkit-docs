<script>
  import {
    Progress,
    Table,
    TableRow,
    TableHeader,
    TableHeaderCell,
    TableBody,
    TableCell,
    Panel,
  } from "svelte-toolkit";

  let type = "info";
  let size = "medium";
  let value = 50;
  let total = 100;

  $: exampleCode = `
import { Progress } from "svelte-toolkit";

<Progress type="${type}" size="${size}" value={${value}} total={${total}} />`;
</script>

<svelte:head>
  <title>Progress | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h1>Progress</h1>
  <p>A progress bar.</p>

  <h2>Colors</h2>
  <div class="block">
    Info
    <Progress value={15} type="info" />
    Success
    <Progress value={30} type="success" />
    Warning
    <Progress value={45} type="warning" />
    Danger
    <Progress value={60} type="danger" />
  </div>

  <h2>Sizes</h2>
  <div class="block">
    Default
    <Progress value={45} />
    Small
    <Progress value={60} size="small" type="success" />
    Medium
    <Progress value={75} size="medium" type="warning" />
    Large
    <Progress value={90} size="large" type="danger" />
  </div>

  <h2>Demo</h2>
  <div class="block">
    <Progress {type} {size} {value} {total} />
    <br />
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
          <TableCell>type</TableCell>
          <TableCell>info</TableCell>
          <TableCell>primary, info, success, warning, danger</TableCell>
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
          <TableCell>size</TableCell>
          <TableCell>medium</TableCell>
          <TableCell>small, medium, large</TableCell>
          <TableCell>
            <select bind:value={size}>
              <option>-</option>
              <option>small</option>
              <option>medium</option>
              <option>large</option>
            </select>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>value</TableCell>
          <TableCell>0</TableCell>
          <TableCell>0 to 100 (or the value of total, below)</TableCell>
          <TableCell>
            <input type="number" bind:value />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>total</TableCell>
          <TableCell>100</TableCell>
          <td />
          <TableCell>
            <input type="number" bind:value={total} />
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
