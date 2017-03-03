import React from 'react'
import Request from '../utils/Request'
import Reflux from 'reflux'
import BookStore from '../store/BookStore'
import Actions from '../actions/BookActions'

class Button extends Reflux.Component {

    constructor(props)
    {
        super(props);
        this.store = BookStore;
    }

    render() {
        return <div>
            <h2>Request Count : {this.state.clickCount}</h2>
            {this.getLoadingStatus(this.state.loading)}
            { this.getBookDetails(this.state.data , this.state.loading) }
            <input type="submit" onClick={this.handleClick.bind(this)}/>
        </div>
    }

    getBookDetails(book , status) {
        if (book !== null && status === false) {
            return <div>
                <h2>Book Id : {this.state.data.id}</h2>
                <h2>Book Title : {this.state.data.title}</h2>
            </div>;
        }
    }

    getLoadingStatus(status) {
        if (status) {
            return <h4>Loading....</h4>
        }
        return status;
    }

    handleClick(event) {
        event.preventDefault();
        Actions.statusUpdate(true);
    }
}

export default Button;