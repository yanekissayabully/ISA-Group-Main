<?php
$raw = file_get_contents('php://input');
$data = json_decode($raw, true);

$name  = trim($data['name'] ?? '');
$phone = trim($data['phone'] ?? '');

if (!$name || !$phone) {
  http_response_code(400);
  echo json_encode(['error' => 'Имя и телефон обязательны']);
  exit;
}

$BOT_TOKEN = '8138036002:AAGtX2bcrJl0F0sg-Q-M-XIvxsDBo75r998';
$CHAT_ID = '914762159';

$message = "<b>Новая заявка с сайта!</b>\n"
         . "<b>Имя:</b> $name\n"
         . "<b>Телефон:</b> $phone\n"
         . "<b>Время:</b> " . date('d.m.Y H:i:s');

file_get_contents("https://api.telegram.org/bot{$BOT_TOKEN}/sendMessage?" . http_build_query([
  'chat_id' => $CHAT_ID,
  'text' => $message,
  'parse_mode' => 'HTML'
]));

echo json_encode(['success' => true]);
