import React, {Component, Fragment} from 'react';
import SearchList from './views/SearchList'
import './App.css';

class App extends Component {
    state = {
        searchValue: '',
        meals: ''
    };

    constructor(props) {
        super(props)
    }

    makeApiCall = searchInput => {
        var searchUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`;
        fetch(searchUrl)
            .then(response => {
                return response.json();
            })
            .then(jsonData => {
                this.setState({ meals: jsonData.meals });
            });
    };

    handleOnChange = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        this.setState({searchValue: e.target.value})
    }
    search = () => {
        this.makeApiCall(this.state.searchValue)
    }

    render() {
        return (
            <Fragment>
                <h1>Welcome to the meal search app</h1>
                <input name="text" type="text" onChange={(e) => this.handleOnChange(e)} placeholder="Search"/>
                <button onClick={() => this.search()}>Search</button>
                <SearchList meals={this.state.meals}/>
            </Fragment>
        )
    }
}

export default App;
