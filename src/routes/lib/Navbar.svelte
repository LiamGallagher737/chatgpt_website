<script lang="ts">
    import Link from "./Link.svelte";

    export let mobile_nav_open: Boolean;

    import { navlinks } from "./navlinks";
    let links: { name: string; url: string }[];

    navlinks.subscribe((value) => {
        links = value;
    });

    let innerWidth = 0;
    let scrollY = 0;
</script>

<svelte:window bind:innerWidth bind:scrollY />

<div class="navbar">
    <span class="navbar-title">AI EDU</span>
    <div class="nav-items">
        {#if innerWidth < 450}
            <button on:click={() => (mobile_nav_open = true)}>
                <img src="icons/hamburger.svg" alt="Open Menu" />
            </button>
        {:else}
            <div class="nav-links">
                {#each links as link}
                    <a href={link.url} class="nav-link">
                        <Link name={link.name} />
                    </a>
                {/each}
            </div>
        {/if}
    </div>
</div>

<style>
    .navbar {
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
</style>
