// src/Admin/ProductManager.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ProductManager.css'; // Import file CSS
// import CreateProduct from './CreateProduct'; // Import component CreateProduct
import CreateProduct from '../ProductMnagement/Action/CreateProduct'; // Import component CreateProduct
// import DeleteProduct from './DeleteProduct'; // Import component DeleteProduct
import DeleteProduct from '../ProductMnagement/Action/DeleteProduct'; // Import component DeleteProduct
function ProductManager() {
    const [products, setProducts] = useState([]);
    const [reload, setReload] = useState(false);
    const handlReload = () => {
        setReload(!reload);
    }
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get('http://localhost:3001/products');
                setProducts(res.data);
                console.log("Đây Là Data", res.data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        fetchProducts();
    }, [reload])


    // useEffect(() => {
    //     fetchProducts();
    // }, []);

    // const fetchProducts = async () => {
    //     const res = await axios.get('http://localhost:3000/products');
    //     setProducts(res.data);
    // };

    // const handleDelete = async (id) => {
    //     await axios.delete(`http://localhost:3000/products/${id}`);
    //     fetchProducts();
    // };

    // const handleEdit = (product) => {
    //     alert(`Chỉnh sửa: ${product.name}`);
    // };



    return (
        <div className="product-manager">
            <h2>Quản lý sản phẩm Local {products.length}</h2>
            <CreateProduct onReload={handlReload} reload={reload} />

            <div className="product-table-container">
                <table className="product-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Hình ảnh</th>
                            <th>Tên sản phẩm</th>
                            <th>Giá</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>
                                    <img
                                        src={item.image}
                                        alt=""
                                        className="product--image__manager"
                                    />
                                </td>
                                <td>{item.title}</td>
                                <td>{item.priceNew.toLocaleString()} đ</td>
                                <td>
                                    <button
                                        className="edit-btn"
                                        onClick={() => alert(`Chỉnh sửa: ${item.title}`)}
                                    >
                                        Sửa
                                    </button>
                                    <DeleteProduct item={item} onReload={handlReload} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>


    );
}

export default ProductManager;
