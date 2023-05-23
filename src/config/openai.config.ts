import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";
dotenv.config();

const { OPENAI_API_KEY } = process.env;

const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

async function createCompletion({ prompt }: { prompt: string }) {
  const completion = await openai.createCompletion({
    model: "ada",
    prompt,
  });
  return completion.data.choices[0].text;
}

export { createCompletion };
