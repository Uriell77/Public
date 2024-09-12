<script>
    import {onMount} from "svelte";
    import { fly } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
    import Medicos from "$lib/images/medicos.webp";
    import Nav from "$lib/Components/Navbar.svelte";
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
        me = e.target.id
    }

</script>


{#if load}
    <section in:fly={{duration:3000, x:0, y:-500, opacity:0.5, easing:quintOut}}>
        <section class="hero is-medium is-clinic-secondary is-gradient-primary">
            <div class="hero-head">
                <Nav />
            </div>

            <div class="hero-body has-text-centered">
                <div class="container has-text-centered">
                    <p class="title font-alice">
                        <big>C</big>onsultorio <big>C</big>linico
                            <br>
                            Dr. <big>J</big>ose <big>B</big>ejas
                    </p>
                    <p class="subtitle has-text-white mt-5 is-size-6">
                        Tu Salud es Nuestra Prioridad
                    </p>
                </div>
            </div>
        </section>
    </section>

{/if}

<style>

    big{
        color:var(--color-clinic-primary);
        font-size: 48px;
    }

    .is-white{
        color:white;
    }

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

    .hero{
        mask-image: linear-gradient(black 95%,transparent);
        
    }


</style>
