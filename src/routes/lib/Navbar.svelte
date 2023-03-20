<script lang="ts">
    export let mobile_nav_open: Boolean;
    let innerWidth = 0;
    let scrollY = 0;
</script>

<svelte:window bind:innerWidth bind:scrollY />

<div class="navbar">
    <span class="navbar-title">AI EDU</span>
    <div class="nav-items">
        {#if innerWidth < 720}
            <button on:click={() => mobile_nav_open = true}>
                <img src="icons/hamburger.svg" alt="Open Menu" />
            </button>
        {:else}
            <a href="#placeholder">Home</a>
            <a href="#placeholder">Page 2</a>
            <a href="#placeholder">Page 3</a>
        {/if}
    </div>
</div>

<style>
    .navbar {
        width: calc(100% - 40px);
        height: 72px;
        padding: 0 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .navbar-title {
        font-size: 1.5rem;
        font-weight: 600;
    }
</style>
