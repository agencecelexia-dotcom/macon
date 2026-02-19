import { NextResponse } from "next/server";
import { quoteFormSchema } from "@/lib/schemas/quote-form";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const result = quoteFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          errors: result.error.issues.map((issue) => ({
            path: issue.path.join("."),
            message: issue.message,
          })),
        },
        { status: 400 }
      );
    }

    // Données validées disponibles dans result.data
    // Connectez votre service d'envoi ici (email, CRM, webhook...)

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, message: "Erreur interne du serveur" },
      { status: 500 }
    );
  }
}
