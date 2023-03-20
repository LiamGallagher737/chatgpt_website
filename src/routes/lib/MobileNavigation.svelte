<script lang="ts">
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
</div>

<style>
    #mobile-navigation {
        width: 100vw;
        height: 100vh;
        position: absolute;
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
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .navbar-title {
        font-size: 1.5rem;
        font-weight: 600;
    }
</style>
