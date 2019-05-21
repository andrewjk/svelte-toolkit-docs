<script>
  import { Tabs, TabItem } from "../../../../svelte-toolkit/main.js";
  import { items } from '../../stores/items'

  let value = 0;
  let multiple = false;
</script>

<div class="container">
  <h2>Tabs</h2>
  <p>
    Tabs, per <a href="https://www.w3.org/TR/wai-aria-practices-1.1/#tabpanel" target="_blank">https://www.w3.org/TR/wai-aria-practices-1.1/#tabpanel</a>.
  </p>

  <h3>Demo</h3>
  <div class="block">
    <Tabs {multiple} bind:value>
      {#each $items as item}
        <TabItem id={item.id} header={item.name}>{item.text}</TabItem>
      {/each}
    </Tabs>
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
          <td>value</td>
          <td>0</td>
          <td>
            the index of the active item
          </td>
          <td>
            <input type="number" bind:value />
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3>Code</h3>
  <div class="block">
    <pre>
&lt;Tabs &lbrace;multiple&rbrace;&gt;
  &lbrace;#each items as item&rbrace;
    &lt;TabItem id=&lbrace;item.id&rbrace; header=&lbrace;item.name&rbrace;&gt;&lbrace;item.text&rbrace;&lt;/TabItem&gt;
  &lbrace;/each&rbrace;
&lt;/Tabs&gt;

~ OR ~

&lt;Tabs &lbrace;multiple&rbrace;&gt;
  &lbrace;#each items as item&rbrace;
    &lt;TabItem id=&lbrace;item.id&rbrace;&gt;
      &lt;div slot="header"&gt;&lbrace;item.name&rbrace;&lt;/div&gt;
      &lt;div&gt;&lbrace;item.text&rbrace;&lt;/div&gt;
    &lt;/TabItem&gt;
  &lbrace;/each&rbrace;
&lt;/Tabs&gt;
    </pre>
  </div>
</div>
