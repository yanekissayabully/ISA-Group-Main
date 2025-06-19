// import { NextResponse } from 'next/server';

// export async function POST(request: Request) {
//   try {
//     const { name, phone } = await request.json();

//     if (!name || !phone) {
//       return NextResponse.json(
//         { error: 'Имя и телефон обязательны' },
//         { status: 400 }
//       );
//     }

//     const botToken = process.env.TELEGRAM_BOT_TOKEN;
//     const chatId = process.env.TELEGRAM_CHAT_ID;

//     if (!botToken || !chatId) {
//       return NextResponse.json(
//         { error: 'Telegram credentials not configured' },
//         { status: 500 }
//       );
//     }

//     const message = `
// <b>Новая заявка с сайта!</b>\n
// <b>Имя:</b> ${name}\n
// <b>Телефон:</b> ${phone}\n
// <b>Время:</b> ${new Date().toLocaleString()}
//     `;

//     const telegramResponse = await fetch(
//       `https://api.telegram.org/bot${botToken}/sendMessage`,
//       {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           chat_id: chatId,
//           text: message,
//           parse_mode: 'HTML',
//         }),
//       }
//     );

//     const telegramData = await telegramResponse.json();

//     if (!telegramResponse.ok) {
//       console.error('Telegram API Error:', telegramData);
//       return NextResponse.json(
//         { 
//           error: 'Ошибка Telegram API',
//           details: telegramData.description || 'Неизвестная ошибка'
//         },
//         { status: 500 }
//       );
//     }

//     return NextResponse.json({ success: true });
//   } catch (error) {
//     console.error('Server Error:', error);
//     return NextResponse.json(
//       { error: 'Internal server error', details: error.message },
//       { status: 500 }
//     );
//   }
// }

import { NextResponse } from 'next/server';

type ErrorWithMessage = {
  message: string;
};

function isErrorWithMessage(error: unknown): error is ErrorWithMessage {
  return (
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    typeof (error as Record<string, unknown>).message === 'string'
  );
}

function toErrorWithMessage(maybeError: unknown): ErrorWithMessage {
  if (isErrorWithMessage(maybeError)) return maybeError;

  try {
    return new Error(JSON.stringify(maybeError));
  } catch {
    return new Error(String(maybeError));
  }
}

export async function POST(request: Request) {
  try {
    const { name, phone } = await request.json();

    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Name and phone are required' },
        { status: 400 }
      );
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      throw new Error('Telegram credentials not configured');
    }

    const message = `
<b>Новая заявка с сайта!</b>
<b>Имя:</b> ${name}
<b>Телефон:</b> ${phone}
<b>Время:</b> ${new Date().toLocaleString('ru-RU')}
    `.trim();

    const response = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: 'HTML',
        }),
      }
    );

    const data = await response.json();

    if (!data.ok) {
      throw new Error(data.description || 'Failed to send message');
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    const errorWithMessage = toErrorWithMessage(error);
    console.error('Error:', errorWithMessage.message);
    
    return NextResponse.json(
      { 
        error: 'Internal server error',
        details: errorWithMessage.message 
      },
      { status: 500 }
    );
  }
}