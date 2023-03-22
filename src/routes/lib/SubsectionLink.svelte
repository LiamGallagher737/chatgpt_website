<script lang="ts">
    import Link from "./Link.svelte";

    export let name: string;
    export let current_selection: string;
</script>

<button on:click={() => (current_selection = name)}>
    <Link name={name} active={current_selection === name} />
</button>
