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

    <Header slug ={$page.url.pathname.slice(1)} storetext={$page.data.usuario}/>


    <div class=" py-2 px-0 mb-2 container  promo has-text-black ">

        <Cinto titulo="Promociones"/>

    </div>

    <br>
    <div class="container mt-2 p-4 mb-6" id="info">

        <Noob />

    </div>

    <br>


    <div class="container p-0">

        <div class="hero is-large p-0">
                <div class="columns is-mobile is-narrow is-vcentered">
                    <div class="column is-4-mobile p-0">
                        <figure class="image is-3by4 p-0">
                            <img src="/headers/hero.webp" alt="" class="p-0"> 
                        </figure>

                    </div>
                    <div class="column has-text-black">
                        <p class="has-text-centered px-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, maiores libero sapiente quod aperiam praesentium dignissimos dolor labore, ea eum itaque possimus doloremque soluta. Architecto neque maxime sint harum vitae. 
                        </p>
                        </div>
                </div>
        </div>

    </div>

    <br>

    <div class="container  p-4 doctores" id="quienes">

        <Personal titulo="Personal Medico"/>
        <br><br><br><br><br>

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

    .hero{
    background: linear-gradient(180deg, #64a3e8 0%, #e3dede 98%, #e3dede 105%);
    }


</style>
