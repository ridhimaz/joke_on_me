import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.REACT_APP_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });

export const fetchJokes = async (prompt) => {
    try {
        const result = await model.generateContent(prompt);
        const response = result.response.candidates[0].content.parts[0];
        if (response.text) return response.text;
        return "Something went wrong!"
    } catch (error) {
        console.log("Error:", error);
        return "Something went wrong!"
    }
};