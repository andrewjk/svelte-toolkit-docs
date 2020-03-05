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
    loadTheme,
    getTheme
  } from "svelte-toolkit";

  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
  import Sidebar from "../components/Sidebar.svelte";

  export let segment;

  /*
  onMount(() => {
    loadTheme({
      "--header-back-color": "aliceblue",
      "--footer-back-color": "slategray",
      "--body-back-color": "#555",
      "--body-text-color": "white",
      "--info-color": "pink",
      "--link-color": "goldenrod",
      "--label-text-color": "#ccc"
    });

    console.log(getTheme());
  });
  */
</script>

<style lang="scss">
  //:root {
  //  --info-color: green;
  //}

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
      <GridItem smspan="6" mdspan="3" lgspan="2">
        <Container padded>
          <Sidebar />
        </Container>
      </GridItem>
      <GridItem smspan="6" mdspan="9" lgspan="10">
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
