<script>
  import { base } from "$app/paths";

  // HACK: If this is in the HTML, prettier mangles it
  const stylesCode = `
<style>
  :root {
    --info-color: purple;
  }
</style>`.trim();
</script>

<svelte:head>
  <title>Theming | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h1>Theming</h1>

  <p>
    Theming is handled using CSS custom properties. The properties that are
    supported are listed
    <a href={`${base}/general/themeproperties`}>here</a>. There are three main
    ways you can set these properties.
  </p>

  <h2>Styles</h2>
  <p>You can set custom properties in the style tag of your component:</p>
  <pre lang="html">{stylesCode}</pre>
  <p>
    When setting custom properties in the style tag, you need to make sure you
    set all related colors (e.g. if you set --info-color, you will also need to
    set --info-hover-color).
  </p>

  <h2>loadTheme</h2>
  <p>
    Alternatively, you can pass an object into the loadTheme method in the
    onMount method of your component:
  </p>
  <pre
    lang="javascript">{`
import { loadTheme } from "svelte-toolkit";

onMount(() => {
  loadTheme({
    "--info-color": "purple"
  });
});`.trim()}
  </pre>
  <p>
    The loadTheme method will set related colors (e.g. in the example above it
    will set --info-hover-color as well as --info-color) but as it's called on
    onMount the original colors will be displayed briefly before the theme
    colors are loaded. It's most useful for applying user custom themes or other
    dynamic themes.
  </p>
  <p>
    You can use the getTheme method to get all colors that have been set
    (including related colors if set through loadTheme):
  </p>
  <pre
    lang="javascript">{`
import { getTheme } from "svelte-toolkit";

onMount(() => {
  alert(getTheme());
});`.trim()}
  </pre>

  <h2>Script</h2>
  <p>
    Svelte Toolkit also comes with a script that you can use to override the
    styles in the component files themselves. It requires a bit of setup.
  </p>
  <p>Install `node-sass` as a dependency:</p>
  <pre>yarn add -D node-sass</pre>
  <p>
    Add a `stk.config.json` file to the root of your site, with content in the
    following format:
  </p>
  <pre>{`
{
  "theme": {
    "--info-color": "purple"
  }
}`.trim()}</pre>
  <p>Add the script entry to your `package.json` file:</p>
  <pre>{`
"scripts": {
  "theme": "stk theme"
}`.trim()}</pre>
  <p>Run the script:</p>
  <pre>yarn theme</pre>
  <p>
    The script will only build the theme when the config file has changed or the
    svelte-toolkit dependency has been updated, so you can put it into your
    `package.json` as a predev or prebuild script without impacting performance.
  </p>
  <p>
    The script will set related colors (e.g. in the example above it will set
    --info-hover-color as well as --info-color), just like using loadTheme.
  </p>
  <p>
    Behind the scenes, this script injects new styles directly into the
    components, so you can also change some properties that are impossible to do
    as CSS custom properties, including media query breakpoints.
  </p>
</div>
