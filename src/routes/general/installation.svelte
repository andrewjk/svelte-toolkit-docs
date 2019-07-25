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
  <p>
    <code lang="bash">yarn add -D svelte-toolkit</code>
  </p>

  <h2>Consuming from Sapper</h2>
  <p>Import the SCSS styles in client.js:</p>
  <p>
    <code lang="javascript">import 'svelte-toolkit/main.scss';</code>
  </p>
  <p>Import toolkit components in your svelte component:</p>
  <p>
    <code lang="javascript">{`import {Button} from "svelte-toolkit";`}</code>
  </p>
  <p>If you receive a warning about SSR, change it to:</p>
  <p>
    <code lang="javascript">
      {`import {Button} from "svelte-toolkit/main.js";`}
    </code>
  </p>
  <p>(I'm not 100% sure why this happens some times and not others)</p>

  <h2>Consuming from Electron</h2>
  <p>Import the SCSS styles in your renderer.js or renderer/index.js:</p>
  <p>
    <code lang="javascript">require('svelte-toolkit/main.scss')</code>
  </p>
  <p>Import toolkit components in your svelte component:</p>
  <p>
    <code lang="javascript">{`import {Button} from "svelte-toolkit";`}</code>
  </p>

  <h2>Customising</h2>
  <p>TODO:</p>
</div>
