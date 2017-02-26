import React     from 'react';
import './App.css';
import Button from './Button';
import BookForm from './BookForm';

class App extends React.Component {

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>Welcome to Blog</h2>
                </div>
                <Button/>
                <BookForm/>
            </div>
        );
    }
}

export default App;
