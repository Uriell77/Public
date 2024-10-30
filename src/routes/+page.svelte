<script>
    import { enhance } from '$app/forms';
    import { scale } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
    import {onMount} from "svelte";
    import Header from "$lib/Components/Header.svelte";
    import Logo from "$lib/images/Logo.jpg";
    import Noob from "$lib/Components/InfoNoob.svelte";
    import Flyer from "$lib/Components/Flyer.svelte";
    import Contacto from '$lib/Components/Contact.svelte';
    import LogoCarga from '$lib/Components/LogoCarga.svelte';
    export let form;

    let load = false;
    let formulario = false;
    let evalReg = false;
    let eye = false;
    let eye2 = false;
    let eye3 = false;

    function eyechange(e){
        console.log(e.target.id)
        if(e.target.id == "password"){
        eye = !eye
        }else if(e.target.id == "repassword"){
        eye2 = !eye2
        }else if(e.target.id == "logpassword"){
        eye3 = !eye3
        }

    }

    function flagChange(e){
        evalReg = !evalReg;
        if(form?.regAnswer == 1){
            setTimeout(()=>{
                evalReg = !evalReg;
                formulario = !formulario;
            },1000)
        }else{
            console.log(form?.regAnswer)
        }
    }


    function entrar(){
        console.log("ter")
    }

    function cambioform(){
        formulario = !formulario;
    }
    function loading(){
        load = !load;
    }
    onMount(()=>{
        setTimeout(()=>{
            loading()},1)
    })



</script>

<svelte:head>
    <title>Public</title>
    <meta name="description" content="Public" />
</svelte:head>



