<script>
  import { submitForm } from "./_utils/form.js";

  let formSubmitted = false;
  let formErrors = false;

  function handleSubmit(event) {
    submitForm(event.target)
      .then(() => console.log("Ok"))
      .catch(error => console.error(error));
  }
</script>

<style>
  section {
    width: 100%;
    height: calc(100vh - 120px);

    background-size: 100% auto;
    background-image: url("/images/min/fresh-vegetables.jpeg");
    background-repeat: no-repeat;
    background-position: top;

    display: flex;
    justify-content: center;
  }

  form {
    margin: 18% 0;
    display: flex;
    flex-direction: column;
  }

  form input,
  form textarea {
    color: #202020;
    width: 100%;
    border: 1px solid #517a3e;
    display: block;
    padding: 0.4em;
    max-width: 500px;
    font-size: 1.2em;
    background: transparent;
    margin-bottom: 0.5em;
  }

  form textarea {
    min-height: 150px;
  }

  form button {
    color: #fff;
    cursor: pointer;
    border: none;
    padding: 0.4em;
    font-size: 1.2em;
    background: #e30613;
  }

  form button:hover {
    background: #9a1915;
  }

  ::placeholder {
    color: #202020;
    opacity: 1;
  }

  :-ms-input-placeholder {
    color: #202020;
  }

  ::-ms-input-placeholder {
    color: #202020;
  }
</style>

<svelte:head>
  <title>Contact | European Market</title>
</svelte:head>

<section>
  <form
    name="contact"
    method="POST"
    action="/contact"
    data-netlify="true"
    netlify-honeypot="bot-field"
    on:submit|preventDefault={handleSubmit}>

    <input type="hidden" name="bot-field" />

    <input type="text" name="name" placeholder="Name" />

    <input type="email" name="email" placeholder="Email" />

    <textarea name="message" placeholder="Message" />

    <button type="submit">Send</button>
  </form>
</section>
