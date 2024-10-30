<script>
    import { fly,fade } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';

    let flaier = [1,2,3,4,5];

    



</script>



<section class="section">


    <div class="columns is-centered is-mobile scroll ">

        {#each flaier as flay,index}
           
        <div class="column is-full is-inline ">
            <div class="card">
                <div class="card-content p-1">
                    <img src="/flyer/{flaier[index]}.jpg" alt="" height="200px">
                </div>
            </div>
        </div>
    {/each}

    </div>



    </section>



<style>


    .scroll{
    overflow:auto !important;
    padding-left:50%;
    }

    .oolumn{
        padding-left:70% !important;
    }

    .columns{
        width:100%;
    }








</style>
