import React, {useState} from "react";

const ClassWork = () => {

    const [result, setResult] = useState("круг")

    const dec = () => {
        setResult( "квадрат")
    }

    const inc = () => {
        setResult(  "круг")
    }

    return (
        <div>
            <div>
                <button onClick={dec}>Circle</button>
                <button onClick={inc}>Square</button>
            </div>
            <p>{result}</p>
        </div>
    )
}

export default ClassWork