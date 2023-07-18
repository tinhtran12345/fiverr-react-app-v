import "./GigCard.scss";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axiosConfig from "../../apiConfig/axiosConfig";

const GigCard = ({ item }) => {
    const { isLoading, error, data } = useQuery({
        queryKey: [item.userId],
        queryFn: () =>
            axiosConfig.get(`/user/${item.userId}`).then((res) => {
                return res.data;
            }),
    });
    // console.log(data);
    return (
        <Link to={`/gig/${item._id}`} className="link">
            <div className="gigCard">
                <img src={item.cover} alt="images" />
                <div className="info">
                    {isLoading ? (
                        <p>Loading ...</p>
                    ) : error ? (
                        <p>Something sent wrong!</p>
                    ) : (
                        <div className="user">
                            <img
                                src={data.res?.img || "/images/noavatar.jpg"}
                                alt="pp"
                            />
                            <span>{data.res?.username}</span>
                        </div>
                    )}
                    <p>{item.desc.slice(0, 100)} ...</p>
                    <div className="star">
                        <img src="/images/star.png" alt="star" />
                        <span>
                            {/* {" "}
                            {!isNaN(item.totalStars / item.starNumber) &&
                                Math.round(item.totalStars / item.starNumber)} */}
                            {item?.totalStars} ({item?.starNumber})
                        </span>
                    </div>
                </div>
                <div className="details">
                    <img src="/images/heart.png" alt="heart" />
                    <div className="price">
                        <span>STARTING AT</span>
                        <h2>$ {item.price}</h2>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default GigCard;
