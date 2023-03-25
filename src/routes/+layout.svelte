<script lang="ts">
    import Navbar from "./lib/Navbar.svelte";
    import MobileNavigation from "./lib/MobileNavigation.svelte";
    import Footer from "./lib/Footer.svelte";

    let mobile_nav_open = false;
    let innerWidth = 0;
</script>

<svelte:window bind:innerWidth />

<Navbar bind:mobile_nav_open />

{#if innerWidth < 600}
    <MobileNavigation bind:mobile_nav_open />
{/if}

<main>
    <slot />
</main>

<Footer />

<style>
    main {
        max-width: min(85vw, 1000px);
        margin: 0 auto;
    }
</style>
