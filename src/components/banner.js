import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";

export default class Banner extends React.Component {
  render() {

    const { BannerData } = this.props;

    return (
      <div className="slider-section">
        {BannerData.map((items, i) => (
          <div key={i} className="item">
            <div className="site-Banner">
              <Img sizes={items.node.image.fluid} />
              <div className="Banner-details">
                <div>
                  <span className="sub-title">{items.node.subHeading}</span>
                  <h1>{items.node.title}</h1>
                  <Link to="/shop">Shop Now</Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
