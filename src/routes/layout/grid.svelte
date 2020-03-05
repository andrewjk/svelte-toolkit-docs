<script>
  import { Grid, GridItem } from "svelte-toolkit";

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
          <td>spaced</td>
          <td>false</td>
          <td>
            Whether there should be space between the rows and columns of the
            grid.
          </td>
          <td>
            <label>
              <input type="checkbox" bind:checked={spaced} />
              Add space
            </label>
          </td>
        </tr>
        <tr>
          <td>cols</td>
          <td>12</td>
          <td>The number of columns in the grid (up to 12).</td>
          <td>
            <input type="number" bind:value={cols} />
          </td>
        </tr>
        <tr>
          <td>smcols</td>
          <td />
          <td>The number of columns in the grid on a small screen (and up).</td>
          <td>
            <input type="number" bind:value={smcols} />
          </td>
        </tr>
        <tr>
          <td>mdcols</td>
          <td />
          <td>The number of columns in the grid on a medium screen (and up).</td>
          <td>
            <input type="number" bind:value={mdcols} />
          </td>
        </tr>
        <tr>
          <td>lgcols</td>
          <td />
          <td>The number of columns in the grid on a large screen (and up).</td>
          <td>
            <input type="number" bind:value={lgcols} />
          </td>
        </tr>
        <tr>
          <td>xlcols</td>
          <td />
          <td>The number of columns in the grid on an extra large screen (and up).</td>
          <td>
            <input type="number" bind:value={xlcols} />
          </td>
        </tr>
        <tr>
          <td>GridItem span</td>
          <td>1</td>
          <td>The number of columns to span with a GridItem (up to 12).</td>
          <td>
            <input type="number" bind:value={span} />
          </td>
        </tr>
        <tr>
          <td>GridItem smspan</td>
          <td />
          <td>
            The number of columns to span with a GridItem on a small screen (and up).
          </td>
          <td>
            <input type="number" bind:value={smspan} />
          </td>
        </tr>
        <tr>
          <td>GridItem mdspan</td>
          <td />
          <td>
            The number of columns to span with a GridItem on a medium screen (and up).
          </td>
          <td>
            <input type="number" bind:value={mdspan} />
          </td>
        </tr>
        <tr>
          <td>GridItem lgspan</td>
          <td />
          <td>
            The number of columns to span with a GridItem on a large screen (and up).
          </td>
          <td>
            <input type="number" bind:value={lgspan} />
          </td>
        </tr>
        <tr>
          <td>GridItem xlspan</td>
          <td />
          <td>
            The number of columns to span with a GridItem on an extra large
            screen (and up).
          </td>
          <td>
            <input type="number" bind:value={xlspan} />
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <h2>Code</h2>
  <div class="block">
    <pre>{exampleCode}</pre>
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
