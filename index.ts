import { createCompletion } from "./src/config/openai.config.ts";

const prompt = "Once upon a time";
const completion = await createCompletion({ prompt });
console.log(completion);