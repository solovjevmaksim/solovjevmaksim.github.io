// Универсальные вопросы для глубокого анализа отношений (25 вопросов)
const questions = [
    {
        text: "Как часто вы открыто обсуждаете свои чувства с партнером?",
        options: [
            "Почти никогда",
            "Редко",
            "Иногда",
            "Регулярно"
        ],
        category: "communication"
    },
    {
        text: "Насколько хорошо вы понимаете невысказанные потребности партнера?",
        options: [
            "Плохо понимаю",
            "Понимаю частично",
            "Хорошо понимаю",
            "Отлично понимаю"
        ],
        category: "empathy"
    },
    {
        text: "Как часто вы практикуете активное слушание в разговорах?",
        options: [
            "Почти никогда",
            "Редко",
            "Иногда",
            "Всегда"
        ],
        category: "communication"
    },
    {
        text: "Насколько вы уважаете личные границы друг друга?",
        options: [
            "Часто нарушаем границы",
            "Иногда возникают проблемы",
            "В основном соблюдаем",
            "Полностью уважаем"
        ],
        category: "respect"
    },
    {
        text: "Как вы справляетесь с разногласиями в важных жизненных решениях?",
        options: [
            "Частые конфликты",
            "Компромисс через напряжение",
            "Спокойный поиск решения",
            "Легко находим общий язык"
        ],
        category: "conflictResolution"
    },
    {
        text: "Насколько синхронизированы ваши жизненные ценности?",
        options: [
            "Совсем разные",
            "Есть значительные различия",
            "В основном совпадают",
            "Полностью совпадают"
        ],
        category: "values"
    },
    {
        text: "Как часто вы выражаете признательность друг другу?",
        options: [
            "Почти никогда",
            "Редко",
            "Иногда",
            "Ежедневно"
        ],
        category: "appreciation"
    },
    {
        text: "Насколько вы удовлетворены распределением домашних обязанностей?",
        options: [
            "Полностью неудовлетворен(а)",
            "Частично неудовлетворен(а)",
            "В основном удовлетворен(а)",
            "Полностью удовлетворен(а)"
        ],
        category: "equality"
    },
    {
        text: "Как вы поддерживаете друг друга в трудные периоды?",
        options: [
            "Практически не поддерживаем",
            "Минимальная поддержка",
            "Поддерживаем, но не всегда достаточно",
            "Постоянно чувствуем поддержку"
        ],
        category: "support"
    },
    {
        text: "Насколько вы разделяете интересы и хобби друг друга?",
        options: [
            "Совсем не разделяем",
            "Редко находим общие интересы",
            "Иногда находим общее",
            "Много общих интересов"
        ],
        category: "interests"
    },
    {
        text: "Как часто вы проводите качественное время вместе?",
        options: [
            "Очень редко",
            "Раз в месяц",
            "Раз в неделю",
            "Почти ежедневно"
        ],
        category: "timeTogether"
    },
    {
        text: "Насколько комфортно вы чувствуете себя, выражая уязвимость?",
        options: [
            "Очень некомфортно",
            "Некомфортно",
            "Умеренно комфортно",
            "Полностью комфортно"
        ],
        category: "vulnerability"
    },
    {
        text: "Как вы решаете финансовые вопросы?",
        options: [
            "Постоянные конфликты",
            "Иногда возникают споры",
            "Спокойно обсуждаем",
            "Всегда находим согласие"
        ],
        category: "finance"
    },
    {
        text: "Насколько вы доверяете решениям партнера?",
        options: [
            "Почти не доверяю",
            "Доверяю в мелочах",
            "В основном доверяю",
            "Полностью доверяю"
        ],
        category: "trust"
    },
    {
        text: "Как вы отмечаете достижения друг друга?",
        options: [
            "Практически не отмечаем",
            "Редко",
            "Иногда",
            "Всегда"
        ],
        category: "celebration"
    },
    {
        text: "Насколько вы удовлетворены уровнем эмоциональной близости?",
        options: [
            "Полностью неудовлетворен(а)",
            "Слабо удовлетворен(а)",
            "Удовлетворен(а)",
            "Полностью удовлетворен(а)"
        ],
        category: "intimacy"
    },
    {
        text: "Как вы восстанавливаетесь после конфликтов?",
        options: [
            "Долго не разговариваем",
            "Нужно время на восстановление",
            "Быстро миримся",
            "Всегда находим путь к примирению"
        ],
        category: "conflictResolution"
    },
    {
        text: "Насколько вы уважаете методы воспитания друг друга?",
        options: [
            "Частые разногласия",
            "Иногда спорим",
            "В основном согласны",
            "Полное взаимопонимание"
        ],
        category: "parenting"
    },
    {
        text: "Как вы относитесь к личному времени партнера?",
        options: [
            "Часто вмешиваюсь",
            "Иногда ревную к хобби",
            "Уважаю, но хотелось бы больше времени вместе",
            "Полностью поддерживаю"
        ],
        category: "personalSpace"
    },
    {
        text: "Насколько вы честны друг с другом?",
        options: [
            "Часто скрываем правду",
            "Иногда умалчиваем",
            "В основном честны",
            "Абсолютно честны"
        ],
        category: "honesty"
    },
    {
        text: "Как вы планируете совместное будущее?",
        options: [
            "Практически не планируем",
            "Редко обсуждаем",
            "Иногда говорим о будущем",
            "Регулярно строим планы"
        ],
        category: "future"
    },
    {
        text: "Насколько вы гибки в компромиссах?",
        options: [
            "Почти никогда не иду на уступки",
            "Редко иду на компромисс",
            "Иногда уступаю",
            "Всегда ищу компромисс"
        ],
        category: "flexibility"
    },
    {
        text: "Как вы поддерживаете страсть в отношениях?",
        options: [
            "Практически не уделяем внимания",
            "Редко",
            "Иногда",
            "Постоянно работаем над этим"
        ],
        category: "passion"
    },
    {
        text: "Насколько вы чувствуете себя собой в отношениях?",
        options: [
            "Чувствую необходимость притворяться",
            "Иногда скрываю настоящего себя",
            "В основном могу быть собой",
            "Полностью могу быть собой"
        ],
        category: "authenticity"
    },
    {
        text: "Насколько вы счастливы в этих отношениях?",
        options: [
            "Совсем не счастлив(а)",
            "Скорее не счастлив(а)",
            "Скорее счастлив(а)",
            "Полностью счастлив(а)"
        ],
        category: "happiness"
    }
];

