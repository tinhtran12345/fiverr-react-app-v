import { useState } from "react";
import "./Slide.scss";
import ReactSimplyCarousel from "react-simply-carousel";
import icons from "../../utils/icons";

const Slide = ({ children, itemsToShow, itemsToScroll, minWidth }) => {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    return (
        <div className="slide">
            <div className="container">
                <ReactSimplyCarousel
                    activeSlideIndex={activeSlideIndex}
                    onRequestChange={setActiveSlideIndex}
                    itemsToShow={1}
                    itemsToScroll={1}
                    forwardBtnProps={{
                        //here you can also pass className, or any other button element attributes
                        style: {
                            alignSelf: "center",
                            background: "white",
                            border: "none",
                            borderRadius: "50%",
                            color: "black",
                            cursor: "pointer",
                            fontSize: "30px",
                            height: 30,
                            lineHeight: 1,
                            textAlign: "center",
                            width: 30,
                            margin: 10,
                        },
                        children: <icons.BsArrowRightCircle />,
                    }}
                    backwardBtnProps={{
                        //here you can also pass className, or any other button element attributes
                        style: {
                            alignSelf: "center",
                            background: "white",
                            border: "none",
                            borderRadius: "50%",
                            color: "black",
                            cursor: "pointer",
                            fontSize: "30px",
                            height: 30,
                            lineHeight: 1,
                            textAlign: "center",
                            width: 30,
                            margin: 10,
                        },
                        children: <icons.BsArrowLeftCircle />,
                    }}
                    responsiveProps={[
                        {
                            itemsToShow: itemsToShow || 4,
                            itemsToScroll: itemsToScroll || 2,
                            minWidth: 768,
                        },
                    ]}
                    speed={400}
                    easing="linear"
                >
                    {children}
                </ReactSimplyCarousel>
            </div>
        </div>
    );
};

export default Slide;
