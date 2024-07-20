<script>
    import {onMount} from "svelte";
    import { fly } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
    import Estetoscopio from "$lib/images/estetoscopio.svg";
    import Tubo from "$lib/images/tubo.svg";
    import Geringa from "$lib/images/geringa.svg";
    import Electro from "$lib/images/eco.svg";
    import Eco from "$lib/images/electro.svg";
    import Presion from "$lib/images/presion.svg";
    import Noob from '$lib/Components/Noob.svelte';

    let iconos = [Estetoscopio,Tubo,Geringa,Electro,Eco,Presion];
    let titulo = ["Consulta de Medicina General","Laboratorio de Urgencias","Tratamiento Ambulatorio","Electrocardiograma","Ecografia","Control de Presion Arterial"];
    let load = false;

    function loading(){
        load = !load;
    }
    onMount(()=>{
        setTimeout(()=>{
            loading()},1000)
    })
</script>



{#if load}
    {#each iconos as icon,index}
            <Noob icons={icon} indice={index}/>
    {/each}
{/if}





<style>
</style>
