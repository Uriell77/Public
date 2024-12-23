<script>
	import { onMount } from 'svelte';
    import { quintOut } from 'svelte/easing';
	import { scale } from 'svelte/transition';
    export let usuarios =[1,2,3,4];
    export let titulo="titulo";
    import { page } from '$app/stores';
    import Fichamedicos from '$lib/Components/Fichamedicos.svelte';


    let load = false;

    function loading(){
        load = !load;
    }

    onMount(()=>{
        setTimeout(()=>{
            loading()},1)
    });


</script>


{#if load}
<div class="hero  section py-1 m-0 px-2 mb-0" transition:scale={{duration:3000, easing:quintOut}}>
    <span class="has-text-weight-bold p-1 has-text-black mb-0 title">{titulo}</span>
    <hr class="barra" />
    <div class="field is-grouped slider pb-0 mt-0" >
        {#each usuarios as usuario,index}
            <Fichamedicos psinopsis="{$page.data.path}" indice="{index + 1}"/>
        {/each}
    </div>
</div>
{/if}

<style>

.hero{
    border-style: solid;
    border-radius: 30px;
    border-color: rgba(1,1,1,.1);
  }

  .barra{
    background-color: rgba(1,1,1,.1);
    z-index: 1;

  }

    .hero{
        max-height:48vh;
        max-width:100vw;
    }


    .slider{
        overflow-x: auto;
        overflow-y:hidden;
        white-space: nowrap;
        width:100%;
        scroll-snap-type: x proximity;
        scrollbar-color: #71718a #9595B3;
    }
   
    /*
    .slider::-webkit-scrollbar{
        display: none;
    }
        */



  @media only screen and (min-width: 768px) {
    .hero{
        max-height:50vh;
        max-width:100vw;
    }   
  }

</style>
