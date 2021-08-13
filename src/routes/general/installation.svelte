<svelte:head>
  <title>Installation | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h1>Installation</h1>

  <h2>Getting Started</h2>
  <p>
    The use of the <a href="https://yarnpkg.com/">Yarn</a> package manager is <strong>strongly</strong>
    recommended, as opposed to using `npm`.
  </p>
  <pre>yarn add -D svelte-toolkit</pre>

  <h2>Importing Components</h2>
  <p>Import toolkit components in your svelte component:</p>
  <pre>
    {`
<script>
  import { Button } from "svelte-toolkit";
</script>

<Button>Click me</Button>`.trim()}
  </pre>

  <h2>Base Styles</h2>
  <p>Import the Toolkit component to set base styles:</p>
  <pre>
    {`
<script>
  import { Toolkit } from "svelte-toolkit";
</script>

<Toolkit />`.trim()}
  </pre>
  <p>
    When using SvelteKit or Sapper, this component is best placed in your _layout file.
  </p>
</div>
