import React, { Component } from 'react'
import './BookInfo.css'

export default class BookInfo extends Component {
    render() {
        return (
            <div className="book-box">

              <div className="image">
                <img src={this.props.image} alt="book cover"></img>
              </div>

              <div className="book-info">
                <h2>Title: {this.props.title}</h2>
                <h2>Author: {this.props.author}</h2>
                <p>{this.props.description}</p>
                <p><a href={this.props.preview} target="_blank">Preview Item</a></p>
              </div>

            </div>
        )
    }
}
