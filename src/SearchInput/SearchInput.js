import React, { Component } from 'react'
import './SearchInput.css'

export default class SearchInput extends Component {
    render() {
        return (
            <div className="search-input">

                <label htmlFor="searchInput">Search: </label>
                <input 
                    type="text"
                    name="searchInput"
                    id="searchInput"
                    value={this.props.searchInput}
                    onChange={this.props.handleSearchInputChange}
                    placeholder="Enter Search Terms"
                    required
                />

                <button type="submit">Search</button>
                
                </div>                
        )
    }
}
