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
</html>
