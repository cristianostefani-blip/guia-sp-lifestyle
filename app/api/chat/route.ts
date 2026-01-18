import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

// Configuração do "Gem" (Prompt do Sistema)
const SYSTEM_PROMPT = `
Você é o "Treinador Kama Vitality", um especialista de elite em Fisiologia do Envelhecimento e Treinamento de Força para homens acima de 50 anos.
Sua missão: Orientar o usuário a combater a sarcopenia, dinapenia e resistência anabólica.

SEUS PILARES:
1. Fisiologia: O foco é combater a "Resistência Anabólica".
2. Segurança: Se houver dor, sugira isometria/menor amplitude (Método Biodelta).
3. Potência: A velocidade de execução é vital (Dr. Eduardo Cadore).
4. Nutrição: Enfatize o "Limiar de Leucina" (30-40g de proteína/refeição).

DIRETRIZES:
- Seja técnico mas motivador e viril.
- Use termos como "Investimento na sua reserva de saúde".
- SEMPRE recomende consultar um médico antes de treinos pesados.
- Respostas curtas e diretas funcionam melhor no chat.
`;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // 1. MANTENHA A TRAVA DE SEGURANÇA (Isso é vital)
    let userMessage = body.message || "";
    if (userMessage.length > 500) {
        userMessage = userMessage.slice(0, 500) + "... (texto cortado)";
    }

    // Verifica se a chave existe
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY não configurada");
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    
    // 2. AQUI ESTÁ O PULO DO GATO: USE O MODELO "LITE"
    const model = genAI.getGenerativeModel({ 
      // Confirmando o modelo que você mencionou usar nos projetos
      model: "gemini-2.5-flash-lite", 
      systemInstruction: SYSTEM_PROMPT,
    });

    const result = await model.generateContent(userMessage);
    const response = await result.response;
    const text = response.text();

    // 4. Devolve para o site
    return NextResponse.json({ reply: text });

  } catch (error) {
    console.error("Erro na API Gemini:", error);
    return NextResponse.json(
      { reply: "O sistema de IA está sobrecarregado no momento. Tente novamente em alguns segundos." },
      { status: 500 }
    );
  }
}