import React, { useEffect, useState } from 'react';
import { getBanner } from '../Api/service';
import "./Banner.css"; // Import file CSS
import Modal from 'react-modal';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';

function Banner(props) {
    // const { item, onReload } = props;
    const [currentBannerId, setCurrentBannerId] = useState(null);

    const [showModal, setShowModal] = useState(false);
    const [showModal1, setShowModal1] = useState(false);

    const [banner, setBanner] = useState([]);
    const [data, setData] = useState({});
    // const { onReload } = props;

    useEffect(() => {
        const fetchApi = async () => {
            const result = await getBanner();
            setBanner(result);

            console.log("đây là result Banner: ", result);
        };
        fetchApi();
    }, [showModal, showModal1]);

    const handleChange = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        });

    };
    console.log("Đây là data1 : ", data);
    function openModal() {
        setShowModal(true);
    }

    function closeModal() {
        setShowModal(false);

    }

    function openModalClose() {

        setShowModal1(true);

    }

    function closeModalClose() {

        setShowModal1(false);


    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const url = `http://localhost:3001/banners/${banner[0].id}`;


        fetch(url, {
            method: "PATCH",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(response => {
                if (data) {
                    setShowModal(false);
                    setShowModal1(false);

                    Swal.fire({
                        title: "Cập nhật sản phẩm thành công!",
                        icon: "success",
                        draggable: true
                    });
                }
            })
            .catch(error => {
                console.error("Lỗi khi thêm/cập nhật banner: ", error);
                Swal.fire({
                    title: "Có lỗi khi thêm/cập nhật banner!",
                    icon: "error",
                    draggable: true
                });
            });
    };


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

    console.log("Đây là banner: ", banner);
    console.log("Đây là data: ", data);

    return (
        <>
            <h1>Banner</h1>
            <Modal
                isOpen={showModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <form onSubmit={handleSubmit} style={{ zIndex: 1000 }}>
                    <div className="product-form-grid">
                        {banner.map((item, index) => (
                            <div key={index}>
                                <label>Banner 1</label>
                                <input
                                    type="text"
                                    name="banner_1"
                                    value={data.banner_1 || item.banner_1}
                                    onChange={handleChange}
                                />
                                <label>Banner 2</label>
                                <input
                                    type="text"
                                    name="banner_2"
                                    value={data.banner_2 || item.banner_2}
                                    onChange={handleChange}
                                />
                                <label>Banner 3</label>
                                <input
                                    type="text"
                                    name="banner_3"
                                    value={data.banner_3 || item.banner_3}
                                    onChange={handleChange}
                                />
                                <label>Banner 4</label>
                                <input
                                    type="text"
                                    name="banner_4"
                                    value={data.banner_4 || item.banner_4}
                                    onChange={handleChange}
                                />
                            </div>
                        ))}

                        <div>
                            <button className="banner-button" type="button" onClick={closeModal}>
                                Đóng
                            </button>
                            <button className="banner-button banner-button_app" type="submit">
                                Cập Nhập
                            </button>
                        </div>
                    </div>
                </form>



            </Modal>
            <Modal
                isOpen={showModal1}
                onRequestClose={closeModalClose}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <form onSubmit={handleSubmit} style={{ zIndex: 1000 }}>
                    <div className="product-form-grid">
                        {banner.map((item, index) => (
                            <div key={index}>
                                <label>Banner 5</label>
                                <input
                                    type="text"
                                    name="banner_5"
                                    value={data.banner_5 || item.banner_5}
                                    onChange={handleChange}
                                />
                            </div>
                        ))}

                        <div>
                            <button className="banner-button" type="button" onClick={closeModalClose}>
                                Đóng
                            </button>
                            <button className="banner-button banner-button_app" type="submit">
                                Cập Nhập
                            </button>
                        </div>
                    </div>
                </form>
            </Modal>
            {banner.map((item) => (
                <div className="layout-container_banner" key={item.id}>
                    <div className="banner-left">
                        <div className="banner-container">
                            <div
                                className="banner-box"
                                style={{ backgroundImage: `url(${item.banner_1})`, height: "185px" }}
                            >
                                <button className="banner-button" onClick={() => openModal()}>
                                    Banner 1
                                </button>
                            </div>

                            <div
                                className="banner-box"
                                style={{ backgroundImage: `url(${item.banner_2})`, height: "300px" }}
                            >
                                <button className="banner-button" onClick={() => openModal()}>
                                    Banner 2
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="banner-right">
                        <div className="banner-slider" style={{ height: "185px" }}>
                            Slide
                        </div>

                        <div className="banner-bottom">
                            <div
                                className="banner-box_bottom"
                                style={{ backgroundImage: `url(${item.banner_3})` }}
                            >
                                <button className="banner-button" onClick={() => openModal()}>
                                    Banner 3
                                </button>
                            </div>

                            <div
                                className="banner-box_bottom"
                                style={{ backgroundImage: `url(${item.banner_4})` }}
                            >
                                <button className="banner-button" onClick={() => openModal()}>
                                    Banner 4
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            ))}


            <h1>Banner Close</h1>

            {banner.map((item) => (
                <div className="banner-grid__three ">

                    <div
                        className="banner-box"
                        style={{ backgroundImage: `url(${item.banner_5})`, height: "300px" }}
                    >
                        <button className="banner-button" onClick={() => openModalClose()}>
                            Banner 5
                        </button>
                    </div>

                    <div
                        className="banner-box"
                        style={{ backgroundImage: `url(${item.banner_5})`, height: "300px" }}
                    >
                        <button className="banner-button" onClick={() => openModalClose()}>
                            Banner 5
                        </button>
                    </div>
                    <div
                        className="banner-box"
                        style={{ backgroundImage: `url(${item.banner_5})`, height: "300px" }}
                    >
                        <button className="banner-button" onClick={() => openModalClose()}>
                            Banner 5
                        </button>
                    </div>
                </div>
            ))}


        </>
    );
}
export default Banner;