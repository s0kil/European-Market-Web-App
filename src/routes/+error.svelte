<script lang="ts">
  import { page } from "$app/state"
  import { dev } from "$app/environment"
</script>

<svelte:head>
  <title>{page.status} | European Market</title>
</svelte:head>

<section>
  <h1>{page.status}</h1>

  <p>{page.error?.message}</p>

  {#if dev && page.error}
    <pre>{JSON.stringify(page.error, null, 2)}</pre>
  {/if}
</section>

<style>
  h1,
  p {
    margin: 0 auto;
  }

  h1 {
    font-size: 2.8em;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  p {
    margin: 1em auto;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>
