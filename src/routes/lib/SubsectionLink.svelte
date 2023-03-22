<script lang="ts">
    import Link from "./Link.svelte";

    export let name: string;
    export let selection: string;
</script>

<button on:click={() => (selection = name)}>
    <Link {name} active={selection === name} />
</button>
