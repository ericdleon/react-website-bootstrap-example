import React, { Component } from 'react';
import { Grid, Col, Image } from 'react-bootstrap';
import './About.css';

export default class About extends Component {
  render() {
    return (
      <div>
        <Image src="assets/person-1.jpg" className="header-image" />
        <Grid>
          <Col xs={12} sm={8} smOffset={2}>
            <Image src="assets/person-1.jpg" className="about-profile-pic" />
            <h3>Eric</h3>
            <p>This is in development. Will be finished soon.</p>
          </Col>
        </Grid>
      </div>
    )
  }
}
