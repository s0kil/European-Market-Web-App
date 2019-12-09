<script>
  import { onMount, onDestroy } from "svelte";
  import { imageCDN } from "../_utils/image.js";
  import CountryFlag from "../components/CountryFlag.svelte";

  const countries = [
    "Armenia",
    "Austria",
    "Belarus",
    "Bulgaria",
    "England",
    "France",
    "Germany",
    "Greece",
    "Israel",
    "Italy",
    "Latvia",
    "Moldova",
    "Poland",
    "Russia",
    "Sweden",
    "Switzerland",
    "Turkey",
    "Ukraine"
  ];

  let headerImgSrc = "";

  let readyState;
  const isBrowser = typeof document === "object";
  const updateReadyState = () => (readyState = document.readyState);

  onMount(() => {
    if (isBrowser) {
      let headerHeight = document.getElementById("intro-header").offsetHeight;

      headerImgSrc = imageCDN(
        "/images/min/european-meats.jpeg",
        `&h=${headerHeight}`
      );

      updateReadyState();
      document.addEventListener("readystatechange", updateReadyState);
    }
  });

  onDestroy(() => {
    if (isBrowser) {
      document.removeEventListener("readystatechange", updateReadyState);
    }
  });
</script>

<style>
  header {
    height: calc(62vh);
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
    /* color: rgb(129, 184, 20); */
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

  @media (min-width: 50rem) {
    .countries {
      grid-template-columns: repeat(3, auto);
    }
  }
  @media (max-width: 36rem) {
    .countries {
      grid-template-columns: repeat(2, minmax(100px, auto));
      justify-content: space-between;
    }
    .countries p {
      font-size: 1em;
    }
  }
</style>

<svelte:head>
  <title>Home | European Market</title>
</svelte:head>

<header id="intro-header" style="background-image: url({headerImgSrc});" />

<section>
  <div id="about">
    <div>
      <h1>Delicious & Nutritious Products From 25+ Different Countries</h1>

      <div class="countries">
        {#if readyState === 'complete'}
          {#each countries as country}
            <p>
              <svelte:component this={CountryFlag} {country} />
            </p>
          {/each}
        {/if}
      </div>

    </div>

    {#if readyState === 'complete'}
      <img
        loading="lazy"
        alt="European Countries"
        src={imageCDN('/images/min/european-countries.png')} />
    {/if}
  </div>

  <div id="our-story">
    <div>
      {#if readyState === 'complete'}
        <img
          loading="lazy"
          alt="Polish Meats"
          src={imageCDN('/images/min/polish-meats.jpeg', '&w=765')} />
      {/if}
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
