<script>
    import Header from "$lib/Components/Header.svelte";
    import Noob from "$lib/Components/InfoNoob.svelte";
    import Flyer from "$lib/Components/Flyer.svelte";
    import Contacto from '$lib/Components/Contact.svelte';
    import Personal from '$lib/Components/Personal.svelte';
    let load = false;
    import { page } from '$app/stores';
    import Cinto from '$lib/Components/Cinto.svelte';
  import { onMount,afterUpdate } from "svelte";




</script>

<svelte:head>
    <title>{$page.data.path}</title>
    <link rel="icon" href="/logos/{$page.data.path}logo.png" />
    <meta name="description" content="{$page.data.path}" />
</svelte:head>




<section class="mx-0 mb-6 fondo px-0" id="home">

    <Header slug ={$page.url.pathname.slice(1)} storetext={$page.data.usuario[0].store}/>


    <div class=" py-2 px-0 mb-2 container  promo has-text-black ">

        <Cinto titulo="Promociones"/>

    </div>


    <div class="container mt-2 p-4 mb-6" id="info">

        <Noob />

    </div>

<br><br><br><br>

    <div class="container mt-6 p-4 doctores" id="quienes">

        <Personal titulo="Quienes Somos?"/>

    </div>

        <Contacto />

</section>









<style>

    .promo{
        max-width: 100%;
        max-height: 35vh;
    border-radius: 30px;
    }

    .fondo{
        background-color: #E3DEDE;
        min-height:100%;
    }

    .doctores{
        max-width:100vw;
    }
    section {
        justify-content: center;
        align-items: center;
        overflow:hidden;
    }


</style>
