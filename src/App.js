import React, { Component } from 'react'
import Header from './Header/Header'
import SearchContainer from './SearchContainer/SearchContainer'
import ResultsContainer from './ResultsContainer/ResultsContainer'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
        searchInput: "",
        printType: "all",
        bookType: "partial",
        results: "",
        gotResults: false
    }
}

handleSearchInputChange = (event) => {
    this.setState({
        searchInput: event.target.value
    })
}

handlePrintTypeChange = (event) => {
    this.setState({
        printType: event.target.value
    })
}

handleBookTypeChange = (event) => {
    this.setState({
        bookType: event.target.value
    })
}

handleSubmit = (event) => {
    event.preventDefault()
    const searchInput = this.state.searchInput;
    const printType = this.state.printType;
    const bookType = this.state.bookType;
    const api = 'AIzaSyCoKG5l4tQKj_cQi47qJIZHbM9YBZ2Z2dQ'
    const url = 'https://www.googleapis.com/books/v1/volumes?q='
                + searchInput + '&'
                + 'printType=' + printType + '&'
                + 'filter=' + bookType + '&'
                + 'key=' + api;
    fetch(url)
        .then(response => {
            if(!response.ok) {
                throw new Error('Something went wrong.');
            }
            return response;
        })
        .then(response => response.json())
        .then(data => {
            this.setState({
                results: data,
                gotResults: true
            })
        })
        .catch(err => alert('Something went wrong.'))
}

  render() {
    return (
      <div>
        <Header />
        <SearchContainer 
            searchInput={this.state.searchInput}
            printType={this.state.printType}
            bookType={this.state.bookType}
            handleSearchInputChange={this.handleSearchInputChange}
            handlePrintTypeChange={this.handlePrintTypeChange}
            handleBookTypeChange={this.handleBookTypeChange}
            handleSubmit={this.handleSubmit}
        />
        <ResultsContainer
            searchInput={this.state.searchInput}
            results={[this.state.results]}
            gotResults={this.state.gotResults}
            />
      </div>
    )
  }
}
