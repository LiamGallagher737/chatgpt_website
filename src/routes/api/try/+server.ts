import { OPENAI_KEY } from "$env/static/private";
import { Configuration, OpenAIApi } from "openai";
import { json } from '@sveltejs/kit';

const openai = new OpenAIApi(
    new Configuration({
        apiKey: OPENAI_KEY,
    })
);

export async function GET({ request }) {
    let question = request.headers.get("question");

    if (!question) {
        return new Response("Please add a 'question' header", { status: 400 });
    }

    let res = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{
            role: "user",
            content: question,
        }],
    });

    return json(res.data, {
        status: res.status,
        statusText: res.statusText,
    });
}