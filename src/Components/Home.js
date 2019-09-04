import React, { Component } from 'react';
import { Jumbotron, Container } from 'reactstrap';
import backgroundImage from '../book-shelf.jpg';

export default class Home extends Component {
  render() {
    return (

<Jumbotron fluid className="p-0">
<Container fluid className="p-0 m-0">
<img id="backgroundImage" src={backgroundImage} alt="book-shelf" />
</Container>
</Jumbotron>

    );
  }
}
