<script>
  import { ValidationSummary, Input, Button, Validator } from "../../../../svelte-toolkit/main.js";

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
  <ValidationSummary {validator}/>
  <div class="block">
    <h4>Required and length</h4>
    <p>Please enter something:</p>
    <Input name="field" required={true} minlength="2" maxlength="10" {validator} friendlyName="Required field"/>
  </div>
  <div class="block">
    <h4>Regex</h4>
    <p>Please enter four numbers:</p>
    <Input name="field2" regex={/\d{4}/} {validator} friendlyName="Regex field"/>
  </div>
  <div class="block">
    <h4>Enter two fields that are the same:</h4>
    <Input name="field3" {validator} friendlyName="Password"/>
    <Input name="field4" compareTo="field3" {validator} friendlyName="Confirm password"/>
  </div>
  <div class="block">
    <Button on:click={handleClick}>Check it</Button>
  </div>

  <h3>Code</h3>
  <div class="block">
    <pre>{exampleCode} </pre>
  </div>
</div>
