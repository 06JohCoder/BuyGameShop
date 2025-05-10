import React, { useState } from 'react';
import './NewsManagement.css';

const mockNews = [
    { id: 1, title: 'Thông báo nghỉ lễ 30/4', content: 'Công ty nghỉ từ 30/4 đến 2/5.' },
    { id: 2, title: 'Ra mắt sản phẩm mới', content: 'Chúng tôi sắp ra mắt sản phẩm XYZ...' },
];

export default function NewsManagement() {
    const [newsList, setNewsList] = useState(mockNews);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [editingId, setEditingId] = useState(null);

    const handleAddOrUpdate = () => {
        if (!title.trim() || !content.trim()) return;

        if (editingId) {
            setNewsList((prev) =>
                prev.map((n) =>
                    n.id === editingId ? { ...n, title, content } : n
                )
            );
            setEditingId(null);
        } else {
            setNewsList((prev) => [
                ...prev,
                { id: Date.now(), title, content },
            ]);
        }

        setTitle('');
        setContent('');
    };

    const handleEdit = (news) => {
        setTitle(news.title);
        setContent(news.content);
        setEditingId(news.id);
    };

    const handleDelete = (id) => {
        setNewsList((prev) => prev.filter((n) => n.id !== id));
    };

    return (
        <div className="news-card">
            <h2 className="news-title">📢 Quản Lý Thông Báo / Tin Tức</h2>

            <div className="news-form">
                <input
                    type="text"
                    placeholder="Tiêu đề..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    placeholder="Nội dung..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <button onClick={handleAddOrUpdate}>
                    {editingId ? '✔️ Cập nhật' : '➕ Thêm mới'}
                </button>
            </div>

            <ul className="news-list">
                {newsList.map((news) => (
                    <li key={news.id} className="news-item">
                        <div>
                            <h3>{news.title}</h3>
                            <p>{news.content}</p>
                        </div>
                        <div className="news-actions">
                            <button onClick={() => handleEdit(news)}>✏️</button>
                            <button onClick={() => handleDelete(news.id)}>🗑️</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
