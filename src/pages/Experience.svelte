<script>
    export let option = "default";
</script>

<style>

</style>

{#if option == "str" || option == "default"}
<button class="dropdown-section">
    <div>
        <h2>STR</h2>
    </div>
</button>
{:else}
<h2>Does not exist</h2>
{/if}