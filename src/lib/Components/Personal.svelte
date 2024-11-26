<script>
	import { onMount } from 'svelte';
    import { quintOut } from 'svelte/easing';
	import { scale } from 'svelte/transition';
    export let usuarios =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
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
    <span class="has-text-weight-bold p-1 has-text-black mb-0">{titulo}</span>
    <div class="field is-grouped slider pb-0 mt-0" >
        {#each usuarios as usuario}
            <Fichamedicos />
        {/each}
    </div>
</div>
{/if}

<style>

    .hero{
        max-height:40vh;
        max-width:100%;
    }


    .slider{
        overflow: auto;
        white-space: nowrap;
        width:100%;
        scroll-snap-type: x proximity;
    }
    
    .slider::-webkit-scrollbar{
        display: none;
    }



  @media only screen and (min-width: 768px) {
    .hero{
        background-color: green;
        height:50vh;
        max-width:100%;
    }
  }

</style>
