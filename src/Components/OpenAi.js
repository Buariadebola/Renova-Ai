import { GoogleGenAI } from '@google/genai';

const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result.split(",")[1]);
    reader.onerror = (err) => reject(err);
  });

async function main(prompt, imageFile = null) {
  const ai = new GoogleGenAI({
    apiKey: import.meta.env.VITE_GENAI_API_KEY,
  });

  const config = {
    responseMimeType: 'text/plain',
  };

  const model = "gemini-2.5-flash";

 const contents = [];

  if (imageFile) {
    const base64Image = await toBase64(imageFile);
    contents.push({
      inlineData: {
        mimeType: imageFile.type,
        data: base64Image,
      },
    });
  }

  if (prompt && prompt.trim()) {
    contents.push({
      role: "user",
      parts: [{ text: prompt }],
    });
  }

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