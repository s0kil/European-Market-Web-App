<script>
  import Loadable from "svelte-loadable";

  import isBrowser from "../_utils/isBrowser.js";
  import { imageCDN } from "../_utils/image.js";
  import { viewportHeight } from "../_utils/viewport.js";
  import { beforeMount } from "../_utils/beforeMount.js";

  $: headerImgSrc = beforeMount(() =>
    imageCDN("images/min/european-meats.jpg", `?tr=h-${viewportHeight(60)}`)
  );

  $: pageLoaded = false;
  $: {
    if (isBrowser) window.addEventListener("load", () => (pageLoaded = true));
  }
</script>

<style>
  header {
    height: calc(60vh);
    width: 100%;

    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom center;
  }

  section {
    padding-bottom: 4rem;
  }

  h1,
  h2 {
    font-family: "Merriweather", serif;
    color: #81b814;
  }

  p {
    font-family: "Lato", sans-serif;
    font-size: 1.2rem;
    line-height: 2rem;
  }

  #about {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 4rem;
  }

  #about img {
    max-width: 100%;
    height: auto;
    margin: 0 auto;
  }

  .countries {
    display: grid;
    grid-template-columns: repeat(4, minmax(100px, auto));
    margin-left: 1rem;
  }

  #our-story {
    display: flex;
    flex-wrap: wrap;
  }

  #our-story img {
    max-width: 100%;
  }

  @media (min-width: 50rem) {
    #our-story div {
      flex: 1;
    }

    #our-story h2 {
      margin-left: 1rem;
      margin-top: 0;
    }

    #our-story p {
      margin-left: 1rem;
    }
  }

  @media (max-width: 70rem) {
    #about {
      flex-direction: column;
    }
  }

  @media (max-width: 50rem) {
    .countries {
      grid-template-columns: repeat(3, minmax(100px, auto));
    }
  }

  @media (max-width: 30rem) {
    .countries {
      grid-template-columns: repeat(2, minmax(100px, auto));
    }
  }
</style>

<svelte:head>
  <title>Home | European Market</title>
</svelte:head>

<header
  id="intro-header"
  style="background-image: url({headerImgSrc || ''});" />

<section>
  <div id="about">
    <div>
      <h1>Delicious & Nutritious Products From 25+ Different Countries</h1>

      <div class="countries">
        {#if pageLoaded}
          <Loadable loader={() => import('../components/Countries.svelte')} />
        {/if}
      </div>
    </div>

    <img
      width="345"
      loading="lazy"
      alt="European Countries"
      src={imageCDN('images/min/european-countries.png', '?tr=w-345')} />
  </div>

  <div id="our-story">
    <div>
      <img
        width="765"
        loading="lazy"
        alt="Polish Meats"
        src={imageCDN('images/min/polish-meats.jpg', '?tr=w-765')} />
    </div>

    <div>
      <h2>How we started</h2>
      <p>
        We have started our company in Chattanooga, TN in November 1999. When we
        opened our store, we started to sell only Russian products. Then we had
        a lot of other customers from different countries requesting products
        from their countries.
      </p>
      <p>
        We also started to make homemade cabbage rolls, pierogies, bulochki,
        chebureki, blintzes and bake German bread daily.
      </p>
    </div>
  </div>
</section>
