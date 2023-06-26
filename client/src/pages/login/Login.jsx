import { useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import icons from "../../utils/icons";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosConfig from "../../apiConfig/axiosConfig";
import { notify } from "../../utils/notify";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axiosConfig.post(
                "/auth/login",
                {
                    username,
                    password,
                },
                {
                    withCredentials: true,
                }
            );
            localStorage.setItem("currentUser", JSON.stringify(res.data));
            navigate("/");

            // console.log(res);
        } catch (error) {
            const data = error.response.data;

            notify({
                err: true,
                msg: data.msg,
            });
        }
    };

    return (
        <div className="login">
            <form onSubmit={handleSubmit}>
                <h1>Sign in</h1>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    name="username"
                    placeholder="Enter the name"
                    id="username"
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="password">Password</label>
                <div className="showIcon">
                    <input
                        type={show ? "text" : "password"}
                        name="password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <span className="invisible" onClick={() => setShow(!show)}>
                        {show ? (
                            <icons.AiFillEye className="icon" />
                        ) : (
                            <icons.AiFillEyeInvisible />
                        )}
                    </span>
                </div>

                <button type="submit">Login</button>
                <ToastContainer autoClose={3000} />
            </form>
        </div>
    );
};

export default Login;
