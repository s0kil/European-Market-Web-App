<script>
  /*
    Country Flag SVG's Are From
    https://github.com/lipis/flag-icon-css
  */
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
</script>

<style>
  p {
    font-family: "Lato", sans-serif;
  }

  .country-icon {
    margin-right: 0.4rem;
    vertical-align: middle;
  }

  :global(.country-icon svg) {
    height: 40px;
    border: 1px solid rgb(200, 200, 200);
  }

  @media (max-width: 22rem) {
    :global(.country-icon svg) {
      width: 40px;
      height: auto;
    }
  }
</style>

<p>
  <span class="country-icon">
    <Armenia />
  </span>
  Armenia
</p>

<p>
  <span class="country-icon">
    <Austria />
  </span>
  Austria
</p>

<p>
  <span class="country-icon">
    <Belarus />
  </span>
  Belarus
</p>

<p>
  <span class="country-icon">
    <Bulgaria />
  </span>
  Bulgaria
</p>

<p>
  <span class="country-icon">
    <England />
  </span>
  England
</p>

<p>
  <span class="country-icon">
    <France />
  </span>
  France
</p>

<p>
  <span class="country-icon">
    <Germany />
  </span>
  Germany
</p>

<p>
  <span class="country-icon">
    <Greece />
  </span>
  Greece
</p>

<p>
  <span class="country-icon">
    <Israel />
  </span>
  Israel
</p>

<p>
  <span class="country-icon">
    <Italy />
  </span>
  Italy
</p>

<p>
  <span class="country-icon">
    <Latvia />
  </span>
  Latvia
</p>

<p>
  <span class="country-icon">
    <Moldova />
  </span>
  Moldova
</p>

<p>
  <span class="country-icon">
    <Poland />
  </span>
  Poland
</p>

<p>
  <span class="country-icon">
    <Russia />
  </span>
  Russia
</p>

<p>
  <span class="country-icon">
    <Sweden />
  </span>
  Sweden
</p>

<p>
  <span class="country-icon">
    <Switzerland />
  </span>
  Switzerland
</p>

<p>
  <span class="country-icon">
    <Turkey />
  </span>
  Turkey
</p>

<p>
  <span class="country-icon">
    <Ukraine />
  </span>
  Ukraine
</p>
