<script>
  function submitForm(event) {
    event.preventDefault();

    let form = event.target;
    let formData = Object.values(form).reduce((obj, field) => {
      obj[field.name] = field.value;
      return obj;
    }, {});
  }
  /*
  $("#my-form").submit(function(e) {
    e.preventDefault();

    var $form = $(this);
    $.post($form.attr("action"), $form.serialize()).then(function() {
      alert("Thank you!");
    });
  });
  */
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

<form name="contact" method="POST" data-netlify="true">
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
