/** @format */
require("dotenv").config();
const { TextServiceClient } = require("@google-ai/generativelanguage").v1beta2;
const { GoogleAuth } = require("google-auth-library");
const MODEL_NAME = "models/text-bison-001";
const API_KEY = process.env.API_KEY;

const ai = async (req, res) => {
  const { prompt } = req.body;

  console.log(prompt);
  const client = new TextServiceClient({
    authClient: new GoogleAuth().fromAPIKey(`${API_KEY}`),
  });

  const [response] = await client.generateText({
    model: MODEL_NAME,
    prompt: { text: prompt },
  });

  // Extract the generated text from the response
  const generatedText = response.candidates.map((val) => {
    return val.output;
  });

  // Send the generated text as the response to the user
  res.send(generatedText);
};

module.exports = { ai };
