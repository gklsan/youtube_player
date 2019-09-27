import React from 'react';
import { render } from 'react-dom';
import SearchBar from "./components/SearchBar";
import VideoDetail from "./components/VideoDetail";
import VideoList from "./components/VideoList";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
    return(
        <div>
            <SearchBar />
            <div>
                <div>
                    <VideoDetail/>
                </div>
                <div>
                    <VideoList/>
                </div>
            </div>
        </div>
    )
}

render(<App />, document.getElementById('root'));
