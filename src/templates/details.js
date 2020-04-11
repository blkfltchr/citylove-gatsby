import React from "react"
import { graphql } from "gatsby"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Layout from "../components/layout"
import SEO from "../components/seo"

const ProductDetails = data => (
  < Layout >
    <SEO title={data.data.contentfulProduct.name} keywords={[`toronto`, `t-shirts`, `clothing`]} />
    <div className="container details-page">
      <div className="product-details">
        <div className="Product-Screenshot">
          {data.data.contentfulProduct.productMorePhotos === null ? <div className="no-image">No Image</div> :
            <Tabs>
              {data.data.contentfulProduct.productMorePhotos.map(items => (
                <TabPanel key={items.id}>
                  <Tab><img src={items.fixed.src} alt={items.title} /></Tab>
                </TabPanel>
              ))}
              <TabList>
                {data.data.contentfulProduct.productMorePhotos.map(items => (
                  <Tab key={items.id}><img src={items.fixed.src} alt={items.title} /></Tab>
                ))}
              </TabList>
            </Tabs>}

        </div>
        <div>
          <h2>{data.data.contentfulProduct.name}</h2>
        </div>
        <div className="row buynowinner">
          <div className="col-sm-2">
            <span className="price">Price: ${data.data.contentfulProduct.price}</span>
          </div>
          <div className="col-sm-10 text-left">
            <a
              href="#"
              className="Product snipcart-add-item"
              data-item-id={data.data.contentfulProduct.slug}
              data-item-price={data.data.contentfulProduct.price}
              data-item-image={data.data.contentfulProduct.image === null ? "" : data.data.contentfulProduct.image.fixed.src}
              data-item-name={data.data.contentfulProduct.name}
              data-item-url={`/`}
              data-item-custom1-name="Color"
              data-item-custom1-options="Black|White"
              data-item-custom2-name="Size"
              data-item-custom2-options="Small|Medium|Large|Extra Large"
            >
              Buy Now
            </a>
          </div>
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: data.data.contentfulProduct.details.childMarkdownRemark.html
          }}
        />
      </div>
    </div>
  </Layout >
)

export default ProductDetails

export const query = graphql`
    query ProductDetailsQuery($slug: String!) {
        contentfulProduct(slug: {eq: $slug }) {
            id
            name
            slug
            image {
                fixed(width: 1120, height: 500) {
                    width
                    height
                    src
                    srcSet
                }
              }
            price
            details {
                childMarkdownRemark {
                html
                }
            }
            productMorePhotos {
                id
                fixed(width: 1120, height: 600){
                    src
                }
            }
        }
    }
`
