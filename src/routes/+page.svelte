<script lang="ts">
    import Card from "./lib/Card.svelte";
    import HeroImages from "./lib/HeroImages.svelte";
    import SubsectionLink from "./lib/SubsectionLink.svelte";
    import TryIt from "./lib/TryIt.svelte";

    let text_section = "Feedback";
    let image_section = "Visualize";

    const images = [
        {
            prompt: "Mona Lisa in style of Starry Night",
            src: "images/home/hero/mona-lisa.webp",
        },
        {
            prompt: "Futuristic Nike sneaker",
            src: "images/home/hero/sneaker.webp",
        },
        {
            prompt: "Hot air balloon, cosmos background",
            src: "images/home/hero/hot-air-balloon.webp",
        },
        {
            prompt: "Red, blue, black sneakers marketing",
            src: "images/home/hero/sneaker-2.webp",
        },
        {
            prompt: "Starry Night style Central Park painting",
            src: "images/home/hero/central-park.webp",
        },
    ];
</script>

<svelte:head>
    <title>Ai Edu</title>
</svelte:head>

<div class="hero">
    <h1 class="title">A new age of education</h1>
    <div class="hero-img-container">
        <!-- <img class="hero-img" src="images/home/hero.webp" alt="Ai generated" /> -->
        <HeroImages images={images} />
    </div>
</div>

<section id="about">
    <div class="content">
        <h2 class="header">What is AI?</h2>
        <p>
            AI is a type of technology that is designed to do things that
            usually require a human, such as solving problems and making
            decisions. It's like a smart robot that can learn new things and
            think on its own. AI is becoming more important in many areas of our
            lives, including education. This technology has the potential to
            change the way we learn and teach in the future.
        </p>
    </div>
    <img src="images/home/robot.webp" alt="Robot" />
</section>

