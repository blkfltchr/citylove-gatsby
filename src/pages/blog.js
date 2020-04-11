import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogsPost extends React.Component {
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
        <div className="row row-header">
          <div className="col-sm-12">
            <h2>Creative Profiles</h2>
          </div>
        </div>
        <ul className="blog-list" onScroll={this.onScrollEvent}>
          {data.data.allContentfulBlogs.edges.slice(0, NoOfPost).map(items => (
            <li>
              <div className="post-item template-square columned">
                <div className="post-thumbnail">
                  <Link to={`/${items.node.slug}`}>
                    <Img sizes={items.node.featureImage.fluid} />
                  </Link>
                </div>
                <div className="post-details">
                  <h2 className="post-title"><Link to={`/${items.node.slug}`}>{items.node.title}</Link></h2>
                  <div className="post-date">
                    {items.node.publicData}
                  </div>
                  <div
                        dangerouslySetInnerHTML={{
                            __html: items.node.description.childMarkdownRemark.excerpt
                        }}
                    />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

const Blogs = data => (

  <Layout>
    <SEO title="Blog" keywords={[`gatsby`, `application`, `react`]} />
    <div className="container blog-page">
      <BlogsPost data={data}></BlogsPost>
    </div>
  </Layout>
)

export default Blogs

export const query = graphql`
  query BlogsQuery {
    allContentfulBlogs {
        edges {
          node {
            id
            title
            slug
            publicData(formatString: "MMMM D, YYYY")
            description {
              childMarkdownRemark {
                excerpt(format: HTML, pruneLength: 250)
              }
            }
            featureImage {
              fluid(maxWidth: 1120) {
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
  }
`



