import { useParams } from "react-router-dom";
import { Reviews, Slide } from "../../components";
import "./Gig.scss";
import { useQuery } from "@tanstack/react-query";
import axiosConfig from "../../apiConfig/axiosConfig";
import { Link } from "react-router-dom";
import icons from "../../utils/icons";
const Gig = () => {
    const { id } = useParams();
    const { isLoading, error, data } = useQuery({
        queryKey: ["gig"],
        queryFn: () =>
            axiosConfig.get(`/gigs/single/${id}`).then((res) => {
                return res.data;
            }),
    });
    const userId = data?.res?.userId;
    // console.log(userId);
    const {
        isLoading: isLoadingUser,
        error: errorUser,
        data: dataUser,
    } = useQuery({
        queryKey: ["user"],
        queryFn: () =>
            axiosConfig.get(`/user/${userId}`).then((res) => {
                return res.data;
            }),
        enabled: !!userId,
    });

    return (
        // <div className="gig">
        //     {isLoading ? (
        //         <p>Loading</p>
        //     ) : error ? (
        //         <p>Something went wrong!</p>
        //     ) : (
        //         <div className="container">
        //             <div className="left">
        //                 <div className="breadcrumbs">
        //                     <span>
        //                         <Link className="link highlight" to={"/"}>
        //                             FIVERR
        //                         </Link>
        //                         <icons.GrFormNext />

        //                         <p>GRAPHICS & DESIGN </p>
        //                     </span>
        //                 </div>
        //                 <h1>{data?.res.title}</h1>
        //                 {isLoadingUser ? (
        //                     <p>Loading</p>
        //                 ) : errorUser ? (
        //                     <p>Something went wrong!</p>
        //                 ) : (
        //                     <div className="user">
        //                         <img
        //                             className="pp"
        //                             src={
        //                                 dataUser?.res.img ||
        //                                 "/images/noavatar.jpg"
        //                             }
        //                             alt="avatar"
        //                         />
        //                         <span>{dataUser?.res.username}</span>
        //                         {!isNaN(
        //                             data?.res.totalStars / data?.res.starNumber
        //                         ) && (
        //                             <div className="stars">
        //                                 {Array(
        //                                     Math.round(
        //                                         data.totalStars /
        //                                             data.starNumber
        //                                     ) || 5
        //                                 )
        //                                     .fill()
        //                                     .map((item, i) => (
        //                                         <img
        //                                             src="/images/star.png"
        //                                             alt="star"
        //                                             key={i}
        //                                         />
        //                                     ))}
        //                                 <span>
        //                                     {Math.round(
        //                                         data?.res.totalStars /
        //                                             data?.res.starNumber
        //                                     )}
        //                                 </span>
        //                             </div>
        //                         )}
        //                     </div>
        //                 )}
        //                 <Slide
        //                     itemsToShow={1}
        //                     itemsToScroll={1}
        //                     className="slide"
        //                 >
        //                     {data?.res.images.map((img) => (
        //                         <img key={img} src={img} alt="" />
        //                     ))}
        //                 </Slide>
        //                 <h2>About This Gig</h2>
        //                 <p>{data?.res.desc}</p>
        //                 {isLoadingUser ? (
        //                     <p>Loading ...</p>
        //                 ) : errorUser ? (
        //                     <p>Something went wrong</p>
        //                 ) : (
        //                     <div className="seller">
        //                         <h2>About The Seller</h2>
        //                         <div className="user">
        //                             <img
        //                                 src={
        //                                     dataUser?.res.img ||
        //                                     "/images/noavatar.jpg"
        //                                 }
        //                                 alt="photo"
        //                             />
        //                             <div className="info">
        //                                 <span>{dataUser?.res.username}</span>
        //                                 {!isNaN(
        //                                     data.totalStars / data.starNumber
        //                                 ) && (
        //                                     <div className="stars">
        //                                         {Array(
        //                                             Math.round(
        //                                                 data.totalStars /
        //                                                     data.starNumber
        //                                             ) || 5
        //                                         )
        //                                             .fill()
        //                                             .map((item, i) => (
        //                                                 <img
        //                                                     src="/images/star.png"
        //                                                     alt=""
        //                                                     key={i}
        //                                                 />
        //                                             ))}
        //                                         <span>
        //                                             {Math.round(
        //                                                 data.totalStars /
        //                                                     data.starNumber
        //                                             ) || 5}
        //                                         </span>
        //                                     </div>
        //                                 )}
        //                                 <button>Contact me</button>
        //                             </div>
        //                         </div>
        //                         <div className="box">
        //                             <div className="items">
        //                                 <div className="item">
        //                                     <span className="title">From</span>
        //                                     <span className="desc">USA</span>
        //                                 </div>
        //                                 <div className="item">
        //                                     <span className="title">
        //                                         Member since
        //                                     </span>
        //                                     <span className="desc">
        //                                         Aug 2022
        //                                     </span>
        //                                 </div>
        //                                 <div className="item">
        //                                     <span className="title">
        //                                         Avg. response time
        //                                     </span>
        //                                     <span className="desc">
        //                                         4 hours
        //                                     </span>
        //                                 </div>
        //                                 <div className="item">
        //                                     <span className="title">
        //                                         Last delivery
        //                                     </span>
        //                                     <span className="desc">1 day</span>
        //                                 </div>
        //                                 <div className="item">
        //                                     <span className="title">
        //                                         Languages
        //                                     </span>
        //                                     <span className="desc">
        //                                         English
        //                                     </span>
        //                                 </div>
        //                             </div>
        //                             <hr />
        //                             <p>
        //                                 My name is Anna, I enjoy creating AI
        //                                 generated art in my spare time. I have a
        //                                 lot of experience using the AI program
        //                                 and that means I know what to prompt the
        //                                 AI with to get a great and incredibly
        //                                 detailed result.
        //                             </p>
        //                         </div>
        //                     </div>
        //                 )}
        //                 <div className="reviews">
        //                     <h2>Reviews</h2>
        //                     <div className="item">
        //                         <div className="user">
        //                             <img
        //                                 className="pp"
        //                                 src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600"
        //                                 alt="images"
        //                             />
        //                             <div className="info">
        //                                 <span>Alice</span>
        //                                 <div className="country">
        //                                     <img
        //                                         src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
        //                                         alt=""
        //                                     />
        //                                     <span>United States</span>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                         <div className="stars">
        //                             <img src="/images/star.png" alt="star" />
        //                             <img src="/images/star.png" alt="star" />
        //                             <img src="/images/star.png" alt="star" />
        //                             <img src="/images/star.png" alt="star" />
        //                             <img src="/images/star.png" alt="star" />
        //                             <span>5</span>
        //                         </div>
        //                         <p>
        //                             I just want to say that art_with_ai was the
        //                             first, and after this, the only artist Ill
        //                             be using on Fiverr. Communication was
        //                             amazing, each and every day he sent me
        //                             images that I was free to request changes
        //                             to. They listened, understood, and delivered
        //                             above and beyond my expectations. I
        //                             absolutely recommend this gig, and know
        //                             already that Ill be using it again very very
        //                             soon
        //                         </p>
        //                         <div className="helpful">
        //                             <span>Helpful?</span>
        //                             <img src="/images/like.png" alt="like" />
        //                             <span>Yes</span>
        //                             <img
        //                                 src="/images/dislike.png"
        //                                 alt="dislike"
        //                             />
        //                             <span>No</span>
        //                         </div>
        //                     </div>
        //                     <div className="item">
        //                         <div className="user">
        //                             <img
        //                                 className="pp"
        //                                 src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600"
        //                                 alt="images"
        //                             />
        //                             <div className="info">
        //                                 <span>Alice</span>
        //                                 <div className="country">
        //                                     <img
        //                                         src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
        //                                         alt=""
        //                                     />
        //                                     <span>United States</span>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                         <div className="stars">
        //                             <img src="/images/star.png" alt="star" />
        //                             <img src="/images/star.png" alt="star" />
        //                             <img src="/images/star.png" alt="star" />
        //                             <img src="/images/star.png" alt="star" />
        //                             <img src="/images/star.png" alt="star" />
        //                             <span>5</span>
        //                         </div>
        //                         <p>
        //                             I just want to say that art_with_ai was the
        //                             first, and after this, the only artist Ill
        //                             be using on Fiverr. Communication was
        //                             amazing, each and every day he sent me
        //                             images that I was free to request changes
        //                             to. They listened, understood, and delivered
        //                             above and beyond my expectations. I
        //                             absolutely recommend this gig, and know
        //                             already that Ill be using it again very very
        //                             soon
        //                         </p>
        //                         <div className="helpful">
        //                             <span>Helpful?</span>
        //                             <img src="/images/like.png" alt="like" />
        //                             <span>Yes</span>
        //                             <img
        //                                 src="/images/dislike.png"
        //                                 alt="dislike"
        //                             />
        //                             <span>No</span>
        //                         </div>
        //                     </div>
        //                     <div className="item">
        //                         <div className="user">
        //                             <img
        //                                 className="pp"
        //                                 src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600"
        //                                 alt="images"
        //                             />
        //                             <div className="info">
        //                                 <span>Alice</span>
        //                                 <div className="country">
        //                                     <img
        //                                         src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
        //                                         alt=""
        //                                     />
        //                                     <span>United States</span>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                         <div className="stars">
        //                             <img src="/images/star.png" alt="star" />
        //                             <img src="/images/star.png" alt="star" />
        //                             <img src="/images/star.png" alt="star" />
        //                             <img src="/images/star.png" alt="star" />
        //                             <img src="/images/star.png" alt="star" />
        //                             <span>5</span>
        //                         </div>
        //                         <p>
        //                             I just want to say that art_with_ai was the
        //                             first, and after this, the only artist Ill
        //                             be using on Fiverr. Communication was
        //                             amazing, each and every day he sent me
        //                             images that I was free to request changes
        //                             to. They listened, understood, and delivered
        //                             above and beyond my expectations. I
        //                             absolutely recommend this gig, and know
        //                             already that Ill be using it again very very
        //                             soon
        //                         </p>
        //                         <div className="helpful">
        //                             <span>Helpful?</span>
        //                             <img src="/images/like.png" alt="like" />
        //                             <span>Yes</span>
        //                             <img
        //                                 src="/images/dislike.png"
        //                                 alt="dislike"
        //                             />
        //                             <span>No</span>
        //                         </div>
        //                     </div>
        //                     <hr />
        //                 </div>
        //             </div>
        //             <div className="right">
        //                 <div className="price">
        //                     <h3>1 AI generated image</h3>
        //                     <h2>$ 59.99</h2>
        //                 </div>
        //                 <p>
        //                     I will create a unique high quality AI generated
        //                     image based on a description that you give me
        //                 </p>
        //                 <div className="details">
        //                     <div className="item">
        //                         <img src="/images/clock.png" alt="" />
        //                         <span>2 Days Delivery</span>
        //                     </div>
        //                     <div className="item">
        //                         <img src="/images/recycle.png" alt="" />
        //                         <span>3 Revisions</span>
        //                     </div>
        //                 </div>
        //                 <div className="features">
        //                     <div className="item">
        //                         <img src="/images/greencheck.png" alt="" />
        //                         <span>Prompt writing</span>
        //                     </div>
        //                     <div className="item">
        //                         <img src="/images/greencheck.png" alt="" />
        //                         <span>Artwork delivery</span>
        //                     </div>
        //                     <div className="item">
        //                         <img src="/images/greencheck.png" alt="" />
        //                         <span>Image upscaling</span>
        //                     </div>
        //                     <div className="item">
        //                         <img src="/images/greencheck.png" alt="" />
        //                         <span>Additional design</span>
        //                     </div>
        //                 </div>
        //                 <button>Continue</button>
        //             </div>
        //         </div>
        //     )}
        // </div>
        <div className="gig">
            {isLoading ? (
                "loading"
            ) : error ? (
                "Something went wrong!"
            ) : (
                <div className="container">
                    <div className="left">
                        <span className="breadcrumbs">
                            <span>
                                <Link className="link highlight" to={"/"}>
                                    FIVERR
                                </Link>
                                <icons.GrFormNext />
                                <p>GRAPHICS & DESIGN </p>
                            </span>
                        </span>
                        <h1>{data?.res.title}</h1>
                        {isLoadingUser ? (
                            "loading"
                        ) : errorUser ? (
                            "Something went wrong!"
                        ) : (
                            <div className="user">
                                <img
                                    className="pp"
                                    src={
                                        dataUser?.res.img ||
                                        "/images/noavatar.jpg"
                                    }
                                    alt=""
                                />
                                <span>{dataUser.username}</span>
                                <div className="stars">
                                    {Array(data?.res.totalStars)
                                        .fill()
                                        .map((item, i) => (
                                            <img
                                                src="/images/star.png"
                                                alt=""
                                                key={i}
                                            />
                                        ))}
                                    <span>({data?.res.starNumber})</span>
                                </div>
                            </div>
                        )}
                        <Slide
                            itemsToShow={1}
                            itemsToScroll={1}
                            className="slide"
                        >
                            {data?.res.images.map((img) => (
                                <img key={img} src={img} alt="" />
                            ))}
                        </Slide>
                        <h2>About This Gig</h2>
                        <p>{data?.res.desc}</p>
                        {isLoadingUser ? (
                            "loading"
                        ) : errorUser ? (
                            "Something went wrong!"
                        ) : (
                            <div className="seller">
                                <h2>About The Seller</h2>
                                <div className="user">
                                    <img
                                        src={
                                            dataUser?.res.img ||
                                            "/images/noavatar.jpg"
                                        }
                                        alt=""
                                    />
                                    <div className="info">
                                        <span>{dataUser?.res.username}</span>

                                        <div className="stars">
                                            {Array(data?.res.totalStars)
                                                .fill()
                                                .map((item, i) => (
                                                    <img
                                                        src="/images/star.png"
                                                        alt=""
                                                        key={i}
                                                    />
                                                ))}
                                            <span>
                                                ({data?.res.starNumber})
                                            </span>
                                        </div>

                                        <button>Contact Me</button>
                                    </div>
                                </div>
                                <div className="box">
                                    <div className="items">
                                        <div className="item">
                                            <span className="title">From</span>
                                            <span className="desc">
                                                {dataUser?.res.country}
                                            </span>
                                        </div>
                                        <div className="item">
                                            <span className="title">
                                                Member since
                                            </span>
                                            <span className="desc">
                                                Aug 2022
                                            </span>
                                        </div>
                                        <div className="item">
                                            <span className="title">
                                                Avg. response time
                                            </span>
                                            <span className="desc">
                                                4 hours
                                            </span>
                                        </div>
                                        <div className="item">
                                            <span className="title">
                                                Last delivery
                                            </span>
                                            <span className="desc">1 day</span>
                                        </div>
                                        <div className="item">
                                            <span className="title">
                                                Languages
                                            </span>
                                            <span className="desc">
                                                English
                                            </span>
                                        </div>
                                    </div>
                                    <hr />
                                    <p>{dataUser?.res.desc}</p>
                                </div>
                            </div>
                        )}
                        <Reviews gigId={id} />
                    </div>
                    <div className="right">
                        <div className="price">
                            <h3>{data?.res.shortTitle}</h3>
                            <h2>$ {data?.res.price}</h2>
                        </div>
                        <p>{data?.res.shortDesc}</p>
                        <div className="details">
                            <div className="item">
                                <img src="/images/clock.png" alt="" />
                                <span>
                                    {data?.res.deliveryDate} Days Delivery
                                </span>
                            </div>
                            <div className="item">
                                <img src="/images/recycle.png" alt="" />
                                <span>
                                    {data?.res.revisionNumber} Revisions
                                </span>
                            </div>
                        </div>
                        <div className="features">
                            {data?.res.features.map((feature) => (
                                <div className="item" key={feature}>
                                    <img src="/images/greencheck.png" alt="" />
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>
                        <Link to={`/pay/${id}`}>
                            <button>Continue</button>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gig;
