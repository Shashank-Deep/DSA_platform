import React from 'react';
import Compiler from "../Compiler/Compiler.js";
const Question27 =() => {

    return (
        <>
        <div className="container-fluid">
        <h2>Partition Equal Subset Sum</h2>
        <h3><b>Description</b></h3>
        <p>Given an array arr[] of size N, check if it can be partitioned into two parts such that the sum of elements in</p>
        <p>both parts is the same</p>
        <pre><strong>Input:</strong>
        N = 4 <br/>
        arr[] = 1 5 11 5</pre>
        <pre><strong>Output :</strong> YES <br/>
        <strong>Explanation :</strong> <br/>
        The two parts are 1, 5, 5 and 11</pre>
        </div>

        <div>
            <Compiler/>
        </div>

        </>
)
}

export default Question27;