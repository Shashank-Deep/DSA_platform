import React from 'react';
import Compiler from "../Compiler/Compiler.js";

const Question1 =() => {

    return (
        <>
        <div className="container-fluid">
        <h2>Find the smallest element fromm the array</h2>
        <h3><b>Description</b></h3>
        <p>Given an array arr[] and the task is to find the smallest element in the given array. </p>
       <p>It is given that all array elements are distinct</p>
        <pre><strong>Input:</strong>
        N = 6
        arr[] = 7 10 4 3 20 15</pre>
        <pre><strong>Output :</strong> 3
        <strong>Explanation :</strong>
        3 is the  smallest element in the given 
        array.</pre>
        </div>
 
        <div>
            <Compiler/>
        </div>
        </>
)
}

export default Question1;