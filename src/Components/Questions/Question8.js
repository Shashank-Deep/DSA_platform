import React from 'react';
import Compiler from "../Compiler/Compiler.js";

const Question8 =() => {

    return (
        <>
        <div className="container-fluid">
        <h2>Reverse String</h2>
        <h3><b>Description</b></h3>
        <p>Write a function that reverses a string. The input string is given as an array of characters </p>
       <p>You must do this by modifying the input array in-place with O(1) extra memory.</p>
        <pre><strong>Input:</strong>
        s = ["h","e","l","l","o"] <br/>
        </pre>
        <pre><strong>Output :</strong> ["o","l","l","e","h"] <br/>
        <strong>Explanation :</strong> <br/>
        Just reverse the string using call back function</pre>
        </div>
        <div>
            <Compiler />
        </div>

        </>
)
}

export default Question8;