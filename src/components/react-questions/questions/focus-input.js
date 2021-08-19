import React, {useCallback, useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

/**
 * Сделать так, что бы по нажатию на кнопку фокус устанавливался на первый input.
 */
const FocusInput = () => {
    const [inputValues, setInputValues] = useState({login: '', password: ''});

    const handleOnChange = (event) => {
        const {name, value} = event.target;
        setInputValues({...inputValues, [name]: value});
    }

    // const ref = useRef();

    const focusLogin = useCallback(() => {
        // let element = ref.current;
        const element = undefined;
        element?.focus();
    }, []);

    return (
        <div>
            <div>
                <Button variant='contained' onClick={focusLogin}>Focus Login Field</Button>
            </div>

            <div>
                {/*<TextField inputRef={ref} variant='outlined' label='Login' autoComplete='off'*/}
                {/*           name='login' value={inputValues.login} onChange={handleOnChange}/>*/}
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
