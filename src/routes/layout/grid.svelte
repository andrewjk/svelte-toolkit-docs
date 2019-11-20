<script>
  import { Grid, GridItem } from "svelte-toolkit";
</script>

<svelte:head>
  <title>Grid | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h1>Grid</h1>

  <p>Grids are based on flexbox and are made up of GridItems.</p>

  <p>You can divide your grid into up to 12 columns:</p>
  <Grid spaced={true}>
    <GridItem width="1-1">
      <div class="inner-panel">1</div>
    </GridItem>

    <GridItem width="1-2">
      <div class="inner-panel">1/2</div>
    </GridItem>
    <GridItem width="1-2">
      <div class="inner-panel">1/2</div>
    </GridItem>

    <GridItem width="1-3">
      <div class="inner-panel">1/3</div>
    </GridItem>
    <GridItem width="1-3">
      <div class="inner-panel">1/3</div>
    </GridItem>
    <GridItem width="1-3">
      <div class="inner-panel">1/3</div>
    </GridItem>

    <GridItem width="1-4">
      <div class="inner-panel">1/4</div>
    </GridItem>
    <GridItem width="1-4">
      <div class="inner-panel">1/4</div>
    </GridItem>
    <GridItem width="1-4">
      <div class="inner-panel">1/4</div>
    </GridItem>
    <GridItem width="1-4">
      <div class="inner-panel">1/4</div>
    </GridItem>

    <GridItem width="1-5">
      <div class="inner-panel">1/5</div>
    </GridItem>
    <GridItem width="1-5">
      <div class="inner-panel">1/5</div>
    </GridItem>
    <GridItem width="1-5">
      <div class="inner-panel">1/5</div>
    </GridItem>
    <GridItem width="1-5">
      <div class="inner-panel">1/5</div>
    </GridItem>
    <GridItem width="1-5">
      <div class="inner-panel">1/5</div>
    </GridItem>

    <GridItem width="1-6">
      <div class="inner-panel">1/6</div>
    </GridItem>
    <GridItem width="1-6">
      <div class="inner-panel">1/6</div>
    </GridItem>
    <GridItem width="1-6">
      <div class="inner-panel">1/6</div>
    </GridItem>
    <GridItem width="1-6">
      <div class="inner-panel">1/6</div>
    </GridItem>
    <GridItem width="1-6">
      <div class="inner-panel">1/6</div>
    </GridItem>
    <GridItem width="1-6">
      <div class="inner-panel">1/6</div>
    </GridItem>

    <GridItem width="1-7">
      <div class="inner-panel">1/7</div>
    </GridItem>
    <GridItem width="1-7">
      <div class="inner-panel">1/7</div>
    </GridItem>
    <GridItem width="1-7">
      <div class="inner-panel">1/7</div>
    </GridItem>
    <GridItem width="1-7">
      <div class="inner-panel">1/7</div>
    </GridItem>
    <GridItem width="1-7">
      <div class="inner-panel">1/7</div>
    </GridItem>
    <GridItem width="1-7">
      <div class="inner-panel">1/7</div>
    </GridItem>
    <GridItem width="1-7">
      <div class="inner-panel">1/7</div>
    </GridItem>

    <GridItem width="1-8">
      <div class="inner-panel">1/8</div>
    </GridItem>
    <GridItem width="1-8">
      <div class="inner-panel">1/8</div>
    </GridItem>
    <GridItem width="1-8">
      <div class="inner-panel">1/8</div>
    </GridItem>
    <GridItem width="1-8">
      <div class="inner-panel">1/8</div>
    </GridItem>
    <GridItem width="1-8">
      <div class="inner-panel">1/8</div>
    </GridItem>
    <GridItem width="1-8">
      <div class="inner-panel">1/8</div>
    </GridItem>
    <GridItem width="1-8">
      <div class="inner-panel">1/8</div>
    </GridItem>
    <GridItem width="1-8">
      <div class="inner-panel">1/8</div>
    </GridItem>

    <GridItem width="1-9">
      <div class="inner-panel">1/9</div>
    </GridItem>
    <GridItem width="1-9">
      <div class="inner-panel">1/9</div>
    </GridItem>
    <GridItem width="1-9">
      <div class="inner-panel">1/9</div>
    </GridItem>
    <GridItem width="1-9">
      <div class="inner-panel">1/9</div>
    </GridItem>
    <GridItem width="1-9">
      <div class="inner-panel">1/9</div>
    </GridItem>
    <GridItem width="1-9">
      <div class="inner-panel">1/9</div>
    </GridItem>
    <GridItem width="1-9">
      <div class="inner-panel">1/9</div>
    </GridItem>
    <GridItem width="1-9">
      <div class="inner-panel">1/9</div>
    </GridItem>
    <GridItem width="1-9">
      <div class="inner-panel">1/9</div>
    </GridItem>

    <GridItem width="1-10">
      <div class="inner-panel">1/10</div>
    </GridItem>
    <GridItem width="1-10">
      <div class="inner-panel">1/10</div>
    </GridItem>
    <GridItem width="1-10">
      <div class="inner-panel">1/10</div>
    </GridItem>
    <GridItem width="1-10">
      <div class="inner-panel">1/10</div>
    </GridItem>
    <GridItem width="1-10">
      <div class="inner-panel">1/10</div>
    </GridItem>
    <GridItem width="1-10">
      <div class="inner-panel">1/10</div>
    </GridItem>
    <GridItem width="1-10">
      <div class="inner-panel">1/10</div>
    </GridItem>
    <GridItem width="1-10">
      <div class="inner-panel">1/10</div>
    </GridItem>
    <GridItem width="1-10">
      <div class="inner-panel">1/10</div>
    </GridItem>
    <GridItem width="1-10">
      <div class="inner-panel">1/10</div>
    </GridItem>

    <GridItem width="1-11">
      <div class="inner-panel">1/11</div>
    </GridItem>
    <GridItem width="1-11">
      <div class="inner-panel">1/11</div>
    </GridItem>
    <GridItem width="1-11">
      <div class="inner-panel">1/11</div>
    </GridItem>
    <GridItem width="1-11">
      <div class="inner-panel">1/11</div>
    </GridItem>
    <GridItem width="1-11">
      <div class="inner-panel">1/11</div>
    </GridItem>
    <GridItem width="1-11">
      <div class="inner-panel">1/11</div>
    </GridItem>
    <GridItem width="1-11">
      <div class="inner-panel">1/11</div>
    </GridItem>
    <GridItem width="1-11">
      <div class="inner-panel">1/11</div>
    </GridItem>
    <GridItem width="1-11">
      <div class="inner-panel">1/11</div>
    </GridItem>
    <GridItem width="1-11">
      <div class="inner-panel">1/11</div>
    </GridItem>
    <GridItem width="1-11">
      <div class="inner-panel">1/11</div>
    </GridItem>

    <GridItem width="1-12">
      <div class="inner-panel">1/12</div>
    </GridItem>
    <GridItem width="1-12">
      <div class="inner-panel">1/12</div>
    </GridItem>
    <GridItem width="1-12">
      <div class="inner-panel">1/12</div>
    </GridItem>
    <GridItem width="1-12">
      <div class="inner-panel">1/12</div>
    </GridItem>
    <GridItem width="1-12">
      <div class="inner-panel">1/12</div>
    </GridItem>
    <GridItem width="1-12">
      <div class="inner-panel">1/12</div>
    </GridItem>
    <GridItem width="1-12">
      <div class="inner-panel">1/12</div>
    </GridItem>
    <GridItem width="1-12">
      <div class="inner-panel">1/12</div>
    </GridItem>
    <GridItem width="1-12">
      <div class="inner-panel">1/12</div>
    </GridItem>
    <GridItem width="1-12">
      <div class="inner-panel">1/12</div>
    </GridItem>
    <GridItem width="1-12">
      <div class="inner-panel">1/12</div>
    </GridItem>
    <GridItem width="1-12">
      <div class="inner-panel">1/12</div>
    </GridItem>
  </Grid>

  <h2>Nested Layout</h2>
  <p>Grids can be nested:</p>

  <Grid spaced>
    <GridItem width="1-2">
      <div class="outer-panel">
        <Grid spaced>
          <GridItem width="1-3">
            <div class="inner-panel">1/3</div>
          </GridItem>
          <GridItem width="1-3">
            <div class="inner-panel">1/3</div>
          </GridItem>
          <GridItem width="1-3">
            <div class="inner-panel">1/3</div>
          </GridItem>
        </Grid>
      </div>
    </GridItem>
    <GridItem width="1-2">
      <div class="outer-panel">
        <Grid spaced>
          <GridItem width="1-3">
            <div class="inner-panel">1/3</div>
          </GridItem>
          <GridItem width="1-3">
            <div class="inner-panel">1/3</div>
          </GridItem>
          <GridItem width="1-3">
            <div class="inner-panel">1/3</div>
          </GridItem>
        </Grid>
      </div>
    </GridItem>
  </Grid>
</div>
