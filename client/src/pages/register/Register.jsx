import { useState } from "react";
import "./Register.scss";
import icons from "../../utils/icons";
import { useNavigate } from "react-router-dom";
import upload from "../../utils/upload";
import axiosConfig from "../../apiConfig/axiosConfig";
// import axios from "axios";

const Register = () => {
    const navigate = useNavigate();
    const [file, setFile] = useState(null);
    const [show, setShow] = useState(false);
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        img: "",
        country: "",
        isSeller: false,
        desc: "",
    });
    const handelSeller = (e) => {
        setUser((prev) => {
            return { ...prev, isSeller: e.target.checked };
        });
    };

    const handleChange = (e) => {
        setUser((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            };
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const url = await upload(file);
        try {
            await axiosConfig.post("/auth/register", {
                ...user,
                img: url,
            });
            navigate("/login");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="register">
            <form onSubmit={handleSubmit}>
                <div className="left">
                    <h1>Create a new account</h1>
                    <label htmlFor="username">Username</label>
                    <input
                        name="username"
                        type="text"
                        id="username"
                        placeholder="Enter the username"
                        onChange={handleChange}
                    />
                    <label htmlFor="email">Email</label>
                    <input
                        name="email"
                        type="email"
                        id="email"
                        placeholder="Enter the email"
                        onChange={handleChange}
                    />
                    <div className="password">
                        <label htmlFor="password">Password</label>
                        <input
                            type={show ? "text" : "password"}
                            name="password"
                            id="password"
                            onChange={handleChange}
                        />
                        <span className="icon" onClick={() => setShow(!show)}>
                            {show ? (
                                <icons.AiFillEye />
                            ) : (
                                <icons.AiFillEyeInvisible />
                            )}
                        </span>
                    </div>
                    <label htmlFor="file">Profile Picture</label>
                    <input
                        type="file"
                        id="file"
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                    <label htmlFor="country">Country</label>
                    <input
                        type="text"
                        name="country"
                        placeholder="Usa"
                        id="country"
                        onChange={handleChange}
                    />
                    <button type="submit">Register</button>
                </div>
                <div className="right">
                    <h1>I want to become a seller</h1>
                    <div className="toggle">
                        <label htmlFor="">Activate the seller account</label>
                        <label className="switch">
                            <input type="checkbox" onChange={handelSeller} />
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <label htmlFor="">Phone Number</label>
                    <input
                        name="phone"
                        type="text"
                        placeholder="+1 234 567 89"
                        onChange={handleChange}
                    />
                    <label htmlFor="desc">Description</label>
                    <textarea
                        placeholder="A short description of yourself"
                        name="desc"
                        id="desc"
                        cols="30"
                        rows="10"
                        onChange={handleChange}
                    ></textarea>
                </div>
            </form>
        </div>
    );
};

export default Register;
