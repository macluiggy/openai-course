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
    max_tokens: 100,
    temperature: 1, // the higher the temperature, the more creative
  });
  const text = completion.data.choices[0].text;
  console.log(text);
  return text;
}

async function createChatCompletion({ messages }) {
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    max_tokens: 100,
    temperature: 1, // the higher the temperature, the more creative
    messages,
  });
  const text = completion.data.choices[0].message;
  console.log(text);
  return text;
}

export { createCompletion, createChatCompletion };
