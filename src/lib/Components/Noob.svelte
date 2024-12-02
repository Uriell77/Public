<script>
    import { fly,fade } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
    import Estetoscopio from "$lib/images/estetoscopio.svg";
    import Tubo from "$lib/images/tubo.svg";
    import Geringa from "$lib/images/geringa.svg";
    import Electro from "$lib/images/eco.svg";
    import Eco from "$lib/images/electro.svg";
    import Presion from "$lib/images/presion.svg";

  let iconos = [Estetoscopio, Tubo, Geringa, Electro, Eco, Presion];

    export let product;
    export let indice;

</script>


<ul>
{#if indice%2 == 0}
    {#key indice}
        <li class="my-1 info" id="info">
            <div  class="box is-clickable is-gradient-primary is-clinic-secondary iz" in:fly|global={{duration:3000, x:-400, y:0, opacity:0.5, easing:quintOut}}>
                <article class="media">
                    <div class="media-left">
                        <figure class="image is-64x64 ">
                            <img class="is-rounded" src="{iconos[indice]}" alt="im" />
                        </figure>
                    </div>
                    <div class="media-content">
                        <div class="content">
                            <p class="has-text-white has-text-centered pt-4">
                                <strong class="is-font-primary is-size-6">
                                        {product.productname}
                                </strong> 

                                <br>
                                {product.productdescription}

                            </p>
                        </div>
                    </div>
                </article>
            </div>
        </li>
        {/key}
{:else}
    {#key indice}
        <li class="my-1 info" id="info">
            <div  class="box is-clickable is-gradient-primary is-clinic-primary der" in:fly|global={{duration:3000, x:400, y:0, opacity:0.5, easing:quintOut}}>
                <article class="media">
                    <div class="media-left">
                        <figure class="image is-64x64 is-pulled-right ">
                            <img class="is-rounded" src="{iconos[indice]}" alt="Ima" />
                        </figure>
                    </div>
                    <div class="media-content">
                        <div class="content">
                            <p class="has-text-white has-text-centered pt-4">
                                <strong class="is-font-primary is-size-6">
                                    {product.productname}
                                </strong> 
                                <br>
                                {product.productdescription}
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

    strong{
        overflow:visible;
    }

    .ul{
        animation: all 2s;

    }

    .box{
        min-height: 15rem;
        position:relative !important;
        transition: all 3s !important;
    }
    .iz{
        left:0% !important;
    }
    .der{
        right:0% !important;
    }




    @media only screen and (max-width: 768px) {
    .media{
        display:grid;
        grid-template-rows: 1fr auto;
    }

}


</style>
