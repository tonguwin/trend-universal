import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';
import {Container, Row, Col} from 'react-bootstrap'; 

import './mycss.css'

import new1 from '../images/0001.jpg'; 

const About = ({ data }) => (
  <Layout>
    <Head pageTitle= 'Our Team' />
    <Container>
      <Row>
          <Col>
            <p className="events">
              What is Trend?
            </p>
            <p>
            TREND is a student-run fashion and lifestyle magazine at UCSD. We release two issues in an academic year - Fall/Winter and Spring/Summer. 
            </p>
          
          </Col>
          <Col>
            <p className="events">
              What is Trend?
            </p>
            <p>
            TREND is a student-run fashion and lifestyle magazine at UCSD. We release two issues in an academic year - Fall/Winter and Spring/Summer. 
            </p>
          
          </Col>

            
          
      </Row>
      
    </Container>
  </Layout>
);

About.propTypes = {
  data: PropTypes.object.isRequired,
};

export default About;

export const query = graphql`
  query AboutQuery {
    aboutJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
