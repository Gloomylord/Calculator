import React, {useState, useCallback, useMemo} from "react";
import {Form} from './components/Form';
import "./app.scss";
import {Button} from "./components/Button";

const parse = require('./functions/parse');

function App() {
    const [value, setValue] = useState('0');
    const [formState, setFormState] = useState('normal');

    const onClick = useCallback((event) => {
        const letter = event.target.textContent || event.target.innerText;
        if(value.match(/[-+/*]$/) && (letter == '+' || letter == '-' || letter == '*' || letter == '/')){
            setValue(value.slice(0,value.length - 1) + letter)
        } else {
            setValue(value + event.target.textContent);
        }
    }, [value]);

    const onChange = useCallback((e) => {
        if (e.target.value.slice(-1)) console.log(e.target.value.slice(-1))
    }, [value])

    const solve = useCallback(() => {
        const res = parse(value);
        console.log(res);
        if(res == 'Error'){
            setFormState('error');
        }
        else if ((+value ^ 0) == +value) {
            setFormState('normal');
            setValue(res);
        } else {
            setFormState('normal');
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
            <Form value={value} className={formState} onChange={onChange}/>
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
