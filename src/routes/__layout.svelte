<script>
  import "modern-normalize/modern-normalize.css"

  import Navigation from "../components/Navigation.svelte"
</script>

<main>
  <Navigation />
  <slot />
</main>

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

  /* ScrollBar */
  :global(body)::-webkit-scrollbar {
    width: 10px;
  }

  :global(body)::-webkit-scrollbar-track {
    background: #c40009;
    background: linear-gradient(#c40009, #9a1915);
    /* box-shadow: inset 0 0 2px rgba(0, 0, 0, 1); */
  }

  :global(body)::-webkit-scrollbar-thumb {
    background: rgb(255, 255, 255);
  }
</style>
