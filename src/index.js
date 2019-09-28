import React from 'react'
import { render } from 'react-dom'
import SearchBar from "./components/SearchBar"
import VideoDetail from "./components/VideoDetail"
import VideoList from "./components/VideoList"
import 'bootstrap/dist/css/bootstrap.css'
import './global.css'
import youtube, { PRARMS } from "./apis/youtube";

class App extends React.Component {

    state = {
        searchResults: [],
        selectedVideo: null
    };

    onSearchSubmit = async searchText => {
        const response = await youtube.get('/search', {
            params: {
                ...PRARMS,
                q: searchText
            }
        });
        this.setState({
            searchResults: response.data.items,
            selectedVideo: response.data.items[0]
        });

    };

    componentDidMount() {
        if(this.state.searchResults.length === 0)
            this.onSearchSubmit('gklsan')
    }

    onVideoSelect = video => {
        this.setState({selectedVideo: video})
    };

    render() {
        return (
            <div className='container'>
                <nav>
                    <h1 className='text-center'> Youtube Player </h1>
                </nav>
                <hr/>
                <div>
                    <div className="mb-4">
                        <SearchBar onSearchSubmit={this.onSearchSubmit} />
                    </div>
                    <div className='d-flex w-100 align-self-center'>
                        <div className="shadow-lg p-3 mb-5 bg-white rounded w-75 mr-3">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="shadow-lg p-3 mb-5 bg-white rounded w-50">
                            <VideoList videoList={this.state.searchResults} onVideoSelect={this.onVideoSelect}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

render(<App />, document.getElementById('root'));
