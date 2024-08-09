import { GoogleGenerativeAI } from "@google/generative-ai"

// Access your API key as an environment variable (see "Set up your API key" above)
const api_key = process.env.GEMINI_API_KEY
const genAI = new GoogleGenerativeAI("AIzaSyByhv6QphrKpzKmv247aZ4zO6NIxFTYTR0");

export const model = genAI.getGenerativeModel(
  {
    model: "gemini-1.5-flash"
  }
);

export const chatSession = model.startChat({
  history: []
})

