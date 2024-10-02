<script>
    import { fly,fade } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
    import Estetoscopio from "$lib/images/estetoscopio.svg";
    import Tubo from "$lib/images/tubo.svg";
    import Geringa from "$lib/images/geringa.svg";
    import Electro from "$lib/images/eco.svg";
    import Eco from "$lib/images/electro.svg";
    import Presion from "$lib/images/presion.svg";

    let titulo = ["Consulta de Medicina General","Laboratorio de Urgencias","Tratamiento Ambulatorio","Electrocardiograma","Ecografia","Control de Presion Arterial"];
    export let icons;
    export let indice;

</script>


<ul>
{#if indice%2 == 0}
    {#key indice}
        <li class="my-1">
            <div  class="box is-gradient-primary is-clinic-secondary iz" in:fly|global={{duration:3000, x:-400, y:0, opacity:0.5, easing:quintOut}}>
                <article class="media">
                    <div class="media-left">
                        <figure class="image is-64x64 ">
                            <img class="is-rounded" src="{icons}" alt="im" />
                        </figure>
                    </div>
                    <div class="media-content">
                        <div class="content">
                            <p class="has-text-white has-text-centered pt-4">
                                <strong class="is-font-primary">
                                        {titulo[indice]}
                                </strong> 

                            </p>
                        </div>
                    </div>
                </article>
            </div>
        </li>
        {/key}
{:else}
    {#key indice}
        <li>
            <div  class="box is-gradient-secondary is-clinic-secondary der" in:fly|global={{duration:3000, x:400, y:0, opacity:0.5, easing:quintOut}}>
                <article class="media">
                    <div class="media-left">
                        <figure class="image is-64x64 ">
                            <img class="is-rounded" src="{icons}" alt="Ima" />
                        </figure>
                    </div>
                    <div class="media-content">
                        <div class="content">
                            <p class="has-text-white has-text-centered pt-4">
                                <strong class="is-font-primary">{titulo[indice]}</strong> 
                            </p>
                        </div>
                    </div>
                </article>
            </div>
        </li>
        {/key}
{/if}



</ul>




<style>

    .box{
        position:relative !important;
        transition: all 3s !important;
    }
    .iz{
        left:-6% !important;
    }
    .der{
        right:-6% !important;
    }





</style>
