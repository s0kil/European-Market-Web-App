<script>
  import { onMount, onDestroy } from "svelte";

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

  let readyState;
  const updateReadyState = () => (readyState = document.readyState);

  if (typeof document === "object") {
    onMount(() => {
      updateReadyState();
      document.addEventListener("readystatechange", updateReadyState);
    });

    onDestroy(() => {
      document.removeEventListener("readystatechange", updateReadyState);
    });
  }
</script>

<style>
  header {
    height: calc(62vh);
    width: 100%;

    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom center;
    background-image: url("/images/min/european-meats.jpeg");
  }

  h1,
  h2 {
    font-family: "Merriweather", serif;
    color: rgb(129, 184, 20);
  }

  p {
    font-family: "Lato", sans-serif;
    font-size: 1.2rem;
    line-height: 2rem;
  }

  section {
    margin: 1rem 1rem 4rem 1rem;
  }

  #about {
    display: flex;
    flex-wrap: wrap;
  }
  #about img {
    max-width: 100%;
    max-height: 100%;
  }

  #our-story {
    display: flex;
    flex-wrap: wrap;
  }
  #our-story img {
    max-width: 100%;
  }
  .countries {
    display: grid;
    grid-template-columns: repeat(4, auto);
    margin-left: 1rem;
  }

  @media (min-width: 50rem) {
    .countries {
      grid-template-columns: repeat(3, auto);
    }
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
  @media (max-width: 30rem) {
    .countries {
      grid-template-columns: repeat(2, auto);
    }
  }
</style>

<svelte:head>
  <title>Home | European Market</title>
</svelte:head>

<header />

<section id="about">
  <div style="flex: 2">
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

  <img src="images/european-countries.png" alt="European Countries" />
</section>

<section id="our-story">
  <div>
    <img src="images/min/polish-meats.jpeg" alt=" Meats" />
  </div>

  <div>
    <h2>How we started</h2>
    <p>
      We have started our company in Chattanooga, TN in November 1999. When we
      opened our store, we started to sell only Russian products. Then we had a
      lot of other customers from different countries requesting products from
      their countries.
    </p>
    <p>
      We also started to make homemade cabbage rolls, pierogies, bulochki,
      chebureki, blintzes and bake German bread daily.
    </p>
  </div>
</section>
