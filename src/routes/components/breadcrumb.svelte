<script>
  import {
    Breadcrumb,
    BreadcrumbItem
  } from "../../../../svelte-toolkit/main.js";
  import { items } from "../../stores/items";

  $: exampleCode =
    "<Breadcrumb>\n" +
    "  {#each items as item}\n" +
    "    <BreadcrumbItem href={item.href}>{item.title}</BreadcrumbItem>\n" +
    "  {/each}\n" +
    "</Breadcrumb>";
</script>

<div class="container">
  <h2>Breadcrumb</h2>
  <p>
    A breadcrumb, per
    <a
      href="https://www.w3.org/TR/wai-aria-practices-1.1/#breadcrumb"
      target="_blank">
      https://www.w3.org/TR/wai-aria-practices-1.1/#breadcrumb
    </a>
    .
  </p>

  <h3>Demo</h3>
  <div class="block">
    <Breadcrumb>
      {#each $items as item, index}
        <BreadcrumbItem href={item.href} current={index === 2}>
           {item.name}
        </BreadcrumbItem>
      {/each}
    </Breadcrumb>
  </div>

  <h3>Properties</h3>
  <div class="block">
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Default</th>
          <th>Description</th>
          <th>Change</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>current (BreadcrumbItem)</td>
          <td>false</td>
          <td>true if this breadcrumb item is the current page</td>
          <td />
        </tr>
      </tbody>
    </table>
  </div>

  <h3>Code</h3>
  <div class="block">
    <pre>{exampleCode} </pre>
  </div>
</div>
