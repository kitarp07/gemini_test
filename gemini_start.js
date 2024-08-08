const dotenv = require('dotenv')
const { GoogleGenerativeAI } = require("@google/generative-ai")

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

const sys_prompt = `
Your task is to assist while reading.

You'll be given a word, a sentence or a paragraph.

If it is a word, define the word and give 3 to 5 synonyms of the word. 

If it is a sentence, analyze the sentence and make it easier to understand for the reader.

If it is a paragraph, summarize the paragraph and assist in understanding the paragraph.

If it is a word, format the response as Definition and Synonyms such as in the example below:

Example 1:
Input: unprecedented
Output:
Definiton: 
- never done or known before.
Similar: unparalleled, unequalled, unmatched, unrivalled, without parallel

Example 2:
Input: voracious
Output:
Definiton: 
- wanting or devouring great quantities of food.
- engaging in an activity with great eagerness or enthusiasm.
Similar: insatiable, unquenchable, unappeasable, prodigious, uncontrollable

Be strict with the format. Take note of how definition and similar words are being ouput differently.

If it is a sentence or a paragraph, help in gaining better understanding of the section. Explain in concise and clear terms.

The section to assist in reading is below: `;

async function run(section) {

    const model = genAI.getGenerativeModel({ model: "gemini-pro"});

    const prompt = sys_prompt + section;

    const result = await model.generateContent(prompt);

    const response = result.response;

    const text = response.text();
    console.log(text);
}

run(`Horza sat back and frowned. He wasn't sure if Xoralundra was
being ironic or not. Six years probably didn't seem like very long at
all to a species that was virtually immortal; but the Querl
Xoralundra knew how often his frail human charge had risked all in
the service of his alien masters, without real reward, so perhaps he
was being serious. Before Horza could continue with the
bargaining, the helmet shrilled once more. Horza winced. All the
noises on the Idiran ship seemed to be deafening. The voices were
thunder; ordinary buzzers and bleepers left his ears ringing long
after they stopped; and announcements over the PA made him put
both hands to his head. Horza just hoped there wasn't a full-scale
alarm while he was on board. The Idiran ship alarm could cause
damage to unprotected human ears.
`);