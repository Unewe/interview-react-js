import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';

/**
 * Сделасть так, чтобы при вводе во второй input Child не перерисовывался.
 */
const Optimization = () => {
    const [inputValues, setInputValues] = useState({item: '', description: ''});

    const handleOnChange = (event) => {
        const {name, value} = event.target;
        setInputValues({...inputValues, [name]: value});
    }

    // const callback = useCallback(() => {
    //     return 'Item is: ';
    // }, []);

    const callback = () => {
        return 'Item is: ';
    }

    return (
        <div>
            <TextField variant='outlined' label='Item' autoComplete='off'
                       name='item' value={inputValues.item} onChange={handleOnChange}/>
            <TextField variant='outlined' label='Description' autoComplete='off'
                       name='description' value={inputValues.description} onChange={handleOnChange}/>
            <Child callback={callback} item={inputValues.item}/>
        </div>
    )
}

// const Child = React.memo(({callback, item}) => {
//     console.log('UPDATE');
//     return <div className={'result'}>{callback()}{item}</div>;
// });

const Child = ({callback, item}) => {
    console.log('UPDATE');
    return <div className={'result'}>{callback()}{item}</div>;
};

export default Optimization;
