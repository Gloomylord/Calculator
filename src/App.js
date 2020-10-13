import React, {useState, useCallback, useMemo} from "react";
import {Form} from './components/Form';
import "./app.scss";
import {Button} from "./components/Button";

function App() {
    const [value, setValue] = useState('');

    const onClick = useCallback((event) => {
        setValue(value + event.target.textContent);
    }, [value]);

    const onChange = useCallback((e) => {
        if (e.target.value.slice(-1)) console.log(e.target.value.slice(-1))
    }, [value])

    const solve = useCallback(() => {
        const res = eval(value);
        if ((value ^ 0) == value) {
            setValue(res);
        } else {
            setValue(' ' + Math.ceil(res * 100000) / 100000);
        }
    }, [value]);

    const clear = useMemo(()=> {
        let timer;

        function onMouseDown(){
            timer = setTimeout(()=>{setValue('')},500);
        }

        function onMouseUp() {
            if(timer) {
                clearTimeout(timer);
            }
            if(('' + value).length > 0) {
                setValue(('' + value).slice(0,('' + value).length - 1))
            }
        }
        return {
            onMouseDown,
            onMouseUp
        }
    },[value]);

    return <div className='app'>
        <div className='calculator'>
            <Form value={value} onChange={onChange}/>
            <Button className='clearButton' onMouseDown={clear.onMouseDown} onMouseUp={clear.onMouseUp}>CE</Button>
            <div className='containerNumbers'>
                {Array.from({length: 9}).map((_, i) => <Button onClick={onClick}
                                                               key={i}>{i + 1}</Button>)}
                <Button onClick={onClick}>0</Button>
                <Button onClick={onClick}>.</Button>
                <Button onClick={solve}>=</Button>

            </div>
            <div className='operation'>
                <Button onClick={onClick}>+</Button>
                <Button onClick={onClick}>-</Button>
                <Button onClick={onClick}>/</Button>
                <Button onClick={onClick}>*</Button>
            </div>
        </div>
    </div>;
}

export default App;
