<script>
  import {
    ValidationSummary,
    Field,
    TextBox,
    Button,
    Validator
  } from "svelte-toolkit";

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

<svelte:head>
  <title>Validation | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h1>Validation</h1>
  <p>Validation for form elements.</p>

  <h2>Demo</h2>
  <ValidationSummary {validator} />
  <div class="block">
    <h4>Required</h4>
    <Field
      label="Please enter something:"
      bind:value={requiredValue}
      name="field1"
      {validator}
      required
      minlength="2"
      maxlength="10"
      friendlyName="Required field">
      <TextBox />
    </Field>
  </div>
  <div class="block">
    <h4>Regex</h4>
    <Field
      name="field2"
      bind:value={regexValue}
      {validator}
      regex={/^\d{4}$/}
      friendlyName="Regex field">
      <label for="four-numbers-input" slot="label">Please enter four numbers:</label>
      <TextBox id="four-numbers-input" />
    </Field>
  </div>
  <div class="block">
    <h4>Compare</h4>
    <Field
      name="field3"
      bind:value={password1Value}
      {validator}
      friendlyName="Password">
      <label for="two-passwords-input" slot="label">Enter two fields that are the same:</label>
      <TextBox contentType="password" id="two-passwords-input" />
    </Field>
    <Field
      name="field4"
      bind:value={password2Value}
      {validator}
      compareTo="field3"
      friendlyName="Confirm password">
      <TextBox contentType="password" />
    </Field>
  </div>
  <div class="block">
    <Button on:click={handleClick}>Check it</Button>
  </div>

  <h2>Code</h2>
  <div class="block">
    <pre>{exampleCode} </pre>
  </div>
</div>
