<script>
    import Header from "$lib/Components/Header.svelte";
    import Noob from "$lib/Components/InfoNoob.svelte";
    import Flyer from "$lib/Components/Flyer.svelte";
    import Contacto from '$lib/Components/Contact.svelte';
    let load = false;
    import { page } from '$app/stores';
  import { onMount,afterUpdate } from "svelte";




</script>

<svelte:head>
    <title>{$page.data.path}</title>
    <meta name="description" content="{$page.data.path}" />
    <link rel="icon" href="/logos/{$page.data.path}logo.png"/>
</svelte:head>


<section>
    <Header slug ={$page.url.pathname.slice(1)}/>

    <div class="section p-0">


        <Flyer />

    </div>

    <div class="container mt-5 p-4">

        <Noob />

    </div>

    {#if load}
        <Contacto />
    {/if}

</section>




<style>
    section {
        justify-content: center;
        align-items: center;
        overflow:hidden;
    }


</style>
