import { GoogleGenAI, Type } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";
import { KENYAN_PROPERTIES } from "@/lib/properties";

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();

    if (!prompt || typeof prompt !== "string") {
      return NextResponse.json(
        { error: "Client search prompt is required." },
        { status: 400 }
      )
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
      // Return a graceful fallback if API Key is not set up yet
      return NextResponse.json({
        summary: "Horizon AI Concierge is standing by. (Note: To activate real AI responses, please configure your GEMINI_API_KEY in the Secrets panel in AI Studio).",
        recommendedPropertyIds: ["prop-1", "prop-2"],
        recommendationReasons: [
          "Perfect match based on standard luxury requirements in high-end suburbs.",
          "Offers exclusive security and standard-setting privacy in key locations."
        ],
        lifestyleInvestmentAdvice: "Kenyan luxury estates in Karen and Diani Beach are currently generating 8-12% annual yields in high-end rental markets."
      });
    }

    const ai = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        }
      }
    });

    const systemInstruction = `You are the exclusive AI Luxury Concierge for Horizon Properties, Kenya's premier boutique agency. 
Your target clientele are high-net-worth individuals, diplomatic officers, international investors, and families seeking elite estates.
Do not use emojis under any circumstances. Keep your tone refined, objective, sophisticated, and deeply knowledgeable about Kenyan premium suburbs.
Analyze the user's preferences (e.g. location, property type, amenities, lifestyle goals) and match them with our actual portfolio of estates.

Here is our portfolio of Kenyan properties:
${JSON.stringify(KENYAN_PROPERTIES, null, 2)}

Provide a structured analysis matching their request.`;

    const modelResponse = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: `Client Request: "${prompt}"`,
      config: {
        systemInstruction,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            summary: {
              type: Type.STRING,
              description: "A refined analysis of the client's investment and lifestyle objectives in Kenya."
            },
            recommendedPropertyIds: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "List of property IDs from the portfolio that best fit the client's prompt. Return up to 3 IDs."
            },
            recommendationReasons: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "Refined reasons explaining how each matched property satisfies their specific request. Must correspond to the recommendedPropertyIds in order."
            },
            lifestyleInvestmentAdvice: {
              type: Type.STRING,
              description: "Expert advice on security, gated community guidelines, luxury layouts, or local investment yields for the recommended locations in Kenya."
            }
          },
          required: ["summary", "recommendedPropertyIds", "recommendationReasons", "lifestyleInvestmentAdvice"]
        }
      }
    });

    const text = modelResponse.text;
    if (!text) {
      throw new Error("Empty response from AI model.");
    }

    const parsedData = JSON.parse(text.trim());
    return NextResponse.json(parsedData);

  } catch (error: any) {
    console.error("AI Concierge API Error:", error);
    return NextResponse.json(
      { 
        error: "Failed to generate recommendations.",
        details: error.message || "Unknown error"
      },
      { status: 500 }
    );
  }
}
