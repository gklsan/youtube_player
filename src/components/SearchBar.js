import React, { Component } from 'react'

class SearchBar extends Component {

    state = {
        searchText: ''
    };

    searchTextChangeHandler = (event) => {
        this.setState({ searchText: event.target.value })
    };

    onFormSubmit = event => {
        event.preventDefault()
        //TODO: trigger the callback
        console.log(this.state.searchText)
    };

    render() {
        return(
            <div>
                <form onSubmit={this.onFormSubmit} className="c-search_bar">
                    <div className="form-group ml-5 mr-5">
                        <label>Search </label>
                        <input
                            type='text'
                            name='search'
                            className='col-12 w-100'
                            value={this.state.searchText}
                            onChange={this.searchTextChangeHandler}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar
