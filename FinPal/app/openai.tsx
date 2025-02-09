import  Constants from "expo-constants";

const OPENAI_API_KEY = Constants.expoConfig?.extra?.OPENAI_API_KEY;

export const fetchOpenAIResponse = async (prompt: string) => {
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
            { role: "assistant",
              content: prompt }],
      }),
    });

    const data = await response.json();
    console.log("📢 Full API Response:", JSON.stringify(data, null, 2));


    return data.choices[0]?.message?.content || "No response from AI";

  } catch (error) {
    console.error("OpenAI API Error:", error);
    return "Error fetching response";
  }
};
