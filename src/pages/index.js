import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import HomeSlideshow from "../components/homeSlideshow"
import Countdown from "../components/countdown"

class IndexPost extends React.Component {

  render() {

    const { data } = this.props;

    return (
      <React.Fragment>
        <div className="row product-main product-mainpage">
          {data.data.allContentfulProduct.edges.map(items => (
            <div className="Catalogue__item col-sm-12 col-md-6 col-lg-4" key={items.node.id}>
              <div className="details_List">
                {items.node.image === null ? <div className="no-image">No Image</div> : <Link to={`/${items.node.slug}`}><Img sizes={items.node.image.fluid} /></Link>}

                <div className="details_inner">

                  <h2>
                    <Link to={`/${items.node.slug}`}>{items.node.name}</Link>
                  </h2>
                  <div className="row price-buy">
                    <div className="align-self-center">
                      <span className="price">${items.node.price}</span>
                    </div>
                    <div className="align-self-center">
                      <a
                        href="#"
                        className="Product snipcart-add-item"
                        data-item-id={items.node.slug}
                        data-item-price={items.node.price}
                        data-item-image={items.node.image === null ? "" : items.node.image.fluid.src}
                        data-item-name={items.node.name}
                        data-item-url={`/`}
                        data-item-custom1-name="Color"
                        data-item-custom1-options="Black|White"
                        data-item-custom2-name="Size"
                        data-item-custom2-options="Small|Medium|Large|Extra Large"
                        >
                        Add to Cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="center">
              <Link to="/shop">Shop The Collection</Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const IndexPage = data => (

  <Layout>
    <SEO title="Home" keywords={[`city love supply co`, `toronto apparel company`]} />
    <Banner BannerData={data.data.allContentfulHeaderBanner.edges} />
    <HomeSlideshow />
    <div className="container">
      <IndexPost data={data}></IndexPost>
    </div>
    <Countdown data={data.data.contentfulDealCountDown} />
  </Layout>
)

export default IndexPage

export const query = graphql`
  query AboutQuery {
    allContentfulProduct(limit: 3,sort:{fields:createdAt,order: ASC}){
      edges{
        node{
          id
          name
          slug
          image {
            fluid(maxWidth: 1000) {
              base64
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
            }
          }
          price
        }
      }
    }
    allContentfulHeaderBanner {
      edges {
        node {
          title
          subHeading
          image {
            fluid(maxWidth: 1800) {
              base64
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
            }
          }
        }
      }
    }
    contentfulDealCountDown {
      featureImage {
        fluid(maxWidth: 1800) {
          base64
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
      }
    }
  }
`



