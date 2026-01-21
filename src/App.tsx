import React, {useState} from 'react';
import './App.scss';
import Header from "./components/header/Header";
import PostsList from "./pages/PostsList";

function App() {
    const [searchText, setSearchText] = useState("");

    return (
        <div className="App">
            <Header
                searchText={searchText}
                setSearchText={setSearchText}
            />
            <PostsList
                searchText={searchText}
            />
        </div>
    );
}

export default App;
