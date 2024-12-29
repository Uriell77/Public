<script>
  import { onMount } from "svelte";
  import { fly,scale,slide } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import Estetoscopio from "$lib/images/estetoscopio.svg";
  import Tubo from "$lib/images/tubo.svg";
  import Geringa from "$lib/images/geringa.svg";
  import Electro from "$lib/images/eco.svg";
  import Eco from "$lib/images/electro.svg";
  import Presion from "$lib/images/presion.svg";
  import Noob from "$lib/Components/Noob.svelte";
  import {page} from '$app/stores'

  let flyers = [1,2,3,4,5];
  $: item = 0;

  let load = false;
  let pagina = $page.data.path;

  function loading() {
    load = !load;
  }
  onMount(() => {
    setTimeout(() => {
      loading();
    }, 1000);
  });



function prev(){
  item = (item - 1 + flyers.length) % flyers.length;
  }

function next(){
  item = (item + 1) % flyers.length;
}
</script>

{#if load}


  <section class="section px-1 py-0" in:scale={{duration:1000, delay:1000, easing:quintOut}}>
    <p class="titulo pb-3 mb-0">Promociones</p>


    <div class="columns is-centered is-mobile mt-6">
      <div class="column is-11-mobile is-half-desktop">


        <div class="box is-hidden-desktop is-fullwidth">

          <div class="columns">

            
            <div class="column is-fullwidth">

              {#key item}
                
              <figure class="image is-2by3 is-covered"
              in:slide={{duration:1000, axis: "x", easing:quintOut}}
              out:slide={{duration:1000, axis:"x", easing:quintOut}}
              >
                <img src="/flyer/{pagina}flyer{item+1}.jpg" alt="flyer">
              </figure>

              {/key}
              
            </div>

            <div class="buttons">
              <button class="button" on:click={prev}>Prev</button>
              <button class="button" on:click={next}>Next</button>
            </div>
            {item}
          </div>
        </div>

        <div class="box is-hidden-touch">
          <div class="block titulo hero">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro explicabo debitis modi laborum inventore, fugiat atque eos numquam animi. Consequatur impedit repudiandae similique cumque vitae facilis nostrum ratione illo ex!
          </div>
        </div>

      </div>
    </div>

    </section>



<!-- 
  

<div class="section p-3 mx-0 has-text-black has-text-weight-bold title servicios" transition:scale={{duration:3000, easing:quintOut}}>
  Promociones
<hr class="barra">
  <div class="columns  is-multiline is-mobile is-centered pt-3">
    {#each $page.data.products as product, index}
    <div class="column is-full-mobile is-4-desktop is-flex px-3">
      <Noob product={product} indice={index} />
    </div>
    {/each}
  </div>
</div>
  
  -->
{/if}


<style>


  .titulo {
    left: 0px;
    top: 0px;
    width: 100%;
    height: 1px;
    color: #1400ca;
    font-family: Kreon;
    font-size: 20px;
    letter-spacing: 1px;
  }





  
  @media only screen and (min-width: 768px) {

    .section{
      margin-top: 140px;
    }
  }


</style>
