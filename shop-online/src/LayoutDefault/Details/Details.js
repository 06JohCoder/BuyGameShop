import { clickDetails } from "../../services/productsService"
import { getProductList } from "../../services/productsService"
import { useEffect, useState } from "react";
// Removed unused import
import { useParams } from 'react-router-dom';
import "../Details/Details.css"
function Details() {
    const [details, setDetails] = useState([]);
    const { id } = useParams();
    // Removed unused variable
    const idParams = id;
    console.log("iddddddd", idParams)
    useEffect(() => {
        const fetchApiDetails = async () => {
            const productListResult = await getProductList();
            setDetails(productListResult);
            console.log("Product list setDetails: ", productListResult);
        };

        fetchApiDetails();
    }, [])
    console.log("setDetails", details)
    const matchedPost = details.find(post => post.id == idParams);
    if (matchedPost) {
        console.log("Kết Qủa Check: ", matchedPost);
    } else {
        console.log("Không tìm thấy sản phẩm với ID", idParams);
    }



    return (
        <>
            <h1>Game Của Bạn {details.title}</h1>
            {details.length > 0 ? (
                (() => {
                    const matchedPost = details.find(post => post.id == idParams);
                    return matchedPost ? (
                        <div className="product-container" key={matchedPost.id}>
                            <div className="product-image">
                                <img src={matchedPost.image} alt={matchedPost.title} />
                                <div className="product-info">
                                    <div className="rating">
                                        <span>4.3</span> ★★★★☆
                                    </div>

                                    <div className="flash-sale">
                                        <h2>{matchedPost.title}</h2>
                                        <p className="price">
                                            <span>đ{matchedPost.priceNew}</span>{" "}
                                            {matchedPost.priceOld && <del>đ{matchedPost.priceOld}</del>}{" "}
                                            {matchedPost.priceSale && `-${matchedPost.priceSale}%`}
                                        </p>
                                    </div>

                                    <div className="shipping-info">
                                        <p>{matchedPost.description}</p>
                                    </div>

                                    <div className="details-btn">
                                        <button className="add-to-cart">Thêm Vào Giỏ Hàng</button>
                                        {matchedPost.privilege === "true" ? (
                                            <button className="buy-now">Mua TK Steam</button>
                                        ) : (
                                            <button className="buy-now" style={{ display: "none" }}>Mua TK Steam</button>
                                        )}

                                        <button className="buy-now"><a href="https://www.facebook.com/profile.php?id=100082683097601">Mua TT Admin</a></button>
                                        <button className="buy-now">
                                            <a href={matchedPost.linkDow} style={{ color: "#fff" }}>Dow Local</a>
                                        </button>
                                    </div>
                                </div>
                            </div>



                            <div className="details-container">
                                <h2 className="details-title">Thông Tin Chi Tiết</h2>
                                <p className="details-description">{matchedPost.description}</p>
                                <p className="details-item"><strong>Thể Loại:</strong> {matchedPost.Category}</p>
                                <p className="details-item"><strong>Chơi Bằng:</strong> {matchedPost.playWith}</p>
                                <p className="details-item"><strong>Số Người Chơi:</strong> {matchedPost.userPlay}</p>
                                <p className="details-item"><strong>Cấu hình máy:</strong> {matchedPost.system}</p>
                                <p className="details-item"><strong>Gb:</strong> {matchedPost.capacity}</p>
                                <p className="details-item"><strong>Ram:</strong> {matchedPost.ram}</p>
                                <p className="details-item"><strong>Hệ điều hành:</strong> {matchedPost.language}</p>
                                <p className="details-item"><strong>Số người chơi:</strong> {matchedPost.userPlay}</p>
                                <img src={matchedPost.image} alt={matchedPost.title} className="img-details" />
                            </div>

                        </div>
                    ) : (
                        <p>Không tìm thấy sản phẩm với ID {idParams}</p>
                    );
                })()
            ) : null}

        </>
    );

}
export default Details;