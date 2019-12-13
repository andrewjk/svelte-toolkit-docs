<script>
  import { Button, DialogButton, Modal, TextBox } from "svelte-toolkit";

  let email = "";
  let confirmEmail = "";
  let message = "";

  let visible = false;

  function toggleModal() {
    visible = !visible;
  }

  function handleOk() {
    if (email === confirmEmail) {
      message = "Thank you for confirming your email!";
      visible = false;
    } else {
      alert("The email addresses don't match, please try again.");
    }
  }

  function handleCancel() {
    visible = false;
  }

  $: exampleCode = `
{#if visible}
  <Modal>
    <div slot="header">Enter your email:</div>
    <div slot="body">
      <div class="block">
        <TextBox contentType="email" bind:value={email} placeholder="Email" autofocus />
      </div>
      <div class="block">
        <TextBox contentType="email" bind:value={confirmEmail} placeholder="Confirm email" />
      </div>
    </div>
    <div slot="footer">
      <DialogButton confirm on:click={handleOk}>OK</DialogButton>
      <DialogButton cancel on:click={handleCancel}>Cancel</DialogButton>
    </div>
  </Modal>
{/if}`.trim();
</script>

<svelte:head>
  <title>Modal Dialog | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h1>Modal</h1>
  <p>
    A modal dialog that can contain any content, per
    <a
      href="https://www.w3.org/TR/wai-aria-practices-1.1/#dialog_modal"
      target="_blank">
      https://www.w3.org/TR/wai-aria-practices-1.1/#dialog_modal
    </a>
    .
  </p>

  <h2>Demo</h2>
  <div class="block">
    <Button on:click={toggleModal}>Open the modal dialog</Button>
    {#if visible}
      <Modal>
        <div slot="header">Enter your email:</div>
        <div slot="body">
          <div class="block">
            <TextBox contentType="email" bind:value={email} placeholder="Email" autofocus />
          </div>
          <div class="block">
            <TextBox contentType="email" bind:value={confirmEmail} placeholder="Confirm email" />
          </div>
        </div>
        <div slot="footer">
          <DialogButton confirm on:click={handleOk}>OK</DialogButton>
          <DialogButton cancel on:click={handleCancel}>Cancel</DialogButton>
        </div>
      </Modal>
    {/if}
  </div>
  {#if message}
    <div class="block">{message}</div>
  {/if}

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
      <tbody />
    </table>
  </div>

  <h2>Code</h2>
  <div class="block">
    <pre>{exampleCode}</pre>
  </div>
</div>
