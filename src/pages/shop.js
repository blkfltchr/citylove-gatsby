import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

class IndexPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      NoOfPost: 6
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    var lastScrollY = window.pageYOffset + 1100;

    if (lastScrollY > window.outerHeight) {
      var count = this.state.NoOfPost + 3;
      this.setState({
        NoOfPost: count
      });
    }
  };

  render() {

    const { data } = this.props;
    const { NoOfPost } = this.state;

    return (
      <React.Fragment>
        <div className="container">
          <div className="row row-header">
            <div className="col-sm-12">
              <h2>Shop the Launch Collection</h2>
            </div>
          </div>
          <div className="row product-main" onScroll={this.onScrollEvent}>
            {data.data.allContentfulProduct.edges.slice(0, NoOfPost).map(items => (
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
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const IndexPage = data => (

  <Layout>
    <SEO title="Shop" keywords={[`gatsby`, `application`, `react`]} />
    <div className="container store-page">
      <IndexPost data={data}></IndexPost>
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query StoreQuery {
    allContentfulProduct(sort:{fields:createdAt,order: ASC}){
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
  }
`



