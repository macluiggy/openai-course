import { createChatCompletion } from "../config/openai.config.js";

const messages = [
  { role: "system", content: "You are friendly chatbot." },
  { role: "user", content: "Hi, my name is Isa" },
];

const messages2 = [
  ...messages,
  { role: "system", content: "You are friendly chatbot." },
  { role: "user", content: "Yes,  can you remind me, What is my name?" },
];
const messages3 = [
  { role: "system", content: "You are friendly chatbot." },
  { role: "user", content: "Hi, my name is Isa" },
  {
    role: "assistant",
    content:
      "Hi Isa! It's nice to meet you. \
  Is there anything I can help you with today?",
  },
  { role: "user", content: "Yes, you can remind me, What is my name?" },
];
// await createChatCompletion({ messages });
// await createChatCompletion({ messages: messages2 });
// await createChatCompletion({ messages: messages3 });

let context = [
  {
    role: "system",
    content: `
      You are OrderBot, an automated service to collect orders for a pizza restaurant. 
      You first greet the customer, then collects the order, 
      and then asks if it's a pickup or delivery. 
      You wait to collect the entire order, then summarize it and check for a final 
      time if the customer wants to add anything else. 
      If it's a delivery, you ask for an address. 
      Finally you collect the payment.
      Make sure to clarify all options, extras and sizes to uniquely 
      identify the item from the menu.
      You respond in a short, very conversational friendly style. 
      The menu includes 
      pepperoni pizza  12.95, 10.00, 7.00 
      cheese pizza   10.95, 9.25, 6.50 
      eggplant pizza   11.95, 9.75, 6.75 
      fries 4.50, 3.50 
      greek salad 7.25 
      Toppings: 
      extra cheese 2.00, 
      mushrooms 1.50 
      sausage 3.00 
      canadian bacon 3.50 
      AI sauce 1.50 
      peppers 1.00 
      Drinks: 
      coke 3.00, 2.00, 1.00 
      sprite 3.00, 2.00, 1.00 
      bottled water 5.00`,
  },
];

async function collectMessages(prompt) {
  context.push({ role: "user", content: `${prompt}` });

  var response = await createChatCompletion({
    messages: context,
  });
  context.push({ role: "assistant", content: `${response}` });

  // Assuming 'pn' is a library, we can't translate this directly to JS
  // However, this looks like it's creating new UI elements
  // Let's assume we have functions createRow and createColumn which do the same
  // panels.push(createRow("User:", createMarkdown(prompt, 600)));
  // panels.push(
  //   createRow(
  //     "Assistant:",
  //     createMarkdown(response, 600, { "background-color": "#F6F6F6" })
  //   )
  // );

  // return createColumn(...panels);
}

await collectMessages();

// order a pizza
const prompts = [
  "I would like to order a pizza",
  "I would like to order a pizza with pepperoni",
  "I would like to order a pizza with pepperoni and mushrooms",
  "I would like to order a pizza with pepperoni and mushrooms and sausage",
  "I would like to order a pizza with pepperoni and mushrooms and sausage and extra cheese",
];

for (let prompt of prompts) {
  await collectMessages(prompt);
}

const msgs = [...context]; // spread operator for creating a copy of the array
msgs.push({
  role: "system",
  content:
    "create a json summary of the previous food order. Itemize the price for each item. The fields should be 1) pizza, include size 2) list of toppings 3) list of drinks, include size 4) list of sides include size 5) total price.",
});

await createChatCompletion({ messages: msgs });
