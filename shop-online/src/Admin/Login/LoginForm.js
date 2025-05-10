import { useState } from 'react';
import axios from 'axios';
import './LoginForm.css';

import AdminLayout from '../AdminLayout';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        accessCode: '',
    });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');
        try {
            const res = await axios.get('http://localhost:3001/users');
            const user = res.data.find(
                u =>
                    u.username === formData.username &&
                    u.password === formData.password &&
                    u.accessCode === formData.accessCode
            );

            if (user) {
                setMessage('Đăng nhập thành công!');
                // Redirect to AdminLayout or handle navigation here
                const expireTime = new Date().getTime() + 3 * 60 * 60 * 1000; // 3 tiếng
                const userWithExpire = {
                    ...user,
                    expireTime
                };
                localStorage.setItem('user', JSON.stringify(userWithExpire));
                navigate('/admin') // Chuyển hướng đến trang admin/dashboard
            } else {
                setMessage('Sai thông tin đăng nhập!');
            }
        } catch (err) {
            setMessage('Lỗi khi kiểm tra thông tin!');
        }
    };

    return (
        <div className="login-container__admin">
            <h2>Đăng nhập</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Tài khoản:</label>
                    <input type="text" name="username" value={formData.username} onChange={handleChange} required />
                </div>
                <div>
                    <label>Mật khẩu:</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                </div>
                <div>
                    <label>Mã nhân viên được cấp:</label>
                    <input type="text" name="accessCode" value={formData.accessCode} onChange={handleChange} required />
                </div>
                {/* <button type="submit">Đăng nhập</button> */}
                <button type='submit' disabled={loading}>
                    {loading ? 'Đang Đăng nhập...' : 'Đăng nhập'}
                </button>
            </form>
            <p>{message}</p>
        </div>
    );
}
export default LoginForm;