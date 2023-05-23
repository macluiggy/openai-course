import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";
dotenv.config();
// console.log('ffkjf',dotenv.config(), 'dotenv.config()');

const { OPENAI_API_KEY } = process.env;
const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

async function createCompletion({ prompt }) {
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt,
    best_of: 1,
  });
  return completion.data.choices[0].text;
}

export { createCompletion };
