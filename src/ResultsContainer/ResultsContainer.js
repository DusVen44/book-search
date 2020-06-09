import React, { Component } from 'react'
import BookInfo from '../BookInfo/BookInfo'
import './ResultsContainer.css'

export default class ResultsContainer extends Component {
    render() {
        const { results, gotResults } = this.props;

        if (gotResults === true) {
            const bookInfo = results.map((books, each) => {
                return books.items.map(item => {
                    console.log(item)
                    return (
                        <li key={item.id}><BookInfo
                                            title={item.volumeInfo.title}
                                            author={item.volumeInfo.authors}
                                            description={item.volumeInfo.description}
                                            image={item.volumeInfo.imageLinks.thumbnail}
                                            preview={item.volumeInfo.previewLink}
                        />
                        <hr></hr>
                        </li>
                    )
                })
            })
            return bookInfo
        }

        return (
            <ul className="results">
                {this.bookInfo}
            </ul>
        )
    }
}
