// import { Link, Outlet, Route, Routes } from "react-router-dom";
// import "./LayoutDefault.scss";
// import Header from "./Header/Header";
// import Footer from "./Footer/Footer";
// import Slide from "../LayoutDefault/silde/silde";
// import NewProduct from "./NewProduct/NewProduct";
// import Showgame from "./Showgame/Showgame";
// import ListServies from "./ListServices/ListServies";
// import Banner from "./BannerTop/Banner";
// import GPMN from "./GPMN/GPMN";
// import HeaderTop from "./Header/HeaderTop";
// import InstrucPay from "../pages/InstrucPay/InstrucPay";
// import SearchTitle from "./Search/SearchTitle";

// function LayoutDefault() {
//     return (
//         <div className="layout-default">
//             <HeaderTop />
//             <Header />
//             <ListServies />
//             <GPMN />

//             <Routes>
//                 <Route path="/" element={
//                     <>
//                         <Slide />
//                         <Banner />
//                         <NewProduct />
//                         <Showgame />
//                     </>
//                 } />
//                 <Route path="/search" element={<SearchTitle />} />
//                 <Route path="/instrucpay" element={<InstrucPay />} />
//             </Routes>

//             <main className="layout-default__main">
//                 <Outlet />
//             </main>

//             <div className="layout-default__footer">
//                 <Footer />
//             </div>
//         </div>
//     );
// }

// export default LayoutDefault;
import { Outlet } from "react-router-dom";
import "./LayoutDefault.scss";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import ListServies from "./ListServices/ListServies";
import HeaderTop from "./Header/HeaderTop";
import Details from "../../src/LayoutDefault/Details/Details"
import "./Reponsive.css"
function LayoutDefault() {
    return (
        <div className="layout-default">
            <HeaderTop />
            <Header />
            <ListServies />

            <main className="layout-default__main">
                <Outlet /> {/* <== chỉ cần 1 Outlet thôi, load page con ở đây */}
            </main>

            <div className="layout-default__footer">
                <Footer />
            </div>
        </div>
    );
}

export default LayoutDefault;
