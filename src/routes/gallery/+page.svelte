<script lang="ts">
    import GalleryImage from "./GalleryImage.svelte";
</script>

<section id="images">
    <GalleryImage
        prompt={"A renaissance painting of an elephant in a tuxedo"}
        url={"images/gallery/tuxedo-elephant.webp"}
    />
    <GalleryImage
        prompt={"a cute shiba inu astronaut in a red and white space suit, yellow background, digital art"}
        url={"images/gallery/shiba-inu.webp"}
    />
    <GalleryImage
        prompt={"mona lisa in the style of starry night"}
        url={"images/gallery/mona-lisa.webp"}
    />
</section>

<style>
    #images {
        display: grid;
        gap: 2rem;
        grid-template-columns: 1fr;
    }

    @media only screen and (min-width: 600px) {
        #images {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media only screen and (min-width: 1000px) {
        #images {
            grid-template-columns: repeat(3, 1fr);
        }
    }
</style>
