<script lang="ts">
    export let title: string;
    export let description: string;
    export let image: string;
    // export let link: string;
</script>

<div class="card">
    <div class="text">
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
    <img src={image} alt="" />
</div>

<style>
    .card {
        padding: 1rem;
        background: #f4f4f4;
        border-radius: 20px;
        cursor: pointer;
        display: flex;
        flex-direction: row;
    }

    h3 {
        width: 100%;
        font-size: 1rem;
        font-weight: 600;
        text-align: center;
        margin-top: 1rem;
    }

    .card p {
        width: 100%;
        font-size: 0.7rem;
        /* font-weight: 600; */
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

    /* @media only screen and (min-width: 400px) { */
</style>
