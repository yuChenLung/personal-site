<script>
  import Experience from "./pages/Experience.svelte";
  import Projects from "./pages/Projects.svelte";

  export let menu = "exp";
</script>

<style>
  ul#menu li {
    display: inline;
  }
  ul#menu {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    list-style-type: none;
    padding: 0;
    background-color: aqua;
  }
</style>

<ul id="menu">
  <li><a href="/" on:click|preventDefault={() => (menu = "exp")}>Experience</a></li> |
  <li><a href="/" on:click|preventDefault={() => (menu = "proj")}>Projects</a></li>
</ul>

{#if menu == "exp"}
<Experience/>
{:else if menu == "proj"}
<Projects/>
{:else}
<h1>Page Not Found</h1>
{/if}