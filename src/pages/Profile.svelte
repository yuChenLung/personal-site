<script>
    import Contact from "./Contact.svelte";
    import profile from "./page-assets/profile.jpg";
    let screenSize;

    let eduOn = false;
    function toggle() {
        eduOn = !eduOn;
    }
</script>

<svelte:window bind:innerWidth={screenSize} />

<style>
    img {
        width: 150px;
        border-radius: 75px;
        margin-right: 30px;
    }
    #mobile-img {
        margin-right: 0;
    }
    h2 {
        line-height: 1.5em;
    }
    div {
        max-width: 100vw;
    }
    #outer {
        padding-top: 10px;
        padding-bottom: 10px;
    }
</style>

{#if screenSize < 450}
<button class="dropdown-section">
    <div id="outer" class="flex-horiz horiz-align-center vert-align-center">
        <img id="mobile-img" src={profile} alt="Yu-Chen Lung"/>
        <div>
            <h2>Yu-Chen Lung</h2>
            Computer Science, B.S.<br>
            <i>2021 - Expected June 2025</i><br>
            University of California, Los Angeles
        </div>
    </div>
    <Contact/>
</button>
{:else}
<button on:click={toggle} class="dropdown-section">
    <div id="outer" class="flex-horiz horiz-align-center vert-align-center">
        <img src={profile} alt="Yu-Chen Lung"/>
        <div class="text-align-left">
            <h2>Yu-Chen Lung</h2>
            Computer Science, B.S.<br>
            <i>2021 - Expected June 2025</i><br>
            University of California, Los Angeles
        </div>
    </div>
    {#if eduOn}
    <h1>Content</h1>
    {/if}
    <Contact/>
</button>
{/if}