<script lang="ts">
    export let images: {
        prompt: string;
        src: string;
    }[];

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

<div id="prompt">
    <span>{prompt}</span>
</div>

<div class="images">
    {#each images as image, i}
        <img
            src={image.src}
            alt={image.prompt}
            style="opacity: {wrap(currentImage - 1) === i ? '1' : '0'}"
        />
    {/each}
</div>

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
        font-size: 14px;
    }

    .images {
        position: relative;
        width: 100%;
        margin: 0 auto;
        aspect-ratio: 1;
    }

    .images img {
        position: absolute;
        left: 0;
        transition: 1s;
        width: 100%;
        border-radius: 20px;
    }

    @media only screen and (min-width: 400px) {
        .images {
            max-width: 350px;
        }
    }

    @media only screen and (min-width: 900px) {
        .images {
            max-width: 400px;
        }
    }
</style>
