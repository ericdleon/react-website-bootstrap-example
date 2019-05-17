import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button, ProgressBar } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
    <Grid>
      <Jumbotron>
        <h2>Welcome to my portfolio</h2>
        <p>This is a website made with React</p>
        <Link to="/about">
          <Button bsStyle="primary">About</Button>
        </Link>
      </Jumbotron>
      <Row className="show-grid text-center">
        <Col xs={12} sm={4} className="person-wrapper">
          <Image src="assets/person-1.jpg" circle className="profile-pic" />
          <h3>Eric</h3>
          <p>In Development</p>
        </Col>
        <ProgressBar active now={92} label="React"/>
      </Row>
    </Grid>
  )
  }
}
