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

<style>
  section {
    margin: 1rem 1rem 4rem 1rem;
  }
  .location {
    display: flex;
    font-size: 1.4em;
  }
  .location p {
    flex: 1;
    color: #202020;
    background: #f59c00;
    font-family: "Merriweather", serif;
  }
  .location a {
    color: #fff;
    margin: auto 0;
    text-decoration: none;
    background: #9a1915;
    transition: all 100ms ease;
    font-family: "Lato", sans-serif;
  }
  .location a:hover {
    outline: 2px solid #202020;
    box-shadow: 0 0 8px #202020;
  }
  .location span {
    vertical-align: middle;
    font-size: 1em;
  }
  .location a,
  .location p {
    padding: 1em 2em;
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
  }
  @media (max-width: 500px) {
    .location {
      margin-bottom: 2em;
      flex-direction: column;
    }
    .location p {
      margin-bottom: 0;
      border: 2px solid #9a1915;

      /* box-shadow: 0 0 2px 0 #f59c00; */
      /* background: linear-gradient(to right, #f59c00 40%, #9a1915); */
    }
    .location a {
      width: 50%;
      margin-left: auto;
      padding: 0.6em 1.6em;
      text-align: left;
    }
  }
</style>

<svelte:head>
  <title>Locations | European Market</title>
</svelte:head>

<section id="locations">
  {#each locations as location}
    <div class="location">
      <p>{location.location}</p>
      <a href={'/locations/' + location.pageURL}>
        More Info
        <span>></span>
      </a>
    </div>
  {/each}
</section>
