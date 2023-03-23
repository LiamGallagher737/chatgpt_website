<script lang="ts">
    let loading_response = false;
    let request: Promise<any> | null = null;

    async function ask(form: any) {
        request = null;
        let question: string = form.target.elements.question.value;
        loading_response = true;
        request = fetch("/try", {
            method: "GET",
            headers: {
                question,
            },
        })
            .then((e) => e.json())
            .finally(() => (loading_response = false));
    }
</script>

<form on:submit|preventDefault={ask}>
    <input type="text" name="question" placeholder="Go on..." />
    {#if !loading_response}
        <button type="submit">Ask</button>
    {/if}
</form>

{#if request !== null}
    {#await request}
        <p id="ai-response">The AI is thinking! 😁</p>
    {:then res}
        {#if res.choices[0].message !== undefined}
            <pre id="ai-response">
                {res.choices[0].message.content}
            </pre>
        {:else}
            <p id="ai-response">
                Unfortunately an error occured
                <br />
                Status: {res.status}
                <br />
                Error: {res.statusText}
            </p>
        {/if}
    {:catch error}
        <p id="ai-response">
            An error occured
            <br />
            {error.message}
        </p>
    {/await}
{/if}

<style>
    form {
        width: 100%;
    }

    input {
        width: min(100%, 600px);
        margin: 0 auto;
        display: block;
        padding: 1.5rem;
        background: #f4f4f4;
        border: none;
        border-radius: 999px;
        font-size: 1.2rem;
    }

    button {
        margin: 0 auto;
        display: block;
        background: #006bea;
        color: white;
        padding: 0.5rem 2rem;
        border-radius: 999px;
        margin-top: 1.5rem;
        transition: 0.3s;
        font-size: 1.2rem;
    }

    button:hover,
    button:focus {
        background: #4196ff;
    }

    #ai-response {
        width: min(100%, 600px);
        margin: 0 auto;
        margin-top: 2rem;
    }

    p {
        text-align: center;
    }

    pre {
        white-space: pre-wrap;
    }
</style>
