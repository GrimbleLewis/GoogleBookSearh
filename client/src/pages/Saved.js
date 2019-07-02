import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import SavedResults from "../components/SavedResults";

class SaveBook extends Component {
  state = {
    savedBooks: []
  };

  componentDidMount() {
    API.getBooks()
      .then(res => this.setState({ savedBooks: res.data }))
      .catch(err => console.log(err));
  }

  handleDeleteButton = id => {
    API.deleteBook(id)
        .then(res => this.componentDidMount())
        .catch(err => console.log(err))
}

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron />
          </Col>
        </Row>
        <Container>
          <SavedResults
            savedBooks={this.state.savedBooks}
            handleDeleteButton={this.handleDeleteButton}
          />
        </Container>
      </Container>
    );
  }
}

export default SaveBook;
