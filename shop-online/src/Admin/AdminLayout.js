// src/layouts/AdminLayout.js
import { Routes, Route, Link } from 'react-router-dom';
import Dashboard from './Dashboard';
// import ProductManager from './ProductManager';
// import SessionCountdown from './Time/SessionCountdown';
// import OverviewDashboard from './Overview/OverviewDashboard';
// import UserManagement from './UserManagement/UserManagement';
// import NewsManagement from './NewsManagement/NewsManagement';
import SessionCountdown from '../Admin/Time/SessionCountdown';
import ProductManager from '../Admin/ProductMnagement/ProductManager';
import OverviewDashboard from '../Admin/Overview/OverviewDashboard';
import UserManagement from '../Admin/UserManagement/UserManagement';
import NewsManagement from '../Admin/NewsManagement/NewsManagement';
import Banner from './Banner/Banner';
// import "../Admin/Responsive.css";
import "./AdminLayout.css"; // Import file CSS


const Logo = "/LogoTab.ico";

function AdminLayout() {
    return (
        <div style={{ display: 'flex' }} className='admin-layout'>
            <nav style={{ width: 200, background: '#333', color: '#fff' }}>
                {/* , height: '100vh' */}
                <ul style={{ padding: '20px', lineHeight: '2rem', listStyleType: 'none' }}>
                    <img src={Logo} alt="Logo" style={{ width: '40%', marginBottom: 40, marginLeft: '20%' }} />
                    <SessionCountdown />
                    <li><Link to="dashboard" style={{ color: 'white' }}>Trang Chủ</Link></li>
                    <li><Link to="products" style={{ color: 'white' }}>Quản lý sản phẩm</Link></li>
                    <li><Link to="orders" style={{ color: 'white' }}>Quản lý đơn hàng</Link></li>
                    <li><Link to="usermanagement" style={{ color: 'white' }}>Quản lý người dùng</Link></li>
                    <li><Link to="newsmanagement" style={{ color: 'white' }}>Quản lý thông báo</Link></li>

                    <li><Link to="banner" style={{ color: 'white' }}>Banner</Link></li>
                </ul>
            </nav>
            <main style={{ flex: 1,/* padding: 20*/ }}>
                <Routes>

                    {/* QUY TẮC VÀ THÔNG TIN LIÊN HỆ SỰ CỐ KỶ THUẬT_RULES AND CONTACT INFORMATION TECHNICAL PROBLEMS */}

                    <Route path="/" element={<Dashboard />} />



                    <Route path='/usermanagement' element={<UserManagement />} />

                    <Route path="dashboard" element={<OverviewDashboard />} />

                    <Route path="products" element={<ProductManager />} />
                    {/* <Route path="orders" element={<OrdersManager />} /> */}

                    <Route path='usermanagement' element={<UserManagement />} />
                    <Route path="newsmanagement" element={<NewsManagement />} />
                    <Route path="banner" element={<Banner />} />

                    {/* <Route path="orders" element={<OrdersManager />} /> */}
                    {/* <Route path="products" element={<ProductManager />} /> */}
                    {/* <Route path="newsmanagement" element={<NewsManagement />} /> */}
                    {/* <Route path="banner" element={<Banner />} /> */}

                </Routes>
            </main>
        </div >
    );
}

export default AdminLayout;
