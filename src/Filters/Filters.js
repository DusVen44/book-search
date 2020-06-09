import React, { Component } from 'react'
import './Filters.css'

export default class Filters extends Component {
    render() {
        return (
            <div className="filters-container">

                <label className="filter-label">Print Type:</label>
                <select 
                    value={this.props.printType}
                    onChange={this.props.handlePrintTypeChange}>
                        <option value="all">All</option>
                        <option value="books">Books</option>
                        <option value="magazines">Magazines</option>
                </select>

                <label className="filter-label">Book Type:</label>
                <select
                    value={this.props.bookType}
                    onChange={this.props.handleBookTypeChange}>
                        <option value="partial">No Filter</option>
                        <option value="free-ebooks">Free E-Books</option>
                        <option value="paid-ebooks">Paid E-Books</option>
                        <option value="ebooks">All E-Books</option>
                </select>
            </div>
        )
    }
}
