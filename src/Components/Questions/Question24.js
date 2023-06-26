import React from 'react';
import Compiler from "../Compiler/Compiler.js";
const Question24 =() => {

    return (
        <>
        <div className="container-fluid">
        <h2>Coin Change</h2>
        <h3><b>Description</b></h3>
        <p>Given an integer array coins[ ] of size N representing different denominations of currency and an integer</p>
       <p>sum, find the number of ways you can make sum by using different combinations from coins[ ].</p>
        <p>Note: Assume that you have an infinite supply of each type of coin. </p>
        <pre><strong>Input:</strong>
        sum = 4 , <br/>
        N = 3 <br/>
        coins[] = 1,2,3 <br/>
        </pre>
        <pre><strong>Output :</strong> 4 <br/>
        <strong>Explanation :</strong> <br/>
        Four Possible ways are:
        <br/>
        1111 , 112 , 22, 13 
        </pre>
        </div>

        <div>
            <Compiler/>
        </div>

        </>
)
}

export default Question24;