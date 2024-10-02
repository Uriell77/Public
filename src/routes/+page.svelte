<script>
    import { fly } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
    import {onMount} from "svelte";
    import Header from "$lib/Components/Header.svelte";
    import Logo from "$lib/images/Logo.jpg";
    import Noob from "$lib/Components/InfoNoob.svelte";
    import Flyer from "$lib/Components/Flyer.svelte";
    import Contacto from '$lib/Components/Contact.svelte';
    let load = false;

    function loading(){
        load = !load;
    }
    onMount(()=>{
        setTimeout(()=>{
            loading()},1)
    })
</script>

<svelte:head>
    <title>Public</title>
    <meta name="description" content="Public" />
</svelte:head>

<section>
    <Header />

    <div class="container">

        <Flyer />

    </div>

    <div class="container mt-5 p-4">

        <Noob />

    </div>

    {#if load}
        <Contacto />
    {/if}

    <footer class="footer px-4">
        <div class="content has-text-centered">
            Lorem voluptate sit facilis aperiam vero? Veniam harum explicabo nisi quasi asperiores Hic inventore placeat sed consequatur sequi Aliquam aliquam.
        </div>
    </footer>
</section>




<style>
    section {
        justify-content: center;
        align-items: center;
        overflow:hidden;
    }

    .footer{
        background-color:rgba(1,1,1,.2);
        height:10px !important;
        mask-image: linear-gradient( transparent 0%, black 40%);
    }

</style>
