<script lang="ts">
    import GalleryImage from "./GalleryImage.svelte";
</script>

<section id="images">
    <GalleryImage
        prompt={"a cute shiba inu astronaut in a red and white space suit, yellow background, digital art"}
        url={"images/gallery/shiba-inu.webp"}
    />
    <GalleryImage
        prompt={"A renaissance painting of an elephant in a tuxedo"}
        url={"images/gallery/tuxedo-elephant.webp"}
    />
</section>

<style>
    #images {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
</style>
