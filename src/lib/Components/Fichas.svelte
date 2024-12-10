<script>
	import { redirect } from '@sveltejs/kit';
	import { onMount } from 'svelte';
	import { scale,fly } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
    import { page } from '$app/stores';
    export let flyers;

    let load = false;

    function loading(){
        load = !load;
    }

    onMount(()=>{
        setTimeout(()=>{
            loading()},1)
    });


    let url = `/flyer/${$page.data.path}flyer${flyers}.jpg`;

    $: bgimage = `background-image: url("${url}");`;
    </script>


{#if load}
<div class="card mx-2">
    <div class="card-header">ter</div>
    <div class="card-content container" style="{bgimage}">
    </div>
</div>
{/if}

<style>
    
   .card-content{
    background-color: red;
    height: 30vh;
    width: 30vw;
    background-size: cover;
    background-repeat: none;
    background-attachment:local;
   } 
    .card{
        color:black;
        background-color: rgb(149, 149, 179);
        max-height:content;
        min-width: 35%;
    }


   @media only screen and (min-width: 768px){
    .card{
        color:black;
        background-color: rgb(149, 149, 179);
        max-height:content;
        min-width: 10vw;
    }

   .card-content{
    background-color: red;
    height: 30vh;
    width: 10vw;
    background-size: cover;
    background-repeat: none;
    background-attachment:local;
   } 

   } 




/* your styles go here */
</style>