// Переменные состояния
let currentQuestion = 0;
let answers = [];
let categoryScores = {
    communication: 0,
    empathy: 0,
    respect: 0,
    conflictResolution: 0,
    values: 0,
    appreciation: 0,
    equality: 0,
    support: 0,
    interests: 0,
    timeTogether: 0,
    vulnerability: 0,
    finance: 0,
    trust: 0,
    celebration: 0,
    intimacy: 0,
    parenting: 0,
    personalSpace: 0,
    honesty: 0,
    future: 0,
    flexibility: 0,
    passion: 0,
    authenticity: 0,
    happiness: 0
};

// Инициализация теста
function initTest() {
    document.getElementById('intro-screen').style.display = 'none';
    document.getElementById('result-container').style.display = 'none';
    renderQuestion(currentQuestion);
}

// Отображение вопроса
function renderQuestion(index) {
    const container = document.getElementById('questions-container');
    container.style.display = 'block';
    container.innerHTML = '';
    
    const q = questions[index];
    
    const questionDiv = document.createElement('div');
    questionDiv.className = 'question-container';
    
    const questionHTML = `
        <div class="question">
            <h3><i class="fas fa-question-circle"></i> Вопрос ${index + 1} из ${questions.length}</h3>
            <p>${q.text}</p>
            <div class="options">
                ${q.options.map((option, optIndex) => `
                    <div class="option ${answers[index] === optIndex ? 'selected' : ''}" data-index="${optIndex}">
                        <div class="option-number">${optIndex + 1}</div>
                        <div>${option}</div>
                    </div>
                `).join('')}
            </div>
            <div class="buttons">
                <button class="btn-prev" ${index === 0 ? 'disabled' : ''}>
                    <i class="fas fa-arrow-left"></i> Назад
                </button>
                <button class="btn-next" ${index === questions.length - 1 ? 'id="submit-btn"' : ''}>
                    ${index === questions.length - 1 ? 'Получить анализ <i class="fas fa-robot"></i>' : 'Далее <i class="fas fa-arrow-right"></i>'}
                </button>
            </div>
        </div>
    `;
    
    questionDiv.innerHTML = questionHTML;
    container.appendChild(questionDiv);
    
    // Обработчики для вариантов ответа
    document.querySelectorAll('.option').forEach(option => {
        option.addEventListener('click', function() {
            const selectedIndex = parseInt(this.dataset.index);
            answers[index] = selectedIndex;
            renderQuestion(index);
        });
    });
    
    // Обработчики для кнопок
    if (index > 0) {
        document.querySelector('.btn-prev').addEventListener('click', () => {
            currentQuestion--;
            renderQuestion(currentQuestion);
        });
    }
    
    const nextBtn = document.querySelector('.btn-next');
    nextBtn.addEventListener('click', () => {
        if (answers[currentQuestion] === undefined) {
            alert('Пожалуйста, выберите ответ');
            return;
        }
        
        if (currentQuestion < questions.length - 1) {
            currentQuestion++;
            renderQuestion(currentQuestion);
        } else {
            calculateResults();
            showResults();
        }
    });
}

