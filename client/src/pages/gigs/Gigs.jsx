import { useState } from "react";
import "./Gigs.scss";
import { gigs } from "../../utils/data";
import { GigCard } from "../../components";

const Gigs = () => {
    const [open, setOpen] = useState(false);
    const [sort, setSort] = useState("sales");
    const reSort = (type) => {
        setSort(type);
        setOpen(false);
    };
    return (
        <div className="gigs">
            <div className="container">
                <span className="breadcrumbs">FIVERR : GRAPHICS & DESIGN</span>
                <h1> AI Artists</h1>
                <p>
                    Explore the boundaries of art and technology with Fiverr's
                    Ai artists
                </p>
                <div className="menu">
                    <div className="left">
                        <span>Budged</span>
                        <input type="min" placeholder="Min" />
                        <input type="max" placeholder="Max" />
                        <button>Apply</button>
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
                    {gigs.map((gig) => (
                        <GigCard key={gig.id} item={gig} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gigs;
