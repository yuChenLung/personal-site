<script>
    import ProjectComponent from "./project-components/ProjectComponent.svelte";
    import ProjectComponentMobile from "./project-components/ProjectComponentMobile.svelte";

    export let option = "default";
    let screenSize;
</script>

<svelte:window bind:innerWidth={screenSize} />

{#if screenSize < 450}
    {#if option == "default"}
    <ProjectComponentMobile option="default"/>
    {/if}
{:else}
    {#if option == "default"}
    <ProjectComponent option="default"/>
    {/if}
{/if}