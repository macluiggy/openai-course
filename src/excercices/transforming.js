import { createCompletion } from "../config/openai.config.js";

const prompt = `
Translate the following English text to Spanish: \ 
'''Hi, I would like to order a blender'''`;

const prompt2 = `Tell me which language this is: 
'''Combien coûte le lampadaire'''`;

const prompt3 = `Translate the following  text to French and Spanish
and English pirate: \
'''I want to order a basketball'''`;

const prompt4 = `Translate the following text to Spanish in both the \
formal and informal forms: 
'Would you like to order a pillow?'`;

// await createCompletion({ prompt });
// await createCompletion({ prompt: prompt2 });
// await createCompletion({ prompt: prompt3 });
// await createCompletion({ prompt: prompt4 });

// universal translator
const userMessages = [
  "La performance du système est plus lente que d'habitude.", // System performance is slower than normal
  "Mi monitor tiene píxeles que no se iluminan.", // My monitor has pixels that are not lighting
  "Il mio mouse non funziona", // My mouse is not working
  "Mój klawisz Ctrl jest zepsuty", // My keyboard has a broken control key
  "我的屏幕在闪烁", // My screen is flickering
  "hable serio mi so, como asi?"
];

for (const message of userMessages) {
  await createCompletion({
    prompt: `Tell me what language this is: \
  '''${message}'''`,
  });
  await createCompletion({
    prompt: `Translate the following  text to English \
  and Korean: \
  '''${message}'''`,
  });
}

const prompt5 = `
Translate the following from slang to a business letter: 
'Dude, This is Joe, check out this spec on this standing lamp.`;

// await createCompletion({ prompt: prompt5 });

// format conversion
const dataJson = {
  "resturant employees": [
    { name: "Shyam", email: "shyamjaiswal@gmail.com" },
    { name: "Bob", email: "bob32@gmail.com" },
    { name: "Jai", email: "jai87@gmail.com" },
  ],
};
const prompt6 = `
Translate the following python dictionary from JSON to an HTML \
table with column headers and title: ${JSON.stringify(dataJson)}`;

// await createCompletion({ prompt: prompt6 });

let text = [
  "The girl with the black and white puppies have a ball.",
  "Yolanda has her notebook.",
  "Its going to be a long day. Does the car need it’s oil changed?",
  "Their goes my freedom. There going to bring they’re suitcases.",
  "Your going to need you’re notebook.",
  "That medicine effects my ability to sleep. Have you heard of the butterfly affect?",
  "This phrase is to cherck chatGPT for speling abilitty"
];

for (let t of text) {
  const prompt = `Proofread and correct the following text
  and rewrite the corrected version. If you don't find
  any errors, just say "No errors found". Don't use 
  any punctuation around the text:
  \`\`\`${t}\`\`\``;
  // Call your proofreading API or function here with the prompt as argument
  // and handle the response accordingly
  // await createCompletion({ prompt });
}

text = `
Got this for my daughter for her birthday cuz she keeps taking \
mine from my room.  Yes, adults also like pandas too.  She takes \
it everywhere with her, and it's super soft and cute.  One of the \
ears is a bit lower than the other, and I don't think that was \
designed to be asymmetrical. It's a bit small for what I paid for it \
though. I think there might be other options that are bigger for \
the same price.  It arrived a day earlier than expected, so I got \
to play with it myself before I gave it to my daughter.
`;
let prompt7 = `proofread and correct this review: \`\`\`${text}\`\`\`
`;

// You can now use the 'prompt' variable wherever needed in your code
// await createCompletion({ prompt: prompt7 });

const prompt8 = `proofread and correct this review. Make it more compelling. 
Ensure it follows APA style guide and targets an advanced reader. 
Output in markdown format.
Text: '''${text}'''`;

// await createCompletion({ prompt: prompt8 });

