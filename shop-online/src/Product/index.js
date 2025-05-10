
import { useEffect, useState } from "react";
import { getProductList } from "../../src/services/productsService";
import "./product.scss";
import ProductItem from "./ProductItem";
import { Link } from "react-router-dom";

import React from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
function Product() {


    const [products, setProducts] = useState([]);


    // State
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    // Tính index
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    // Cắt sản phẩm đúng trang
    const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);


    useEffect(() => {
        const fetchApi = async () => {
            const result = await getProductList();

            setProducts(result);
            console.log(result);
        }
        fetchApi();

    }, []);

    console.log(products);

    // phân trang

    // end phân trang







    return (


        <>
            <h1>Danh sách sản phẩm</h1>
            {/* {products.length > 0 && (
                <div className="product">
                    {products.map((item) => (
                        <Link to={`/detail/${item.id}`} key={item.id}>
                            <ProductItem item={item} key={item.id} />
                        </Link>
                    ))}

                </div>
            )} */}
            <div>
                {products.length > 0 && (
                    <div className="product">
                        {currentItems.map((item) => (
                            <Link to={`/detail/${item.id}`} key={item.id}>
                                <ProductItem item={item} key={item.id} />
                            </Link>
                        ))}

                    </div>
                )}
            </div>

            <div style={{ marginTop: '20px' }}>
                {Array.from({ length: Math.ceil(products.length / itemsPerPage) }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => setCurrentPage(index + 1)}
                        style={{
                            margin: '0 5px',
                            background: currentPage === index + 1 ? '#333' : '#eee',
                            color: currentPage === index + 1 ? '#fff' : '#000'
                        }}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>

        </>
    );
}
export default Product;




