<svelte:head>
    <title>Ai Edu | Worries</title>
</svelte:head>

<section id="cheating">
    <div class="content">
        <h2 class="header">Cheating</h2>
        <p>
            AI text generators can be misused for cheating in schools through
            plagiarism, improper use of study materials, and using them to write
            assignments without actually learning the material. While these
            tools can be helpful for students who struggle with writing or
            understanding the material, it is important to use them ethically
            and responsibly.
        </p>
    </div>
    <img src="images/worries/cheating.webp" alt="Student cheating on a test" />
</section>

<section id="job-safety">
    <div class="content">
        <h2 class="header">Job Safety</h2>
        <p>
            AI has the potential to both improve and negatively impact job
            safety for teachers. While it can automate certain tasks and provide
            personalized learning experiences, it may also reduce the need for
            traditional classroom teaching, limit teacher autonomy, and
            worsen existing inequalities. Additionally, the use of AI to
            monitor and evaluate teacher performance could increase pressure to
            conform to standardized practices.
        </p>
    </div>
    <img
        src="images/worries/job-safety.webp"
        alt="Worker being replaced by a robot"
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
