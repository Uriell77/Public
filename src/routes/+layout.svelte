<script>
    import { page } from '$app/stores';
    import {onMount} from "svelte";
	import '../app.css';

	
</script>



<svelte:head>
    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
</svelte:head>

<div class="app">

	<main class="mb-0 mx-0">
		<slot />
	</main>
    <footer class="hero is-small is-black py-3 mt-0 my-0">
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
        animation: all 2s;
        scroll-behavior: smooth;
	}

    main{
        background-color: rgb(42, 63, 68);
        animation: all 2s;
        scroll-behavior: smooth;
    }

</style>
