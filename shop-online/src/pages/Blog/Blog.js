
import "./Blog.css"
import { useState, useEffect } from "react";
import { Blogs } from "../../services/productsService";


function Blog() {


    const [Blog, setBlog] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await Blogs();

            setBlog(result);
            console.log("Đây là blog", result);
        }
        fetchApi();

    }, []);


    return (<>


        <div class="container_blogNews">
            {Blog.map((item) => (
                <div class="news-item" style={{ background: '#60656a' }} >
                    <img src={item.image} alt={item.title} />
                    <h2>{item.title}</h2>
                    <p>{item.body}</p>
                </div>
            ))}



            <div class="author">
                <h3>Tâm điểm</h3>
                <p>Ngành game: Bước chuyển mình trong kỷ nguyên AI và Metaverse</p>
                {/* <p>TRẦN MINH KHOA</p> */}

            </div>
        </div >
    </>)
}
export default Blog;