<script>
    export let option = "default";
    let screenSize;
</script>

<svelte:window bind:innerWidth={screenSize} />

{#if screenSize < 450}
<style>
    .teaser-head {
        margin-left: 30px;
        margin-right: 20px;
        text-align: center;
    }
    .teaser-content {
        margin-left: 20px;
        max-width: 420px;
        text-align: center;
    }
    .icon-img {
        width: 120px;
        margin-top: 5px;
    }
    h2 {
        line-height: 1.5em;
        padding: 0;
        margin: 0;
    }
    div {
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .dropdown-section {
        border-radius: 8px;
        border: 1px solid transparent;
        padding: 0.6em 1.2em;
        margin: 0.6em;
        font-size: 1em;
        font-family: inherit;
        cursor: pointer;
        transition: border-color 0.25s;
        min-width: 40vw;
        max-width: 800px;
    }
</style>
{:else}
<style>
    .teaser-head {
        margin-left: 30px;
        margin-right: 20px;
    }
    .teaser-content {
        margin-left: 20px;
        max-width: 420px;
    }
    .icon-img {
        width: 120px;
    }
    h2 {
        line-height: 1.5em;
        padding: 0;
        margin: 0;
    }
    div {
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .dropdown-section {
        border-radius: 8px;
        border: 1px solid transparent;
        padding: 0.6em 1.2em;
        margin: 0.6em;
        font-size: 1em;
        font-family: inherit;
        cursor: pointer;
        transition: border-color 0.25s;
        min-width: 40vw;
        max-width: 800px;
    }
</style>
{/if}

{#if option == "default"}
<button class="dropdown-section">
    <div class="flex-horiz vert-align-center horiz-align-center">
        <!-- <img class="icon-img" src={strlogo} alt="STR's logo"/> -->
        <div class="teaser-head flex-vert text-align-left">
            <h2>STR</h2>
            SWE Intern
            <i>June-August 2023</i>
            <i>San Diego, CA</i>
        </div>
        <!-- <div class="vl"></div> -->
        <div class="teaser-content flex-vert text-align-left">
            Worked on autonomous tactic drone swarm project based on DARPA distributed-system architecture. Developed swarm tactics in Java and created testing regimes to increase system robustness.
        </div>
    </div>
</button>
{:else}
<h2>Does not exist</h2>
{/if}