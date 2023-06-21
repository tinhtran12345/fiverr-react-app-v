import { Slide } from "../../components";
import "./Gig.scss";
const Gig = () => {
    return (
        <div className="gig">
            <div className="container">
                <div className="left">
                    <div className="breadcrumbs">FIVERR: GRAPHICS & DESIGN</div>
                    <h1>I will create ai generated art for you</h1>
                    <div className="user">
                        <img src="" alt="" />
                        <span>Alice</span>
                        <div className="stars">
                            <img src="/images/star.png" alt="star" />
                            <img src="/images/star.png" alt="star" />
                            <img src="/images/star.png" alt="star" />
                            <img src="/images/star.png" alt="star" />
                            <img src="/images/star.png" alt="star" />
                            <span>5</span>
                        </div>
                    </div>
                    <Slide itemsToShow={1} itemsToScroll={1} className="slide">
                        <img
                            src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
                            alt=""
                        />
                        <img
                            src="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600"
                            alt=""
                        />
                        <img
                            src="https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600"
                            alt=""
                        />
                        <img
                            src="https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600"
                            alt=""
                        />
                        <img
                            src="https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600"
                            alt=""
                        />
                    </Slide>
                </div>
                <div className="right"></div>
            </div>
        </div>
    );
};

export default Gig;
