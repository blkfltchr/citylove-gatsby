import React from "react";
import Img from "gatsby-image"

export default class Countdown extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div className="countdown-section">
        <Img sizes={data.featureImage.fluid} />
      </div>
    );
  }
}
