<script>
  export let segment;

  import { imageCDN } from "../_utils/image.js";
</script>

<style>
  #header,
  #footer {
    z-index: 1;
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
    display: flex;
  }

  #header a {
    text-decoration: none;
    height: inherit;
    display: flex;
    align-items: center;
    padding: 0.4rem 0 0.4rem 16px;
  }

  #header img {
    max-height: 100%;
  }

  .page-name {
    text-transform: capitalize;
    margin-left: 0.6rem;
    font-family: "cera_pro_black", sans-serif;
    font-weight: bold;
    font-size: 1.6rem;
    color: rgb(196, 0, 9);
  }

  /*
  #header #store-link {
    height: 40px;
    padding: 0 20px;
    font-size: 1.2em;
    background: #9a1915;
    color: rgb(255, 255, 255);
    margin: auto 16px auto auto;
    font-family: "cera_pro_black", sans-serif;
  }
  */

  #footer {
    height: 50px;
    bottom: 0;

    background: rgb(196, 0, 9);
    /* background: #e30613; */
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
    font-family: "cera_pro_black", sans-serif;

    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #footer a:hover {
    background: #9a1915;
  }
</style>

<nav>
  <div id="header">
    <a class="prerender-intention" href=".">
      {#if !segment}
        <img
          width="176"
          height="48"
          alt="European Market Logo"
          src={imageCDN('images/min/logo.png', '?tr=h-60')} />
      {:else}
        <img
          width="48"
          height="48"
          alt="European Market Logo"
          src={imageCDN('images/min/logo-sign.png', '?tr=h-60')} />
        <div class="page-name">{segment}</div>
      {/if}
    </a>

    <!--
    {#if segment !== 'store'}
      <a id="store-link" class="page-name" href="store">Store</a>
    {/if}
    -->
  </div>

  <div id="footer">
    <ul>
      <li>
        <a class="prerender-intention" rel="prefetch" href="locations">
          Our Locations
        </a>
      </li>
      <li>
        <a class="prerender-intention" href="contact">Contact Us</a>
      </li>
    </ul>
  </div>
</nav>
