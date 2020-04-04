import React from "react";
import { Link } from "gatsby"
import Carousel from 'nuka-carousel';

export default class LatestBlogs extends React.Component {
    render() {
        return (
            <div className="container home-slideshow">
                <div className="text-center">
                    <h2>We are City Love Supply Co.</h2>
                    <p>
                        We're a Toronto based apparel company, celebrating and elevating the work of the creative class. Our mission is to support the energy of creativity in Toronto, by highlighting and championing artists and craftspeople of all kinds.
                    </p>
                    <Link to="/our-story">Our Story</Link>
                </div>
                <Carousel
                    renderCenterLeftControls={({ previousSlide }) => (
                        <button onClick={previousSlide}>
                            <i className="fa fa-arrow-left" />
                        </button>
                    )}
                    renderCenterRightControls={({ nextSlide }) => (
                        <button onClick={nextSlide}>
                            <i className="fa fa-arrow-right"/>
                        </button>
                    )}
                    wrapAround={true}
                >
                    <img src="https://cdn.shopify.com/s/files/1/0252/0435/9253/files/A1_DSC4821-min.jpg?397" alt="City Love Supply story" />
                    <img src="https://cdn.shopify.com/s/files/1/0252/0435/9253/files/A1_CAkni-min.jpeg?397" alt="City Love Supply story" />
                    <img src="https://cdn.shopify.com/s/files/1/0252/0435/9253/files/A1_HDBXM-min.jpeg?397" alt="City Love Supply story" />
                    <img src="https://cdn.shopify.com/s/files/1/0252/0435/9253/files/A1_DSC5027-min.jpg?397" alt="City Love Supply story" />
                </Carousel>
            </div>
        );
    }
}
