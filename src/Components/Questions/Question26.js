import React from 'react';
import Compiler from "../Compiler/Compiler.js";
const Question26 =() => {

    return (
        <>
        <div className="container-fluid">
        <h2>nCr</h2>
        <h3><b>Description</b></h3>
        <p>Given two integers n and r, find nCr. Since the answer may be very large, calculate the answer</p>
        <p>modulo 10^9+7</p>
        <pre><strong>Input:</strong>
        n = 3, r = 2 <br/>
        </pre>
        <pre><strong>Output :</strong> 3 <br/>
        <strong>Explanation :</strong> <br/>
        3C2 = 3.</pre>
        </div>

        <div>
            <Compiler/>
        </div>

        </>
)
}

export default Question26;