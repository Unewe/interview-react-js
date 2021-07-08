import React, {useCallback, useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const FocusInput = () => {
    const [inputValues, setInputValues] = useState({login: '', password: ''});

    const handleOnChange = (event) => {
        const {name, value} = event.target;
        setInputValues({...inputValues, [name]: value});
    }

    const focusLogin = useCallback(() => {
        let element;
        element?.focus();
    }, []);

    return (
        <div>
            <div>
                <Button variant='contained' onClick={focusLogin}>Focus Login Field</Button>
            </div>

            <div>
                <TextField variant='outlined' label='Login' autoComplete='off'
                           name='login' value={inputValues.login} onChange={handleOnChange}/>
                <TextField variant='outlined' label='Password' autoComplete='off'
                           name='password' value={inputValues.password} onChange={handleOnChange}/>
            </div>

            <div className={'result'}>{JSON.stringify(inputValues)}</div>
        </div>
    )
}

export default FocusInput;
