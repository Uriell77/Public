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



{#if indice%2 == 0}
    {#key indice}
            <div  class="box is-clinic-secondary iz" in:fly|global={{duration:3000, x:-400, y:0, opacity:0.5, easing:quintOut}}>
                <article class="media">
                    <div class="media-left">
                        <figure class="image is-64x64 ">
                            <img class="is-rounded" src="{icons}" alt="im" />
                        </figure>
                    </div>
                    <div class="media-content">
                        <div class="content ">
                            <p class="">
                                <strong class="is-font-primary">
                                        {titulo[indice]}
                                </strong> 

                                <br />
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                                efficitur sit amet massa fringilla egestas. Nullam condimentum luctus
                                turpis.
                            </p>
                        </div>
                    </div>
                </article>
            </div>
        {/key}
{:else}
    {#key indice}
            <div  class="box is-clinic-secondary der" in:fly|global={{duration:3000, x:400, y:0, opacity:0.5, easing:quintOut}}>
                <article class="media">
                    <div class="media-left">
                        <figure class="image is-64x64 ">
                            <img class="is-rounded" src="{icons}" alt="Ima" />
                        </figure>
                    </div>
                    <div class="media-content">
                        <div class="content">
                            <p>
                                <strong class="is-font-primary">{titulo[indice]}</strong> 
                                <br />
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                                efficitur sit amet massa fringilla egestas. Nullam condimentum luctus
                                turpis.
                            </p>
                        </div>
                    </div>
                </article>
            </div>
        {/key}
{/if}


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
