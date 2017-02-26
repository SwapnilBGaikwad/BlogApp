import React from 'react'
import Request from '../utils/Request'
class BookForm extends React.Component {

    constructor() {
        super();
        this.state = {
            isSaved: false
        };
    }

    render() {
        return <form type="submit" onSubmit={this.handleSubmit.bind(this)}>
            { this.getSavedStatus(this.state.isSaved) }
            <p>Book Id : </p>
            <input id='id' type="text" placeholder="Id"/>
            <p>Book Title</p>
            <input id='title' type="text" placeholder="Book Title"/>
            <input type="submit"/>
        </form>
    }

    getSavedStatus(status) {
        if (status) {
            return <h2>Book Saved</h2>
        }
        setTimeout(function () {
            this.setState({isSaved:false});
        }.bind(this) , 2000);
    }

    handleSubmit(event) {
        event.preventDefault();
        let form = event.target;
        let bookId = form[0].value;
        let bookTitle = form[1].value;
        let book = {};
        book.id = bookId;
        book.title = bookTitle;
        this.save(book);
    }

    save(book) {
        let url = "http://localhost:8080/";
        let data = book;
        let callback = (data) => {
            this.setState({data: data , isSaved: true})
        };
        new Request().post(url, data, callback, {});
    }
}

export default BookForm;