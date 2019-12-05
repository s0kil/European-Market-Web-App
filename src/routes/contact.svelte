<script>
  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  function submitForm(event) {
    console.log(event);
    let form = event.target;
    let formData = Object.values(form).reduce((obj, field) => {
      obj[field.name] = field.value;
      return obj;
    }, {});

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formData })
    })
      .then(() => console.log("Success!"))
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
  on:submit|preventDefault={submitForm}>
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
