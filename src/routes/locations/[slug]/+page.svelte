<script lang="ts">
    import { onMount } from "svelte";
    import { MetaTags, JsonLd } from "svelte-meta-tags";
    import { PUBLIC_MAPBOX_TOKEN } from "$env/static/public";
    import { tinyMap } from "$lib/tiny-map";
    import { saveData } from "$lib/utils/save-data";

    let { data } = $props();

    const location = $derived(data.location);

    const weekday = (() => {
        const days = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ] as const;
        return days[new Date().getDay()];
    })();

    onMount(() => {
        if (!saveData()) {
            const { latitude, longitude } = location.coordinates;

            if (latitude && longitude) {
                const mapEl = document.getElementById("map");
                if (mapEl) {
                    tinyMap(mapEl, {
                        zoom: 16,
                        center: [longitude, latitude],
                        tileUrl: `https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=${PUBLIC_MAPBOX_TOKEN}`,
                    });
                }
            }
        }
    });
</script>

<MetaTags
    {...data.baseMetaTags}
    title={location.location}
    description="European Market {location.location} — Hours, address, phone, and directions. European grocery products from 25+ countries."
    openGraph={{
        ...data.baseMetaTags.openGraph,
        title: `European Market ${location.location}`,
        description: `Visit European Market at ${location.address}. European grocery store with products from 25+ countries.`,
    }}
/>
<JsonLd
    schema={{
        "@type": "GroceryStore",
        name: `European Market ${location.location}`,
        address: {
            "@type": "PostalAddress",
            streetAddress: location.address,
        },
        telephone: location.phoneNumber,
        email: location.emailAddress,
        openingHours: location.hoursOfOperation,
        geo: location.coordinates?.latitude
            ? {
                  "@type": "GeoCoordinates",
                  latitude: location.coordinates.latitude,
                  longitude: location.coordinates.longitude,
              }
            : undefined,
        url: `https://europeanmarketus.com/locations/${data.location ? "" : ""}`,
    }}
/>

<section class="location">
    {#if location.status === "Coming Soon"}
        <p class="coming-soon">Coming Soon</p>
    {/if}

    <h1>European Market {location.location}</h1>

    <ul class="hours">
        {#each location.hoursOfOperation as hours}
            {#if String(hours).startsWith(weekday ?? "")}
                <li class="hours-today">{hours}</li>
            {:else}
                <li>{hours}</li>
            {/if}
        {/each}
    </ul>

    <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.google.com/maps/place/{location.address}"
    >
        <p>{location.address}</p>
    </a>

    <a href="mailto:{location.emailAddress}">
        <p>{location.emailAddress}</p>
    </a>

    <a href="tel:{location.phoneNumber}">
        <p>{location.phoneNumber}</p>
    </a>

    <div id="map"></div>
</section>

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
