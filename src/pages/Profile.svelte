<script>
    import Contact from "./Contact.svelte";
    import profile from "./page-assets/profile.jpg";
    let screenSize;
    $: screenSize, console.log("screenSize: " + screenSize);
</script>

<svelte:window bind:innerWidth={screenSize} />

<style>
    img {
        width: 150px;
        border-radius: 75px;
        margin-right: 30px;
    }
    h2 {
        line-height: 0.5em;
    }
    div {
        max-width: 100vw;
    }
    #outer {
        padding-top: 10px;
        padding-bottom: 10px;
    }
</style>

<button class="dropdown-section">
    <div id="outer" class="flex-horiz horiz-align-center vert-align-center">
        <img src={profile} alt="Yu-Chen Lung"/>
        <div class="text-align-left">
            <h2>Yu-Chen Lung</h2>
            Computer Science, B.S.<br>
            <i>2021 - Expected June 2025</i><br>
            University of California, Los Angeles
        </div>
    </div>
    <Contact/>
</button>