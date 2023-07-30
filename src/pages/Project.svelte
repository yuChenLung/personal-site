<script>
    import ProjectComponent from "./project-components/ProjectComponent.svelte";
    import ProjectComponentMobile from "./project-components/ProjectComponentMobile.svelte";

    export let option = "default";
    let screenSize;

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

{#if screenSize < 450 || isMobile}
    {#if option == "default" || option == "chipin"}
    <ProjectComponentMobile option="chipin"/>
    {/if}
{:else}
    {#if option == "default" || option == "chipin"}
    <ProjectComponent option="chipin"/>
    {/if}
{/if}