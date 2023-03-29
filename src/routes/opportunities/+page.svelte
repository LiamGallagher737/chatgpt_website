<svelte:head>
    <title>Ai Edu | Opportunities</title>
</svelte:head>

<section id="feedback">
    <div class="content">
        <h2 class="header">Feedback</h2>
        <p>
            AI can provide fast, personalized, objective, and continuous
            feedback to students. These tools can analyze students writing and
            provide feedback on grammar, spelling, style, and other areas in
            seconds. AI feedback is free from bias or personal opinion, which
            ensures that all students are graded fairly and accurately.
        </p>
    </div>
    <img
        src="images/opportunities/feedback.webp"
        alt="Teacher talking to a student"
    />
</section>

<section id="planning">
    <div class="content">
        <h2 class="header">Planning</h2>
        <p>
            AI text generators can assist teachers in lesson planning by finding
            resources, creating lesson content and assessments, personalizing
            lessons, and saving time. These tools can search through large
            amounts of data, create materials aligned with the curriculum, and
            customize them to fit students' needs and interests.
        </p>
    </div>
    <img
        src="images/opportunities/planning.webp"
        alt="Teacher writing on a laptop"
    />
</section>

<section id="research">
    <div class="content">
        <h2 class="header">Research</h2>
        <p>
            AI text generators can assist teachers in lesson planning by finding
            resources, creating lesson content and assessments, personalizing
            lessons, and saving time. These tools can search through large
            amounts of data, create materials aligned with the curriculum, and
            customize them to fit students' needs and interests.
        </p>
    </div>
    <img
        src="images/opportunities/research.webp"
        alt="Student reading a book"
    />
</section>

<section id="visualize">
    <div class="content">
        <h2 class="header">Visualize</h2>
        <p>
            AI image generators can assist teachers and students by creating
            visual aids, personalized images, educational resources, and
            accessible images. These tools can improve classroom instruction by
            providing high-quality and individualized images and resources.
            Additionally, they can increase accessibility for students with
            disabilities by creating images with captions or descriptions.
        </p>
    </div>
    <img
        src="images/opportunities/visualize.webp"
        alt="Teacher showing a diagram to a class"
    />
</section>

<style>
    .content {
        margin-bottom: 1rem;
    }

    .header {
        width: 100%;
        font-size: 2rem;
        font-weight: 700;
        text-align: center;
        margin-top: 60px;
        display: flex;
        flex-direction: column;
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

        .content {
            margin: 0;
        }
    }

    @media only screen and (min-width: 1000px) {
        img {
            max-width: 400px;
        }
    }
</style>
