<script>
  import {
    ValidationSummary,
    Field,
    TextBox,
    Button,
    Validator
  } from "../../../../svelte-toolkit/main.js";

  let requiredValue = "";
  let regexValue = "";
  let password1Value = "";
  let password2Value = "";

  let validator = new Validator(false);

  $: exampleCode = "";

  function handleClick() {
    validator.active = true;
    validator.validate();
  }
</script>

<div class="container">
  <h2>Validation</h2>
  <p>Validation for form elements.</p>

  <h3>Demo</h3>
  <ValidationSummary {validator} />
  <div class="block">
    <h4>Required</h4>
    <Field
      label="Please enter something:"
      bind:value={requiredValue}
      name="field"
      {validator}
      required={true}
      minlength="2"
      maxlength="10"
      friendlyName="Required field">
      <TextBox bind:value={requiredValue} />
    </Field>
  </div>
  <div class="block">
    <h4>Regex</h4>
    <Field
      name="field2"
      bind:value={regexValue}
      regex={/\d{4}/}
      {validator}
      friendlyName="Regex field">
      <label slot="label">Please enter four numbers:</label>
      <TextBox bind:value={regexValue}
 />
    </Field>
  </div>
  <div class="block">
    <h4>Compare</h4>
    <Field
      name="field3"
      bind:value={password1Value}
      {validator}
      friendlyName="Password">
      <label slot="label">Enter two fields that are the same:</label>
      <TextBox contentType="password" bind:value={password1Value} />
    </Field>
    <Field
      name="field4"
      bind:value={password2Value}
      compareTo="field3"
      {validator}
      friendlyName="Confirm password">
      <TextBox contentType="password" bind:value={password2Value} />
    </Field>
  </div>
  <div class="block">
    <Button on:click={handleClick}>Check it</Button>
  </div>

  <h3>Code</h3>
  <div class="block">
    <pre>{exampleCode} </pre>
  </div>
</div>
