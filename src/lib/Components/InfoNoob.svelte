<script>
  import { onMount } from "svelte";
  import { fly,scale } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import Estetoscopio from "$lib/images/estetoscopio.svg";
  import Tubo from "$lib/images/tubo.svg";
  import Geringa from "$lib/images/geringa.svg";
  import Electro from "$lib/images/eco.svg";
  import Eco from "$lib/images/electro.svg";
  import Presion from "$lib/images/presion.svg";
  import Noob from "$lib/Components/Noob.svelte";
  import {page} from '$app/stores'

  let load = false;

  function loading() {
    load = !load;
  }
  onMount(() => {
    setTimeout(() => {
      loading();
    }, 1000);
  });
</script>

{#if load}
<div class="section p-0 mx-0 has-text-black has-text-weight-bold" transition:scale={{duration:3000, easing:quintOut}}>
Servicios

  <div class="columns  is-multiline is-mobile">
    {#each $page.data.products as product, index}
    <div class="column is-half">
      <Noob product={product} indice={index} />
    </div>
    {/each}
  </div>
</div>
  
{/if}


<style>
</style>
