
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getCareerAdvice = async (userQuery: string, userBackground?: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `User asks: ${userQuery}. ${userBackground ? `User background: ${userBackground}` : ''}. Please provide career advice specifically relevant to the job market in Pakistan. Mention sectors like Govt, IT, or Banks if applicable. Keep it concise and encouraging.`,
      config: {
        systemInstruction: "You are a professional career counselor in Pakistan for the website 'Pak Job Alerts'. You provide specific advice about FPSC, PPSC, and private sector trends in Pakistan.",
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having trouble connecting to my career database. Please try again later!";
  }
};
