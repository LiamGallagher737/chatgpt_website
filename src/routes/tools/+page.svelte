<svelte:head>
    <title>Ai Edu | Tools</title>
</svelte:head>

<section id="chatbot">
    <div class="content">
        <h2 class="header">Chat Bots</h2>
        <p>
            Ai chatbots like OpenAI's Chat-GPT are capable of simulating human conversation,
            you can ask them questions or even ask them to write you an essay!
        </p>
        <div class="links">
            <a href="https://openai.com/blog/chatgpt" target="_blank">ChatGPT</a
            >
            <a
                href="https://www.bing.com/search?q=Bing+AI&showconv=1&FORM=hpcodx"
                target="_blank">Bing Chat</a
            >
            <a href="https://bard.google.com/" target="_blank">Bard</a>
        </div>
    </div>
    <img src="images/tools/chatbot.webp" alt="Person using a chatbot" />
</section>

<section id="image-generation">
    <div class="content">
        <h2 class="header">Image Generators</h2>
        <p>
            Ai image generators can create realistic or stylistic from scratch, with
            applications in art, design, gaming, and advertising. They can also enhance
            image resolution and modify images.
        </p>
        <div class="links">
            <a href="https://openai.com/product/dall-e-2" target="_blank"
                >DALLE 2</a
            >
            <a href="https://www.bing.com/images/create" target="_blank"
                >Image Creator</a
            >
            <a
                href="https://docs.midjourney.com/docs/quick-start"
                target="_blank">Midjourney</a
            >
            <a href="https://firefly.adobe.com/" target="_blank">Firefly</a>
        </div>
    </div>
    <img src="images/tools/artwork.webp" alt="Artwork" />
</section>

<section id="voice-generation">
    <div class="content">
        <h2 class="header">Voices</h2>
        <p>
            Ai tools like Altered can transform your voice into a different character,
            perfect for story telling. Or maybe you want to improve the quality of
            your audio, Adobe podcast can make your audio sound professional.
        </p>
        <div class="links">
            <a href="https://www.altered.ai/" target="_blank">Altered</a>
            <a href="https://podcast.adobe.com/" target="_blank"
                >Adobe Podcast</a
            >
        </div>
    </div>
    <img src="images/tools/speaking.webp" alt="Person Speaking" />
</section>

<style>
    .header {
        width: 100%;
        font-size: 2rem;
        font-weight: 700;
        text-align: center;
        margin-top: 60px;
        display: flex;
        flex-direction: column;
    }

    .links {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1rem;
        margin: 1rem auto;
        justify-content: center;
    }

    a {
        padding: 0.5rem 1rem;
        border-radius: 999px;
        border-width: 2px;
        border-color: black;
        border-style: solid;
        display: block;
        width: fit-content;
        color: black;
        text-decoration: none;
        transition: 0.3s;
    }

    a:hover,
    a:focus {
        background: black;
        color: white;
    }

    img {
        max-width: min(100%, 400px);
        margin: 0 auto;
        display: block;
    }

    @media only screen and (min-width: 450px) {
        p {
            text-align: center;
            max-width: 500px;
            margin: 0 auto;
        }
    }

    @media only screen and (min-width: 800px) {
        section {
            display: flex;
            flex-direction: row-reverse;
            gap: 2rem;
            margin-top: 6rem;
            align-items: center;
        }

        img {
            max-width: 300px;
        }

        p,
        .header {
            text-align: left;
        }

        .header {
            margin-top: 0;
        }

        .links {
            justify-content: left;
            margin-bottom: 0;
        }
    }

    @media only screen and (min-width: 1000px) {
        img {
            max-width: 400px;
        }
    }
</style>
