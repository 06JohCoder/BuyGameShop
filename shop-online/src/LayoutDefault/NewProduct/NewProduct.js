import { useEffect, useState } from "react";
import "./NewProduct.scss"
import { NewProduct } from "../../services/productsService"
import { Link } from "react-router-dom";

function NewProductComponent() {

    const [newProduct, setNewProduct] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await NewProduct();
            setNewProduct(result);
            console.log("đây là result NewProduct: ", result);
        }
        fetchApi();
    }, [])

    return (
        <>
            <div class="container">
                <h1>Danh Mục Game Mới</h1>
                <div class="game-category">

                    {newProduct.map((index) => (
                        <Link to="/">
                            <div class="game-item" key={index}>
                                <img src={index.image_url} alt={index.name} />
                                <p>{index.title}</p>
                                <p>{index.developer}</p>
                                <p>{index.release_date}</p>
                            </div>
                        </Link>
                    ))}


                </div>
            </div></>
    )
}
export default NewProductComponent;