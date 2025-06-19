export const dynamic = 'force-dynamic'; // ⬅️ ключевая строка

export async function POST(req: Request) {
  try {
    const { name, phone } = await req.json();

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      console.error('❌ Отсутствуют переменные окружения');
      return new Response('Missing env variables', { status: 500 });
    }

    const message = `
🚀 *Новая заявка с сайта*:
👤 Имя: *${name}*
📞 Телефон: *${phone}*
`;

    const telegramResponse = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'Markdown',
      }),
    });

    if (!telegramResponse.ok) {
      const errText = await telegramResponse.text();
      console.error('❌ Ответ от Telegram:', errText);
      return new Response('Telegram error', { status: 500 });
    }

    return new Response('ok', { status: 200 });
  } catch (e) {
    console.error('❌ Ошибка в route.ts:', e);
    return new Response('Internal Server Error', { status: 500 });
  }
}
