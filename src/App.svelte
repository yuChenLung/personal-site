<script>
  import Experience from "./pages/Experience.svelte";
  import Profile from "./pages/Profile.svelte";
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
    padding-left: 0;
    padding-top: 4px;
  }
  #menu-1 {
    padding-right: 10px;
    width: 50px;
  }
  #menu-3 {
    padding-left: 15px;
    padding-right: 3px;
  }
</style>

<ul id="menu">
  <li id="menu-1"><a href="/" on:click|preventDefault={() => (menu = "exp")}>Experience</a></li>
  <li id="menu-2"><a href="/" on:click|preventDefault={() => (menu = "prof")}>Yu-Chen Lung</a></li>
  <li id="menu-3"><a href="/" on:click|preventDefault={() => (menu = "proj")}>Projects</a></li>
</ul>
<br>
<hr>

{#if menu == "exp"}
<Experience/>
{:else if menu == "proj"}
<Projects/>
{:else if menu == "prof"}
<Profile/>
{:else}
<h1>Page Not Found</h1>
{/if}