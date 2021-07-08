import React from 'react';
import Button from '@material-ui/core/Button';

const array = ['Maxim', 'Ann', 'Bob', 'Maxim', 'Maxim', 'Bob', 'Bernadette'];

function getCountAggregation() {
    // TODO console.log => {Maxim: 3, Ann: 1, Bob: 2, Bernadette: 1}
    const aggregation = {};

    return aggregation;
}

const showAggregation = () => {
    console.log(getCountAggregation(array));
}

const Aggregation = () => {
    return (
        <div>
            <Button variant='contained' onClick={showAggregation}>Show Aggregation</Button>
        </div>
    )
}

export default Aggregation;
