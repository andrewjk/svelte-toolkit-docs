<script>
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
  import Sidebar from "../components/Sidebar.svelte";

  export let segment;
</script>

<svelte:head>
  <title>Svelte Toolkit</title>
</svelte:head>

<div class="page">
  <Header {segment} />

  <main class="main">
    <div class="grid">
      <div class="width-small-1-2 width-medium-1-4 width-large-1-6">
        <div class="container">
          <Sidebar />
        </div>
      </div>
      <div class="width-small-1-2 width-medium-3-4 width-large-5-6">
        <slot />
      </div>
    </div>
  </main>

  <Footer {segment} />
</div>