<section id="text-generation">
    <h2 class="header">Text Generation</h2>
    <div class="subsection-links">
        <SubsectionLink name="Feedback" bind:selection={text_section} />
        <SubsectionLink name="Planning" bind:selection={text_section} />
        <SubsectionLink name="Research" bind:selection={text_section} />
    </div>

    <div class="cards">
        {#if text_section === "Feedback"}
            <Card
                title="Instant Feedback"
                description="AI can read over a students work and find areas for them to improve on"
                image="images/home/text-generation/feedback.webp"
                href="opportunities#feedback"
            />
            <Card
                title="Motivate Students"
                description="Feedback builds confidence in students abilities and increase their desire to learn more"
                image="images/home/text-generation/modivate.webp"
                href="opportunities#feedback"
            />
        {/if}
        {#if text_section === "Planning"}
            <Card
                title="Creating Assessments"
                description="Input a topics you want to assess, and AI can generate a set of questions that align with your objectives"
                image="images/home/text-generation/assessment.webp"
                href="opportunities#planning"
            />
            <Card
                title="Lesson Plans"
                description="Provide some information about a topic and learning goals and AI can generate a comprehensive lesson plan"
                image="images/home/text-generation/plan.webp"
                href="opportunities#planning"
            />
        {/if}
        {#if text_section === "Research"}
            <Card
                title="Gathering Information"
                description="AI can assist in gathering information about a topic by summarizing articles, papers, and other sources"
                image="images/home/text-generation/research.webp"
                href="opportunities#research"
            />
            <Card
                title="Generating Citations"
                description="AI can help students and teachers generate citations for their research papers and other assignments"
                image="images/home/text-generation/plan.webp"
                href="opportunities#research"
            />
        {/if}
    </div>
</section>

<section id="quick-generation">
    <div>
        <h2>It's fast!</h2>
        <p>Generate text instantaneously and images in seconds</p>
    </div>
    <img
        src="images/home/stopwatch.webp"
        alt="ai generated stopwatch"
        loading="lazy"
    />
</section>

<section id="image-generation">
    <h2 class="header">Image Generation</h2>
    <div class="subsection-links">
        <SubsectionLink name="Visualize" bind:selection={image_section} />
        <SubsectionLink name="Engage" bind:selection={image_section} />
    </div>

    <div class="cards">
        {#if image_section === "Visualize"}
            <Card
                title="Visual Aids"
                description="Need to picture a chicken standing on an elephant? AI can do that!"
                image="images/home/image-generation/elephant.webp"
                href="opportunities#visualize"
            />
            <Card
                title="Drawings"
                description="Generate a realistic drawing of anything in seconds!"
                image="images/home/image-generation/heart.webp"
                href="opportunities#visualize"
            />
        {/if}
        {#if image_section === "Engage"}
            <Card
                title="Visual Appeal"
                description="Visually appealing images help keep students attention, AI can easily do this"
                image="images/home/image-generation/islands.webp"
                href="opportunities#visualize"
            />
            <Card
                title="Personalization"
                description="AI can create personalized images that are tailored to students' interests and learning styles"
                image="images/home/image-generation/student.webp"
                href="opportunities#visualize"
            />
        {/if}
    </div>
</section>

<section id="try-it">
    <h2 class="header">Don't belive me?</h2>
    <h3>Ask the AI a question</h3>
    <TryIt />
</section>

<style>
    .hero {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .title {
        width: 100%;
        font-size: 2.2rem;
        font-weight: 700;
        text-align: center;
        text-transform: uppercase;
        margin: 0;
    }

    .hero-img-container {
        width: 100%;
    }

    #about p {
        text-align: center;
        max-width: 500px;
        margin: 0 auto;
        margin-bottom: 1rem;
    }

    #about img {
        max-width: min(100%, 400px);
        margin: 0 auto;
        display: block;
    }

    section {
        margin-top: 6rem;
    }

    section .header {
        width: 100%;
        font-size: 2rem;
        font-weight: 700;
        text-align: center;
        margin-top: 60px;
    }

    section .subsection-links {
        display: flex;
        gap: 40px;
        font-weight: 600;
        font-size: 18px;
        margin: 0 auto;
        max-width: fit-content;
        margin-bottom: 2rem;
        overflow: scroll;
        -ms-overflow-style: none;
        scrollbar-width: none;
    }

    .subsection-links::-webkit-scrollbar {
        display: none;
    }

    section .cards {
        display: grid;
        grid-template-columns: 1fr;
        gap: 20px;
    }

    #quick-generation {
        background: #ff7f5f;
        padding: 1rem;
        color: white;
        border-radius: 20px;
        text-align: center;
        display: flex;
        flex-direction: column;
        max-width: 800px;
    }

    #quick-generation img {
        width: 100%;
    }

    #try-it h2 {
        margin-bottom: 0.5rem;
    }

    #try-it h3 {
        width: 100%;
        font-size: 1.2rem;
        text-align: center;
        font-weight: 500;
        margin-top: 0;
        margin-bottom: 3rem;
    }

    @media only screen and (max-width: 330px) {
        .title {
            font-size: 1.8rem;
        }
    }

    @media only screen and (min-width: 400px) {
        .title {
            font-size: 2.5rem;
        }

        #quick-generation {
            padding: 1rem 2rem;
        }
    }

    @media only screen and (min-width: 600px) {
        #quick-generation {
            flex-direction: row;
            text-align: left;
            align-items: center;
        }

        #quick-generation h2 {
            font-size: 2rem;
        }

        #quick-generation img {
            max-width: 300px;
        }
    }

    @media only screen and (min-width: 700px) {
        section .header {
            font-size: 2.5rem;
        }

        section .cards {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media only screen and (min-width: 800px) {
        #about {
            display: flex;
            flex-direction: row-reverse;
            gap: 2rem;
            margin-top: 6rem;
            align-items: center;
        }

        #about img {
            max-width: 300px;
        }

        #about p,
        #about h2 {
            text-align: left;
        }

        #about h2 {
            margin-top: 0;
        }

        #about p {
            margin-bottom: 0;
        }
    }

    @media only screen and (min-width: 900px) {
        .hero {
            margin-top: 4rem;
            flex-direction: row;
            align-items: center;
        }

        .title {
            text-align: left;
            width: 50%;
            font-size: 3rem;
            min-width: 400px;
        }

        #quick-generation {
            padding: 1rem 6rem;
        }

        #quick-generation h2 {
            font-size: 2.5rem;
        }

        #quick-generation p {
            font-size: 1.2rem;
        }

        #quick-generation img {
            max-width: 350px;
        }
    }

    @media only screen and (min-width: 1000px) {
        #about img {
            max-width: 400px;
        }
    }

    @media only screen and (min-width: 1200px) {
        .hero {
            gap: 3rem;
        }

        .title {
            font-size: 3.8rem;
            min-width: 550px;
        }
    }
</style>
