import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';

const ShouldComponentUpdate = () => {
    const [inputValues, setInputValues] = useState({name: '', age: ''});

    const handleOnChange = (event) => {
        const {name, value} = event.target;
        setInputValues({...inputValues, [name]: value});
    }

    const callback = () => {
        return 'Hello';
    }

    return (
        <div>
            <div>
                <TextField variant='outlined' label='Name' autoComplete='off'
                           name='name' value={inputValues.name} onChange={handleOnChange}/>
                <TextField variant='outlined' label='Age' autoComplete='off'
                           name='age' value={inputValues.age} onChange={handleOnChange}/>
            </div>

            <Child callback={callback} name={inputValues.name}/>
        </div>
    )
}

const Child = React.memo(({callback, name}) => {
    console.log('UPDATE');
    return <div className={'result'}>{callback()} {name}</div>;
});

export default ShouldComponentUpdate;
