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

  <h2>Consuming from Sapper</h2>
  <p>Import toolkit components in your svelte component:</p>
  <pre>
    {`import {Button} from "svelte-toolkit";`}
  </pre>
  <p>If you receive a warning about SSR, change it to:</p>
  <pre lang="javascript">
    {`import { Button } from "svelte-toolkit/main.js";`}
  </pre>
  <p>(I'm not 100% sure why this happens some times and not others)</p>

  <h2>Consuming from Electron</h2>
  <p>Import toolkit components in your svelte component:</p>
  <pre>
    {`import { Button } from "svelte-toolkit";`}
  </pre>

  <h2>Customising</h2>
  <p>TODO:</p>
</div>
