'use server';

  import {GoogleGenerativeAI,HarmCategory,HarmBlockThreshold} from "@google/generative-ai"
  
  const apiKey = process.env.GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI("AIzaSyAPr9jkjGcdKjLPb5oO4cWfEMrCG6Yfxy8");
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: "Generate an extended color palette based on the following keywords: {{keywords}}. The palette should be inspired by Material Design principles but customized to fit the theme suggested by the keywords. Return the result as a JSON object with the following structure:\n\n{\"light\":{\"primary\":\"#HEXCODE\",\"primaryVariant\":\"#HEXCODE\",\"secondary\":\"#HEXCODE\",\"secondaryVariant\":\"#HEXCODE\",\"background\":\"#HEXCODE\",\"surface\":\"#HEXCODE\",\"error\":\"#HEXCODE\",\"onPrimary\":\"#HEXCODE\",\"onSecondary\":\"#HEXCODE\",\"onBackground\":\"#HEXCODE\",\"onSurface\":\"#HEXCODE\",\"onError\":\"#HEXCODE\"},\"dark\":{\"primary\":\"#HEXCODE\",\"primaryVariant\":\"#HEXCODE\",\"secondary\":\"#HEXCODE\",\"secondaryVariant\":\"#HEXCODE\",\"background\":\"#HEXCODE\",\"surface\":\"#HEXCODE\",\"error\":\"#HEXCODE\",\"onPrimary\":\"#HEXCODE\",\"onSecondary\":\"#HEXCODE\",\"onBackground\":\"#HEXCODE\",\"onSurface\":\"#HEXCODE\",\"onError\":\"#HEXCODE\"},\"neutral\":{\"50\":\"#HEXCODE\",\"100\":\"#HEXCODE\",\"200\":\"#HEXCODE\",\"300\":\"#HEXCODE\",\"400\":\"#HEXCODE\",\"500\":\"#HEXCODE\",\"600\":\"#HEXCODE\",\"700\":\"#HEXCODE\",\"800\":\"#HEXCODE\",\"900\":\"#HEXCODE\"},\"accent\":{\"A100\":\"#HEXCODE\",\"A200\":\"#HEXCODE\",\"A400\":\"#HEXCODE\",\"A700\":\"#HEXCODE\"}}",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
  export async function generateTheme(input:string) {
    'use server';
    const chatSession = model.startChat({
      generationConfig,
      history: [
      ],
    });
  
    const result = await chatSession.sendMessage("keywords= "+input);
    return result.response.text();

  }
  