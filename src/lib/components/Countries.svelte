<script lang="ts">
    import Armenia from "./CountryFlags/Armenia.svelte";
    import Austria from "./CountryFlags/Austria.svelte";
    import Belarus from "./CountryFlags/Belarus.svelte";
    import Bulgaria from "./CountryFlags/Bulgaria.svelte";
    import England from "./CountryFlags/England.svelte";
    import France from "./CountryFlags/France.svelte";
    import Germany from "./CountryFlags/Germany.svelte";
    import Greece from "./CountryFlags/Greece.svelte";
    import Israel from "./CountryFlags/Israel.svelte";
    import Italy from "./CountryFlags/Italy.svelte";
    import Latvia from "./CountryFlags/Latvia.svelte";
    import Moldova from "./CountryFlags/Moldova.svelte";
    import Poland from "./CountryFlags/Poland.svelte";
    import Russia from "./CountryFlags/Russia.svelte";
    import Sweden from "./CountryFlags/Sweden.svelte";
    import Switzerland from "./CountryFlags/Switzerland.svelte";
    import Turkey from "./CountryFlags/Turkey.svelte";
    import Ukraine from "./CountryFlags/Ukraine.svelte";

    const countries = [
        { name: "Armenia", flag: Armenia },
        { name: "Austria", flag: Austria },
        { name: "Belarus", flag: Belarus },
        { name: "Bulgaria", flag: Bulgaria },
        { name: "England", flag: England },
        { name: "France", flag: France },
        { name: "Germany", flag: Germany },
        { name: "Greece", flag: Greece },
        { name: "Israel", flag: Israel },
        { name: "Italy", flag: Italy },
        { name: "Latvia", flag: Latvia },
        { name: "Moldova", flag: Moldova },
        { name: "Poland", flag: Poland },
        { name: "Russia", flag: Russia },
        { name: "Sweden", flag: Sweden },
        { name: "Switzerland", flag: Switzerland },
        { name: "Turkey", flag: Turkey },
        { name: "Ukraine", flag: Ukraine },
    ] as const;
</script>

{#each countries as country}
    <div>
        <span class="country-icon">
            <country.flag />
        </span>
        <p>{country.name}</p>
    </div>
{/each}

<style>
    div {
        display: flex;
        align-items: center;
    }

    p {
        font-size: 1.2rem;
        line-height: 2rem;
        font-family: "Lato", sans-serif;
    }

    .country-icon {
        margin-right: 0.4rem;
    }

    :global(.country-icon svg) {
        height: 40px;
        border: 1px solid rgb(200, 200, 200);
    }

    @media (max-width: 22rem) {
        p {
            font-size: 1rem;
        }

        :global(.country-icon svg) {
            width: 40px;
            height: auto;
        }
    }
</style>
