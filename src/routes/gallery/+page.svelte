<script lang="ts">
    import Chat from "./Chat.svelte";
    import Carousel from "../lib/Carousel.svelte";

    const carouselImages = [
        [
            "images/gallery/elephant/0.webp",
            "images/gallery/elephant/1.webp",
            "images/gallery/elephant/2.webp",
            "images/gallery/elephant/3.webp",
            "images/gallery/elephant/4.webp",
            "images/gallery/elephant/5.webp",
            "images/gallery/elephant/6.webp",
            "images/gallery/elephant/7.webp",
        ]
    ];
</script>

<svelte:head>
    <title>Ai Edu | Gallery</title>
</svelte:head>

<section id="carousels">
    <Carousel images={carouselImages[0]} credit="@midjourney.gallery on Instagram" />
</section>

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

<style>
    #chat {
        display: flex;
        flex-direction: column;
    }

    section {
        margin-bottom: 6rem;
    }
</style>
