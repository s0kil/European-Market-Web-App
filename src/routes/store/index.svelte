<script context="module">
  export function preload({ params, query }) {
    return this.fetch("store/products/categories.json")
      .then(r => r.json())
      .then(productCategories => {
        return { productCategories };
      });
  }
</script>

<script>
  export let productCategories;

  import { onMount } from "svelte";
  import { loadSnipCart } from "./_helpers/snipcart.js";

  import Separator from "../../components/Separator.svelte";

  onMount(async () => {
    // Preload SnipCart, It Could Be Used In The Nested `/store/[slug]` Route
    // await loadSnipCart();
  });
</script>

<style>
  ul,
  li {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  #categories ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
  }

  #categories li {
    padding: 16px 32px;
    display: flex;
  }

  #categories a {
    color: black;
    font-size: 1.2em;
  }
</style>

<section id="categories">
  <Separator />
  <ul>
    {#each productCategories as category}
      <li>
        <div class="box">
          <a href="store/{category.slug}">{category.title}</a>
        </div>
      </li>
    {/each}
  </ul>
  <Separator />

  <div>
    <br />
    <i>*Pictures Are Coming Soon.</i>
  </div>
</section>
