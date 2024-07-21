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
    import qr from "$lib/images/qr.svg";
    import qrdir from "$lib/images/qr.jpg";
    
    let media = [qr, instagram, facebook, telegram, email];
    let media2 = ["qr", "instagram", "facebook", "telegram", "email"];

    let load = false;

    function loading(){
        load = !load;
    }
    onMount(()=>{
        setTimeout(()=>{
            loading()},1)
    })
    let open = false;
    let me;

    function openMedia(e){
        open = !open;
        console.log(e.target.id)
        me = e.target.id
    }

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
                {#each media as med,index}
                    <img
                        id="{index}"
                        class="is-rounded is-media is-clickable"
                        src="{med}"
                        alt="media"
                        width="30"
                        height="30"
                        on:click={openMedia}
                    />
                {/each}
            </div>

        </div>

    </div>

</section>


{#key open}
<div class="contacto {open ? "":"is-hidden"}" transition:fly={{duration:3000, x:0, y:600, opacity:0.7, easing:quintOut}}>
    <div class="section py-0 is-justify-content-flex-end is-flex">
    <div class="tag  is-clinic-primary closed mr-0 mt-3 p-3 is-clickable" on:click={openMedia} >X</div>
    </div>
    <div class="container">
        <div class="section has-text-centered pt-2">
            {#if me == 0}
                <img src="{qrdir}" alt="qr" width="300" height="100" />
                {:else}
                {#if media2[me] == "email"}
                    <div class="section container title has-text-centered">
                        neurobejas@gmail.com
                    </div>
                    {:else}
                            <div>
                                {media2[me]}
                            </div>
                {/if}
            {/if}
        </div>
    </div>
</div>
{/key}

{/if}



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


    .media{
    z-index:1;
    }

    .media-content{
    top: 209px;
    z-index:5;
    position:absolute !important;
    right:10px !important;
    }

</style>
