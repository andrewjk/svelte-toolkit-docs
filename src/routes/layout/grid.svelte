<script>
  import {
    Grid,
    GridItem,
    Table,
    TableRow,
    TableHeader,
    TableHeaderCell,
    TableBody,
    TableCell,
    Panel,
  } from "svelte-toolkit";

  let spaced = false;
  let cols = 6;
  let smcols = 0;
  let mdcols = 0;
  let lgcols = 0;
  let xlcols = 0;
  let span = 1;
  let smspan = 0;
  let mdspan = 0;
  let lgspan = 0;
  let xlspan = 0;

  $: exampleCode = `
import { Grid, GridItem } from "svelte-toolkit";

<Grid
    spaced={${spaced}}
    cols="${cols}"
    smcols="${smcols}"
    mdcols="${mdcols}"
    lgcols="${lgcols}"
    xlcols="${xlcols}">
  <GridItem
      span="${span}"
      smspan="${smspan}"
      mdspan="${mdspan}"
      lgspan="${lgspan}"
      xlspan="${xlspan}">
    1
  </GridItem>
  <GridItem>2</GridItem>
  <GridItem>3</GridItem>
  <GridItem>...</GridItem>
</Grid>`.trim();
</script>

<svelte:head>
  <title>Grid | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h1>Grid</h1>
  <p>Grids are based on the CSS Grid standard and are made up of GridItems.</p>

  <h2>Demo</h2>
  <Grid {spaced} {cols} {smcols} {mdcols} {lgcols} {xlcols}>
    <GridItem {span} {smspan} {mdspan} {lgspan} {xlspan}>
      <div class="inner-panel">1</div>
    </GridItem>
    <GridItem>
      <div class="inner-panel">2</div>
    </GridItem>
    <GridItem>
      <div class="inner-panel">3</div>
    </GridItem>
    <GridItem>
      <div class="inner-panel">4</div>
    </GridItem>
    <GridItem>
      <div class="inner-panel">5</div>
    </GridItem>
    <GridItem>
      <div class="inner-panel">6</div>
    </GridItem>
    <GridItem>
      <div class="inner-panel">7</div>
    </GridItem>
    <GridItem>
      <div class="inner-panel">8</div>
    </GridItem>
    <GridItem>
      <div class="inner-panel">9</div>
    </GridItem>
    <GridItem>
      <div class="inner-panel">10</div>
    </GridItem>
    <GridItem>
      <div class="inner-panel">11</div>
    </GridItem>
    <GridItem>
      <div class="inner-panel">12</div>
    </GridItem>
  </Grid>

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
          <TableCell>spaced</TableCell>
          <TableCell>false</TableCell>
          <TableCell>
            Whether there should be space between the rows and columns of the
            grid.
          </TableCell>
          <TableCell>
            <label>
              <input type="checkbox" bind:checked={spaced} />
              Add space
            </label>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>cols</TableCell>
          <TableCell>12</TableCell>
          <TableCell>The number of columns in the grid (up to 12).</TableCell>
          <TableCell>
            <input type="number" bind:value={cols} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>smcols</TableCell>
          <td />
          <TableCell>The number of columns in the grid on a small screen (and up).</TableCell>
          <TableCell>
            <input type="number" bind:value={smcols} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>mdcols</TableCell>
          <td />
          <TableCell>The number of columns in the grid on a medium screen (and up).</TableCell>
          <TableCell>
            <input type="number" bind:value={mdcols} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>lgcols</TableCell>
          <td />
          <TableCell>The number of columns in the grid on a large screen (and up).</TableCell>
          <TableCell>
            <input type="number" bind:value={lgcols} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>xlcols</TableCell>
          <td />
          <TableCell>The number of columns in the grid on an extra large screen (and up).</TableCell>
          <TableCell>
            <input type="number" bind:value={xlcols} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>GridItem span</TableCell>
          <TableCell>1</TableCell>
          <TableCell>The number of columns to span with a GridItem (up to 12).</TableCell>
          <TableCell>
            <input type="number" bind:value={span} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>GridItem smspan</TableCell>
          <td />
          <TableCell>
            The number of columns to span with a GridItem on a small screen (and up).
          </TableCell>
          <TableCell>
            <input type="number" bind:value={smspan} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>GridItem mdspan</TableCell>
          <td />
          <TableCell>
            The number of columns to span with a GridItem on a medium screen (and up).
          </TableCell>
          <TableCell>
            <input type="number" bind:value={mdspan} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>GridItem lgspan</TableCell>
          <td />
          <TableCell>
            The number of columns to span with a GridItem on a large screen (and up).
          </TableCell>
          <TableCell>
            <input type="number" bind:value={lgspan} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>GridItem xlspan</TableCell>
          <td />
          <TableCell>
            The number of columns to span with a GridItem on an extra large
            screen (and up).
          </TableCell>
          <TableCell>
            <input type="number" bind:value={xlspan} />
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

  <h2>Nested Layout</h2>
  <p>Grids can be nested:</p>

  <Grid cols={2} spaced>
    <GridItem>
      <div class="outer-panel">
        <Grid cols={3} spaced>
          <GridItem>
            <div class="inner-panel">1</div>
          </GridItem>
          <GridItem>
            <div class="inner-panel">2</div>
          </GridItem>
          <GridItem>
            <div class="inner-panel">3</div>
          </GridItem>
        </Grid>
      </div>
    </GridItem>
    <GridItem>
      <div class="outer-panel">
        <Grid cols={3} spaced>
          <GridItem>
            <div class="inner-panel">1</div>
          </GridItem>
          <GridItem>
            <div class="inner-panel">2</div>
          </GridItem>
          <GridItem>
            <div class="inner-panel">3</div>
          </GridItem>
        </Grid>
      </div>
    </GridItem>
  </Grid>
</div>
