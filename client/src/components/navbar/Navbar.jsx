import { useEffect, useState } from "react";
import "./Navbar.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { categories } from "../../utils/data";
import axiosConfig from "../../apiConfig/axiosConfig";
const Navbar = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const [active, setActive] = useState(false);
    const [open, setOpen] = useState(false);

    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false);
    };
    useEffect(() => {
        window.addEventListener("scroll", isActive);
        return () => window.removeEventListener("scroll", isActive);
    }, []);

    const currentUser = JSON.parse(localStorage.getItem("currentUser"))?.info;

    const handleLogout = async () => {
        try {
            await axiosConfig.post("/auth/logout");
            localStorage.setItem("currentUser", null);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div
            className={active || pathname !== "/" ? "navbar active" : "navbar"}
        >
            <div className="container">
                <div className="logo">
                    <Link to={"/"} className="link">
                        <span className="text">Fiverr</span>
                    </Link>
                    <span className="dot">.</span>
                </div>
                <div className="links">
                    <span>Fiverr Business</span>
                    <span>Explore</span>
                    <span>English</span>
                    {/* <span>Sign in</span> */}
                    {!currentUser?.isSeller && <span>Become a Seller</span>}
                    {/* {!currentUser && (
                        <button
                            className={active || pathname !== "/" ? "btn" : ""}
                        >
                            Join
                        </button>
                    )} */}
                    {currentUser ? (
                        <div className="user" onClick={() => setOpen(!open)}>
                            <img
                                src={currentUser?.img || "/images/noavatar.jpg"}
                                alt="avatar"
                            />
                            <span>{currentUser?.username}</span>
                            {open && (
                                <div className="options">
                                    {currentUser?.isSeller && (
                                        <>
                                            <Link
                                                className="link"
                                                to={"/mygigs"}
                                            >
                                                Gigs
                                            </Link>
                                            <Link className="link" to={"/add"}>
                                                Add new Gig
                                            </Link>
                                        </>
                                    )}
                                    <Link className="link" to={"/orders"}>
                                        Orders
                                    </Link>
                                    <Link className="link" to={"/messages"}>
                                        Messages
                                    </Link>
                                    <Link
                                        className="link"
                                        onClick={handleLogout}
                                    >
                                        Logout
                                    </Link>
                                </div>
                            )}
                        </div>
                    ) : (
                        <>
                            <Link to="/login" className="link">
                                Sign in
                            </Link>
                            <Link className="link" to="/register">
                                <button
                                    className={
                                        active || pathname !== "/" ? "btn" : ""
                                    }
                                >
                                    Join
                                </button>
                            </Link>
                        </>
                    )}
                </div>
            </div>
            {(active || pathname !== "/") && (
                <>
                    <hr />
                    <div className="menu">
                        {categories?.map((category) => (
                            <Link key={category.id} to={"/"} className="link">
                                {category.title}
                            </Link>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default Navbar;
