import axios from 'axios';

const OPENAI_API_URL = 'https://api.openai.com/v1/images';

async function chatWithGPT3(prompt) {
  try {
    // Set the request data
    const requestData = {
      prompt: prompt,
      temperature: 0.5,
    };

    // Make the API request to chat with GPT-3
    const response = await axios.post(`${process.env.OPENAI_API_URL}/images`, requestData, {
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
    });

    // Get the response from GPT-3
    const chatResponse = response.data.data.response;

    return chatResponse;
  } catch (error) {
    console.error(error);
  }
}

const prompt = 'Hello, how are you today?';
const response = chatWithGPT3(prompt);
console.log(response);
