<script context="module">
  export function preload({ params, query }) {
    return this.fetch("locations.json")
      .then(r => r.json())
      .then(locations => {
        return { locations };
      });
  }
</script>

<script>
  export let locations;
</script>

<svelte:head>
  <title>Locations | European Market</title>
</svelte:head>

{#each locations as location}
  <div class="location perf-box-shadow">
    <p>{location.location}</p>
    <a href={'/locations/' + location.pageURL}>More Info</a>
  </div>
{/each}
