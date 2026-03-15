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
    foundingDate: "1999-11",
  }}
/>

<a href="#main-content" class="skip-link">Skip to main content</a>
<Navigation />
<main id="main-content">
  {@render children()}
</main>

<style>
  .skip-link {
    position: absolute;
    top: -100%;
    left: 0;
    z-index: 100;
    padding: 0.5rem 1rem;
    background: #fff;
    color: #9a1915;
    font-weight: bold;
    text-decoration: none;
  }

  .skip-link:focus {
    top: 0;
  }

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
