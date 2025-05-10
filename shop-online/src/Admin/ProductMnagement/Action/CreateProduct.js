// import { use } from "react";
// import Modal from 'react-modal';
// import { useEffect, useState } from "react";
// import Swal from 'sweetalert2/dist/sweetalert2.js'
// import 'sweetalert2/src/sweetalert2.scss'
// import './CreateProduct.css';
// function CreateProduct(props) {
//     const { onReload } = props;

//     const [dataProducts, setDataProducts] = useState([]);
//     const [showModal, setShowModal] = useState(false);
//     const [data, setData] = useState([]);
//     useEffect(() => {
//         const fetchApi = async () => {
//             fetch("http://localhost:3001/products")
//                 .then(res => res.json())
//                 .then(data => {
//                     setDataProducts(data);
//                     console.log("đây là data_products: ", data);
//                 });
//         }
//         fetchApi();
//     }, []);

//     const customStyles = {
//         content: {
//             top: '50%',
//             left: '50%',
//             right: 'auto',
//             bottom: 'auto',
//             marginRight: '-50%',
//             transform: 'translate(-50%, -50%)',
//         },
//     };

//     const handlChange = (e) => {
//         console.log(e.target.value);
//         const { name, value } = e.target;
//         setData({
//             ...data,
//             [name]: value

//         });
//     }

//     function openModal() {
//         setShowModal(true);
//     }


//     function closeModal() {
//         setShowModal(false);
//     }


//     const handleSubmit = (e) => {
//         e.preventDefault();

//         fetch("http://localhost:3001/products", {
//             method: "POST",
//             headers: {
//                 "Accept": "application/json",
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(data)
//         })
//             .then(res => res.json())
//             .then(data => {

//                 console.log("Đây là data: ", data);
//                 if (data) {
//                     // alert("Thêm sản phẩm thành công!");
//                     setShowModal(false);
//                     onReload();
//                     Swal.fire({
//                         title: "Thêm sản phẩm thành công!",
//                         icon: "success",
//                         draggable: true
//                     });
//                 }


//             })
//         console.log(e);

//     }

//     return (<>
//         <>
//             <button onClick={openModal}>Thêm sản phẩm</button>
//             <Modal
//                 isOpen={showModal}
//                 onRequestClose={closeModal}
//                 style={customStyles}
//                 contentLabel="Example Modal"
//             >
//                 <form onSubmit={handleSubmit}>
//                     <div className="product-form-grid">
//                         <div>
//                             <label>Title</label>
//                             <input type="text" name="title" onChange={handlChange} />
//                         </div>
//                         <div>
//                             <label>Giá mới</label>
//                             <input type="number" name="priceNew" onChange={handlChange} defaultValue={0} />
//                         </div>
//                         <div>
//                             <label>Giá cũ</label>
//                             <input type="number" name="priceOld" onChange={handlChange} defaultValue={0} />
//                         </div>
//                         <div>
//                             <label>Giá khuyến mãi</label>
//                             <input type="number" name="priceSale" onChange={handlChange} defaultValue={0} />
//                         </div>
//                         <div>
//                             <label>Hình ảnh (link)</label>
//                             <input type="text" name="image" onChange={handlChange} />
//                         </div>
//                         <div style={{ gridColumn: 'span 2' }}>
//                             <label>Mô tả</label>
//                             <textarea name="description" rows={3} onChange={handlChange}></textarea>
//                         </div>
//                         <div>
//                             <label>Link Tải</label>
//                             <input type="text" name="linkDow" onChange={handlChange} />
//                         </div>
//                         <div>
//                             <label>Dung lượng (MB)</label>
//                             <input type="number" name="capacity" onChange={handlChange} defaultValue={0} />
//                         </div>
//                         <div>
//                             <label>Người chơi</label>
//                             <input type="number" name="userPlay" onChange={handlChange} defaultValue={0} />
//                         </div>
//                         <div>
//                             <label>RAM (GB)</label>
//                             <input type="number" name="ram" onChange={handlChange} defaultValue={0} />
//                         </div>
//                         <div>
//                             <label>Ngôn ngữ</label>
//                             <input type="text" name="language" onChange={handlChange} />
//                         </div>
//                         <div>
//                             <label>Hệ điều hành</label>
//                             <input type="text" name="system" onChange={handlChange} />
//                         </div>
//                         <div>
//                             <label>Chơi bằng</label>
//                             <input type="text" name="playWith" onChange={handlChange} />
//                         </div>
//                         <div>
//                             <label>Thể loại</label>
//                             <input type="text" name="Category" onChange={handlChange} />
//                         </div>
//                         <div>
//                             <label>Đặc quyền</label>
//                             <select name="privilege" onChange={handlChange}>
//                                 <option value="true">Có</option>
//                                 <option value="false">Không</option>
//                             </select>
//                         </div>
//                         <div>
//                             <label>Sản Phẩm Thứ </label>
//                             <input type="text" name="id" onChange={handlChange} defaultValue={dataProducts.length + 1} />
//                         </div>
//                         <div className="product-form-actions">
//                             <input type="submit" value="Thêm sản phẩm mới" />
//                             <button type="button" onClick={closeModal}>Đóng</button>
//                         </div>

//                     </div>
//                 </form>



//             </Modal>
//         </>
//     </>)


// }
// export default CreateProduct;

import { useEffect, useState } from "react";
import Modal from 'react-modal';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
import './CreateProduct.css';

