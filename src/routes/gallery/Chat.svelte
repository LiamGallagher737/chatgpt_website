<!-- https://codepen.io/AllThingsSmitty/pen/jommGQ -->
<script lang="ts">
    export let message: string;
    export let reply: string;
</script>

<p class="user">{message}</p>
<p class="bot">{reply}</p>

<style>
    p {
        border-radius: 1.15rem;
        line-height: 1.25;
        max-width: 75%;
        padding: 0.5rem 0.875rem;
        position: relative;
        word-wrap: break-word;
    }

    .user {
        align-self: flex-end;
        background-color: #248bf5;
        color: #fff;
    }

    .bot {
        align-items: flex-start;
        background-color: #e5e5ea;
        color: #000;
    }
</style>
