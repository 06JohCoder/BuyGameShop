import "./Contact.css";


function Contact() {
    return (
        <>
            <div className="contact-info-section">
                <h2 className="contact-info-title">Liên Hệ Với Chúng Tôi</h2>
                <div className="contact-info-list">
                    <a href="tel:0987654321" className="contact-info-item phone" target="_blank" rel="noopener noreferrer">
                        📞 Gọi: 0987 654 321
                    </a>
                    <a href="https://zalo.me/0987654321" className="contact-info-item zalo" target="_blank" rel="noopener noreferrer">
                        💬 Zalo
                    </a>
                    <a href="https://m.me/yourpage" className="contact-info-item messenger" target="_blank" rel="noopener noreferrer">
                        📩 Messenger
                    </a>
                    <a href="https://t.me/yourtelegram" className="contact-info-item telegram" target="_blank" rel="noopener noreferrer">
                        🚀 Telegram
                    </a>
                </div>
            </div>

        </>
    );
}

export default Contact;