import React from "react";
import "./Review.scss";
import { useQuery } from "@tanstack/react-query";
import axiosConfig from "../../apiConfig/axiosConfig";

const Review = ({ review }) => {
    const { isLoading, error, data } = useQuery({
        queryKey: [review.userId],
        queryFn: () =>
            axiosConfig.get(`/user/${review.userId}`).then((res) => {
                return res.data;
            }),
    });

    return (
        <div className="review">
            {isLoading ? (
                "loading"
            ) : error ? (
                "error"
            ) : (
                <div className="user">
                    <img
                        className="pp"
                        src={data?.res.img || "/images/noavatar.jpg"}
                        alt=""
                    />
                    <div className="info">
                        <span>{data?.res.username}</span>
                        <div className="country">
                            <span>{data?.res.country}</span>
                        </div>
                    </div>
                </div>
            )}
            <div className="stars">
                {Array(review.star)
                    .fill()
                    .map((item, i) => (
                        <img src="/images/star.png" alt="" key={i} />
                    ))}
                <span>{review.star}</span>
            </div>
            <p>{review.desc}</p>
            <div className="helpful">
                <span>Helpful?</span>
                <img src="/images/like.png" alt="" />
                <span>Yes</span>
                <img src="/images/dislike.png" alt="" />
                <span>No</span>
            </div>
        </div>
    );
};

export default Review;
