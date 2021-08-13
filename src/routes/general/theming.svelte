<script>
  import { base } from "$app/paths";
</script>

<svelte:head>
  <title>Theming | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h1>Theming</h1>

  <p>
    Theming is handled using CSS custom properties. The properties that are supported are listed
    <a href={`${base}/general/themeproperties`}>here</a>. There are two main ways you can set these properties.
  </p>

  <h2>Styles</h2>
  <p>You can set custom properties in the style tag of your component:</p>
  <pre lang="javascript">{`
<style>
  :root {
    --info-color: green;
  }
</style>`.trim()}
  </pre>
  <p>
    When setting custom properties in the style tag, you need to make sure you set all related
    colors (e.g. if you set --info-color, you will also need to set --info-hover-color).
  </p>

  <h2>loadTheme</h2>
  <p>
    Alternatively, you can pass an object into the loadTheme method in the onMount method of your
    component:
  </p>
  <pre lang="javascript">{`
import { loadTheme } from "svelte-toolkit";

onMount(() => {
  loadTheme({
    "--info-color": "pink"
  });
});`.trim()}
  </pre>
  <p>
    The loadTheme method will set related colors (e.g. in the example above it will set
    --info-hover-color as well as --info-color) but as it's called on onMount the original colors
    will be displayed briefly before the theme colors are loaded.
  </p>

  <h2>getTheme</h2>
  <p>
    You can use the getTheme method to get all colors that have been set (including related
    colors if set through loadTheme):
  </p>
  <pre lang="javascript">{`
import { getTheme } from "svelte-toolkit";

onMount(() => {
  alert(getTheme());
});`.trim()}
  </pre>
</div>
