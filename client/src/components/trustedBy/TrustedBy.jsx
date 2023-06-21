import { trustedbyData } from "../../utils/data";
import "./TrustedBy.scss";
const TrustedBy = () => {
    return (
        <div className="trustedBy">
            <div className="container">
                <span>Trusted by:</span>

                {trustedbyData.map((data) => (
                    <img key={data.id} src={data.photo} alt="photo" />
                ))}
            </div>
        </div>
    );
};

export default TrustedBy;
