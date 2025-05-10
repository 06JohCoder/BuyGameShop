

import { get } from "../utils/request";
import { useDispatch } from "react-redux";

export const getProductList = async () => {
    const result = await get("products");
    return result;
}
export const HotProducts = async () => {
    const result = await get("Hotproducts");
    return result;
}
export const NewProduct = async () => {
    const result = await get("newproduct");
    return result;
}
export const Showgame = async () => {
    const result = await get("showproduct");
    return result;
}
export const Listservices = async () => {
    const result = await get("listservices");
    return result;
}
export const Blogs = async () => {
    const result = await get("blog");
    return result;
}


export const Search = async (keyWork, dispatch) => {

    console.log("Đây là key work: ", keyWork);

    const result = await get("products");
    console.log("Kết quả trả về: ", result);

    if (!result || !Array.isArray(result)) {
        console.error("Không có dữ liệu products hoặc dữ liệu không hợp lệ");
        return [];
    }

    const keywordLower = keyWork.trim().toLowerCase();

    // Kiểm tra xem keyWork có trống không
    if (keywordLower === "") {
        console.log("Từ khóa tìm kiếm không hợp lệ.");
        return [];
    }

    // Lọc sản phẩm dựa trên từ khóa
    const filteredProducts = result.filter(product =>
        product.title && typeof product.title === "string" &&
        product.title.toLowerCase().includes(keywordLower)
    );

    console.log("Sản phẩm tìm được: ", filteredProducts);

    // Dispatch an action with the filtered products
    dispatch({ type: "SET_FILTERED_PRODUCTS", payload: filteredProducts });

    return filteredProducts;
};

export const clickDetails = async () => {
    const result = await get("Hotproducts");
    return result;
}

export const banners = async () => {
    const result = await get("banners");
    return result;
}
