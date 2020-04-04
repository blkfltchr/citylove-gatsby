import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
class About extends React.Component {
    render() {
        return (
            <Layout>
                <SEO title="Our Story" keywords={[`gatsby`, `application`, `react`]} /> <
                div className = "site-About" >
                <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h2>Our Story</h2>
                        <div class="row">
                            <div class="col-sm-12">
                                <img src="https://cdn.shopify.com/s/files/1/0252/0435/9253/files/Group_10.png?v=1583191246" alt="City Love Supply story" />
                            </div>
                        </div>
                        <p>City Love Supply Co. was born out of a vision – a vision to elevate and champion the creatives that make cities vibrant, and exciting places to live.</p>
                        <p>Created by two friends with roots in music, City Love was a way to create something that gives back to the creative community. Whether it’s through monetary support of the arts and artists, collections in collaboration with local designers, or garments that reflect the ethos of creativity, City Love is a brand with a purpose.</p>
                        <p>When you wear City Love, you are embracing the spirit of art that makes cities what they are. Home to the courageous, the fearless, and the inspired.</p>
                        <p>We are City Love Supply Co. – welcome to the family.</p>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)}}

export default About
