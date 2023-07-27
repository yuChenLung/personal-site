<script context="module">
  import Experience from "./pages/Experience.svelte";
  import Profile from "./pages/Profile.svelte";
  import Project from "./pages/Project.svelte";

  let expOn = true;
  let profOn = true;

  function toggleExp() {
    expOn = !expOn;
    console.log("Toggling! " + expOn);
  }
  function toggleProf() {
    profOn = !profOn;
  }
</script>

<style>
  /* #drop-icon {
    margin-right: 10px;
  } */
  h2 {
    margin: 10px;
  }
</style>

<Profile/>

<!-- <button on:click={toggleExp} class="invis-button"> -->
  <h2><!-- <i id="drop-icon" class="fa-solid fa-caret-down"></i> -->Work Experience</h2>
<!-- </button> -->
<!-- {#if expOn} -->
<Experience option="str"/>
<h2>Research Experience</h2>
<Experience option="hscvresearch"/>
<!-- {/if} -->

<!-- <button on:click={toggleProf} class="invis-button"> -->
  <h2><!-- <i id="drop-icon" class="fa-solid fa-caret-down"></i> -->Featured Projects</h2>
<!-- </button> -->

