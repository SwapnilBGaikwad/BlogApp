import Reflux from 'reflux'
import Actions from '../actions/BookActions'
import Request from '../utils/Request'

class BookStore extends Reflux.Store {
    constructor()
    {
        super();
        this.state = {
            clickCount: 0,
            loading: false,
            data: null
        };
        this.listenables = Actions;
    }

    onStatusUpdate()
    {
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

export default BookStore;