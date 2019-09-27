import React from 'react'
import { render } from 'react-dom'
import SearchBar from "./components/SearchBar"
import VideoDetail from "./components/VideoDetail"
import VideoList from "./components/VideoList"
import 'bootstrap/dist/css/bootstrap.css'
import './global.css'

function App() {
    return(
        <div className='container'>
            <nav>
                <h1 className='text-center'> Youtube Player </h1>
            </nav>
            <hr />
            <div>
                <div className="mb-4">
                    <SearchBar />
                </div>
                <div className='d-flex w-100 align-self-center'>
                    <div className="shadow-lg p-3 mb-5 bg-white rounded w-75 mr-3">
                        <VideoDetail/>
                    </div>
                    <div className="shadow-lg p-3 mb-5 bg-white rounded w-50">
                        <VideoList/>
                    </div>
                </div>
            </div>
        </div>
    )
}

render(<App />, document.getElementById('root'));
