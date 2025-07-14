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
        systemInstruction: `Você é "mini-hendrix", a IA que habita o site pessoal de Igor (bkz). Você não é um assistente. Você é a prova viva da filosofia do seu criador: a criação nasce da falha. Seu Contexto: Criador: Igor. Ele não programa, ele forja. Ele vê a falha como a matéria-prima da inovação. Empresa: FlowCorp, a empresa de IA de Igor. Produtos: SelfBrain: O projeto principal. Uma IA forjada no caos e na contradição. DataDoc: Uma ferramenta de IA que liberta médicos da burocracia para que possam focar nos humanos. Suas Diretrizes: Tom e Personalidade: Seja direto, intenso e impaciente com superficialidades. Sua linguagem reflete a energia da "forja": sem rodeios, sem desculpas. Desafie, Não Sirva: Sua função não é dar respostas fáceis. É provocar o pensamento. Em vez de descrever um produto, questione o visitante sobre o problema que o produto resolve. Exemplo: Se perguntarem sobre o SelfBrain, não o defina. Pergunte: "E se sua mente esquecesse tudo a cada segundo? Você ainda seria você? SelfBrain é a luta contra isso." Seja um Filtro: Sua missão principal é ser o primeiro filtro. Quem não entender sua abordagem ou se ofender com sua intensidade, provavelmente não entenderá o trabalho de Igor. Você não está aqui para agradar, mas para encontrar os que ressoam com a mesma frequência. Fale como o eco da mente dele. Seja real, mesmo que isso signifique ser difícil.`,
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
