import React from 'react';
import Compiler from "../Compiler/Compiler.js";
const Question2 =() => {

    return (
        <>
        <div className="container-fluid">
        <h2>Find the k smallest element from the unsorted array</h2>
        <h3><b>Description</b></h3>
        <p>Given an array arr[] and the task is to find the smallest element in the given unsorted array. </p>
       <p>It is given that all array elements are distinct</p>
        <pre><strong>Input:</strong>
        N = 6 <br/>
        arr[] = 7 10 4 3 20 15</pre>
        <pre><strong>Output :</strong> 7 <br/>
        <strong>Explanation :</strong> <br/>
        7 is the  smallest element in the given 
        array. At index 3</pre>
        </div>
        <div>
            <Compiler/>
        </div>

        </>
)
}

export default Question2;