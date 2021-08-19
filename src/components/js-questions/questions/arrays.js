import React, {useState} from 'react';
import Button from "@material-ui/core/Button";

const party = [
    {id: 1, name: 'Andrew', age: 29},
    {id: 2, name: 'Mary', age: 25},
    {id: 3, name: 'Alex', age: 11},
    {id: 4, name: 'Max', age: 31},
    {id: 5, name: 'Joe', age: 42},
    {id: 6, name: 'Julia', age: 12},
    {id: 7, name: 'George', age: 32},
];

const Array = () => {
    const [users, setUsers] = useState(party);

    const getAdults = () => {
        const array = [...party];
        setUsers(array);
    };
    const getMax = () => {
        const array = [...party];
        setUsers(array);
    };
    const sortedByAge = () => {
        const array = [...party];
        setUsers(array);
    };
    const getUsersWithQueueNumber = () => {
        const array = [...party];
        setUsers(array);
    }

    return (
        <div>
            <div>
                <Button variant='contained' onClick={getAdults}>Get Adults</Button>
                <Button variant='contained' onClick={getMax}>Get Max</Button>
                <Button variant='contained' onClick={sortedByAge}>Get Users</Button>
                <Button variant='contained' onClick={getUsersWithQueueNumber}>Get Users With Queue Number</Button>
            </div>
            <div className={'result'}>
                {users.map(value => <div key={value.id}>{value.name}, {value.age}</div>)}
            </div>
        </div>
    )
}

export default Array;
