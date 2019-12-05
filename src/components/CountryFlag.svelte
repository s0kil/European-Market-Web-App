<script>
  export let country;
</script>

<style>
  p {
    font-family: "Lato", sans-serif;
    display: inline;
  }
  img {
    height: auto;
    width: 40px;
    margin-right: 0.4rem;
    vertical-align: middle;
    border: 1px solid rgb(200, 200, 200);
  }
</style>

<p>
  <img
    src="images/country-flags/flag-of-{country}.svg"
    loading="lazy"
    alt="Flag Of {country}"
    title="Flag Of {country}" />
  {country}
</p>
