<script lang="ts">
    let selectedMessage = 0;

    const messages = [
        {
            message:
                "Write a year 11 level introduction for an essay on artificial intelligence",
            response:
                "Artificial Intelligence (AI) has become an increasingly prominent topic in today's technological landscape. From self-driving cars to voice assistants like Siri and Alexa, AI is all around us, and its influence is only growing. As a result, it is essential to understand what AI is, how it works, and its potential impact on our world. In this essay, we will explore the concept of AI, its history, its current applications, and its future implications. We will also examine the ethical considerations surrounding AI, including the potential risks and benefits that it may bring. By the end of this essay, you will have a comprehensive understanding of what AI is, how it works, and the impact it is likely to have on our world.",
        },
        {
            message:
                "Write an introduction in Spanish from a 15-year-old named Bob",
            response:
                "Hola,\n\nMi nombre es Bob y tengo 15 años. Quería presentarme y contarles un poco sobre mí. Soy un estudiante entusiasta que le gusta aprender y explorar nuevas cosas. Me encanta la tecnología y siempre estoy buscando formas de involucrarme en proyectos interesantes.\n\nEstoy muy emocionado de tener la oportunidad de conectarme con personas nuevas y aprender de ellas. Me gustaría explorar diferentes posibilidades y oportunidades en el campo de la tecnología, por lo que estoy dispuesto a escuchar sus consejos y sugerencias.\n\nGracias por su tiempo y consideración, espero tener la oportunidad de hablar con usted pronto.\n\nSaludos cordiales,\nBob",
        },
        {
            message:
                "How did the launch of the iPhone affect Apples share price?",
            response:
                "The release of an innovative, revenue-driving product or service is one of the few ways a company can influence its stock’s valuation. Apple’s financial performance, including the ascendance of iPhone sales, has been a major factor in its stock price increases over the years.\n\nAccording to a Yahoo Finance article, Apple stock typically performed well going into an iPhone launch, with a median price return 90 days prior of 15.6%, which outperformed the 10.9% gain in the S&P 500.\n\nIn addition, according to CCN.com, after every major iPhone reveal, Apple stock price in the two months after an iPhone launch is much more positive. Tracked 60 days after the launch, Apple stock has traded positive nine out of the last 13 launches.",
        },
        {
            message: "Explain AI in simple terms",
            response:
                "AI, or Artificial Intelligence, is the development of computer systems that can perform tasks that typically require human intelligence, such as analyzing data, identifying patterns, and making decisions based on that analysis. Machine Learning is a type of AI that involves training computer systems to learn from data without being explicitly programmed. Natural Language Processing is another type of AI that enables computers to understand and interpret human language. AI has many applications, including in healthcare, finance, and customer service. As AI continues to evolve and improve, it has the potential to transform many aspects of our daily lives.",
        },
        {
            message: "Solve for X in 12 = 2x + 6",
            response:
                "To solve for X in the equation 12 = 2X + 6, we need to isolate X on one side of the equation.\n\nFirst, we will subtract 6 from both sides of the equation to get:\n\n12 - 6 = 2X + 6 - 6\n\nSimplifying, we get:\n\n6 = 2X\n\nNext, we will divide both sides of the equation by 2 to isolate X:\n\n6/2 = 2X/2\n\nSimplifying further, we get:\n\n3 = X\n\nTherefore, the solution to the equation 12 = 2X + 6 is X = 3.",
        },
    ];

    const images = [
        {
            prompt: "Hands holding floating magical planet in detailed cartoon illustration style",
            src: "images/gallery/magical-planet.webp",
        },
        {
            prompt: "A charming illustration of a kawaii-style Shiba Inu dog wearing a traditional japanese samurai armor",
            src: "images/gallery/dog.webp",
        },
        {
            prompt: "Vladimir Putin as Iznogoud, in 13th century Persia",
            src: "images/gallery/putin.webp",
        },
        {
            prompt: "Chevy nova car, minimal vector art",
            src: "images/gallery/chevy.webp",
        },
        {
            prompt: "A house lost in the Scottish moor",
            src: "images/gallery/house.webp",
        },
        {
            prompt: "A highly detailed robotic dinosaur",
            src: "images/gallery/dino.webp",
        },
    ];
</script>

<svelte:head>
    <title>Ai Edu | Gallery</title>
</svelte:head>

<section id="chat">
    <h2>Pick a message</h2>
    <div class="messages">
        {#each messages as message, i}
            <button
                class="user {i === selectedMessage ? 'selected' : ''}"
                type="button"
                on:click={() => (selectedMessage = i)}
            >
                {message.message}
            </button>
        {/each}
    </div>
    {#each messages as message, i}
        {#if i === selectedMessage}
            <p class="bot">
                {message.response}
            </p>
        {/if}
    {/each}
</section>

<section id="images">
    <h2>Here's some images</h2>
    <div class="image-gallery">
        {#each images as image}
            <div class="image">
                <p class="prompt">{image.prompt}</p>
                <img src={image.src} alt={image.prompt} />
            </div>
        {/each}
    </div>
</section>

<style>
    section {
        margin-bottom: 6rem;
    }

    section h2 {
        width: 100%;
        font-size: 2rem;
        font-weight: 700;
        text-align: center;
        margin-top: 60px;
    }

    #chat {
        display: flex;
        flex-direction: column;
    }

    .user,
    .bot {
        border-radius: 1.15rem;
        line-height: 1.25;
        max-width: 75%;
        padding: 0.5rem 0.875rem;
        position: relative;
        word-wrap: break-word;
        margin: 0;
        white-space: pre-line;
    }

    .messages {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .user {
        align-self: flex-end;
        background-color: #248bf5;
        opacity: 0.6;
        transition: 0.3s;
        color: white;
        text-align: right;
    }

    .bot {
        align-items: flex-start;
        background-color: #e5e5ea;
        color: #000;
        margin-top: 2rem;
        text-align: left;
    }

    .selected,
    .user:hover {
        opacity: 1;
    }

    .image-gallery {
        display: grid;
        grid-template-columns: 1fr;
        gap: 2rem;
    }

    .image {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .image p {
        text-align: center;
    }

    .image img {
        width: 100%;
    }

    @media only screen and (min-width: 600px) {
        .image-gallery {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media only screen and (min-width: 700px) {
        section h2 {
            font-size: 2.5rem;
        }
    }

    @media only screen and (min-width: 1000px) {
        .image-gallery {
            grid-template-columns: repeat(3, 1fr);
        }
    }
</style>
