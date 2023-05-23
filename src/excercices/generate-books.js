
import { createCompletion } from "../config/openai.config.js";

const prompt = `Generate a list of three made-up book titles along \ 
with their authors and genres. 
Provide them in JSON format with the following keys: 
book_id, title, author, genre.`;

const completion = await createCompletion({ prompt });
console.log(completion);
