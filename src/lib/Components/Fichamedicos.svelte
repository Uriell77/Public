<script>
  import { onMount } from "svelte";
  import { scale, fly } from "svelte/transition";
  import { quintOut } from "svelte/easing";

  let load = false;

  function loading() {
    load = !load;
  }

  onMount(() => {
    setTimeout(() => {
      loading();
    }, 1);
  });
</script>

{#if load}
  <div
    class="control mx-0 ficha has-text-centered py-0 my-0 px-0 mt-0"
    in:scale|global={{ duration: 3000 }}
  >
    <div class="columns is-mobile px-0 mt-0">
      <div class="column is-half px-0 mt-0">
        <div class="section mx-0 py-2">
            <div class="block has-text-black has-text-weight-bold">nombre</div>
          <p class="container has-text-black block mx-0">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae,
            ipsa  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Ullam doloremque jkkhkjhkjhkjhkjhjkhkj
            kkklkjalkdsjlkasjdalhjlkjllkjhljhlj
          </p>
        </div>
      </div>
      <div class="column is-half">
        <figure class="image p-0 m-0">
          <img src="/publicdev.png" alt="logo" class="p-0 m-0" />
        </figure>
      </div>
    </div>
  </div>
{/if}

<style>
  .column {
    max-height: 80%;
    position: relative;
  }

  p {
    text-wrap: wrap;
    position: relative;
    overflow-y: scroll;
    overflow-wrap: break-word;
    max-height:22vh;
    max-width:80vw;
  }


    p::-webkit-scrollbar{
        display: none;
    }

  img {
    height: 100%;
    width: 100%;
  }

  .image {
    position: relative;
    width: 90%;
    height: 100%;
    top: 0%;
    right: 0%;
  }

  .ficha {
    background-color: rgb(149, 149, 179);
    border-radius: 10px;
    width: 100%;
    height: 28vh;
    scroll-snap-align: center;
    overflow: hidden;
  }

  @media only screen and (min-width: 768px) {
    .image {
      position: relative;
      width: 90%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

  .ficha {
    background-color: rgb(149, 149, 179);
    border-radius: 10px;
    width: 30%;
    height: 38vh;
    scroll-snap-align: center;
    overflow: hidden;
  }
  }
  /* your styles go here */
</style>
