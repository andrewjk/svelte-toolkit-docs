<script>
  import { Field, TextBox } from "svelte-toolkit";

  let label = "Your location:";
  let name = "location";
  let value = "";

  $: exampleCode = `
import { Field, TextBox } from "svelte-toolkit";

<Field label="${label}" name="${name}" bind:value>
  <TextBox bind:value />
</Field>`.trim();
</script>

<svelte:head>
  <title>Field | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h1>Field</h1>
  <p>
    A field wraps a form control, providing it with a label, validation etc.
  </p>

  <h2>Demo</h2>
  <div class="block">
    <Field {label} name="field" bind:value>
      <TextBox />
    </Field>
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
          <td>label</td>
          <td />
          <td>
            The label to display for the field. A label can also be placed into
            the named "label" slot
          </td>
          <td>
            <input type="text" bind:value={label} />
          </td>
        </tr>
        <tr>
          <td>name</td>
          <td />
          <td>The name of the data held in this field</td>
          <td>
            <input type="text" bind:value={name} />
          </td>
        </tr>
        <tr>
          <td>value</td>
          <td />
          <td>The value held in this field's control</td>
          <td>
            <input type="text" bind:value />
          </td>
        </tr>
        <tr>
          <td>Validation</td>
          <td />
          <td>
            Various validation fields. See
            <a href="/forms/validation">validation</a>
            for info.
          </td>
          <td />
        </tr>
      </tbody>
    </table>
  </div>

  <h2>Code</h2>
  <div class="block">
    <pre>{exampleCode}</pre>
  </div>
</div>
