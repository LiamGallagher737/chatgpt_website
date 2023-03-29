<script lang="ts">
    export let images: string[];
    export let slideInterval = 2000;
    export let credit = "";
    let currentIndex = 0;
    let transitionDuration = 500;
    let isSliding = false;

    function previousImage() {
        if (isSliding) return;
        isSliding = true;
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        }
        setTimeout(() => {
            isSliding = false;
        }, transitionDuration);
    }

    function nextImage() {
        if (isSliding) return;
        isSliding = true;
        currentIndex++;
        if (currentIndex >= images.length) {
            currentIndex = 0;
        }
        setTimeout(() => {
            isSliding = false;
        }, transitionDuration);
    }

    // Automatic slideshow
    let intervalId: number | null = null;

    function startSlideShow() {
        intervalId = setInterval(nextImage, slideInterval);
    }

    function stopSlideShow() {
        if (intervalId === null) {
            return;
        }
        clearInterval(intervalId);
    }

    startSlideShow();
</script>

<div class="carousel">
    <div
        class="slides"
        style="transform: translateX(-{currentIndex *
            100}%); transition: transform {transitionDuration}ms"
        on:transitionend={stopSlideShow}
    >
        {#each images as image, i}
            <img src={image} alt={`Image ${i}`} />
        {/each}
    </div>
    <div class="controls">
        <button on:click={previousImage} class="previous"
            ><img src="icons/next.svg" alt="" /></button
        >
        <button on:click={nextImage} class="next"
            ><img src="icons/next.svg" alt="" /></button
        >
    </div>
    <span class="credit">Credit: {credit}</span>
</div>

<style>
    .carousel {
        position: relative;
        width: 100%;
        height: 500px;
        overflow: hidden;
        border-radius: 20px;
    }

    .slides {
        display: flex;
        height: 100%;
    }

    img {
        flex-shrink: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .controls {
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        transform: translateY(-50%);
    }

    button {
        background-color: transparent;
        border: none;
        padding: 8px;
        margin: 0 8px;
        cursor: pointer;
        color: #fff;
        font-size: 20px;
    }

    button img {
        width: 2rem;
        filter: invert(1);
    }

    .previous {
        transform: rotate(180deg);
    }

    .credit {
        position: absolute;
        left: 15px;
        bottom: 5px;
        color: white;
        font-size: 0.8rem;
    }

    @media only screen and (min-width: 450px) {
        .credit {
            font-size: 1rem;
        }
    }

    @media only screen and (min-width: 800px) {
        .carousel {
            height: 700px;
        }
    }
</style>
