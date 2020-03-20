<script context="module">
  export function preload({ params }) {
    const slug = params.slug;

    return this.fetch(`store/products/${slug}.json`)
      .then(r => r.json())
      .then(products => {
        return { products };
      });
  }
</script>

<script>
  export let products;

  import { onMount } from "svelte";
  import { loadSnipCart } from "./_helpers/snipcart.js";

  import Table, { Row } from "@fabiohvp/svelte-table";

  onMount(async () => {
    if ((await loadSnipCart()) !== true) throw "SnipCart Failed To Load";
  });
</script>

<style>
  tr th {
    text-align: left;
    padding-left: 0.3em;
  }

  :global(.active) {
    background: rgb(196, 0, 9) !important;
  }
</style>

{#if products}
  <section id="products">
    <Table rows="{products}" let:rows="{products}" pageSize="{20}">
      <thead slot="head">
        <tr>
          <th style="width: 100px;">ID</th>
          <th>Title</th>
          <th>Add To Order</th>
        </tr>
      </thead>

      <tbody>
        {#each products as product, index (product['productId'])}
          <Row {index}>
            <td>{product['productId']}</td>
            <td>{product['productTitle']}</td>
            <td>
              <button
                class="snipcart-add-item"
                data-item-price="0.00"
                data-item-id="{product['productId']}"
                data-item-name="{product['productTitle']}"
                data-item-categories="{product['categoryTitle']}">
                Add
              </button>
            </td>
          </Row>
        {/each}
      </tbody>
    </Table>
  </section>
{/if}
