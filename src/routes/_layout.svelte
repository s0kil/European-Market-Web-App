<script>
  import "modern-normalize/modern-normalize.css";
  import Navigation from "../components/Navigation.svelte";

  export let segment;
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
