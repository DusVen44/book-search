import React, { Component } from 'react'
import SearchInput from '../SearchInput/SearchInput'
import Filters from '../Filters/Filters'

export default class SearchContainer extends Component {
    render() {
        return (
            <form className="search-form" onSubmit={this.props.handleSubmit}>
                <SearchInput 
                    searchInput={this.props.searchInput}
                    printType={this.props.printType}
                    bookType={this.props.bookType}
                    handleSearchInputChange={this.props.handleSearchInputChange}
                />
                <Filters
                    searchInput={this.props.searchInput}
                    printType={this.props.printType}
                    bookType={this.props.bookType}
                    handlePrintTypeChange={this.props.handlePrintTypeChange}
                    handleBookTypeChange={this.props.handleBookTypeChange}
                />
            </form>
        )
    }
}
