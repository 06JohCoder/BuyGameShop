import { Search } from "../../services/productsService";
import ProductItem from "../../Product/ProductItem";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";


import { useDispatch, useSelector } from "react-redux";

// import "../Search/SearchTitle.scss"


// function SearchTitle({ keyWork }) {
//     const [products, setProducts] = useState([]);
//     const filteredProducts = useSelector(state => state.product.filteredProducts);

//     useEffect(() => {
//         const fetchProducts = async () => {
//             const result = await Search(keyWork);
//             setProducts(result);
//         };

//         if (keyWork) {
//             fetchProducts();
//         }
//     }, [keyWork]);

//     return (
//         <div>
//             <h2>Kết quả cho: {keyWork}</h2>
//             {/* {products.length > 0 ? (
//                 <ul>
//                     {products.map((item) => (
//                         <li key={item.title}>
//                             <img src={item.image} alt={item.title} width={100} />
//                             <h3>{item.title}</h3>
//                             <p>Giá: ${item.priceNew}</p>
//                         </li>
//                     ))}
//                 </ul>
//             ) : (
//                 <p>Không có sản phẩm nào được tìm thấy.</p>
//             )} */}
//             <div className="search-results">
//                 {filteredProducts.length > 0 ? (
//                     <ul>
//                         {filteredProducts.map(product => (
//                             <li key={product.id}>{product.title}</li>
//                         ))}
//                     </ul>
//                 ) : (
//                     <p>Không có sản phẩm phù hợp.</p>
//                 )}
//             </div>
//         </div>
//     );
// }

function SearchTitle() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const keyWork = queryParams.get('keyWork') || "";

    const dispatch = useDispatch();
    const filteredProducts = useSelector(state => state.product.filteredProducts);

    useEffect(() => {
        const fetchProducts = async () => {
            if (keyWork) {
                await Search(keyWork, dispatch);
            }
        };

        fetchProducts();
    }, [keyWork, dispatch]);

    return (
        <>

            <h1>Kết quả cho game: {keyWork}</h1>

            {filteredProducts.length > 0 ? (
                <div className="product">

                    {filteredProducts.map(item => (
                        <Link to={`/detail/${item.id}`} key={item.id}>  {/* Updated link path */}

                            <div className={`product__item ${item.priceSale ? 'product__item--sale' : ''}`} key={item.id}>
                                <img src={item.image} alt={item.title} className="product__image" />
                                <h3 className="product__title">{item.title}</h3>

                                {/* Hiển thị giá mới */}
                                <p className="product__price-new">{(item.priceOld - item.priceSale).toFixed(0)}$</p>

                                {/* Hiển thị giá cũ */}
                                <p className="product__price-old">{item.priceOld}$</p>

                                {/* Hiển thị giảm giá */}
                                <p className="product__price-sale"><s>-{item.priceSale}$</s></p>

                                {/* Mô tả sản phẩm */}
                                <p className="product__description">{item.description}</p>

                                {/* Các nút chức năng */}
                                {/* <div style={{ textAlign: 'center' }}>
                                Khối đầu tiên: 2 nút cùng hàng, căn giữa
                                <div style={{ display: 'inline-flex' }}>
                                    <button className="product__btn">Xem chi tiết</button>
                                    <button className="product__btn">Mua ngay</button>
                                </div>

                                Khối thứ hai: 2 nút mỗi dòng, căn giữa
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <button className="product__btn"><a href="https://www.facebook.com/messages/e2ee/t/7405766382875307/" target="_blank" rel="noopener noreferrer" style={{ color: "#fff" }}>Mua Trực Tiếp Với Admin</a></button>

                                    <button className="product__btn">Thêm vào yêu thích</button>
                                    <button className="product__btn">Thêm vào giỏ hàng</button>
                                    <button className="product__btn"><a href="https://www.mediafire.com/file/mgmmwdhputshymg/TheBobaTeashop%20Viet%20Hoa%20[ddat14game.com].rar/file#">Tải Dưới Local</a></button>

                                </div>
                            </div> */}
                            </div>
                        </Link>

                    ))}
                </div>

            ) : (
                <p>Không có sản phẩm phù hợp.</p>
            )}

        </>
    );
}

export default SearchTitle;