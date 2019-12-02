<script>
  export let segment;
</script>

<style>
  @font-face {
    font-family: "cera_pro_black";
    src: url("/fonts/cerapro-black-webfont.woff2") format("woff2"),
      url("/fonts/cerapro-black-webfont.woff") format("woff");
    font-weight: normal;
    font-style: normal;
  }

  #header,
  #footer {
    position: fixed;
    left: 0;
    right: 0;

    margin: auto;
    max-width: 80rem;

    background: rgb(255, 255, 255);
  }
  #header {
    height: 60px;
    top: 0;
  }
  #header a {
    text-decoration: none;
    height: inherit;
    display: flex;
    align-items: center;
    padding: 0.4rem;
  }
  .page-name {
    text-transform: capitalize;
    margin-left: 0.6rem;
    font-family: "cera_pro_black";
    font-weight: bold;
    font-size: 1.6rem;
    color: rgb(196, 0, 9);
  }
  img {
    max-height: 100%;
  }
  #footer {
    height: 50px;
    bottom: 0;

    background: rgb(196, 0, 9);
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.15);
  }
  #footer ul {
    display: flex;
    list-style-type: none;
    padding: 0;
    margin: 0;
    height: 100%;
  }
  #footer li {
    flex: 1;
    text-align: center;
  }
  #footer a {
    color: #ffffff;
    text-decoration: none;

    font-weight: bold;
    font-size: 1.2rem;
    font-family: "cera_pro_black";

    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #footer a:hover {
    opacity: 0.8;
    font-weight: bold;
  }
</style>

<nav>
  <div id="header">
    <a href=".">
      {#if !segment}
        <img src="images/logo/logo.png" alt="European Market Logo" />
      {:else}
        <img src="images/logo/logo-sign.png" alt="European Market Logo" />
        <div class="page-name">{segment}</div>
      {/if}
    </a>
  </div>

  <div id="footer">
    <ul>
      <li>
        <a href="locations">Our Locations</a>
      </li>
      <li>
        <a href="contact">Contact Us</a>
      </li>
    </ul>
  </div>
</nav>
