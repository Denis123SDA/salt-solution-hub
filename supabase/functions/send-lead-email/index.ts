import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const NOTIFY_EMAIL = "sofiakizilova23@mail.ru";

interface LeadData {
  name: string;
  phone: string;
  product?: string;
  volume?: string;
  city?: string;
  comment?: string;
  replyChannel: string;
  replyContact: string;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const lead: LeadData = await req.json();

    // Save to database
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { error: dbError } = await supabase.from("leads").insert({
      name: lead.name,
      phone: lead.phone,
      product: lead.product || null,
      volume: lead.volume || null,
      city: lead.city || "Барнаул",
      comment: lead.comment || null,
      reply_channel: lead.replyChannel,
      reply_contact: lead.replyContact,
    });

    if (dbError) {
      console.error("DB insert error:", dbError);
    }

    // Send email notification via Resend-compatible simple SMTP
    // Using Supabase's built-in email or a simple fetch to a mail API
    const emailHtml = `
      <h2>Новая заявка с сайта Крупа22</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px;">
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Имя</td><td style="padding:8px;border:1px solid #ddd;">${lead.name}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Телефон</td><td style="padding:8px;border:1px solid #ddd;">${lead.phone}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Товар</td><td style="padding:8px;border:1px solid #ddd;">${lead.product || "не указан"}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Объём</td><td style="padding:8px;border:1px solid #ddd;">${lead.volume || "не указан"}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Город</td><td style="padding:8px;border:1px solid #ddd;">${lead.city || "Барнаул"}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Куда ответить</td><td style="padding:8px;border:1px solid #ddd;">${lead.replyChannel} — ${lead.replyContact}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Комментарий</td><td style="padding:8px;border:1px solid #ddd;">${lead.comment || "—"}</td></tr>
      </table>
      <p style="color:#888;margin-top:16px;">Время: ${new Date().toLocaleString("ru-RU", { timeZone: "Asia/Barnaul" })}</p>
    `;

    // Try sending via Resend if API key available
    const resendKey = Deno.env.get("RESEND_API_KEY");
    if (resendKey) {
      const emailRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendKey}`,
        },
        body: JSON.stringify({
          from: "Крупа22 <onboarding@resend.dev>",
          to: [NOTIFY_EMAIL],
          subject: `Заявка: ${lead.name} — ${lead.phone}`,
          html: emailHtml,
        }),
      });

      if (!emailRes.ok) {
        const errText = await emailRes.text();
        console.error("Resend error:", errText);
      } else {
        console.log("Email sent successfully via Resend");
      }
    } else {
      console.log("RESEND_API_KEY not set — lead saved to DB only, email not sent");
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Error processing lead:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
