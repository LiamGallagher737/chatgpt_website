<script lang="ts">
    export let name: string;
    export let current_selection: string;
</script>

<button on:click={() => (current_selection = name)}>
    {name}
    <span
        class="link-underline {current_selection === name ? 'selected' : ''}"
    />
</button>

<style>
    span {
        display: block;
        height: 2px;
        width: 100%;
        scale: 0;
        background: black;
        transition: 0.3s;
    }

    button:hover span, button:active span {
        scale: 100%;
    }

    .selected {
        scale: 100%;
    }
</style>
