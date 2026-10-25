Second SMP: запуск
1) Установите Node.js 18+ и в этой папке выполните: npm install
2) Настройте почту (SMTP) и запустите:
   SMTP_HOST=smtp.yandex.ru SMTP_PORT=465 SMTP_USER=you@yandex.ru SMTP_PASS=пароль_приложения SMTP_FROM=you@yandex.ru node server.js
3) Откройте http://localhost:3000

Без SMTP код входа печатается в консоль сервера (режим проверки), на сайт он не выводится.
Админ: логин SecondSmp, пароль Admin. Смените: ADMIN_LOGIN=... ADMIN_PASS=...
Все действия пишутся в acc.txt, тиры хранятся в tiers.json.
