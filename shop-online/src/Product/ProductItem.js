function ProductItem(props) {
    const { item } = props;
    return (
        <>
            <div className={`product__item ${item.priceSale ? 'product__item--sale' : ''}`} key={item.id}>
                <img src={item.image} alt="" className="product__image" />
                <h3 className="product__title">{item.title}</h3>
                <p className="product__price-new">{(item.priceOld - item.priceSale).toFixed(0)}$</p>
                <p className="product__price-old">{item.priceOld}$</p>

                <p className="product__price-sale"><s>-{item.priceSale}$</s></p>

                <p className="product__description">{item.description}</p>

                {/* <div>
                            <button className="product__btn">Xem chi tiết</button>
                            <button className="product__btn">Mua ngay</button>
                        </div>

                        <div>
                            <button className="product__btn">Thêm vào yêu thích</button>
                            <button className="product__btn">Thêm vào giỏ hàng</button>
                        </div> */}

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
                    </div>
                </div> */}

            </div>
        </>
    );
}

export default ProductItem;