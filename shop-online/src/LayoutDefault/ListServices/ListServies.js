
import { useEffect, useState } from "react";
import { Listservices as fetchListservices } from "../../services/productsService"
import { Search } from "../../services/productsService"
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import "./ListServies.css";
function ListServies() {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleClick = async (sub, item) => {
        console.log(`Clicked on ${sub} in ${item.name}`);

        await Search(sub, dispatch); // Gửi kết quả lọc vào Redux store

        navigate('/search'); // Điều hướng tới trang kết quả tìm kiếm
    };


    const [Listservices, setListservices] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await fetchListservices();
            setListservices(result);
            console.log("đây là result Listservices: ", result);
        }
        fetchApi();
    }, [])

    return (
        <>
            <div className="navbar" style={{ gap: '100px' }}>
                <div style={{
                    display: 'flex',
                    gap: '50px',
                    position: 'relative',
                    top: '12px'
                }}> Danh mục </div>
                <ul>
                    {Listservices.map((item, index) => (
                        <li
                            className={`menu-item ${index === 0 || index === 1 ? 'first-two' : ''} ${index === Listservices.length - 1 ? 'last' : ''}`}
                            key={index}
                        >
                            <span>{item.name}</span>
                            {item.subservices && (
                                <ul className="submenu">
                                    {item.subservices.map((sub, subIndex) => (
                                        <li
                                            key={subIndex}
                                            className={subIndex === item.subservices.length - 1 ? 'last-subservice' : ''}
                                            onClick={() => handleClick(sub, item)}
                                        >

                                            {sub}

                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div >

        </>

    )
}
export default ListServies;