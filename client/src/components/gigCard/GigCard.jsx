import "./GigCard.scss";
import { Link } from "react-router-dom";

const GigCard = ({ item }) => {
    return (
        <Link to={"/gig/123"} className="link">
            <div className="gigCard">
                <img src={item.img} alt="images" />
                <div className="info">
                    <div className="user">
                        <img src={item.pp} alt="pp" />
                        <span>{item.username}</span>
                    </div>
                    <p>{item.desc}</p>
                    <div className="star">
                        <img src="/images/star.png" alt="star" />
                        <span>{item.star}</span>
                    </div>
                </div>
                <div className="details">
                    <img src="/images/heart.png" alt="heart" />
                    <div className="price">
                        <span>STARTING AT</span>
                        <h2>
                            ${item.price} <sup>99</sup>{" "}
                        </h2>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default GigCard;
