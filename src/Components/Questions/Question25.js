import React from 'react';
import Compiler from "../Compiler/Compiler.js";
const Question25 =() => {

    return (
        <>
        <div className="container-fluid">
        <h2>Geek and his Binary Strings</h2>
        <h3><b>Description</b></h3>
        <p>Given an integer N, the task is to find the number of binary strings of size 2*N in which each prefix of the</p>
        <p>string has more than or an equal number of 1's than 0's.</p>
        <pre><strong>Input:</strong>
        N = 2 <br/>
        </pre>
        <pre><strong>Output :</strong> 2 <br/>
        <strong>Explanation :</strong> <br/>
        1100, 1010 are two <br/>
        such strings of size 4</pre>
        </div>

        <div>
            <Compiler/>
        </div>

        </>
)
}

export default Question25;