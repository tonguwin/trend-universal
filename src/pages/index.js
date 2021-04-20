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

import new1 from '../images/0001.jpg'; 

const Index = ({ data }) => (
  <div>
  <GlobalStyle />
    <Head />
    <Header/>
    <Container>
      <Row>
          <Col>
            <p className="events">
              Trend Fall/Winter 20 - Dream Theory
            </p>
            <p>
            Our F/W 2021 issue explores the evolution of our dreams and creative endeavors within the last rocky year and hopes to keep UCSD creatives connected by sharing them with you all. Flip through the work of our members and contributors to float through our Past, Present, and Future dreams with us.
            </p>        
          </Col>
          <Col>
            <img src={new1} alt="img" className="floating shape" /> 
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