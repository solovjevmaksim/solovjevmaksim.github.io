// Данные теста
const questions = [
    {
        text: "Когда партнер резко отвечает на простой вопрос, ваша первая реакция:",
        options: [
            "Сразу спрашиваю: 'Почему ты так грубишь?'",
            "Молча отхожу, чтобы не усугублять",
            "Пытаюсь перефразировать вопрос мягче",
            "Напоминаю: 'Мы же договорились не срываться'"
        ]
    },
    {
        text: "На фразу 'Найди другого партнера' вы обычно:",
        options: [
            "Серьёзно предлагаю: 'Может действительно расстанемся?'",
            "Отвечаю: 'Перестань говорить глупости'",
            "Говорю: 'Я не хочу другого, я хочу понять тебя'",
            "Молчу, пока партнер не успокоится"
        ]
    },
    {
        text: "Что чаще всего предшествует конфликтам?",
        options: [
            "Когда партнер не выполняет обещания",
            "После напряжённого рабочего дня",
            "Когда задаю вопросы о поведении партнера",
            "Когда чувствую недосып или усталость"
        ]
    },
    {
        text: "Как вы ведете себя после ссоры?",
        options: [
            "Жду, когда партнер первый пойдет на примирение",
            "Пытаюсь сразу обсудить, что произошло",
            "Делаю что-то приятное для партнера",
            "Нужно время побыть одному, чтобы остыть"
        ]
    },
    {
        text: "Что для вас самое болезненное в конфликтах?",
        options: [
            "Повышенный тон и крик",
            "Молчание и игнорирование",
            "Обидные слова 'ниже пояса'",
            "Отказ обсуждать проблему"
        ]
    },
    {
        text: "Как вы проявляете заботу в сложный период?",
        options: [
            "Стараюсь решать практические задачи",
            "Говорю слова поддержки и одобрения",
            "Инициирую разговор о чувствах",
            "Даю партнеру пространство"
        ]
    }
];

