import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.REACT_APP_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });

export const fetchJokes = async (prompt) => {
    try {
        const result = await model.generateContent(prompt);
        const response = result.response.candidates[0].content.parts[0]
        console.log(response.text, "qwert");        
        return response.text;
    } catch (error) {
        console.error('Error:', error);
    }
};