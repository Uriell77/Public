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



<div class="columns is-centered is-mobile">
    <div class="column is-full-mobile is-full-tablet is-full-desktop">





<section class="mx-0">
    <Header slug ={$page.url.pathname.slice(1)} storetext={$page.data.usuario[0].store}/>

    <div class="section p-0 mb-0">



        <Cinto titulo="Promociones"/>

    </div>

    <div class="container mt-0 p-4">

        <Noob />

    </div>


    <div class="container mt-0 p-4 doctores">

        <Personal titulo="Personal Medico"/>

    </div>

        <Contacto />

</section>




    </div>
</div>





<style>

    .doctores{
        max-width:100vw;
    }
    section {
        justify-content: center;
        align-items: center;
        overflow:hidden;
    }


</style>
