<script>
  import { onMount } from "svelte";
  // import loadAsset from "loadjs";

  import Navigation from "../components/Navigation.svelte";

  export let segment;

  /*
  onMount(() => {
    // Load Tawk.to Script
    (window.Tawk_API = window.Tawk_API || {}),
      (window.Tawk_LoadStart = new Date());
    loadAsset(["https://embed.tawk.to/5d219a367a48df6da243565f/default"]);
  });
  */
</script>

<style>
  :global(body) {
    background: rgb(196, 0, 9);
  }

  main {
    margin: 60px auto 50px auto;
    padding: 0 0 0.4rem 0;
    max-width: 80rem;

    /* Subtract From Top & Bottom Nav Bar */
    min-height: calc(100vh - 110px);

    background: white;
  }
</style>

<main>
  <Navigation {segment} />
  <slot />
</main>
