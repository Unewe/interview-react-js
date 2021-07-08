import React from "react";
import Button from "@material-ui/core/Button";

function createCounter() {
    let counter = 0;

    return function () {
        counter += 1;
        console.log(counter);
    }
}

let counter = () => {};

const initCounter = () => {
    counter = createCounter();
}

const Closures = () => {

    return (
        <div>
            <Button variant="contained" onClick={() => counter()}>Counter</Button>
            <Button variant="contained" onClick={initCounter}>Init Counter</Button>
        </div>
    )
}

export default Closures;
