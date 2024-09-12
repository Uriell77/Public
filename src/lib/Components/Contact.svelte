<script>
    import {onMount} from "svelte";
    import { fly } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
    import contact from "$lib/images/connect.svg";
    import Noob from '$lib/Components/Noob.svelte';

    let open = false;

    function openContacto(){
        open = !open;
    }


</script>


<figure class=" image is-64x64 " in:fly={{duration:3000, x:0, y:100, opacity:0.5, easing:quintOut}} on:click={openContacto} on:keyup={openContacto}>
    <img src="{contact}" alt="" class="is-rounded is-gradient-secondary-soft is-clinic-secondary is-clickable" />
</figure>


{#key open}
<div class="contacto {open ? "":"is-hidden"}" transition:fly={{duration:1000, x:0, y:600, opacity:0.7, easing:quintOut}}>
    <div class="section py-0 is-justify-content-flex-end is-flex">
    <div class="tag  is-clinic-primary closed mr-0 mt-3 p-3 is-clickable" on:click={openContacto} >X</div>
    </div>
    <div class="container">
        <div class="section has-text-centered ">
            <div class="title is-font-primary">Telefonos de Contacto:</div><br>
            <div class="is-size-4 has-text-black">
            +58 04145798772<br>
            Calle 19 de Abril Diagonal a la Biblioteca del Estado
            </div>

        </div>
    </div>
</div>
{/key}

<style>

    .closed{
        width:3px;
        height:8px;
        border-radius: 50%;
        z-index:180;

    }


    .contacto{
        background-color:rgb(255, 255, 228);
        border-radius: 10% 10% 0px 0px;
        position:fixed;
        top:50%;
        z-index:150;
        width:100%;
        height:50%;
        border-style:solid;
        border-color: var(--color-clinic-primary)
    }

    figure{
        position:fixed;
        z-index:100;
        bottom:0%;
        right:0px;
    /*position:absolute;
      bottom:0%;
      right:0px;*/
    }

    img{
        border-style:solid;
        border-width:2px;
        border-color: var(--color-clinic-primary)
    }
</style>
