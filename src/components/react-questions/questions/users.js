import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import UserService from '../../../services/user-service';
import Button from "@material-ui/core/Button";

const Users = () => {
    const [input, setInput] = useState('');
    const [users, setUsers] = useState([]);

    const getUsers = () => {
        UserService.getUsers().then(value => setUsers(value));
    }

    return (
        <div>
            <div>
                <Button variant='contained' onClick={getUsers}>Get Users</Button>
            </div>
            <div>
                <TextField variant='outlined' label='TextField' autoComplete='off' value={input}
                           onChange={(event) => setInput(event.target.value)}/>
            </div>
            <div className={'result'}>
                {users.map(value => <div key={value.id}>{value.name}</div>)}
            </div>
        </div>
    )
}

export default Users;
