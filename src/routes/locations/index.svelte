<script context="module">
  export function preload({params, query}) {
    return this.fetch("locations.json")
        .then(r => r.json())
        .then(locations => {
          return {locations}
        });
  }
</script>

<script>
  export let locations;
</script>

<style>
  .location {
    font-size: 1.4em;
    display: flex;
  }

  .location p {
    flex: 1;
    color: #202020;
    border: 1px solid #9a1915;
    font-family: "Merriweather", serif;
  }

  .location p span {
    /*color: blue;*/
    font-weight: bolder;
    font-family: "Lato", sans-serif;
    text-decoration: underline;
  }

  .location a {
    color: #fff;
    text-decoration: none;
    background: #9a1915;
    transition: all 100ms ease;
    font-family: "Lato", sans-serif;
  }

  .location a:hover {
    outline: 2px solid #202020;
    box-shadow: 0 0 8px #202020;
  }

  .location a span {
    vertical-align: middle;
    font-size: 1em;
  }

  .location a,
  .location p {
    padding: 1rem 2rem;
    margin: 1.2rem 0;
  }

  @media (max-width: 580px) {
    .location {
      font-size: 1.2em;
    }
  }

  @media (max-width: 500px) {
    .location {
      font-size: 1em;
    }

    .location a,
    .location p {
      padding: 0.6rem 1.2rem;
      margin: 1rem 0;
    }
  }

  @media (max-width: 400px) {
    .location a,
    .location p {
      padding: 0.5rem 1rem;
      margin: 1rem 0;
    }
  }
</style>

<svelte:head>
  <title>Locations | European Market</title>
</svelte:head>

<section id="locations">
    {#each locations as location}
      <div class="location">
          {#if location.status === "Open"}
            <p>{location.location}</p>
          {:else}
            <p><span>Coming Soon</span> {location.location}</p>
          {/if}
        <a rel="prefetch" href="{'/locations/' + location.pageSlug}">
          More Info
          <span>></span>
        </a>
      </div>
    {/each}
</section>
