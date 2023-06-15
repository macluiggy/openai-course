import { createCompletion } from "../config/openai.config.js";

export const prodReview = `Got this panda plush toy for my daughter's birthday, \
who loves it and takes it everywhere. It's soft and \ 
super cute, and its face has a friendly look. It's \ 
a bit small for what I paid though. I think there \ 
might be other options that are bigger for the \ 
same price. It arrived a day earlier than expected, \ 
so I got to play with it myself before I gave it \ 
to her.`;

const additionalPrompts = {
  a: `Summarize the review below, delimited by triple 
  backticks, in at most 30 words. `,
  b: `to give feedback to the \
  pricing deparmtment, responsible for determining the \
  price of the product.  
  
  Summarize the review below, delimited by triple 
  backticks, in at most 30 words, and focusing on any aspects \
  that are relevant to the price and perceived value. 
  `,
};

// const additionalPrompt = additionalPrompts.a;
const additionalPrompt = additionalPrompts.b;

const prompt = `Your task is to generate a short summary of a product \
review from an ecommerce site. 

${additionalPrompt}

Review: '''${prodReview}'''`;

const prompt2 = `Your task is to extract relevant information from \ 
a product review from an ecommerce site to give \
feedback to the Shipping department. 

From the review below, delimited by triple quotes \
extract the information relevant to shipping and \ 
delivery. Limit to 30 words.

Review: '''${prodReview}'''
`;

// await createCompletion({ prompt });
await createCompletion({ prompt: prompt2 });
