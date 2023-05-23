import { createCompletion } from "./src/config/openai.config.js";

const prompt = "Once upon a time";
const completion = await createCompletion({ prompt });