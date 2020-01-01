<script>
  export let country;
</script>

<style>
  div {
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

<div>
  <img
    src="images/country-flags/flag-of-{country}.svg"
    alt="Flag Of {country}"
    title="Flag Of {country}" />
  {country}
</div>
