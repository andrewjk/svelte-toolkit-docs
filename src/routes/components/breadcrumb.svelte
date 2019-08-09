<script>
  import { Breadcrumb, BreadcrumbItem } from "svelte-toolkit";
  import { items } from "../../stores/items";

  $: exampleCode = `
import { Breadcrumb, BreadcrumbItem } from "svelte-toolkit";

<Breadcrumb>
  {#each items as item}
    <BreadcrumbItem href={item.href}>{item.title}</BreadcrumbItem>
  {/each}
</Breadcrumb>`.trim();
</script>

<svelte:head>
  <title>Breadcrumb | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h1>Breadcrumb</h1>
  <p>
    A breadcrumb, per
    <a
      href="https://www.w3.org/TR/wai-aria-practices-1.1/#breadcrumb"
      target="_blank">
      https://www.w3.org/TR/wai-aria-practices-1.1/#breadcrumb
    </a>
    .
  </p>

  <h2>Demo</h2>
  <div class="block">
    <Breadcrumb>
      {#each $items as item, index}
        <BreadcrumbItem href={item.href} current={index === 2}>
           {item.name}
        </BreadcrumbItem>
      {/each}
    </Breadcrumb>
  </div>

  <h2>Properties</h2>
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

  <h2>Code</h2>
  <div class="block">
    <pre>{exampleCode} </pre>
  </div>
</div>
