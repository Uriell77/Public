<script>
	import '../app.css';
    import Logo from "$lib/images/Logo.jpg";

</script>



<svelte:head>
	<title>Public</title>
	<meta name="description" content="Public" />
    <link rel="icon" href="{Logo}"/>
</svelte:head>

<div class="app">


	<main>
		<slot />
	</main>

</div>

<style>
	.app {
		min-height: 100vh;
	}

	main {
		width: 100%;
		margin: 0 auto;
	}

</style>
