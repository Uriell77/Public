<script>
	import '../app.css';

</script>



<svelte:head>
    <title>PublicDev</title>
    <meta name="description" content="Public" />
    <link rel="icon" href="/publicdev.png"/>
    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
</svelte:head>

<div class="app">

	<main class="mb-0">
		<slot />
	</main>
    <footer class="hero is-small is-black py-3 mt-0">
        <block class="container has-text-centered">
            PublicHub Desarrollado por Luis Hermoso
        </block>

    </footer>
</div>



<article class="message is-primary is-hidden">
  <div class="message-header">
      Dolor voluptates minima perspiciatis veritatis sint nam. Quasi modi natus.
    <button class="delete" aria-label="delete"></button>
  </div>
</article>





<style>

    .message{
        position:absolute !important;
        bottom: 0%;
    }


	.app {
        display:grid;
        min-height: 100dvh;
        grid-template-rows: 1fr auto;
	}

    main{
        background-color: rgba(50,60,80,1);
    }

</style>
