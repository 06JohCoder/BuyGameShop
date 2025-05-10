import { get } from "./repuest";

export const getBanner = async () => {
    const result = await get("banners");
    console.log("đây là result Banner: ", result);
    return result;
}