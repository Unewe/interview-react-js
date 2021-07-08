import React from 'react';
import Button from '@material-ui/core/Button';

const AsyncAwait = () => {
    const delay = (n) => {};

    const logWithDelay = async () => {
        await delay(2000);
        console.log('Done');
    }

    const race = () => {
        console.log('Start');
        setTimeout(() => console.log('Timeout'));
        Promise.resolve().then(() => console.log('Promise'));
        console.log('End');
    }

    return (
        <div>
            <Button variant='contained' onClick={logWithDelay}>Create Delay</Button>
            <Button variant='contained' onClick={race}>Race</Button>
        </div>
    )
}

export default AsyncAwait;
