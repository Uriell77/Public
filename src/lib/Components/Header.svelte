<script>
  import { onMount } from "svelte";
  import { fly, fade } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import Medicos from "$lib/images/medicos.webp";
  import Nav from "$lib/Components/Navbar.svelte";
  import Logo from "$lib/Components/Logo.svelte";
  import instagram from "$lib/images/logo-instagram.svg";
  import facebook from "$lib/images/logo-facebook.svg";
  import telegram from "$lib/images/logo-telegram.svg";
  import email from "$lib/images/logo-email.svg";
  import qr from "$lib/images/qr.svg";
  import qrdir from "$lib/images/qr.jpg";
  export let slug;
  export let storetext;

  $: slide = 1;

  onMount(() => {
    setInterval(() => {
      if (slide < 5) {
        slide += 1;
      } else {
        slide = 1;
      }
    }, 4000);
  });

  let media = [qr, instagram, facebook, telegram, email];
  let media2 = ["qr", "instagram", "facebook", "telegram", "email"];

  let load = false;

  function loading() {
    load = !load;
  }
  onMount(() => {
    setTimeout(() => {
      loading();
    }, 1);
  });
  let open = false;
  let me;

  function openMedia(e) {
    open = !open;
    me = e.target.id;
  }
</script>

{#if load}
  <section
    in:fly={{ duration: 3000, x: 0, y: -500, opacity: 0.5, easing: quintOut }}
  >
    <section class="hero is-mediumt is-clinic-secondary is-gradient-primary">
      <div class="hero-head">
        <Nav {slug} />
      </div>

      <div class="hero-body has-text-centered">
        {#key slide}
          <img
            class="fond"
            src="/headers/{slug}{slide}.png"
            loading="lazy"
            alt="r"
            in:fade={{ duration: 1000, easing: quintOut }}
          />
        {/key}

        <div class="container has-text-centered titulo">
          <h1 class="oswald-title is-size-1">
            {storetext.storename}
          </h1>
          <p class="subtitle has-text-black mt-5 is-size-6">
            {storetext.storequote}
          </p>
        </div>
      </div>
    </section>
  </section>
{/if}

<style>
  @import url("https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&family=Titan+One&display=swap");

  .oswald-title {
    font-family: "Oswald", sans-serif;
    font-optical-sizing: auto;
    font-weight: 700;
    font-style:normal;
    color: rgb(3, 6, 98);
    text-shadow: 1px 5px 12px;
  }

  .subtitle {
    text-shadow: 1px 5px 12px black;
  }

  @media only screen and (max-width: 768px) {
    .fond {
      position: absolute !important;
      top: -15% !important;
      right: 0%;
      height: 70% !important;
      width: 50% !important;
      mask-image: radial-gradient(black 40%, transparent) !important;
      filter: opacity(20%) !important;
      mask-size: cover !important;
      mask-repeat: no-repeat;
      mask-position: center !important;
    }
  }

  .fond {
    position: absolute !important;
    top: 0%;
    right: 0%;
    height: 100%;
    width: 50%;
    mask-image: radial-gradient(black 40%, transparent);
    filter: opacity(20%);
    mask-size: cover;
    mask-repeat: no-repeat;
    mask-position: center;
  }

  big {
    color: var(--color-clinic-primary);
    font-size: 48px;
  }

  section {
    border-radius: 0px 0px 20px 20px;
  }

  .hero {
    mask-image: linear-gradient(black 95%, transparent);
  }
</style>
