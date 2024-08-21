import React, {useState} from "react";

function Counter(){

    const [count, setCount] = useState(0)

    return (
        <div>
            <p>You have clicked the counter {count} times</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );

}

export default Counter;