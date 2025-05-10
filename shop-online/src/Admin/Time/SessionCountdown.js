// xét thời gian hết hạn ra ngoài giao diện
import { useEffect, useState } from 'react';

function SessionCountdown() {
    const [timeLeft, setTimeLeft] = useState(0);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (!storedUser?.expireTime) return;

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const timeRemaining = storedUser.expireTime - now;

            if (timeRemaining <= 0) {
                clearInterval(interval);
                localStorage.removeItem('user');
                window.location.href = "/login"; // tự động chuyển trang
            } else {
                setTimeLeft(timeRemaining);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formatTime = (ms) => {
        const totalSeconds = Math.floor(ms / 1000);
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        return `${hours}h ${minutes}m ${seconds}s`;
    };

    return (
        <div style={{
            position: 'fixed',
            top: '10px',
            right: '20px',
            backgroundColor: '#f5f5f5',
            padding: '8px 16px',
            borderRadius: '8px',
            boxShadow: '0 0 6px rgba(0,0,0,0.1)',
            fontSize: '14px',
            color: '#333'
        }}>
            Phiên làm việc còn: {formatTime(timeLeft)}
        </div>
    );
}

export default SessionCountdown;
