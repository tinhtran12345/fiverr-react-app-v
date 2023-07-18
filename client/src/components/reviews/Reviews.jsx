import React from "react";
import "./Reviews.scss";

import { useMutation, useQuery } from "@tanstack/react-query";
import axiosConfig from "../../apiConfig/axiosConfig";
import Review from "../review/Review";

const Reviews = ({ gigId }) => {
    const { isLoading, error, data } = useQuery({
        queryKey: ["reviews"],
        queryFn: () =>
            axiosConfig.get(`/reviews/${gigId}`).then((res) => {
                return res.data;
            }),
    });
    const mutation = useMutation({
        mutationFn: (review) => {
            return axiosConfig.post("/reviews", review);
        },
        onSuccess: () => {
            queryClient.invalidateQueries(["reviews"]);
        },
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        const desc = e.target[0].value;
        const star = e.target[1].value;
        mutation.mutate({ gigId, desc, star });
    };
    return (
        <div className="reviews">
            <h2>Review</h2>
            {isLoading ? (
                <p>Loading</p>
            ) : error ? (
                <p>Something went wrong</p>
            ) : (
                data?.res.map((review) => (
                    <Review key={review._id} review={review} />
                ))
            )}
            <div className="add">
                <h3>Add a review</h3>
                <form action="" className="addForm" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Write your opinion" />
                    <select name="" id="">
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                    <button>Send</button>
                </form>
            </div>
        </div>
    );
};

export default Reviews;
