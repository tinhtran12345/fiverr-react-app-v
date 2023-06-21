import { Link } from "react-router-dom";
import "./ProjectCard.scss";
const ProjectCard = ({ item }) => {
    return (
        <Link to={"/"} className="link">
            <div className="projectCard">
                <img src={item.img} alt="images" />
                <div className="info">
                    <img src={item.pp} alt="pp" />
                    <div className="texts">
                        <h2>{item.cat}</h2>
                        <span>{item.username}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProjectCard;
