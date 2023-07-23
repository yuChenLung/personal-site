<script context="module">
  import Experience from "./pages/Experience.svelte";
  import Profile from "./pages/Profile.svelte";
  import Projects from "./pages/Projects.svelte";
  import Device from 'svelte-device-info';
</script>

<style>
  #drop-icon {
    margin-right: 10px;
  }
</style>

<Profile/>
<br>
<h2><i id="drop-icon" class="fa-solid fa-caret-down"></i> Work Experience</h2>
<Experience/>