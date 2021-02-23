import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import Gallery from 'components/gallery';
import IOExample from 'components/io-example';
import Modal from 'containers/modal';
import { graphql } from 'gatsby';
import {Container, Row, Col} from 'react-bootstrap'; 

import Head from '../components/head/head';
import Header from '../components/header/header';
import GlobalStyle from 'global.css.js';

import './mycss.css'

const Index = ({ data }) => (
  <div>
  <GlobalStyle />
    <Head />
    <Header/>
    <Container>
    <Row>
        <Col>
          <p className="events">
            TREND Fall/Winter 20 - Duality
          </p>
          <p>
          Duality: an instance of opposition or contrast between two concepts or two aspects of something.
          </p>
        </Col>

        <Col>
          <p>
           Picture of the issue  
            </p>
        </Col>
      </Row>
      </Container>
    <div style={{ height: '50vh' }} />
    </div>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    homeJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      gallery {
        title
        copy
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;



{/*<Modal>
        <video
          src="https://i.imgur.com/gzFqNSW.mp4"
          playsInline
          loop
          autoPlay
          muted
        />
</Modal>*/}

{/*<IOExample />*/} 

{/*<Gallery items={data.homeJson.gallery} />*/}