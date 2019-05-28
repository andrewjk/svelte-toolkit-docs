<script>
  import { TabGroup, TabItem } from "../../../../svelte-toolkit/main.js";
  import { items } from '../../stores/items'

  let value = 0;
  let boxed = false;
</script>

<div class="container">
  <h2>TabGroup</h2>
  <p>
    TabGroup, per <a href="https://www.w3.org/TR/wai-aria-practices-1.1/#tabpanel" target="_blank">https://www.w3.org/TR/wai-aria-practices-1.1/#tabpanel</a>.
  </p>

  <h3>Demo</h3>
  <div class="block">
    <TabGroup {boxed} bind:value>
      {#each $items as item}
        <TabItem id={item.id} header={item.name}>{item.text}</TabItem>
      {/each}
    </TabGroup>
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
        <tr>
          <td>boxed</td>
          <td>false</td>
          <td>
            true to draw the tabs with a squarish border around them
          </td>
          <td>
            <label>
              <input type="checkbox" bind:checked={boxed} />
              Make the tabs boxed
            </label>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3>Events</h3>
  <div class="block">
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Args</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>hanged</td>
          <td>index: the index of the active item</td>
        </tr>
        <tr>
          <td>activeChange (TabItem)</td>
          <td>active: whether the changed item is active</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3>Code</h3>
  <div class="block">
    <pre>
&lt;TabGroup &lbrace;multiple&rbrace;&gt;
  &lbrace;#each items as item&rbrace;
    &lt;TabItem id=&lbrace;item.id&rbrace; header=&lbrace;item.name&rbrace;&gt;&lbrace;item.text&rbrace;&lt;/TabItem&gt;
  &lbrace;/each&rbrace;
&lt;/TabGroup&gt;

~ OR ~

&lt;TabGroup &lbrace;multiple&rbrace;&gt;
  &lbrace;#each items as item&rbrace;
    &lt;TabItem id=&lbrace;item.id&rbrace;&gt;
      &lt;div slot="header"&gt;&lbrace;item.name&rbrace;&lt;/div&gt;
      &lt;div&gt;&lbrace;item.text&rbrace;&lt;/div&gt;
    &lt;/TabItem&gt;
  &lbrace;/each&rbrace;
&lt;/TabGroup&gt;
    </pre>
  </div>
</div>