<!--carga -->
{#if load}



<!-- formulario login -->
    {#if !formulario}
        <div class="section py-0 px-0 is-justify-content-center fondo my-0" >
            <div class="columns is-centered has-text-centered is-mobile mx-0">
                <div class="column is-5-desktop is-full-mobile">

                    <div class="box  cajadeform mt-3 has-text-centered is-shadowless"
                    >

                        <h1 
                            in:scale={{ duration:1000, x:500, y:0, opacity:.8}}
                        >Login</h1>
                        <br>

                        <div class="container is-flex is-justify-content-center">
                            <figure class="image is-128x128 mb-5">
                                <!-- svelte-ignore a11y-missing-attribute -->
                                <img
                                    in:scale={{duration:1000, x:-500, y:0, opacity:.8}}
                                    class=" is-centered is-rounded"
                                    src="publicdev.png" />
                            </figure>
                        </div>


                        <form action="?/login" method="POST" use:enhance>



                            <div class="field" 
                                in:scale={{ duration:1000, x:500, y:0, opacity:.8}}
                            >
                                <div class="control is-small ">
                                    <input
                                        class="input  is-small"
                                        type="text"
                                        placeholder="Usuario/Email"
                                        required
                                    />
                                </div>
                            </div>

                            <div class="field"
                                in:scale={{ duration:1000, x:500, y:0, opacity:.8}}
                            >
                                <div class="control is-small ">
                                    <input
                                        class="input  is-small"
                                        type="{eye3?"text":"password"}"
                                        placeholder="Password"
                                        required
                                    />
                                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                                    <!-- svelte-ignore a11y-no-static-element-interactions -->
                                    <span class="icon is-small is-right is-pulled-right eye is-clickable" on:click="{eyechange}">
                                        <ion-icon id="logpassword" name="{eye3 ?"eye-off-outline": "eye-outline"}">
                                    </span>
                                </div>
                            </div>



                            <div class="container is-flex is-justify-content-center pt-5">
                                <div class="buttons">
                                    <button class="button" on:click="{cambioform}">Ir a Registro</button>
                                    <button class="button is-primary is-light" on:click|preventDefault="{entrar}">Ingresar</button>
                                </div>
                            </div>





                        </form>

                    </div>
                </div>
            </div>
        </div>
    {:else}

        <!-- formulario registro -->
        <div class="section py-0 px-0 is-justify-content-center fondo my-0" >
            <div class="columns is-centered has-text-centered is-mobile mx-0">
                <div class="column is-5-desktop is-full-mobile">
                    <div class="box cajadeform has-text-centered is-shadowless"
                    >
                        <h1
                            in:scale={{duration:1000, x:-500, y:0, opacity:.8}}
                        >Registro</h1>
                        <br>

                        <div class="container mt-1 is-flex is-justify-content-center">
                            <figure class="image is-128x128 mb-5">

                                {#if evalReg}
                                    <LogoCarga />
                                {:else}
                                    <!-- svelte-ignore a11y-missing-attribute -->
                                    <img
                                        in:scale={{duration:1000, x:-500, y:0, opacity:.8}}
                                        class=" is-centered is-rounded"
                                        src="publicdev.png" />
                                {/if}
                            </figure>
                        </div>




                        <form action="?/registro" method="POST" use:enhance >



                            <div class="field"
                                in:scale={{duration:1000, x:-500, y:0, opacity:.8}}
                            >
                                <div class="control is-small" >
                                    <input
                                        name="username"
                                        class="input  is-small"
                                        type="text"
                                        placeholder="Username"
                                        required
                                    />
                                </div>
                            </div>

                            <div class="field"
                                in:scale={{duration:1000, x:-500, y:0, opacity:.8}}
                            >
                                <div class="control is-small ">
                                    <input
                                        name="email"
                                        class="input  is-small"
                                        type="text"
                                        placeholder="Email"
                                        required
                                    />
                                </div>
                            </div>

                            <div class="field"
                                in:scale={{duration:1000, x:-500, y:0, opacity:.8}}
                            >
                                <p class="control is-small has-icon-right">
                                    <input
                                        name="password"
                                        class="input  is-small "
                                        type="{eye?"text":"password"}"
                                        placeholder="Password"
                                        required
                                    />
                                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                                    <!-- svelte-ignore a11y-no-static-element-interactions -->
                                    <span class="icon is-small is-right is-pulled-right eye is-clickable" on:click="{eyechange}">
                                        <ion-icon id="password" name="{eye?"eye-off-outline": "eye-outline"}">
                                    </span>
                                </p>
                            </div>

                            <div class="field"
                                in:scale={{duration:1000, x:-500, y:0, opacity:.8}}
                            >
                                <p class="control is-small has-icon-right">
                                    <input
                                        class="input  is-small"
                                        type="{eye2?"text":"password"}"
                                        placeholder="Retype Password"
                                        required
                                    />
                                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                                    <!-- svelte-ignore a11y-no-static-element-interactions -->
                                    <span class="icon is-small is-right is-pulled-right eye is-clickable" on:click="{eyechange}">
                                        <ion-icon id="repassword" name="{eye2 ?"eye-off-outline": "eye-outline"}">
                                    </span>
                                </p>
                            </div>




                            <div class="container is-flex is-justify-content-center pt-5">
                                <div class="buttons">
                                    <button class="button " on:click="{cambioform}">Ir a Login</button>
                                    <button class="button is-primary is-light" type="submit" on:click="{flagChange}">Registrar</button>
                                </div>
                            </div>



                        </form>


                    </div>
                </div>
            </div>
        </div>



    {/if}



{:else}


    <div class="box is-shadowless loading has-text-centered is-justify-content-centered is-flex">
    <LogoCarga />
    </div>

{/if}






<style>
    .eye{
        position:absolute;
        top:12%;
        right:2%;
    }


    .loading{
        background-color:rgba(1,1,1,0);
        position: relative !important;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        width:60%;
        height:30%;
        justify-content:center;
        text-align:center;
    }



    .cajadeform{
        background-color:rgba(1,1,1,0);
        position:relative;
        top:10%;
    }

    .section{
        height:100%;
    }


    .input {
        outline: none;
        background: rgba(1,1,1,0);
        color: white;
        border: 1px solid rgba(255,255,255,.1);
        border-radius: 3px;
        transition: all .7s ease;
    }

    .input:focus {
        background: rgba(10,10,50,.5);
        border-radius: 10px;
        transform:scale(110%);
    }

    .input::placeholder {
        color: rgba(255,255,255,.5);
    }



</style>
