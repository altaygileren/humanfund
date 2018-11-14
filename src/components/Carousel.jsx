import React, { Component } from 'react';
import ReactBootstrapCarousel from "react-bootstrap-carousel";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";


class CarouselComp extends Component {
    render() {
        return (
            <div className="caro">
                <ReactBootstrapCarousel
                    className="carousel-fade ">
                    <img className="imgs" src={"carimg1.jpg"} />
                    <img className="imgs" src={"carimg3.jpg"} />

                </ReactBootstrapCarousel>
            </div>
        )
    }
}

export default CarouselComp;
