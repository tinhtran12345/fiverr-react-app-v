import { useEffect, useRef, useState } from "react";
import "./Gigs.scss";
// import { gigs } from "../../utils/data";
import { GigCard } from "../../components";
import { useQuery } from "@tanstack/react-query";
import axiosConfig from "../../apiConfig/axiosConfig";
import { useLocation, Link } from "react-router-dom";
import icons from "../../utils/icons";

const Gigs = () => {
    const minRef = useRef();
    const maxRef = useRef();
    const [open, setOpen] = useState(false);
    const [sort, setSort] = useState("sales");
    const reSort = (type) => {
        setSort(type);
        setOpen(false);
    };

    const { search } = useLocation();

    const { isLoading, error, data, refetch } = useQuery({
        queryKey: ["repoData"],
        queryFn: () =>
            axiosConfig
                .get(
                    `/gigs/${search}&min=${minRef.current.value}&max=${maxRef.current.value}&sort=${sort}`
                )
                .then((res) => {
                    return res.data;
                }),
    });

    useEffect(() => {
        refetch();
    }, [sort]);

    const apply = () => {
        // console.log(minRef.current.value);
        // console.log(maxRef.current.value);
        refetch();
    };

    return (
        <div className="gigs">
            <div className="container">
                <span className="breadcrumbs">
                    <span>
                        <Link className="link highlight" to={"/"}>
                            FIVERR
                        </Link>
                        <icons.GrFormNext />

                        <p>GRAPHICS & DESIGN </p>
                    </span>
                </span>
                <h1> AI Artists</h1>
                <p>
                    Explore the boundaries of art and technology with Fiverr's
                    Ai artists
                </p>
                <div className="menu">
                    <div className="left">
                        <span>Budged</span>
                        <input ref={minRef} type="number" placeholder="Min" />
                        <input ref={maxRef} type="number" placeholder="Max" />
                        <button onClick={apply}>Apply</button>
                    </div>
                    <div className="right" onClick={() => setOpen(!open)}>
                        <div className="sortBy">SortBy:</div>
                        <div className="sortType">
                            {sort === "sales" ? "Best Selling" : "Newest"}
                        </div>
                        <img src="/images/down.png" alt="down" />
                        {open && (
                            <div className="rightMenu">
                                {sort === "sales" ? (
                                    <span onClick={() => reSort("createdAt")}>
                                        Newest
                                    </span>
                                ) : (
                                    <span onClick={() => reSort("sales")}>
                                        Best Selling
                                    </span>
                                )}
                            </div>
                        )}
                    </div>
                </div>

                <div className="cards">
                    {isLoading ? (
                        <p>Loading</p>
                    ) : error ? (
                        <p>Something went wrong</p>
                    ) : (
                        data.res?.map((gig) => (
                            <GigCard key={gig._id} item={gig} />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Gigs;
