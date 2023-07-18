import { useNavigate } from "react-router-dom";
import "./Orders.scss";
import { useQuery } from "@tanstack/react-query";
import axiosConfig from "../../apiConfig/axiosConfig";
const Orders = () => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"))?.info;

    const navigate = useNavigate();
    const { isLoading, error, data } = useQuery({
        queryKey: ["orders"],
        queryFn: () =>
            axiosConfig.get(`/orders`).then((res) => {
                return res?.data;
            }),
    });
    const handleContact = async (order) => {
        const sellerId = order.sellerId;
        const buyerId = order.buyerId;
        const id = sellerId + buyerId;

        try {
            const res = await axiosConfig.get(`/conversations/single/${id}`);
            navigate(`/message/${res.data.id}`);
        } catch (err) {
            if (err.response.status === 404) {
                const res = await newRequest.post(`/conversations/`, {
                    to: currentUser.seller ? buyerId : sellerId,
                });
                navigate(`/message/${res.data.id}`);
            }
        }
    };
    // console.log(data);
    return (
        <div className="orders">
            {isLoading ? (
                <p>Loading</p>
            ) : error ? (
                <p>Error</p>
            ) : (
                <div className="container">
                    <div className="title">
                        <h1>Orders</h1>
                    </div>
                    <table>
                        <tbody>
                            <tr>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Contact</th>
                            </tr>
                            {data?.res.map((order) => (
                                <tr key={order._id}>
                                    <td>
                                        <img
                                            className="image"
                                            src={order.img}
                                            alt=""
                                        />
                                    </td>
                                    <td>{order.title}</td>
                                    <td>{order.price}</td>
                                    <td>
                                        <img
                                            className="message"
                                            src="/images/message.png"
                                            alt=""
                                            onClick={() => handleContact(order)}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Orders;
