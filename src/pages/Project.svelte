<script>
    import ProjectComponent from "./project-components/ProjectComponent.svelte";
    import ProjectComponentMobile from "./project-components/ProjectComponentMobile.svelte";

    export let option = "default";
    let screenSize;
</script>

<svelte:window bind:innerWidth={screenSize} />

{#if screenSize < 450}
    {#if option == "default" || option == "chipin"}
    <ProjectComponentMobile option="chipin"/>
    {/if}
{:else}
    {#if option == "default" || option == "chipin"}
    <ProjectComponent option="chipin"/>
    {/if}
{/if}