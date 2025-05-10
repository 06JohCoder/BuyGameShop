import "./Footer.css";
import Bank from "../../LogoImgae/Bank.jpg"


function Footer() {
    return (
        <>
            <footer class="footer">
                <div class="footer-section">
                    <h3>Contact</h3>
                    <ul>
                        <li><a href="#">nhatluong1252006@gmail.com</a></li>
                        <li><a href="#">0569847809</a></li>

                    </ul>
                </div>
                <div class="footer-section">
                    <h3>EXPLORE</h3>
                    <ul>
                        <li><a href="#">GAMES</a></li>
                        <li><a href="#">MOVIES</a></li>
                        <li><a href="#">TV</a></li>
                        <li><a href="#">WIKIS</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>OVERVIEW</h3>
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Press</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>COMMUNITY</h3>
                    <ul>
                        <li><a href="#">Community Central</a></li>
                        <li><a href="#">Wiki Score</a></li>
                        <li><a href="#">Support</a></li>
                        <li><a href="#">Help</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>ADVERTISE</h3>
                    <ul>
                        <li><a href="#">Media Kit</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>FOLLOW US</h3>
                    <div class="social-icons">
                        <a href="#">Facebook</a>
                        <a href="#">Twitter</a>
                        <a href="#">YouTube</a>
                        <a href="#">Instagram</a>
                        <a href="#">LinkedIn</a>
                    </div>
                </div>
                <div class="footer-section">
                    <h3>THE FANDOM APP</h3>
                    <p>Take your favorite fandoms with you and never miss a beat</p>
                    <button class="app-btn">Download on the App Store</button>
                    <button class="app-btn">Get it on Google Play</button>
                </div>

                <div class="footer-section" >
                    <h3>Pay</h3>
                    <p>This is my bank account Techcombank</p>
                    <img src={Bank} style={{
                        width: '150px',
                        height: 'auto'
                    }} />
                </div>

                <div class="footer-bottom">
                    <p>  Điều khoản sử dụng | Chính sách bảo mật | Sơ đồ trang web toàn cầu | Sơ đồ trang web cục bộ</p>
                    <p class="footer-note">    NL là một cộng đồng trao đổi buôn bán tài khoản mạng xã hội tại Việt Nam.</p>

                    <p>&copy;  {new Date().getFullYear()} FANDOM, Inc. Bảo lưu mọi quyền. </p>
                </div>
            </footer>
        </>
    )
}

export default Footer;