<script lang="ts">
    export let title: string;
    export let description: string;
    export let image: string;
    export let href: string;
    // export let link: string;
</script>

<a href={href} class="card">
    <div>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
    <img src={image} alt="" loading="lazy" />
</a>

<style>
    .card {
        padding: 1rem;
        background: #f4f4f4;
        border-radius: 20px;
        cursor: pointer;
        display: flex;
        align-items: center;
        flex-direction: row;
        text-decoration: none;
        color: black;
    }

    h3 {
        width: 100%;
        font-size: 1rem;
        font-weight: 600;
        text-align: center;
        margin-top: 1rem;
    }

    p {
        width: 100%;
        font-size: 0.75rem;
        text-align: center;
    }

    img {
        max-width: min(100%, 150px);
        display: block;
        margin: 0 auto;
        transition: 0.3s;
    }

    .card:hover img {
        scale: 1.05;
    }

    @media only screen and (max-width: 360px) {
        .card {
            flex-direction: column;
        }
    }

    @media only screen and (min-width: 900px) {
        h3 {
            font-size: 1.2rem;
        }

        p {
            font-size: 0.9rem;
        }

        img {
            max-width: min(100%, 200px);
        }
    }
</style>
