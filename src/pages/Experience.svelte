<script>
    let screenSize;
    export let option = "default";
    import ExperienceComponent from "./experience-components/ExperienceComponent.svelte";
    import ExperienceComponentMobile from "./experience-components/ExperienceComponentMobile.svelte";
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
    {#if option == "str" || option == "default"}
    <ExperienceComponentMobile option="str"/>
    {:else if option == "hscvresearch"}
    <ExperienceComponentMobile option="hscvresearch"/>
    {/if}
{:else}
    {#if option == "str" || option == "default"}
    <ExperienceComponent option="str"/>
    {:else if option == "hscvresearch"}
    <ExperienceComponent option="hscvresearch"/>
    {/if}
{/if}

