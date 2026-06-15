// 表單提交函數
function submitForm(event) {
    event.preventDefault();
    
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    
    // 獲取表單數據
    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const message = form.querySelector('textarea').value;
    
    // 簡單的郵件驗證
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!name || !email || !message) {
        showMessage('請填寫所有欄位', 'error');
        return;
    }
    
    if (!emailRegex.test(email)) {
        showMessage('請輸入有效的電郵地址', 'error');
        return;
    }
    
    // 模擬提交（在實際應用中，這應該發送到服務器）
    showMessage('感謝您的消息！我們將很快回覆。', 'success');
    form.reset();
    
    // 3秒後隱藏消息
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 3000);
}

// 顯示消息函數
function showMessage(text, type) {
    const formMessage = document.getElementById('formMessage');
    formMessage.textContent = text;
    formMessage.className = `form-message ${type}`;
}

// 平滑滾動
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 導航欄粘性效果
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
    } else {
        navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    }
});

// 頁面加載完成後的初始化
document.addEventListener('DOMContentLoaded', () => {
    console.log('路亞釣魚網站已加載！');
    
    // 添加淡入淡出動畫
    const cards = document.querySelectorAll('.card, .equipment-item, .tip');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.animation = `fadeIn 0.6s ease-in-out ${index * 0.1}s forwards`;
    });
});

// 淡入淡出動畫
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
