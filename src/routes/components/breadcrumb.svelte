<script>
  import { Breadcrumb, BreadcrumbItem } from "../../../../svelte-toolkit/main.js";
  import { items } from '../../stores/items'
</script>

<div class="container">
  <h2>Breadcrumb</h2>
  <p>
    A breadcrumb, per <a href="https://www.w3.org/TR/wai-aria-practices-1.1/#breadcrumb" target="_blank">https://www.w3.org/TR/wai-aria-practices-1.1/#breadcrumb</a>.
  </p>

  <h3>Demo</h3>
  <div class="block">
    <Breadcrumb>
      {#each $items as item}
        <BreadcrumbItem href={item.href}>{item.name}</BreadcrumbItem>
      {/each}
    </Breadcrumb>
  </div>

  <h3>Properties</h3>
  <div class="block">
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

  <h3>Code</h3>
  <div class="block">
    <pre>
&lt;Breadcrumb &lbrace;multiple&rbrace;&gt;
  &lbrace;#each items as item&rbrace;
    &lt;BreadcrumbItem href=&lbrace;item.href&rbrace;&gt;&lbrace;item.name&rbrace;&lt;/BreadcrumbItem&gt;
  &lbrace;/each&rbrace;
&lt;/Breadcrumb&gt;
    </pre>
  </div>
</div>