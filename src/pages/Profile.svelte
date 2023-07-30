<script>
    import Contact from "./Contact.svelte";
    import profile from "./page-assets/profile.jpg";
    let screenSize;

    let eduOn = false;
    function toggle() {
        eduOn = !eduOn;
    }

    import { onMount } from 'svelte';

    let isMobile = false;
    function detectMobileUserAgent() {
        const userAgent = navigator.userAgent.toLowerCase();
        return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
    }
    onMount(() => {
        isMobile = detectMobileUserAgent();
    });
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
    #extra-content {
        margin-top: 10px;
    }
    #extra-list {
        text-align: left;
        columns: 2;
        column-gap: 40px;
    }
    #mobile-extra-list {
        text-align: left;
    }
</style>

{#if screenSize < 450 || isMobile}
<button on:click={toggle} class="profile-dropdown-section">
    <div id="outer" class="flex-horiz horiz-align-center vert-align-center">
        <img id="mobile-img" src={profile} alt="Yu-Chen Lung"/>
        <div>
            <h2>Yu-Chen Lung</h2>
            Computer Science, B.S.<br>
            <i>2021 - Expected June 2025</i><br>
            University of California, Los Angeles
        </div>
    </div>
    {#if eduOn}
    <div id="extra-content">
        <b>Relevant Coursework</b>
        <ul id="mobile-extra-list">
            <li>Data Structures and Algorithms</li>
            <li>Operating Systems Principles</li>
            <li>Programming Languages</li>
            <li>Computer Network Fundamentals</li>
            <li>Fundamentals of AI</li>
            <li>Computer Systems Architecture</li>
            <li>Software Construction</li>
            <li>Intro to Electrical Engineering</li>
        </ul>
    </div>
    {/if}
    <Contact/>
</button>
{:else}
<button on:click={toggle} class="profile-dropdown-section">
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
        <div class="horiz-align-center"><div id="extra-content">
            <b>Relevant Coursework</b>
            <div class="flex-horiz">
                <ul id="extra-list">
                    <li>Data Structures and Algorithms</li>
                    <li>Operating Systems Principles</li>
                    <li>Programming Languages</li>
                    <li>Computer Network Fundamentals</li>
                    <li>Fundamentals of AI</li>
                    <li>Computer Systems Architecture</li>
                    <li>Software Construction</li>
                    <li>Intro to Electrical Engineering</li>
                </ul>
            </div>
            
        </div></div>
        {/if}
    
    <Contact/>
</button>
{/if}