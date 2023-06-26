import React from 'react';
import Compiler from "../Compiler/Compiler.js";
const Question5 =() => {

    return (
        <>
        <div className="container-fluid">
        <h2>Search an element in a matrix</h2>
        <h3><b>Description</b></h3>
        <p> Write an efficient Algorithm that searches for a value target in an m *n </p>
       <p>integer matrix. This matrix has the following properties:</p>
       <p>-Integer in each row are sorted for left to right.</p>
       <p>The first integer of each row is greater than the last integer of the previous row.</p>
        <pre><strong>Input:</strong>
        matrix = <br/>[[1,3,5,7],<br/>[10,11,16,20],<br/>[23,30,34,60]], <br/>target = 3<br/>
        </pre>
        <pre><strong>Output :</strong> true <br/>
        <strong>Explanation :</strong> <br/>
         Sort the matrix and apply the binary search</pre>
        </div>

        <div>
            <Compiler/>
        </div>

        </>
)
}

export default Question5;