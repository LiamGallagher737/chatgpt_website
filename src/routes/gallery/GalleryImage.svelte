<script lang="ts">
    export let prompt: string;
    export let url: string;
</script>

<div class="gallery-image">
    <img src={url} alt={prompt} loading="lazy" />
    <span class="prompt">{prompt}</span>
</div>

<style>
    .gallery-image {
        position: relative;
        text-align: center;
    }

    img {
        width: 100%;
        transition: 0.3s;
    }

    .prompt {
        opacity: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 80%;
        font-size: 1.4rem;
        font-weight: 600;
        transition: 0.3s;
    }

    .gallery-image:hover img {
        opacity: 0.2;
    }

    .gallery-image:hover .prompt {
        opacity: 1;
    }
</style>
