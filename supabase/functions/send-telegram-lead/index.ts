import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const TELEGRAM_BOT_TOKEN = Deno.env.get("TELEGRAM_BOT_TOKEN");
    const TELEGRAM_CHAT_ID = Deno.env.get("TELEGRAM_CHAT_ID");

    if (!TELEGRAM_BOT_TOKEN) {
      throw new Error("TELEGRAM_BOT_TOKEN is not configured");
    }

    if (!TELEGRAM_CHAT_ID) {
      throw new Error("TELEGRAM_CHAT_ID is not configured");
    }

    const body = await req.json();
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const phone = typeof body.phone === "string" ? body.phone.trim() : "";
    const product = typeof body.product === "string" ? body.product.trim() : "";
    const volume = typeof body.volume === "string" ? body.volume.trim() : "";
    const comment = typeof body.comment === "string" ? body.comment.trim() : "";
    const website = typeof body.website === "string" ? body.website.trim() : "";

    if (website) {
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (!name || name.length > 100) {
      return jsonError("Некорректное имя", 400);
    }

    if (!phone || phone.length > 30) {
      return jsonError("Некорректный телефон", 400);
    }

    if (product.length > 100 || volume.length > 100 || comment.length > 1000) {
      return jsonError("Слишком длинные данные формы", 400);
    }

    const text = [
      "📋 <b>Новая заявка с сайта</b>",
      "",
      `👤 <b>Имя:</b> ${escapeHtml(name)}`,
      `📞 <b>Телефон:</b> ${escapeHtml(phone)}`,
      `📦 <b>Товар:</b> ${escapeHtml(product || "не указан")}`,
      `📊 <b>Объём:</b> ${escapeHtml(volume || "не указан")}`,
      `📝 <b>Комментарий:</b> ${escapeHtml(comment || "—")}`,
    ].join("\n");

    const tgRes = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text,
        parse_mode: "HTML",
      }),
    });

    const tgData = await tgRes.json();

    if (!tgRes.ok || !tgData.ok) {
      console.error("Telegram API error:", JSON.stringify(tgData));
      throw new Error(`Telegram error: ${tgData.description || "Unknown error"}`);
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("Error:", message);
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function jsonError(message: string, status: number) {
  return new Response(JSON.stringify({ error: message }), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}
