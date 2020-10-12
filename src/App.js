import React from "react";
import {Form} from './components/Form';
import "./app.scss";
import {Button} from "./components/Button";

function App() {
    return <div className='app'>
        <div className='calculator'>
            <Form />
            <div className='containerNumbers'>
                {Array.from({length: 9}).map((_,i)=><Button key={i}>{i + 1}</Button>)}
            </div>

        </div>
    </div>;
}

export default App;
