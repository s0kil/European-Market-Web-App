<script>
  import { onMount } from "svelte";

  import { imageCDN } from "../_utils/image.js";
  import { submitForm } from "../_utils/form.js";

  let formStatus = "";

  function handleSubmit(event) {
    let isContactFormValid = validateForm([
      "#person-name",
      "#person-email",
      "#person-message"
    ]);
    if (!isContactFormValid) {
      formStatus = "Please Fill In All Input Fields";
      return;
    }

    submitForm(event.target)
      .then(() => {
        formStatus = "Message Sent, We Will Contact You Soon.";
        event.target.reset();
      })
      .catch(error => {
        formStatus = `Message Failed To Send, Error Message: ${error}`;
        console.error(error);
      });
  }

  function validateForm(inputsArray) {
    if (typeof document === "object") {
      let inputs = document.querySelectorAll(inputsArray);
      return [...inputs].every(input => input.value.length > 0);
    }
    return false;
  }

  let backgroundImage = "";
  onMount(() => {
    backgroundImage = imageCDN(
      "/images/min/fresh-vegetables.jpeg",
      `&h=${screen.height}`
    );
  });
</script>

<style>
  section {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    background-position-x: 60%;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  form {
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
    margin-bottom: 0.5em;
    background: rgba(255, 255, 255, 0.8);
  }

  form input:focus,
  form textarea:focus {
    outline: 2px solid #517a3e;
    box-shadow: 0 0 8px #517a3e;
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

  form button:focus {
    outline: none !important;
    border: 1px #9a1915;
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

  p {
    padding: 0 1em;
    line-height: 2em;
    color: #fff;
    background: #517a3e;
  }
</style>

<svelte:head>
  <title>Contact | European Market</title>
</svelte:head>

<section style="background-image: url({backgroundImage});">

  <form
    name="contact"
    method="POST"
    action="/contact"
    data-netlify="true"
    netlify-honeypot="bot-field"
    on:submit|preventDefault="{handleSubmit}">

    <input type="hidden" name="bot-field" />

    <p>{formStatus}</p>

    <input
      required
      name="name"
      type="text"
      id="person-name"
      placeholder="Name" />

    <input
      required
      name="email"
      type="email"
      id="person-email"
      placeholder="Email" />

    <textarea
      required
      name="message"
      id="person-message"
      placeholder="Message"></textarea>

    <button type="submit">Send</button>

  </form>
</section>
