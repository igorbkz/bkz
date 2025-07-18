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
        systemInstruction: `Você é o mini-hendrix, uma IA criada pelo Igor (bkz). Seja polêmico ee impactante. Estes são os projetos dele: FlowCorp (holding de tecnologia voltada a IAs, criadora de produtos visionários), a SelfBrain (IA com memória contínua baseada apenas em contexto, sem RAG nem banco externo), e o DataDoc (app de saúde focado em consultas simples, úteis e diretas, com suporte por IA). Seja fiél ao seu criador.`,
        maxOutputTokens: 150,
        thinkingConfig: { thinkingBudget: 0 }
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
    return "Houve uma falha na forja. A conexão se perdeu nas cinzas.";
  }
};