<script>
    import {onMount} from "svelte";
    import { fly,fade } from 'svelte/transition';
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

    $: slide = 0;


    onMount(()=>{
        setInterval(()=>{
            if(slide < 5){
                slide += 1;
            }else{
                slide = 1;
            }
        },4000
        )
    })
    
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

                {#key slide}
                    <img class="fond" src="src/lib/images/slide/slide{slide}.png" alt="r" in:fade={{duration:1000, easing:quintOut}} />
                {/key}


                <div class="container has-text-centered titulo">
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

    @media only screen and (max-width: 768px) {
    .fond{
        position:absolute !important;
        top:-15% !important;
        right:0%;
        height:70% !important;
        width: 50% !important;
        mask-image: radial-gradient(black 40%,transparent) !important;
        filter:opacity(20%) !important;
        mask-size:cover !important;
        mask-repeat:no-repeat;
       mask-position:center !important; 
    }
}

    .fond{
        position:absolute !important;
        top:0%;
        right:0%;
        height:100%;
        width: 50%;
        mask-image: radial-gradient(black 40%,transparent);
        filter:opacity(20%);
        mask-size:cover;
        mask-repeat:no-repeat;
       mask-position:center; 
    }

    big{
        color:var(--color-clinic-primary);
        font-size: 48px;
    }


    section{
    border-radius: 0px 0px 20px 20px;
    }



    .hero{
        mask-image: linear-gradient(black 95%,transparent);
        
    }


</style>