function CreateProduct(props) {
    const { onReload } = props;

    const [dataProducts, setDataProducts] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState({
        title: '',
        priceNew: 0,
        priceOld: 0,
        priceSale: 0,
        image: '',
        description: '',
        linkDow: '',
        capacity: 0,
        userPlay: 0,
        ram: 0,
        language: '',
        system: '',
        playWith: '',
        Category: '',
        privilege: 'false',
    });

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const res = await fetch("http://localhost:3001/products");
                const data = await res.json();
                setDataProducts(data);
                console.log("Đây là data_products: ", data);
            } catch (error) {
                console.error("Lỗi khi lấy dữ liệu: ", error);
            }
        }
        fetchApi();
    }, []);

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Chuyển đổi các giá trị thành số nếu cần thiết
        if (name === 'priceNew' || name === 'priceOld' || name === 'priceSale' || name === 'capacity' || name === 'userPlay' || name === 'ram') {
            // Đảm bảo giá trị nhập vào là một số hợp lệ
            const numericValue = value ? parseFloat(value) : 0;  // default to 0 if invalid
            setData({
                ...data,
                [name]: numericValue
            });
        } else {
            setData({
                ...data,
                [name]: value
            });
        }
    }

    function openModal() {
        setShowModal(true);
    }

    function closeModal() {
        setShowModal(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // Kiểm tra lại và đảm bảo tất cả giá trị là kiểu số hợp lệ
        const productData = {
            ...data,
            priceNew: isNaN(data.priceNew) ? 0 : data.priceNew,  // Kiểm tra số hợp lệ
            priceOld: isNaN(data.priceOld) ? 0 : data.priceOld,  // Kiểm tra số hợp lệ
            priceSale: isNaN(data.priceSale) ? 0 : data.priceSale,  // Kiểm tra số hợp lệ
            capacity: isNaN(data.capacity) ? 0 : data.capacity,  // Kiểm tra số hợp lệ
            userPlay: isNaN(data.userPlay) ? 0 : data.userPlay,  // Kiểm tra số hợp lệ
            ram: isNaN(data.ram) ? 0 : data.ram  // Kiểm tra số hợp lệ
        };

        fetch("http://localhost:3001/products", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productData)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setShowModal(false);
                    onReload();
                    Swal.fire({
                        title: "Thêm sản phẩm thành công!",
                        icon: "success",
                        draggable: true
                    });
                }
            })
            .catch(error => {
                console.error("Lỗi khi thêm sản phẩm: ", error);
                Swal.fire({
                    title: "Có lỗi khi thêm sản phẩm!",
                    icon: "error",
                    draggable: true
                });
            });
    }

    return (
        <>
            <button onClick={openModal}>Thêm sản phẩm</button>
            <Modal
                isOpen={showModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <form onSubmit={handleSubmit}>
                    <div className="product-form-grid">
                        <div>
                            <label>Title</label>
                            <input type="text" name="title" value={data.title} onChange={handleChange} />
                        </div>
                        <div>
                            <label>Giá mới</label>
                            <input type="number" name="priceNew" value={data.priceNew} onChange={handleChange} />
                        </div>
                        <div>
                            <label>Giá cũ</label>
                            <input type="number" name="priceOld" value={data.priceOld} onChange={handleChange} />
                        </div>
                        <div>
                            <label>Giá khuyến mãi</label>
                            <input type="number" name="priceSale" value={data.priceSale} onChange={handleChange} />
                        </div>
                        <div>
                            <label>Hình ảnh (link)</label>
                            <input type="text" name="image" value={data.image} onChange={handleChange} />
                        </div>
                        <div style={{ gridColumn: 'span 2' }}>
                            <label>Mô tả</label>
                            <textarea name="description" rows={3} value={data.description} onChange={handleChange}></textarea>
                        </div>
                        <div>
                            <label>Link Tải</label>
                            <input type="text" name="linkDow" value={data.linkDow} onChange={handleChange} />
                        </div>
                        <div>
                            <label>Dung lượng (MB)</label>
                            <input type="number" name="capacity" value={data.capacity} onChange={handleChange} />
                        </div>
                        <div>
                            <label>Người chơi</label>
                            <input type="number" name="userPlay" value={data.userPlay} onChange={handleChange} />
                        </div>
                        <div>
                            <label>RAM (GB)</label>
                            <input type="number" name="ram" value={data.ram} onChange={handleChange} />
                        </div>
                        <div>
                            <label>Ngôn ngữ</label>
                            <input type="text" name="language" value={data.language} onChange={handleChange} />
                        </div>
                        <div>
                            <label>Hệ điều hành</label>
                            <input type="text" name="system" value={data.system} onChange={handleChange} />
                        </div>
                        <div>
                            <label>Chơi bằng</label>
                            <input type="text" name="playWith" value={data.playWith} onChange={handleChange} />
                        </div>
                        <div>
                            <label>Thể loại</label>
                            <input type="text" name="Category" value={data.Category} onChange={handleChange} />
                        </div>
                        <div>
                            <label>Đặc quyền</label>
                            <select name="privilege" value={data.privilege} onChange={handleChange}>
                                <option value="true">Có</option>
                                <option value="false">Không</option>
                            </select>
                        </div>
                        <div className="product-form-actions">
                            <input type="submit" value="Thêm sản phẩm mới" />
                            <button type="button" onClick={closeModal}>Đóng</button>
                        </div>
                    </div>
                </form>
            </Modal>
        </>
    );
}

export default CreateProduct;
