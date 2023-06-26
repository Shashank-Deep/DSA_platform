import React from "react";
import Compiler from "../Compiler/Compiler.js";
const Question14 = () => {
    return (
        <>
        <div className="container-fluid">
        <h2>Search an element in a sorted and rotated Array</h2>
        <h3><b>Description</b></h3>
        <p>Given a sorted and rotated array arr[] of size N and a key, the task is to find the key in the array. </p>
       <p>It is given that all array elements are distinct</p>
        <pre><strong>Input:</strong>
    
        arr[] = 5, 6, 7, 8, 9, 10, 1, 2, 3, key = 3</pre>
        <pre><strong>Output :</strong> 7 <br/>
        <strong>Explanation :</strong> <br/>
        Found at index 8</pre>
        </div>

        <div>
            <Compiler/>
        </div>

        </>
    )
}

export default Question14;