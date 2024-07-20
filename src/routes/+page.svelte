<script>
    import Header from "$lib/Components/Header.svelte";
    import Logo from "$lib/images/Logo.jpg";
    import Noob from "$lib/Components/InfoNoob.svelte";
</script>

<svelte:head>
	<title>Public</title>
	<meta name="description" content="Public" />
</svelte:head>

<section>
    <Header />

    <div class="container mt-5 p-4">

        <Noob />

    </div>
</section>

<style>
	section {
		justify-content: center;
		align-items: center;
        overflow:hidden;
	}


</style>
