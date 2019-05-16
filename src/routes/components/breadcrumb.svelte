<script>
  import { Breadcrumb, BreadcrumbItem } from "../../../../svelte-toolkit/main.js";
</script>

<div class="container">
  <h2>Breadcrumb</h2>
  <p>
    A breadcrumb, per <a href="https://www.w3.org/TR/wai-aria-practices-1.1/#breadcrumb" target="_blank">https://www.w3.org/TR/wai-aria-practices-1.1/#breadcrumb</a>.
  </p>

  <h3>Demo</h3>
  <Breadcrumb>
    {#each items as item}
      <BreadcrumbItem href={item.href}>{item.name}</BreadcrumbItem>
    {/each}
  </Breadcrumb>

  <h3>Code</h3>
  <pre>
  &lt;Breadcrumb &lbrace;multiple&rbrace;&gt;
    &lbrace;#each items as item&rbrace;
      &lt;BreadcrumbItem href=&lbrace;item.href&rbrace;&gt;&lbrace;item.name&rbrace;&lt;/BreadcrumbItem&gt;
    &lbrace;/each&rbrace;
  &lt;/Breadcrumb&gt;
  </pre>

  <h3>Properties</h3>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
        <th>Change</th>
      </tr>
    </thead>
    <tbody>
    </tbody>
  </table>
</div>