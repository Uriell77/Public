<script>
    import {onMount} from "svelte";
	import '../app.css';
	
</script>



<svelte:head>
    <title>PublicDev</title>
    <meta name="description" content="Public" />
    <link rel="icon" href="/publicdev.png"/>
    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
</svelte:head>

<div class="app">

	<main class="mb-0">
		<slot />
	</main>
    <footer class="hero is-small is-black py-3 mt-0">
        <block class="container has-text-centered is-size-7">
            PublicDev Desarrollado por Luis Hermoso
        </block>

    </footer>
</div>








<style>



	.app {
        display:grid;
        min-height: 100dvh;
        grid-template-rows: 1fr auto;
	}

    main{
        background-color: rgba(50,60,80,1);
    }

</style>
