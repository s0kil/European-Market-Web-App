<script>
  import "modern-normalize/modern-normalize.css";
  import Navigation from "../components/Navigation.svelte";

  export let segment;
</script>

<style>
  :global(body) {
    background: rgb(196, 0, 9);

    background: linear-gradient(#9a1915, #e30613);
    /* background: linear-gradient(#e74011, #e30613, #9a1915); */
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
