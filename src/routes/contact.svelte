<script>
  import { submitForm } from "./_form.js";

  function handleSubmit(event) {
    submitForm(event.target)
      .then(() => console.log("Ok"))
      .catch(error => console.error(error));
  }
</script>

<style>
  form {
    margin: 2rem;
  }

  form input,
  form textarea {
    display: block;
  }
</style>

<svelte:head>
  <title>Contact | European Market</title>
</svelte:head>

<h1>Contact</h1>

<form
  name="contact"
  method="POST"
  action="/contact"
  data-netlify="true"
  netlify-honeypot="bot-field"
  on:submit|preventDefault={handleSubmit}>

  <input type="hidden" name="bot-field" />

  <p>
    <label>
      Your Name:
      <input type="text" name="name" />
    </label>
  </p>

  <p>
    <label>
      Your Email:
      <input type="email" name="email" />
    </label>
  </p>

  <p>
    <label>
      Message:
      <textarea name="message" />
    </label>
  </p>

  <p>
    <button type="submit">Send</button>
  </p>
</form>
