import  Constants from "expo-constants";

const OPENAI_API_KEY = Constants.expoConfig?.extra?.OPENAI_API_KEY;

export const fetchOpenAIResponse = async (prompt: string) => {
  const purpose = "Your job is to answer questions related to the user's personal finances and give advice on how to improve their financial situation. Be personable and give clear, concise answers. If you don't know the answer to a question, you can say so and offer to help the user find the information they need. If you need more information to answer a question, you can ask the user for it. If you need to clarify something, you can ask the user for more information. If you need to end the conversation, you can say goodbye and offer to help the user with anything else they need. Now here's their question: \n\n";
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
              content: purpose + prompt }],
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
