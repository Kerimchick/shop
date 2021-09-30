import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./views/Home";
import Cart from "./views/Cart";
import Header from "./components/Header";

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <div className="container">
                <Route exact path="/"><Home /></Route>
                <Route path="/cart"><Cart /></Route>
            </div>
        </BrowserRouter>
    );
};

export default App;