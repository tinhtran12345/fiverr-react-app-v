import axios from "axios";

const upload = async (file) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "fiverr_reactjs");
    try {
        const res = await axios.post(
            "https://api.cloudinary.com/v1_1/dmc8gcdpm/image/upload",
            data
        );
        const { url } = res.data;
        return url;
    } catch (error) {
        console.log(error);
    }
};

export default upload;
