<script>
  export let country;
</script>

<style>
  p {
    font-family: "Lato", sans-serif;
    display: inline;
    margin-right: 1.5rem;
  }
  img {
    height: auto;
    max-height: 20px;
    vertical-align: middle;
  }
</style>

<p>
  {country}
  <img
    src="images/country-flags/flag-of-{country}.svg"
    alt="Flag Of {country}"
    title="Flag Of {country}" />
</p>
