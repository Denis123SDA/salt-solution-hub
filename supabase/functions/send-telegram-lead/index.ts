import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const TELEGRAM_BOT_TOKEN = Deno.env.get("TELEGRAM_BOT_TOKEN");
    const TELEGRAM_CHAT_ID = Deno.env.get("TELEGRAM_CHAT_ID");

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      throw new Error("Telegram credentials not configured");
    }

    const { name, phone, product, volume, city, comment, replyChannel, replyContact } = await req.json();

    if (!name || !phone) {
      return new Response(JSON.stringify({ error: "Имя и телефон обязательны" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const text = `📋 <b>Новая заявка с сайта</b>\n\n` +
      `👤 <b>Имя:</b> ${escapeHtml(name)}\n` +
      `📞 <b>Телефон:</b> ${escapeHtml(phone)}\n` +
      `📦 <b>Товар:</b> ${escapeHtml(product || "не указан")}\n` +
      `📊 <b>Объём:</b> ${escapeHtml(volume || "не указан")}\n` +
      `🏙 <b>Город:</b> ${escapeHtml(city || "не указан")}\n` +
      `💬 <b>Куда ответить:</b> ${escapeHtml(replyChannel || "")} — ${escapeHtml(replyContact || "")}\n` +
      `📝 <b>Комментарий:</b> ${escapeHtml(comment || "—")}\n\n` +
      `🕐 ${new Date().toLocaleString("ru-RU", { timeZone: "Asia/Barnaul" })}`;

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

    if (!tgData.ok) {
      console.error("Telegram API error:", JSON.stringify(tgData));
      throw new Error(`Telegram error: ${tgData.description}`);
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error:", error.message);
    return new Response(JSON.stringify({ error: error.message }), {
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