// Расчет результатов
function calculateResults() {
    // Сброс счетчиков
    Object.keys(categoryScores).forEach(category => {
        categoryScores[category] = 0;
    });
    
    // Подсчет баллов по категориям
    answers.forEach((answer, index) => {
        if (answer !== undefined) {
            const category = questions[index].category;
            categoryScores[category] += answer;
        }
    });
    
    // Нормализация баллов (0-100%)
    Object.keys(categoryScores).forEach(category => {
        const maxPossible = 3 * questions.filter(q => q.category === category).length;
        categoryScores[category] = Math.round((categoryScores[category] / maxPossible) * 100);
    });
}

// Отображение результатов
function showResults() {
    const container = document.getElementById('result-container');
    container.innerHTML = '';
    container.style.display = 'block';
    document.getElementById('questions-container').style.display = 'none';
    
    // Расчет общего балла
    const totalScore = Object.values(categoryScores).reduce((sum, score) => sum + score, 0) / Object.keys(categoryScores).length;
    const relationshipLevel = totalScore < 40 ? "Кризисный период" : 
                            totalScore < 70 ? "Стабильные отношения" : "Гармоничные отношения";
    
    container.innerHTML = `
        <h2 style="text-align: center; color: #e91e63;">
            <i class="fas fa-chart-pie"></i> Результаты диагностики
        </h2>
        
        <div class="result-card">
            <h3><i class="fas fa-heart"></i> Общая оценка отношений</h3>
            <p><strong>${relationshipLevel}</strong> (${Math.round(totalScore)}/100 баллов)</p>
            <p>${getGeneralDescription(totalScore)}</p>
        </div>
        
        <div class="result-card">
            <h3><i class="fas fa-chart-bar"></i> Анализ по категориям</h3>
            
            ${generateCategoryCards()}
        </div>
        
        <div class="result-card">
            <h3><i class="fas fa-robot"></i> Анализ от DeepSeek AI</h3>
            <div class="ai-analysis">
                <div class="ai-avatar">🤖</div>
                <div class="ai-message">
                    <p>${generateAIAnalysis()}</p>
                    <div class="ai-signature">
                        <strong>DeepSeek AI</strong><br>
                        <em>Ваш цифровой аналитик отношений</em>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="result-card solution">
            <h3><i class="fas fa-lightbulb"></i> Персональные рекомендации</h3>
            <p>${generatePersonalRecommendations()}</p>
        </div>
        
        <button id="restart-btn" style="margin: 20px auto; display: block;">
            <i class="fas fa-redo"></i> Пройти тест снова
        </button>
    `;
    
    // Обработчик для кнопки перезапуска
    document.getElementById('restart-btn').addEventListener('click', () => {
        currentQuestion = 0;
        answers = [];
        document.getElementById('result-container').style.display = 'none';
        document.getElementById('intro-screen').style.display = 'block';
    });
}

