import React, { Component } from 'react';
import { Grid, Col, Image } from 'react-bootstrap';
import './Error.css';

export default class Error extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Col xs={12} sm={8} smOffset={2}>
            <Image src="assets/notfound.jpg" className="nothing-pic" />
          </Col>
        </Grid>
      </div>
    )
  }
}
