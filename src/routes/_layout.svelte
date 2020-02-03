<script>
  import * as ackeeTracker from "ackee-tracker";
  import "modern-normalize/modern-normalize.css";
  import Navigation from "../components/Navigation.svelte";

  export let segment;

  // Ackee Analytics
  const instance = ackeeTracker.create(
    {
      server: "https://esf-analytics.herokuapp.com",
      domainId: "73a72786-e6ee-4d4c-b5b1-03fa7637c69e"
    },
    {
      ignoreLocalhost: true,
      detailed: true
    }
  );

  // Listen For `segment` Changes
  $: if ($$props && typeof window !== "undefined") {
    instance.record();
  }
</script>

<style>
  :global(body) {
    background: #c40009;
    background: linear-gradient(#9a1915, #c40009);
  }

  main {
    margin: 60px auto 50px auto;

    max-width: 80rem;
    /* Subtract Viewport Height From (Top & Bottom Nav Bar) */
    min-height: calc(100vh - 110px);
  }

  :global(section) {
    min-height: calc(100vh - 110px);
    padding: 1rem;
    background: #fff;
  }
</style>

<main>
  <Navigation {segment} />
  <slot />
</main>
