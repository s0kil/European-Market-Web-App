<script>
  import { onMount } from "svelte";

  import { loadSnipCart } from "./_helpers/snipcart.js";

  onMount(async () => {
    if ((await loadSnipCart()) !== true) throw "SnipCart Did Not Load";
    else console.info("SnipCart Loaded");
  });
</script>

<button
  class="snipcart-add-item"
  data-item-id="starry-night"
  data-item-price="79.99"
  data-item-url="/paintings/starry-night"
  data-item-description="High-quality replica of The Starry Night by the Dutch
  post-impressionist painter Vincent van Gogh."
  data-item-image="/assets/images/starry-night.jpg"
  data-item-name="The Starry Night">
  Add to cart
</button>

<!-- AIRtable API: keyJTG3kD6vkfispV -->
