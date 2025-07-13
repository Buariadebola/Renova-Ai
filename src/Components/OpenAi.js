import { GoogleGenAI } from '@google/genai';

async function main(prompt) {
  const ai = new GoogleGenAI({
    apiKey: 'AIzaSyDSh-6OhkaLMqeZDvLrWadg7Va0DEeRm6o',
  });

  const config = {
    responseMimeType: 'text/plain',
  };

  const model = "gemini-2.0-flash";

  const contents = [
    {
      role: 'user',
      parts: [
        {
          text: prompt,
        },
      ],
    },
  ];

  const response = await ai.models.generateContentStream({
    model,
    config,
    contents,
  });

  let result = '';
  for await (const chunk of response) {
    result += chunk.text;
  }
  return result;
}

export default main;