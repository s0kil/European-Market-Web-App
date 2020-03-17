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
    // Preload SnipCart
    if ((await loadSnipCart()) !== true) throw "SnipCart Did Not Load";
    else console.info("SnipCart Loaded");
  });
</script>

<ul>
  {#each productCategories as category}
    <li>
      <a style="color: white;" href="store/{category.slug}">{category.title}</a>
    </li>
  {/each}
</ul>
