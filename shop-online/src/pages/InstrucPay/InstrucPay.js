import "../../pages/InstrucPay/InstrucPay.css"

function InstrucPay() {
    return (
        <>
            <div class="container_instruc">
                <h1>Nạp tiền vào tài khoản</h1>
                <p>Bạn có thể chọn các phương thức thanh toán khả dụng bên dưới</p>

                <div class="payment-method">
                    <div class="method-title">
                        <div>
                            <h2>Chuyển Khoản Ngân Hàng 24/7</h2>
                            <p>Chuyển khoản ngân hàng online hoặc tại quầy giao dịch</p>
                        </div>
                    </div>
                    <button class="continue-btn">Đăng nhập để tiếp tục</button>
                </div>

                <ul class="method-list">
                    <li>
                        <h3>Thanh toán VNPAY-QR</h3>
                        <p>Quét mã QR PAY trên ứng dụng Mobile Banking, phí giao dịch 2%</p>
                    </li>
                    <li>
                        <h3>Nạp số dư tự động bằng thẻ ngân hàng</h3>
                        <p>Phí 0.9% + 900đ</p>
                    </li>
                    <li>
                        <h3>Thanh toán bằng thẻ Master/Visa/JCB</h3>
                        <p>Phí 2.36% + 2.660đ</p>
                    </li>
                    <li>
                        <h3>Nạp tiền qua thẻ cào Viettel</h3>
                        <p>Nạp tiền qua thẻ cào Viettel, phí giao dịch 30%</p>
                    </li>
                    <li>
                        <h3>Nạp số dư trực tiếp bằng Momo Payment</h3>
                        <p>Nạp Dcoin tự động liên kết với Momo, hoàn thành tức thì. Phí 5%</p>
                    </li>
                </ul>
            </div>
        </>
    )

}

export default InstrucPay;