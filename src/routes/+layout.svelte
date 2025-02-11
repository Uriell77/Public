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
</div>








<style>



	.app {
        display:grid;
        min-height: 100dvh;
        grid-template-rows: 1fr auto;
        animation: all 2s;
	}

    main{
        background-color: #124542;
        animation: all 2s;
    }

</style>
