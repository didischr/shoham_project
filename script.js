document.addEventListener('DOMContentLoaded', () => {
    const chatMessages = document.querySelector('.chat-messages');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-message');

    sendButton.addEventListener('click', handleSendMessage);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    });

    // מאגר בדיחות והלצות
    const jokes = [
        "למה מכונת תפירה חצתה את הכביש? כי היא רצתה להיות בצד השני של התפר!",
        "מה אמרה מחט אחת לשנייה? תפסיקי לדחוף לי חוט!",
        "איך קוראים לחייט שאוהב לרקוד? תופר דיסקו!",
        "מה עושה מעצב אופנה כשהוא עצבני? הוא מאבד את החוט!",
        "למה הג'ינס היה עצוב? כי הוא היה כחול...",
        // הוסף עוד בדיחות כרצונך
    ];

    // פונקציה לבחירת בדיחה אקראית
    function getRandomJoke() {
        return jokes[Math.floor(Math.random() * jokes.length)];
    }

    // פונקציה לטיפול בשליחת הודעה
    function handleSendMessage() {
        const userInput = document.getElementById('user-input');
        const chatMessages = document.getElementById('chat-messages');
        
        // בדיקה שיש טקסט להודעה
        if (userInput.value.trim() !== '') {
            // הוספת ההודעה של המשתמש
            chatMessages.innerHTML += `<p><strong>את/ה:</strong> ${userInput.value}</p>`;
            
            // קבלת בדיחה אקראית כתגובה
            const joke = getRandomJoke();
            chatMessages.innerHTML += `<p><strong>עוזר העיצוב החכם:</strong> ${joke}</p>`;
            
            // ניקוי שדה הקלט
            userInput.value = '';
            
            // גלילה לתחתית הצ'אט
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
        // אם אין טקסט, פשוט לא עושים כלום (ללא הודעת שגיאה)
    }

    // הוספת מאזין אירועים לכפתור השליחה
    document.getElementById('send-message').addEventListener('click', handleSendMessage);

    // הוספת מאזין אירועים ללחיצה על Enter
    document.getElementById('user-input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    });

    // הוסף את זה בסוף הקובץ
    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('תודה על פנייתך! נחזור אליך בהקדם.');
        this.reset();
    });
});

function showSewingMachine() {
    document.getElementById('sewing-machine').style.display = 'block';
    setTimeout(() => {
        document.getElementById('sewing-machine').style.display = 'none';
    }, 15000); // מציג למשך 15 שניות
}

// עדכון הכפתור ב-HTML
document.querySelector('.cta-button').onclick = showSewingMachine;

// הוסף את זה בסוף הקובץ
document.addEventListener('DOMContentLoaded', (event) => {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes kickAnimation {
            0% { transform: translateY(100px) rotate(0deg); opacity: 0; }
            50% { transform: translateY(-20px) rotate(180deg); opacity: 1; }
            100% { transform: translateY(0) rotate(360deg); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
});

// הוסף את זה בסוף הקובץ
document.addEventListener('DOMContentLoaded', () => {
    const aiAssistant = document.getElementById('ai-assistant');
    let isDragging = false;
    let startX, startY, startLeft, startBottom;

    aiAssistant.addEventListener('mousedown', startDragging);
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', stopDragging);

    function startDragging(e) {
        if (e.target === minimizeButton) return; // מונע גרירה בלחיצה על כפתור המזעור
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        startLeft = parseInt(getComputedStyle(aiAssistant).left);
        startBottom = parseInt(getComputedStyle(aiAssistant).bottom);
    }

    function drag(e) {
        if (!isDragging) return;
        e.preventDefault();
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        aiAssistant.style.left = `${startLeft + dx}px`;
        aiAssistant.style.bottom = `${startBottom - dy}px`;
    }

    function stopDragging() {
        isDragging = false;
    }

    // פונקציונליות מזעור
    const minimizeButton = document.getElementById('minimize-ai');
    minimizeButton.addEventListener('click', () => {
        aiAssistant.classList.toggle('minimized');
        minimizeButton.textContent = aiAssistant.classList.contains('minimized') ? '+' : '-';
    });
});

// הוסף את זה בסוף הקובץ
document.addEventListener('DOMContentLoaded', () => {
    const historyContainer = document.querySelector('.sewing-machine-history');
    let isDown = false;
    let startX;
    let scrollLeft;

    historyContainer.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - historyContainer.offsetLeft;
        scrollLeft = historyContainer.scrollLeft;
    });

    historyContainer.addEventListener('mouseleave', () => {
        isDown = false;
    });

    historyContainer.addEventListener('mouseup', () => {
        isDown = false;
    });

    historyContainer.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - historyContainer.offsetLeft;
        const walk = (x - startX) * 2;
        historyContainer.scrollLeft = scrollLeft - walk;
    });
});

// הוסף את זה בסוף הקובץ
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.style.display = 'flex';
        contactForm.style.opacity = '1';
        contactForm.style.visibility = 'visible';
    }
});