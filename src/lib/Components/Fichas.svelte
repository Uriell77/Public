<script>
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
    </script>


{#if load}
            <div class="control mx-0 ficha has-text-centered py-0 my-0" in:scale|global={{duration:3000}}>
                    <figure class="image  p-0 m-0">
                        <img src="/flyer/{$page.data.path}flyer{flyers}.jpg" alt="logo" class="p-0 m-0 is-clickable"/>
                    </figure>
            </div>
{/if}

<style>
    img{
        max-height:14vh;
    }


    .image{
        position:relative;
        width:90%;
        top: 50%;
        left: 50%;;
        transform:translate(-50%, -50%);
    }

    .ficha{
        background-color: rgb(149, 149, 179);
        border-radius: 10px;
        max-width:35vw;
        height:15vh;

    }



    @media only screen and (min-width: 768px) {
    .image{
        position:relative;
        width:90%;
        top: 50%;
        left: 50%;
        transform:translate(-50%, -50%);
    }

    .ficha{
        background-color: rgba(200, 200, 250, .6);
        border-radius: 10px;
        width:10%;
        height:170px;

    }
}
/* your styles go here */
</style>