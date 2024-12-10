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
<div class="hero  py-1 m-0 mb-0" transition:scale={{duration:3000, easing:quintOut}}>
    <div class="hero-content is-flex is-flex-align-center" >
        {#each usuarios as usuario,index}
            <Ficha flyers={index+1}/>
        {/each}
    </div>
</div>
{/if}

<style>

    .hero{
        max-width:95vw;
        overflow: hidden;
        overflow-x: scroll;
        scrollbar-color: #71718a #9595B3;
        
    }
   /* .hero::-webkit-scrollbar{
    }*/


</style>
