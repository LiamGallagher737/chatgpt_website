<script lang="ts">
    export let title: string;
    export let description: string;
</script>

<div class="card">
    <h3>{title}</h3>
    <p>{description}</p>
</div>

<style>
    .card {
        padding: 1rem 2rem;
        background: #F4F4F4;
        border-radius: 20px;
    }

    .card h3 {
        width: 100%;
        font-size: 24px;
        font-weight: 600;
        text-align: center;
        margin-top: 1rem;
    }

    .card p {
        width: 100%;
        font-size: 16px;
        font-weight: 600;
    }
</style>