// Переменные состояния
let currentQuestion = 0;
let answers = [];
let conflictType = "";
let partnerType = "";

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
                    ${index === questions.length - 1 ? 'Показать результат <i class="fas fa-chart-line"></i>' : 'Далее <i class="fas fa-arrow-right"></i>'}
                </button>
            </div>
        </div>
    `;
    
    questionDiv.innerHTML = questionHTML;
    container.appendChild(questionDiv);
    
    // Добавляем обработчики для вариантов ответа
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
            showResults();
        }
    });
}

// Анализ результатов
function analyzeResults() {
    const resultCounts = [0, 0, 0, 0];
    
    answers.forEach(ans => {
        if (ans !== undefined) resultCounts[ans]++;
    });
    
    // Определение типа конфликта
    const maxIndex = resultCounts.indexOf(Math.max(...resultCounts));
    const conflictTypes = [
        { name: "Прямая конфронтация", desc: "Вы предпочитаете открытое обсуждение проблем" },
        { name: "Избегание конфликта", desc: "Вы стараетесь минимизировать конфликты" },
        { name: "Дипломатический подход", desc: "Вы ищете компромиссы и мягкие решения" },
        { name: "Контролируемое отстранение", desc: "Вы даете пространство для остывания эмоций" }
    ];
    
    conflictType = conflictTypes[maxIndex];
    
    // Определение типа партнера
    if (answers[0] === 0 && answers[1] === 0 && answers[4] === 0) {
        partnerType = { name: "Вулкан", desc: "Реагирует бурно, но быстро остывает. Нуждается в подтверждении важности чувств." };
    } else if (answers[0] === 1 && answers[1] === 3 && answers[4] === 1) {
        partnerType = { name: "Крепость", desc: "Защищается молчанием. Требует терпения и тактичного подхода." };
    } else if (answers[0] === 2 && answers[1] === 2 && answers[4] === 2) {
        partnerType = { name: "Маяк", desc: "Ищет диалог даже в конфликте. Ценит честность и глубину общения." };
    } else {
        partnerType = { name: "Покрывало", desc: "Нуждается в заботе и подтверждении любви. Чувствителен к критике." };
    }
}

// Отображение результатов
function showResults() {
    analyzeResults();
    const container = document.getElementById('result-container');
    container.innerHTML = '';
    container.style.display = 'block';
    document.getElementById('questions-container').style.display = 'none';
    
    container.innerHTML = `
        <h2 style="text-align: center; color: #e91e63;">
            <i class="fas fa-chart-pie"></i> Ваши результаты
        </h2>
        
        <div class="result-card">
            <h3><i class="fas fa-fire"></i> Ваш стиль поведения в конфликтах</h3>
            <p><strong>${conflictType.name}:</strong> ${conflictType.desc}</p>
            <p>В напряженных ситуациях вы чаще всего: ${getConflictBehavior()}</p>
        </div>
        
        <div class="type-card ${getTypeClass(partnerType.name)}">
            <h3><i class="fas fa-user"></i> Эмоциональный тип партнера</h3>
            <p>${partnerType.name}</p>
            <p>${partnerType.desc}</p>
        </div>
        
        <div class="result-card communication">
            <h3><i class="fas fa-comments"></i> Ключевая проблема коммуникации</h3>
            <p>${getCommunicationIssue()}</p>
            <p>Основной источник непонимания: <span class="highlight">${getMainTrigger()}</span></p>
        </div>
        
        <div class="result-card needs">
            <h3><i class="fas fa-heart"></i> Скрытые потребности партнера</h3>
            <p>За резкими реакциями могут стоять:</p>
            <ul>
                <li>${getHiddenNeed(0)}</li>
                <li>${getHiddenNeed(1)}</li>
                <li>${getHiddenNeed(2)}</li>
            </ul>
        </div>
        
        <div class="result-card solution">
            <h3><i class="fas fa-lightbulb"></i> Практические рекомендации</h3>
            
            <div class="recommendation">
                <h4><i class="fas fa-bolt"></i> Срочные меры (первые 3 дня):</h4>
                <p>${getUrgentAction()}</p>
            </div>
            
            <div class="recommendation">
                <h4><i class="fas fa-seedling"></i> Долгосрочная стратегия:</h4>
                <p>${getLongTermStrategy()}</p>
            </div>
            
            <div class="recommendation">
                <h4><i class="fas fa-magic"></i> Фразы-переключатели:</h4>
                <p>Попробуйте сказать: <span class="highlight">"${getMagicPhrase()}"</span> когда чувствуете, что конфликт разгорается</p>
            </div>
            
            <button id="restart-btn" style="margin: 20px auto; display: block;">
                <i class="fas fa-redo"></i> Пройти тест снова
            </button>
        </div>
    `;
    
    // Обработчик для кнопки перезапуска
    document.getElementById('restart-btn').addEventListener('click', () => {
        currentQuestion = 0;
        answers = [];
        document.getElementById('result-container').style.display = 'none';
        document.getElementById('intro-screen').style.display = 'block';
    });
}

// Вспомогательные функции
function getTypeClass(type) {
    const classes = {
        "Вулкан": "volcano",
        "Крепость": "fortress",
        "Маяк": "lighthouse",
        "Покрывало": "blanket"
    };
    return classes[type] || "";
}

function getConflictBehavior() {
    return [
        "открыто выражаете недовольство, что может восприниматься как атака",
        "стараетесь избежать конфликта, но рискуете копить обиды",
        "ищете компромиссные решения, иногда в ущерб своим интересам",
        "предпочитаете дать партнеру пространство, что может создавать дистанцию"
    ][conflictType.name === "Прямая конфронтация" ? 0 : 
      conflictType.name === "Избегание конфликта" ? 1 : 
      conflictType.name === "Дипломатический подход" ? 2 : 3];
}

function getCommunicationIssue() {
    return "Разные ожидания от общения: один партнер ждет действий, другой - слов поддержки. Накопленная усталость снижает терпимость к раздражителям.";
}

function getMainTrigger() {
    return "чувство недооцененности и страх быть непонятым";
}

function getHiddenNeed(index) {
    const needs = [
        "Потребность в признании: 'Мои чувства и усилия ценят'",
        "Желание безопасности: 'Рядом со мной можно быть собой без осуждения'",
        "Потребность в уважении личного пространства"
    ];
    return needs[index];
}

function getUrgentAction() {
    return "Выделите 15 минут для разговора без претензий. Начните с благодарности за 3 конкретные вещи, которые сделал партнер.";
}

function getLongTermStrategy() {
    return "Раз в неделю практикуйте 'время настройки': 30 минут без гаджетов, где каждый говорит о своих чувствах без перебиваний.";
}

function getMagicPhrase() {
    return "Дорогой(ая), я вижу, что ты расстроен(а). Давай сделаем паузу и просто обнимемся?";
}

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('start-btn').addEventListener('click', initTest);
});