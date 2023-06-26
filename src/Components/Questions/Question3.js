import React from 'react';
import Compiler from "../Compiler/Compiler.js";

const Question3 =() => {

    return (
        <>
        <div className="container-fluid">
        <h2>Find the k smallest element from the unsorted array</h2>
        <h3><b>Description</b></h3>
        <p>Given an array arr[] that contain only 0's and 1's in random order </p>
        
        <pre><strong>Input:</strong>
        N = 6 <br/>
        arr[] = 1 0 0 1 0 1</pre>
        <pre><strong>Output :</strong> 0 0 0 1 1 <br/>
        <strong>Explanation :</strong><br/>
        YOu have to sort the array </pre>
        </div>
        <div>
            <Compiler/>
        </div>

        </>
)
}

export default Question3;