<script lang="ts">
    import Link from "./Link.svelte";
    import { navlinks } from "./navlinks";

    export let mobile_nav_open: Boolean;
</script>

<div id="tint" class={mobile_nav_open ? "active" : ""} />
<div id="mobile-navigation" class={mobile_nav_open ? "open" : ""}>
    <div class="navbar">
        <span class="navbar-title">AI EDU</span>
        <button on:click={() => (mobile_nav_open = false)}>
            <img src="icons/close.svg" alt="Close Menu" />
        </button>
    </div>
    <ul class="links">
        {#each $navlinks as link}
            <li>
                <a href={link.url} on:click={() => (mobile_nav_open = false)}>
                    <Link
                        name={link.name}
                    />
                </a>
            </li>
        {/each}
    </ul>
</div>

<style>
    #mobile-navigation {
        width: 100vw;
        height: 100vh;
        position: fixed;
        background: white;
        z-index: 100;
        top: 0;
        left: 100vw;
        transition: 0.5s;
    }

    #tint {
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        transition: 0.3s;
        z-index: 50;
        pointer-events: none;
    }

    .open {
        left: 0 !important;
    }

    .active {
        background: rgba(0, 0, 0, 0.6);
    }

    .navbar {
        width: calc(100% - 40px);
        height: 72px;
        padding: 0 20px;
        position: fixed;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .navbar-title {
        font-size: 1.5rem;
        font-weight: 600;
    }

    .links {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 3rem;
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .links a {
        text-decoration: none;
        font-size: 2rem;
        color: black;
    }
</style>
