<script> 
import {onMount,afterUpdate} from 'svelte';
export let mess = false;
export let mensaje = "mensaje";

function delmod(){
  mess = !mess;
}

afterUpdate(()=>{
if(mess){
  setTimeout(()=>{
    delmod()
  },5000)
}
})


</script>



<article class="message is-primary {mess? '':'is-hidden'}">
  <div class="message-header">
    {mensaje}
    <button class="delete" aria-label="delete" on:click="{delmod}"></button>
  </div>
</article>




<style>

    .message{
        position:absolute !important;
        bottom: 0%;
        z-index:100;
    }
</style>