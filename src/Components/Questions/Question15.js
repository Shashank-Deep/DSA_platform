import React from "react";
import Compiler from "../Compiler/Compiler.js";
const Question15 = () => {
    return (
        <>
        
        <div className="container-fluid">
        <h2>Count Squares</h2>
        <h3><b>Description</b></h3>
        <p>Consider a sample space S consisting of all perfect squares starting from 1, 4, 9 and so on. You are given a</p>
        <p>number N, you have to output the number of integers less than N in the sample space S.</p>
        <pre><strong>Input:</strong>
        N = 9 <br/>
        </pre>
        <pre><strong>Output :</strong> 2 <br/>
        <strong>Explanation :</strong> <br/>
        1 and 4 are the only Perfect Squares
        less than 9. So, the Output is 2.</pre>
        </div>

        <div>
            <Compiler/>
        </div>

        </>

        
    )
}

export default Question15;