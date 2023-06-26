import React from 'react';
import Compiler from "../Compiler/Compiler.js";

const Question9 =() => {

    return (
        <>
        <div className="container-fluid">
        <h2>Palindrome String</h2>
        <h3><b>Description</b></h3>
        <p> Given a string S, check if it is palindrome or not.</p>
        
        <pre><strong>Input:</strong>
        S = "abba" <br/>
        </pre>
        <pre><strong>Output :</strong> 1 <br/>
        <strong>Explanation :</strong> <br/>
        S is a palindrome</pre>
        </div>
        <div>
            <Compiler />
        </div>

        </>
)
}

export default Question9;