<script lang="ts">
  import "@fontsource/lato/400.css"
  import "@fontsource/merriweather/400.css"
  import "@fontsource-variable/plus-jakarta-sans"

  import { MetaTags, JsonLd } from "svelte-meta-tags"
  import Navigation from "$lib/components/Navigation.svelte"

  let { data, children } = $props()
</script>

<MetaTags {...data.baseMetaTags} />
<JsonLd
  schema={{
    "@type": "Organization",
    name: "European Market",
    url: "https://europeanmarketus.com",
    logo: "https://europeanmarketus.com/images/logo/logo-sign.png",
    description:
      "European grocery store offering products from 25+ countries since 1999.",
    location: [
      {
        "@type": "GroceryStore",
        name: "European Market - Chattanooga",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Chattanooga",
          addressRegion: "TN",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 35.0586237,
          longitude: -85.0677065,
        },
        hasMap:
          "https://www.google.com/maps/place/European+Market/@35.0586281,-85.0702814,17z",
      },
      {
        "@type": "GroceryStore",
        name: "European Market - Columbus",
        address: {
          "@type": "PostalAddress",
          streetAddress: "155 W Mills St",
          addressLocality: "Columbus",
          addressRegion: "NC",
          postalCode: "28722",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 35.249447,
          longitude: -82.2012913,
        },
        hasMap:
          "https://www.google.com/maps/place/European+Market/@35.2494514,-82.2038662,17z",
      },
    ],
  }}
/>

<main>
  <Navigation />
  {@render children()}
</main>

<style>
  :global(*),
  :global(*::before),
  :global(*::after) {
    box-sizing: border-box;
  }

  :global(body) {
    margin: 0;
    background: #c40009;
    background: linear-gradient(#9a1915, #c40009);
  }

  :global(input),
  :global(button),
  :global(textarea),
  :global(select) {
    font: inherit;
  }

  main {
    margin: 60px auto 50px auto;

    max-width: 80rem;
    min-height: calc(100vh - 110px);
  }

  :global(section) {
    min-height: calc(100vh - 110px);
    padding: 1rem;
    background: #fff;
  }

  :global(body)::-webkit-scrollbar {
    width: 10px;
  }

  :global(body)::-webkit-scrollbar-track {
    background: #c40009;
    background: linear-gradient(#c40009, #9a1915);
  }

  :global(body)::-webkit-scrollbar-thumb {
    background: rgb(255, 255, 255);
  }
</style>
