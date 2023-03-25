<script lang="ts">
    import Link from "./Link.svelte";

    export let name: string;
    export let selection: string;

    function scrollIntoView({ target }: { target: any }) {
        target.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center",
        });
    }
</script>

<button on:click={() => (selection = name)} on:click={scrollIntoView}>
    <Link {name} active={selection === name} />
</button>
