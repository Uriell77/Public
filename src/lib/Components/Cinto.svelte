<script>
	import { onMount } from 'svelte';
    import { quintOut } from 'svelte/easing';
	import { scale } from 'svelte/transition';
    export let usuarios =[1,2,3,4,5];
    export let titulo="titulo";
    import { page } from '$app/stores';
    import Ficha from '$lib/Components/Fichas.svelte';


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
<div class="hero section py-1 m-0 px-2 mb-0" transition:scale={{duration:3000, easing:quintOut}}>
    <span class="has-text-weight-bold p-1 has-text-black">{titulo}</span>
    <div class="field is-grouped slider pb-5" >
        {#each usuarios as usuario,index}
            <Ficha flyers={index+1}/>
        {/each}
    </div>
</div>
{/if}

<style>

    .hero{
        max-width:100%;
    }


    .slider{
        overflow: auto;
        white-space: nowrap;
    }
    
    .slider::-webkit-scrollbar{
        display: none;
    }

</style>
