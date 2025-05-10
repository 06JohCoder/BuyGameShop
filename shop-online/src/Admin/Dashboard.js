// src/pages/Dashboard.js
import React from 'react';
import './Dashboard.css'; // Import file CSS
const Logo = "/Logo.png";
export default function Dashboard() {
    return <>
        <div className="overlay_home">
            <div className="container">
                <img src={Logo} alt="Logo" className="logo" />
                <h1>Chào Mừng Đến Với Trình Quản Lý Admin Của NL!</h1>
                <p>Quản lý tất cả các hoạt động tại đây.</p>
                <p className="highlight">⏳ Phiên đăng nhập còn: 3h 0m 0s</p>
                <p>🔔 Đừng quên kiểm tra các thông báo mới!</p>
                <p>📞 Cần hỗ trợ? Liên hệ bộ phận kỹ thuật:</p>
                <p className="contact">SĐT/ZALO(lƯỜNG vIỆT NHẬT): 0569 847 809</p>
                <p class="highlight">🚪 Đừng quên đăng xuất khi không sử dụng nữa!</p>
                <p>✅ Chúc bạn thành công trong công việc!</p>
                <div className="footer">
                    &copy; 2025 Quản lý hệ thống NL. All rights reserved.
                </div>
            </div>
        </div>

    </>;
}
