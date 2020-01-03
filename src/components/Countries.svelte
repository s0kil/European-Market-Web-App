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

  /*
  const countries = [
    "Armenia",
    "Austria",
    "Belarus",
    "Bulgaria",
    "England",
    "France",
    "Germany",
    "Greece",
    "Israel",
    "Italy",
    "Latvia",
    "Moldova",
    "Poland",
    "Russia",
    "Sweden",
    "Switzerland",
    "Turkey",
    "Ukraine"
  ];
  */
</script>

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

<div>
  <span class="country-icon">
    <Armenia />
  </span>
  <p>Armenia</p>
</div>

<div>
  <span class="country-icon">
    <Austria />
  </span>
  <p>Austria</p>
</div>

<div>
  <span class="country-icon">
    <Belarus />
  </span>
  <p>Belarus</p>
</div>

<div>
  <span class="country-icon">
    <Bulgaria />
  </span>
  <p>Bulgaria</p>
</div>

<div>
  <span class="country-icon">
    <England />
  </span>
  <p>England</p>
</div>

<div>
  <span class="country-icon">
    <France />
  </span>
  <p>France</p>
</div>

<div>
  <span class="country-icon">
    <Germany />
  </span>
  <p>Germany</p>
</div>

<div>
  <span class="country-icon">
    <Greece />
  </span>
  <p>Greece</p>
</div>

<div>
  <span class="country-icon">
    <Israel />
  </span>
  <p>Israel</p>
</div>

<div>
  <span class="country-icon">
    <Italy />
  </span>
  <p>Italy</p>
</div>

<div>
  <span class="country-icon">
    <Latvia />
  </span>
  <p>Latvia</p>
</div>

<div>
  <span class="country-icon">
    <Moldova />
  </span>
  <p>Moldova</p>
</div>

<div>
  <span class="country-icon">
    <Poland />
  </span>
  <p>Poland</p>
</div>

<div>
  <span class="country-icon">
    <Russia />
  </span>
  <p>Russia</p>
</div>

<div>
  <span class="country-icon">
    <Sweden />
  </span>
  <p>Sweden</p>
</div>

<div>
  <span class="country-icon">
    <Switzerland />
  </span>
  <p>Switzerland</p>
</div>

<div>
  <span class="country-icon">
    <Turkey />
  </span>
  <p>Turkey</p>
</div>

<div>
  <span class="country-icon">
    <Ukraine />
  </span>
  <p>Ukraine</p>
</div>
