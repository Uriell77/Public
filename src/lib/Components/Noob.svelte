<script>
  import { fly, fade } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import Estetoscopio from "$lib/images/estetoscopio.svg";
  import Tubo from "$lib/images/tubo.svg";
  import Geringa from "$lib/images/geringa.svg";
  import Electro from "$lib/images/eco.svg";
  import Eco from "$lib/images/electro.svg";
  import Presion from "$lib/images/presion.svg";

  let iconos = [Estetoscopio, Tubo, Geringa, Electro, Eco, Presion];

  export let product;
  export let indice;
</script>

  {#key indice}
      <div
        class="card is-shadowless is-clickable  is-gradient-primary is-clinic-secondary iz has-text-centered"
        in:fly|global={{
          duration: 3000,
          x: -400,
          y: 0,
          opacity: 0.5,
          easing: quintOut,
        }}
      >
        <div class="card-image p-5 m-0">
          <figure class="image is-4by3">
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <img src={iconos[indice]} alt="ima" />
          </figure>
        </div>
        <div class="card-content p-0 mb-0">
          <div class="media pb-0 mb-0">
            <div class="media-content pb-0">
              <p class="is-size-5 is-font-primary is-2 has-text-weight-bold">
                {product.productname}
              </p>
            </div>
          </div>

          <div class="content pt-2 pb-4 has-text-black is-size-6 has-text-centered">
            {product.productdescription}
          </div>
        </div>
      </div>
  {/key}




<style>

  .card{
    min-width: 100%;
  }


  @media only screen and (min-width: 768px) {
  }
</style>