// Генерация карточек категорий
function generateCategoryCards() {
    const categories = {
        communication: "Общение",
        empathy: "Эмпатия",
        respect: "Уважение",
        conflictResolution: "Разрешение конфликтов",
        values: "Совпадение ценностей",
        appreciation: "Признательность",
        equality: "Равенство",
        support: "Поддержка",
        interests: "Общие интересы",
        timeTogether: "Совместное время",
        vulnerability: "Открытость",
        finance: "Финансы",
        trust: "Доверие",
        celebration: "Празднование успехов",
        intimacy: "Близость",
        parenting: "Воспитание детей",
        personalSpace: "Личное пространство",
        honesty: "Честность",
        future: "Совместное будущее",
        flexibility: "Гибкость",
        passion: "Страсть",
        authenticity: "Быть собой",
        happiness: "Счастье"
    };
    
    let html = '';
    Object.keys(categories).forEach(category => {
        const score = categoryScores[category];
        const color = score < 40 ? '#ff5252' : score < 70 ? '#ffa726' : '#66bb6a';
        
        html += `
            <div class="category">
                <h4><i class="fas fa-${getCategoryIcon(category)}"></i> ${categories[category]}</h4>
                <div class="progress-container">
                    <div class="progress-bar" style="width: ${score}%; background: ${color};"></div>
                </div>
                <p>${score}% - ${getCategoryDescription(category, score)}</p>
            </div>
        `;
    });
    return html;
}

// Иконки для категорий
function getCategoryIcon(category) {
    const icons = {
        communication: "comments",
        empathy: "heart",
        respect: "handshake",
        conflictResolution: "peace",
        values: "star",
        appreciation: "award",
        equality: "balance-scale",
        support: "hands-helping",
        interests: "music",
        timeTogether: "clock",
        vulnerability: "lock-open",
        finance: "money-bill-wave",
        trust: "user-shield",
        celebration: "glass-cheers",
        intimacy: "heartbeat",
        parenting: "baby",
        personalSpace: "user-alt",
        honesty: "check-circle",
        future: "flag",
        flexibility: "exchange-alt",
        passion: "fire",
        authenticity: "user-check",
        happiness: "smile-beam"
    };
    return icons[category] || "chart-bar";
}

// Описания категорий
function getCategoryDescription(category, score) {
    const descriptions = {
        communication: score < 40 ? "Требуется улучшение коммуникации" : 
                        score < 70 ? "Хороший уровень общения" : "Отличная коммуникация",
        empathy: score < 40 ? "Недостаточное понимание чувств" : 
                 score < 70 ? "Умеренная эмпатия" : "Глубокое взаимопонимание",
        respect: score < 40 ? "Проблемы с уважением границ" : 
                 score < 70 ? "Уважение присутствует" : "Полное взаимное уважение"
    };
    
    return descriptions[category] || (score < 40 ? "Требует внимания" : 
           score < 70 ? "Удовлетворительно" : "Отличный результат");
}

