<script>
    import {onMount} from "svelte";
    import { fly } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
    import Medicos from "$lib/images/medicos.webp";
    import Logo from "$lib/Components/Logo.svelte";
    import instagram from "$lib/images/logo-instagram.svg";
    import facebook from "$lib/images/logo-facebook.svg";
    import telegram from "$lib/images/logo-telegram.svg";
    import email from "$lib/images/logo-email.svg";
    let load = false;

    function loading(){
        load = !load;
    }
    onMount(()=>{
        setTimeout(()=>{
            loading()},1)
    })
</script>


{#if load}
<section class="hero is-medium is-clinic-secondary" in:fly={{duration:3000, x:0, y:-400, opacity:0.5, easing:quintOut}}>

    <div class="hero-body">

        <Logo />

        <p class="title sarabun-bold "> &nbsp &nbsp  &nbsp &nbsp &nbsp Consultorio Clinico <br>
            &nbsp &nbsp  &nbsp &nbsp &nbsp Dr Jose Bejas</p>
        <p class="subtitle anton-font has-text-white mt-3"><small>Tu Salud es lo Primero</small></p>

    </div>
    <img src="{Medicos}" alt="" class="medic">

    <div class="media">

        <div class="media-group">

            <div class="media-content is-flex">
                <img class="is-rounded is-media " src="{instagram}" alt="media" width="30" height="30"/>
                <img class="is-rounded is-media " src="{facebook}" alt="media" width="30" height="30"/>
                <img class="is-rounded is-media " src="{telegram}" alt="media" width="30" height="30"/>
                <img class="is-rounded is-media " src="{email}" alt="media" width="30" height="30"/>
            </div>

        </div>

    </div>

</section>
{/if}



<style>

    section{
    border-radius: 0px 0px 20px 20px;
    height:15rem;
    }

    .medic{
    position:absolute;
    width:15rem;
    height:15rem;
    right:0px;
    filter:opacity(30%);
    border-radius:5% 0% 0% 5%;
    }

    .title{
    left:10px;
    top: 90px;
    position:absolute;
    z-index:2;
    color: var(--color-clinic-primary);
    }

    .subtitle{
    top: 200px;
    position:absolute;
    z-index:2;
    color: var(--color-clinic-neutro);
    }

    figure{
    left:6px;
    top: 4px;
    position:absolute;
    z-index:1;

    }

    .media{
    z-index:1;
    background-color:green;
    }

    .media-content{
    top: 209px;
    z-index:5;
    position:absolute !important;
    right:10px !important;
    }

</style>
