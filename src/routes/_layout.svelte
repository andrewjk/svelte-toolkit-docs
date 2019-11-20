<script>
  import {
    Toolkit,
    Page,
    PageBody,
    PageHeader,
    PageFooter,
    Container,
    Grid,
    GridItem
  } from "svelte-toolkit";

  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
  import Sidebar from "../components/Sidebar.svelte";

  export let segment;
</script>

<style lang="scss">
  :root {
    //--info-color: green;
  }

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
    <Grid spaced={true}>
      <GridItem smwidth="1-2" mdwidth="1-4" lgwidth="1-6">
        <Container padded={true}>
          <Sidebar />
        </Container>
      </GridItem>
      <GridItem smwidth="1-2" mdwidth="3-4" lgwidth="5-6">
        <Container padded={true}>
          <slot />
        </Container>
      </GridItem>
    </Grid>
  </PageBody>

  <PageFooter>
    <Footer {segment} />
  </PageFooter>
</Page>
