<script lang="ts">
    import Link from "./Link.svelte";
    import { page } from "$app/stores";
    import { navlinks } from "./navlinks";

    export let mobile_nav_open: Boolean;

    let innerWidth = 0;
    let scrollY = 0;
</script>

<svelte:window bind:innerWidth bind:scrollY />

<div class="nav-container {scrollY > 10 ? 'shadow' : ''}">
    <nav class="navbar">
        <a href="/" class="navbar-title nav-link">AI EDU</a>
        <div class="nav-items">
            {#if innerWidth < 680}
                <button on:click={() => (mobile_nav_open = true)}>
                    <img src="icons/hamburger.svg" alt="Open Menu" />
                </button>
            {:else}
                <div class="nav-links">
                    {#each $navlinks as link}
                        <a href={link.url} class="nav-link">
                            <Link
                                name={link.name}
                                active={$page.route.id === link.url}
                            />
                        </a>
                    {/each}
                </div>
            {/if}
        </div>
    </nav>
</div>

<style>
    .nav-container {
        position: sticky;
        top: 0;
        width: 100%;
        background: white;
        z-index: 500;
        transition: 0.3s;
    }

    .navbar {
        position: sticky;
        top: 0;
        width: calc(100% - 40px);
        max-width: 1100px;
        margin: 0 auto;
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

    .nav-links {
        display: flex;
        gap: 2rem;
    }

    .nav-link {
        color: black;
        text-decoration: none;
    }

    .shadow {
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    }
</style>
