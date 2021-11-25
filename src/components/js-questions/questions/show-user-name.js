import Button from '@material-ui/core/Button';
import React from 'react';

/**
 * TODO Вывести в консоль Maxim по нажатии на кнопку Show Name
 */
class User {
    constructor({name}) {
        this.name = name;
    }

    showName() {
        console.log(this?.name);
    }
}

const user = new User({name: 'Maxim'});

const ShowNameButton = () => {

    return (
        <div>
            <Button variant='contained' onClick={user.showName}>Show Name</Button>
        </div>
    )
}

export default ShowNameButton;
