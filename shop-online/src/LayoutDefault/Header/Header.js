import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import Logo from "../../LogoImgae/Logo.png"; // Ensure this path is correct and the file exists
const Header = () => {
    const [showMenu, setShowMenu] = useState(false);


    //  web 3


    // end web 3







    return (

        <header className="layout-default__header">
            <div className="layout-default__logo">
                <Link to="/">
                    <img src={Logo} alt="Logo" className="logo-image" />
                </Link>
            </div>

            <div className="layout-default__hamburger" onClick={() => setShowMenu(!showMenu)}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

            <nav className={`layout-default__nav ${showMenu ? "show" : ""}`}>
                <ul className="layout-default__nav-list">
                    <li><Link to="/">Trang chủ</Link></li>
                    <li><Link to="/introduce">Giới thiệu</Link></li>
                    <li className="layout-default__nav-item--has-dropdown">
                        <span>Dịch vụ Ngoại</span>
                        <div>
                            <ul className="dropdown-menu">
                                <li><Link to="/dich-vu/thiet-ke">Thiết kế web</Link></li>
                                {/* <li><Link to="/dich-vu/lap-dat">Khóa Học </Link></li> */}
                                <li><a href="https://yeumoney.com/c-Lym">Khóa Học</a></li>
                                {/* <li><Link to="/dich-vu/bao-tri">Bảo trì</Link></li> */}
                            </ul>
                        </div>

                    </li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/contact">Liên hệ</Link></li>
                    {/* <li><Link to="./LichSu.html">Lịch Sử 30_4/1_5</Link></li> */}


                    {/* <li className="layout-default__cart-mobile"><Link to="/cart">Giỏ hàng</Link></li> */}
                </ul>
            </nav>

            <div className="layout-default__cart desktop-only">

                <Link to="/cart">Giỏ hàng</Link>




            </div>
            <>

            </>
        </header >
    );
};

export default Header;
