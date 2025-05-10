import Product from "../../Product";

// function Home() {


//     return (
//         <>


//             <Product />

//         </>

//     );
// }
// export default Home;

import Slide from "../../LayoutDefault/silde/silde";
import Banner from "../../LayoutDefault/BannerTop/Banner";
import NewProduct from "../../LayoutDefault/NewProduct/NewProduct";
import Showgame from "../../LayoutDefault/Showgame/Showgame";

function Home() {
    return (
        <>  <Banner />
            <Slide />


            <Product />
            <NewProduct />
            <Showgame />
        </>
    );
}

export default Home;
