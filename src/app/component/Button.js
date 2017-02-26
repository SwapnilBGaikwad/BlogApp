import React from 'react'
import Request from '../utils/Request'

class Button extends React.Component {

    constructor() {
        super();
        this.state = {
            clickCount: 0,
            loading: false,
            data: null
        };
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
        let counter = this.state.clickCount;
        counter++;
        this.setState({clickCount: counter , loading: true});
        this.getData();
    }


    getData() {
        let url = "http://localhost:8080/";
        let data = {id: 1};
        let callback = (data) => {
            this.setState({data: data , loading: false})
        };
        let success = (data) => {
            setTimeout(function () {
                callback(data);
            } , 1000);
        };

        let request = new Request();
        request.get(url , data , success , {});
    }
}

export default Button;