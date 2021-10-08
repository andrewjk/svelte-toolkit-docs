<script>
  import { onMount } from "svelte";
  import {
    Toolkit,
    Page,
    PageBody,
    PageHeader,
    PageFooter,
    Container,
    Grid,
    GridItem,
  } from "svelte-toolkit";

  import Header from "$lib/Header.svelte";
  import Footer from "$lib/Footer.svelte";
  import Sidebar from "$lib/Sidebar.svelte";

  export let segment;
</script>

<Toolkit />

<svelte:head>
  <title>Svelte Toolkit</title>
</svelte:head>

<Page>
  <PageHeader>
    <Header {segment} />
  </PageHeader>

  <PageBody>
    <Grid spaced>
      <GridItem span="6" mdspan="3" lgspan="2">
        <Container padded>
          <Sidebar />
        </Container>
      </GridItem>
      <GridItem span="6" mdspan="9" lgspan="10">
        <Container padded>
          <slot />
        </Container>
      </GridItem>
    </Grid>
  </PageBody>

  <PageFooter>
    <Footer {segment} />
  </PageFooter>
</Page>

<style>
  :global(.outer-panel) {
    background-color: #fafafa;
    border: 1px dashed #d2d2d2;
    padding: 2rem;
    width: 100%;
  }

  :global(.inner-panel) {
    background-color: #fff;
    border: 1px solid #d2d2d2;
    padding: 2rem;
    text-align: center;
    width: 100%;
  }

  :global(.title) {
    font-size: 3rem;
  }

  :global(.number) {
    color: darkgray;
    font-size: 9.6rem;
    text-align: center;
  }
</style>
