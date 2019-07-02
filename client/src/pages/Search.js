import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import SearchResults from "../components/SearchResults"
import { Input, FormBtn } from "../components/Form";

class Books extends Component {
  state = {
    search: "",
    books: [],
    message: ""
  };


  handleInputChange = event => {
    this.setState({
      search: event.target.value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    API.searchBooks(this.state.search)
      .then(res => {
        let results = res.data.items;

        results = results.map(result => {
          result = {
            key: result.id,
            id: result.id,
            title: result.volumeInfo.title,
            author: result.volumeInfo.authors,
            description: result.volumeInfo.description,
            image: result.volumeInfo.imageLinks.thumbnail,
            link: result.volumeInfo.infoLink
          };
          return result;
        });
        this.setState({
          books: results
        });
      })
      .catch(err => console.log(err));
  };

  handleSavedButton = event => {
    event.preventDefault();
    console.log(this.state.books)
    let savedBooks = this.state.books.filter(book => book.id === event.target.id)
    savedBooks = savedBooks[0];
    API.saveBook(savedBooks)
        .then(this.setState({ message: alert("Your book is saved") }))
        .catch(err => console.log(err))
}

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron />
            <form>
              <Input
                value={this.state.search}
                onChange={this.handleInputChange}
                name="search"
                placeholder="Search for a book by Title"
              />
              <FormBtn
                // disabled={!this.state.search}
                onClick={this.handleFormSubmit}
              >
                Search Book
              </FormBtn>
            </form>
          </Col>
        </Row>
        <Row>
          <Col size="md-6 sm-12">
            <Container>
              <SearchResults
                books={this.state.books}
                handleSavedButton={this.handleSavedButton}
              />
            </Container>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
