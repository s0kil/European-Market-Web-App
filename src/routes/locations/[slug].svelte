<script context="module">
  import { locationsEndpoint } from "./_endpoint";

  export async function preload({ params }) {
    const res = await this.fetch(locationsEndpoint(params.slug));
    const data = await res.json();

    if (res.status === 200) {
      return {
        location: data
      };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import { onMount } from "svelte";
  import { tinyMap } from "@s0kil/tiny-map";

  import saveData from "../../_utils/saveData";

  export let location;

  const weekday = (() => {
    const day = new Date().getDay();
    switch (day) {
      case 0:
        return "Sunday";
      case 1:
        return "Monday";
      case 2:
        return "Tuesday";
      case 3:
        return "Wednesday";
      case 4:
        return "Thursday";
      case 5:
        return "Friday";
      case 6:
        return "Saturday";
    }
  })();

  const mapBoxAccessToken =
    "pk.eyJ1IjoiZGFuaWVsc29raWwiLCJhIjoiY2s0NDZjaTFmMDh6ajNrbW1mb3h4cjJobiJ9.AcOfKPFXipCVNgaxZ66WTg";

  onMount(() => {
    // Check Is User Has Save-Data Enabled.
    if (!saveData()) {
      const { latitude, longitude } = location.coordinates;

      if (latitude && longitude) {
        tinyMap(document.getElementById("map"), {
          zoom: 16,
          center: [longitude, latitude],
          tileUrl: `https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=${mapBoxAccessToken}`
        });
      }
    }
  });
</script>

<style>
  #map {
    width: 100%;
    height: calc(100vh - 110px);
    overflow: hidden;

    position: absolute;
    top: 0;
    left: 0;

    z-index: -1;
    background: rgb(255, 255, 255);
  }

  .location {
    --red: #9a1915;
    padding: 1rem;
    position: relative;
    background: rgba(255, 255, 255, 0.8);
  }

  .location h1 {
    color: var(--red);
    font-family: "Merriweather", serif;
  }

  .location p {
    color: #202020;
    font-size: 1.2rem;
    font-family: "Lato", sans-serif;
  }

  .location a {
    color: #202020;
    text-decoration: var(--red) underline;
  }

  .location .coming-soon {
    font-weight: bolder;
    text-decoration: underline;
  }

  .hours {
    padding: 0;
    margin: 1rem 0;
  }

  .hours li {
    margin: 1rem 0;
    list-style-type: none;
    font-size: 1.2rem;
    font-family: "Lato", sans-serif;
  }
  .hours li::before {
    content: ">";
    padding-right: 1rem;
  }
  .hours li.hours-today {
    font-weight: bold;
  }
  .hours li.hours-today::before {
    color: var(--red);
  }

  @media (max-width: 400px) {
    .location h1 {
      font-size: 1.2rem;
    }

    .location p,
    .hours li {
      font-size: 1rem;
    }
  }
</style>

<svelte:head>
  <title>{location.location} | European Market</title>
</svelte:head>

<section class="location">
  {#if location.status != 'Open'}
    <p class="coming-soon">Coming Soon</p>
  {/if}

  <h1>European Market {location.location}</h1>

  <ul class="hours">
    {#each location.hoursOfOperation as hours}
      {#if String(hours).startsWith(weekday)}
        <li class="hours-today">{hours}</li>
      {:else}
        <li>{hours}</li>
      {/if}
    {/each}
  </ul>

  <a
    rel="noopener noreferrer"
    target="_blank"
    href="https://www.google.com/maps/place/{location.address}">
    <p>{location.address}</p>
  </a>

  <a href="mailto:{location.emailAddress}">
    <p>{location.emailAddress}</p>
  </a>

  <a href="tel:{location.phoneNumber}">
    <p>{location.phoneNumber}</p>
  </a>

  <div id="map" />
</section>
