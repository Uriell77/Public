<script>
	import { onMount } from 'svelte';
    import { quintOut } from 'svelte/easing';
	import { scale } from 'svelte/transition';
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

<section class="section px-1 py-0 ">
    <p class="titulo pb-6 mb-2">
        Servicios
    </p>
<div class="slide py-1 px-0 mt-0">

    <div class="columns is-mobile is-gapless">
        {#each $page.data.products as product,index}
        
            
            <Ficha product={product} indice={index}/>
            
            
        {/each}
    </div>
</div>
</section>

<!-- 
    <div class="hero  py-1 m-0 mb-0" transition:scale={{duration:3000, easing:quintOut}}>
        <div class="hero-content is-flex is-flex-align-center" >
        </div>
    </div>
    -->
{/if}

<style>

    @media only screen and (min-width: 768px){
    .section{
        max-width: 100vw;
        z-index: 1000;
        min-height:10vh;
    }
    .slide{
        top:-15px;
        position: relative;
        max-width: 100vw;
        z-index: 1;
        min-height:40vh;
        background-color: red;
        overflow-y:hidden;
    }


    }

    .section{
        max-width: 100vw;
        z-index: 1000;
    }

    .slide{
        top:-15px;
        position: relative;
        max-width: 100vw;
        overflow-x: scroll;
        z-index: 1;
        height:18dvh;


    }


    .slide::-webkit-scrollbar {
    display: none;
}
    .section::-webkit-scrollbar {
    display: none;
}


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




</style>
