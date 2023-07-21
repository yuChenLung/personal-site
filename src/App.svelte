<script>
  import Experience from "./pages/Experience.svelte";
  import Profile from "./pages/Profile.svelte";
  import Projects from "./pages/Projects.svelte";
  import Footer from "./pages/Footer.svelte";

  export let menu = "prof";
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
  }
  #menu-3 {
    padding-left: 10px;
    padding-right: 8px;
  }
</style>

<head>
  <link href="./../node_modules/@fortawesome/fontawesome-free/css/all.min.css" rel="stylesheet">
</head>

<ul id="menu">
  <li id="menu-1">
    <a href="/" on:click|preventDefault={() => (menu = "exp")}>
      {#if menu == "exp"}
      <u>Experience</u>
      {:else}
      Experience
      {/if}
    </a>
  </li>
  <li id="menu-2">
    <a href="/" on:click|preventDefault={() => (menu = "prof")}>
      {#if menu == "prof"}
      <u>Profile</u>
      {:else}
      Profile
      {/if}
    </a>
  </li>
  <li id="menu-3">
    <a href="/" on:click|preventDefault={() => (menu = "proj")}>
      {#if menu == "proj"}
      <u>Projects</u>
      {:else}
      Projects
      {/if}
    </a>
  </li>
</ul>
<br>
<hr>

{#if menu == "exp"}
<h1>Experience</h1>
<Experience/>
{:else if menu == "proj"}
<h1>Projects</h1>
<Projects/>
{:else if menu == "prof"}
<Profile/>
{:else}
<h1>Page Not Found</h1>
{/if}
<Footer/>