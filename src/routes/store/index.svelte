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

  onMount(async () => {
    // Preload SnipCart, It Could Be Used In The Nested `/store/[slug]` Route
    await loadSnipCart();
  });
</script>

<section id="categories">
  <ul>
    {#each productCategories as category}
      <li>
        <a href="store/{category.slug}">{category.title}</a>
      </li>
    {/each}
  </ul>
</section>
