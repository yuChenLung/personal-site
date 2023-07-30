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

<h2>Work Experience</h2>
<Experience option="str"/>

<h2>Research Experience</h2>
<Experience option="hscvresearch"/>

<h2>Featured Projects</h2>
<Project option="default"/>

