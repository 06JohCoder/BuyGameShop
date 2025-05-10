import "./Banner.css";
import { useEffect, useState } from "react";

import { getBanner } from "../../Admin/Api/service";


function Banner() {
    const [bannerClose, setBannerClose] = useState([]);

    useEffect(() => {
        const banner = document.getElementById('promoBanner');
        const closeButton = document.querySelector('.close-btn');
        const DISMISS_DURATION_MS = 60 * 60 * 1000; // 1 tiếng
        const dismissedTime = localStorage.getItem('bannerDismissedAt');


        const fetchApi = async () => {
            const result = await getBanner();
            setBannerClose(result);

            console.log("đây là result Banner: ", result);
        };
        fetchApi();

        // Kiểm tra nếu đã tắt trong vòng 1 tiếng thì ẩn
        if (dismissedTime) {
            const now = Date.now();
            const elapsed = now - parseInt(dismissedTime, 10);
            if (elapsed < DISMISS_DURATION_MS) {
                banner.style.display = 'none';
            }
        }

        function hideBanner() {
            banner.classList.add('hidden');
            setTimeout(() => {
                banner.style.display = 'none';
                localStorage.setItem('bannerDismissedAt', Date.now().toString());
            }, 500);
        }

        closeButton.addEventListener('click', hideBanner);
        return () => {
            closeButton.removeEventListener('click', hideBanner);
        };



    }, []);
    return (
        <>
            <div className="bannerTop" id="promoBanner">
                <div className="Banner_img">
                    {bannerClose.map((item, index) => (
                        <>
                            <img key={index} src={item.banner_5} alt="Banner Image" />
                            <img key={index} src={item.banner_5} alt="Banner Image" />
                            <img key={index} src={item.banner_5} alt="Banner Image" />
                        </>


                    ))}
                    {/* <img src="https://cdnv2.tgdd.vn/mwg-static/common/News/Thumb/1428573/fix-loi-s2-2025%20%281%29638808269630976379.jpg" alt="Banner Image" />
                    <img src="https://cdnv2.tgdd.vn/mwg-static/common/News/Thumb/1428573/fix-loi-s2-2025%20%281%29638808269630976379.jpg" alt="Banner Image" />
                    <img src="https://cdnv2.tgdd.vn/mwg-static/common/News/Thumb/1428573/fix-loi-s2-2025%20%281%29638808269630976379.jpg" alt="Banner Image" /> */}

                </div>
                <button className="close-btn">X</button>
            </div>
        </>
    );
}

export default Banner;