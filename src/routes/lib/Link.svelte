<script lang="ts">
    export let name: string;
    export let active: Boolean = false;
</script>

<span class="link">
    {name}
    <span class="underline {active ? 'active' : ''}" />
</span>

<style>
    .underline {
        display: block;
        height: 2px;
        width: 100%;
        scale: 0;
        background: black;
        transition: 0.3s;
    }

    .link:hover .underline,
    .active {
        scale: 100%;
    }
</style>
