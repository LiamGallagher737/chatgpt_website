<script lang="ts">
    import Chat from "./Chat.svelte";
    import Carousel from "../lib/Carousel.svelte";
    import HeroImages from "../lib/HeroImages.svelte";

    const images = [
        {
            prompt: "Mona Lisa in style of Starry Night",
            src: "images/gallery/primary/mona-lisa.webp",
        },
        {
            prompt: "Futuristic Nike sneaker",
            src: "images/gallery/primary/sneaker.webp",
        },
        {
            prompt: "Hot air balloon, cosmos background",
            src: "images/gallery/primary/hot-air-balloon.webp",
        },
        {
            prompt: "Red, blue, black sneakers marketing",
            src: "images/gallery/primary/sneaker-2.webp",
        },
        {
            prompt: "Starry Night style Central Park painting",
            src: "images/gallery/primary/central-park.webp",
        },
    ];

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

    let currentImage = 0;
    let prompt = "";

    cycleImages();

    async function cycleImages() {
        while (true) {
            let promptIndex = 0;
            const p = images[currentImage].prompt;
            while (promptIndex < p.length) {
                prompt += p.at(promptIndex);
                promptIndex++;
                await sleep(100);
            }

            currentImage++;

            if (currentImage === images.length) {
                currentImage = 0;
            }

            await sleep(2000);

            while (prompt.length > 0) {
                prompt = prompt.slice(0, -1);
                await sleep(25);
            }

            await sleep(250);
        }
    }

    function sleep(ms: number) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    function wrap(num: number): number {
        if (num < 0) {
            return images.length - 1;
        }
        if (num >= images.length) {
            return 0;
        }
        return num;
    }
</script>

<svelte:head>
    <title>Ai Edu | Gallery</title>
</svelte:head>

<section id="images">
    <div id="prompt">
        <span>{prompt}</span>
    </div>

    <div id="primary-images">
        {#each images as image, i}
            <img
                src={image.src}
                alt={image.prompt}
                style="opacity: {wrap(currentImage - 1) === i ? '1' : '0'}"
            />
        {/each}
    </div>
</section>

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
    #prompt {
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.16);
        border-radius: 999px;
        padding: 1rem 1.5rem;
        width: fit-content;
        margin: 0 auto;
        transform: translateY(50%);
        background: white;
        z-index: 10;
        position: relative;
        min-height: 19px;
        text-align: center;
    }

    #primary-images {
        position: relative;
        width: 100%;
        aspect-ratio: 1;
    }

    #primary-images img {
        position: absolute;
        left: 0;
        transition: 1s;
        width: 100%;
        border-radius: 20px;
    }

    #chat {
        display: flex;
        flex-direction: column;
    }

    @media only screen and (min-width: 600px) {
        #primary-images {
            max-width: 600px;
            margin: 0 auto;
        }
    }

    section {
        margin-bottom: 6rem;
    }
</style>