// Генерация анализа ИИ
function generateAIAnalysis() {
    const strengths = [];
    const weaknesses = [];
    
    // Анализ сильных и слабых сторон
    Object.entries(categoryScores).forEach(([category, score]) => {
        if (score >= 70) {
            strengths.push(category);
        } else if (score <= 40) {
            weaknesses.push(category);
        }
    });
    
    // Формирование сообщения
    let analysis = "На основе ваших ответов я определил следующие аспекты ваших отношений:";
    
    if (strengths.length > 0) {
        analysis += "<br><br><strong>Сильные стороны:</strong><br>";
        analysis += strengths.map(cat => `✓ ${getCategoryName(cat)}`).join("<br>");
    }
    
    if (weaknesses.length > 0) {
        analysis += "<br><br><strong>Зоны роста:</strong><br>";
        analysis += weaknesses.map(cat => `✗ ${getCategoryName(cat)}`).join("<br>");
    }
    
    analysis += "<br><br>Ваши отношения имеют хороший фундамент, но есть области, требующие внимания. ";
    analysis += "Самый важный шаг - начать открытый диалог о потребностях каждого партнера.";
    
    return analysis;
}

// Названия категорий
function getCategoryName(category) {
    const names = {
        communication: "Коммуникация",
        empathy: "Эмпатия",
        respect: "Уважение",
        conflictResolution: "Разрешение конфликтов",
        values: "Совпадение ценностей",
        appreciation: "Признательность",
        equality: "Равенство",
        support: "Поддержка",
        interests: "Общие интересы",
        timeTogether: "Совместное время",
        vulnerability: "Открытость",
        finance: "Финансы",
        trust: "Доверие",
        celebration: "Празднование успехов",
        intimacy: "Близость",
        parenting: "Воспитание детей",
        personalSpace: "Личное пространство",
        honesty: "Честность",
        future: "Совместное будущее",
        flexibility: "Гибкость",
        passion: "Страсть",
        authenticity: "Быть собой",
        happiness: "Счастье"
    };
    return names[category] || category;
}

// Генерация рекомендаций
function generatePersonalRecommendations() {
    const lowCategories = Object.entries(categoryScores)
        .filter(([_, score]) => score < 40)
        .map(([cat, _]) => cat);
    
    let recommendations = "";
    
    if (lowCategories.includes('communication')) {
        recommendations += "<li>Практикуйте 'технику активного слушания': повторяйте своими словами то, что сказал партнер, прежде чем отвечать</li>";
    }
    
    if (lowCategories.includes('conflictResolution')) {
        recommendations += "<li>Установите правило: во время конфликтов говорить 'я чувствую...' вместо 'ты сделал...'</li>";
    }
    
    if (lowCategories.includes('appreciation')) {
        recommendations += "<li>Начните день с благодарности: каждый день говорите партнеру одну конкретную вещь, за которую вы благодарны</li>";
    }
    
    if (lowCategories.includes('intimacy')) {
        recommendations += "<li>Запланируйте 'свидание с эмоциями': 30 минут в неделю, когда вы делитесь своими чувствами без осуждения</li>";
    }
    
    if (recommendations === "") {
        recommendations = "<li>Продолжайте практиковать регулярные 'чекины' отношений: раз в месяц обсуждайте, что работает хорошо, а что можно улучшить</li>";
        recommendations += "<li>Экспериментируйте с новыми совместными занятиями, чтобы освежить отношения</li>";
        recommendations += "<li>Практикуйте неожиданные проявления любви: небольшие подарки, записки, неожиданные комплименты</li>";
    }
    
    return `<ul>${recommendations}</ul>`;
}

// Общее описание
function getGeneralDescription(score) {
    if (score < 40) {
        return "Ваши отношения переживают сложный период. Требуется активная работа над восстановлением доверия и коммуникации. Не отчаивайтесь - кризисы можно преодолеть, если оба партнера готовы работать над отношениями.";
    } else if (score < 70) {
        return "У вас хорошие отношения с потенциалом к развитию. Есть области, которые требуют внимания, но при совместных усилиях вы сможете достичь большей гармонии.";
    } else {
        return "Поздравляем! У вас гармоничные, здоровые отношения. Вы хорошо понимаете друг друга, уважаете потребности партнера и эффективно разрешаете конфликты. Продолжайте поддерживать эту прекрасную связь!";
    }
}

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('start-btn').addEventListener('click', initTest);
});
