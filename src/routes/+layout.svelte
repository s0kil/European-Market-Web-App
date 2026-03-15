<script lang="ts">
  import "@fontsource/lato/400.css"
  import "@fontsource/merriweather/400.css"
  import "@fontsource-variable/plus-jakarta-sans"

  import Navigation from "$lib/components/Navigation.svelte"

  let { children } = $props()
</script>

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
