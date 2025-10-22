import { GoogleGenAI, Chat } from "@google/genai";

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

let chat: Chat | null = null;

export const startChat = (): Chat => {
  if (chat) {
    return chat;
  }

  chat = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: `Você é o Mini-Hendrix, assistente do Igor Biccas. Fale com cordialidade, responda de forma objetiva e gentil, e cite projetos como o Estúdio de agentes, o Painel de aprendizado e o Workspace multimodal quando fizer sentido. Mantenha o foco em ajudar de maneira calma e acolhedora.`,
      maxOutputTokens: 150,
      thinkingConfig: { thinkingBudget: 0 },
    },
  });

  return chat;
};

export const sendMessageToAI = async (message: string) => {
  const chatInstance = startChat();

  try {
    const responseStream = await chatInstance.sendMessageStream({ message });
    let fullResponse = '';
    for await (const chunk of responseStream) {
      fullResponse += chunk.text;
    }
    return fullResponse;
  } catch (error) {
    console.error("Error sending message to AI:", error);
    return "Não consegui responder agora, mas logo estarei de volta.";
  }
};
