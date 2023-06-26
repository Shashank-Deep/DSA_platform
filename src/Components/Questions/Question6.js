import React from 'react';
import Compiler from "../Compiler/Compiler.js";

const Question6 =() => {

    return (
        <>
        <div className="container-fluid">
        <h2>Median in a row-wise sorted Matrix</h2>
        <h3><b>Description</b></h3>
        <p>Given a row wise sorted matrix of size R*C where R and C are always odd, find the median of the matrix. </p>
       
        <pre><strong>Input:</strong>
        R = 3, C = 3<br/>
       M = [[1, 3, 5], <br/>
       [2, 6, 9], <br/>
       [3, 6, 9]]</pre>
        <pre><strong>Output :</strong> 5 <br/>
        <strong>Explanation :</strong> <br/>
        Sorting matrix elements gives 
         us 1,2,3,3,5,6,6,9,9. Hence, 5 is median.</pre>
        </div>
        <div>
            <Compiler/>
        </div>

        </>
)
}

export default Question6;