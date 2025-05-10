import { useState } from "react";
import "../../LayoutDefault/Header/HeaderTop.css"
import { Link } from "react-router-dom";
import { Search } from "../../services/productsService";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"; // thêm dòng này



function HeaderTop() {
    const [keyWork, setKeyWork] = useState("");
    const dispatch = useDispatch();
    const filteredProducts = useSelector(state => state.product.filteredProducts);


    const navigate = useNavigate(); // thêm dòng này

    const handleSearch = async (e) => {
        setKeyWork(e.target.value);

        if (e.keyCode === 13) {
            await Search(e.target.value, dispatch);
            navigate(`/search?keyWork=${encodeURIComponent(e.target.value)}`);
        }
    };

    return (
        <>
            <header >
                <div>
                    {/* dùng display flex và gap
                    <p>Email:nhatluong1252006@gmail.com</p>
                    <p>Sđt:0569847809</p> */}


                </div>
                <div className="header">
                    <div className="search-bar">
                        <input
                            type="text"
                            placeholder="Tìm kiếm sản phẩm"
                            onKeyUp={handleSearch}
                        />
                    </div>
                    <nav className="menu">
                        <a href="#">Sản phẩm mua nhiều</a>
                        <a href="#">Hướng dẫn mua hàng</a>
                        <Link to="/instrucpay">Hình thức thanh toán</Link>
                    </nav>
                    <div className="user-options">
                        {/* <a href="#">Đăng nhập</a> */}
                        {/* <Link to="/login">Đăng nhập</Link>
                        <Link to="/login">Đăng ký</Link> */}

                        {/* <a href="#">Đăng ký</a> */}
                    </div>
                </div>



            </header>

            {/* Hiển thị kết quả tìm kiếm */}
            {/* <div className="search-results">
                {filteredProducts.length > 0 ? (
                    <ul>
                        {filteredProducts.map(product => (
                            <li key={product.id}>{product.title}</li>
                        ))}
                    </ul>
                ) : (
                    <p>Không có sản phẩm phù hợp.</p>
                )}
            </div> */}
        </>
    );
}

export default HeaderTop;
