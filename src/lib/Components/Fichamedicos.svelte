<script>
  import { onMount } from "svelte";
  import { scale, fly } from "svelte/transition";
  import { quintOut } from "svelte/easing";

  let load = false;

  export let psinopsis;
  export let indice;

  function loading() {
    load = !load;
  }

  onMount(() => {
    setTimeout(() => {
      loading();
    }, 1);
  });
</script>

{#if load}
  <div
    class="control mx-0 ficha has-text-centered py-0 my-0 px-0 mt-6 is-clickable"
    in:scale|global={{ duration: 3000 }}
  >
    <div class="columns is-mobile px-0 mt-0">
      <div class="column is-half px-0 mt-0">
        <div class="section mx-0 py-2">
            <div class="block has-text-black has-text-weight-bold is-font-primary is-size-4">nombre</div>
          <p class="container has-text-black block mx-0">
            {psinopsis}
          </p>
        </div>
      </div>
      <div class="column is-half">
        {psinopsis}
        {indice}
        <figure class="image p-0 m-0 is-128x128">
          {#if psinopsis && indice}
          <img src="/personal/{psinopsis}personal{indice}.png" alt="logo" class="p-0 m-0 " loading="lazy"/>
          {:else}
          <img src="/avatar.png" alt="logo" class="p-0 m-0" loading="lazy"/>
          {/if}
        </figure>
      </div>
    </div>
  </div>
{/if}

<style>
 

  .ficha {
    box-shadow: rgba(58, 51, 130, 0.555) 0px 3px 4px;
    border-radius: 10px;
    background-blend-mode: normal;
    background-color: green;
    background: linear-gradient(180deg, #a4a0a0 0%, #b8b6b6 98%, #e3dede 105%);
  }



  .image {
    position: relative;
    top: 0%;
    right: 0%;
  }

  img{
    width: 100px;
    height: 100px;
  }

 
  @media only screen and (min-width: 768px) {
   
  }
  /* your styles go here */
</style>
