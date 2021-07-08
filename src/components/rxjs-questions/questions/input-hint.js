import React, {useCallback, useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const InputHint = () => {
    const [input, setInput] = useState('');

    const handleOnChange = (event) => {
        setInput(event.target.value);
    }

    const memoizedFunction = useCallback(args => {
        console.log(args)
    }, []);

    const test = () => {
        memoizedFunction('Hello');
    }

    return (
        <div>
            <div>
                <Button variant='contained' onClick={test}>Focus Login Field</Button>
            </div>

            <div>
                <TextField variant='outlined' label='Login' autoComplete='off'
                           name='login' value={input} onChange={handleOnChange}/>
            </div>

            <div className={'result'}>{input}</div>
        </div>
    )
}

export default InputHint;
