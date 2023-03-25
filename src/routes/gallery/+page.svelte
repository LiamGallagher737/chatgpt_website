<script lang="ts">
    import GalleryImage from "./GalleryImage.svelte";
    import Chat from "./Chat.svelte";
</script>

<svelte:head>
    <title>Ai Edu | Gallery</title>
</svelte:head>

<section id="chat">
    <Chat
        message="Write an introduction to an essay on global warming"
        reply="Global warming is a complex and pressing issue that has garnered significant attention in recent years. It refers to the gradual increase in the Earth's average surface temperature caused by the release of greenhouse gases, such as carbon dioxide and methane, into the atmosphere. The consequences of global warming are widespread and far-reaching, affecting everything from the environment to human health and the economy. Despite efforts to mitigate its effects, global warming remains a significant challenge that requires urgent action from individuals, organizations, and governments around the world. This essay will explore the causes and effects of global warming and discuss potential solutions to this critical issue."
    />
    <Chat
        message="What are 3 key points I could bring up"
        reply="Definition and types of renewable energy, advantages of renewable energy and challenges to renewable energy adoption"
    />
</section>

<section id="images">
    <GalleryImage
        prompt={"A renaissance painting of an elephant in a tuxedo"}
        url={"images/gallery/tuxedo-elephant.webp"}
    />
    <GalleryImage
        prompt={"mona lisa in the style of starry night"}
        url={"images/gallery/mona-lisa.webp"}
    />
    <GalleryImage
        prompt={"a robot made of analog stereo equipment, digital art"}
        url={"images/gallery/robot.webp"}
    />
    <GalleryImage
        prompt={"Surreal landscape of a man standing in front of a portal to another dimension"}
        url={"images/gallery/portal.webp"}
    />
    <GalleryImage
        prompt={"futuristic nike sneaker, digital art, 3d render"}
        url={"images/gallery/sneaker.webp"}
    />
    <GalleryImage
        prompt={"a mirror monolith standing in the desert, light blue and pink sky, surreal, digital art, photorealistic"}
        url={"images/gallery/monolith.webp"}
    />
</section>

<style>
    #chat {
        display: flex;
        flex-direction: column;
    }

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
