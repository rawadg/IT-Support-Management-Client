import React from 'react';
import './App.css';
import TreeGraph from "./components/tree-graph/tree-graph";
import {store} from "./store/store";
import {Provider} from "react-redux";

function App() {
    return (
        <Provider store={store}>
            <div className="custom-container">
                <TreeGraph/>
            </div>
        </Provider>
    );
}

export default App;
