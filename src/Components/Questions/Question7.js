import React from 'react';
import Compiler from "../Compiler/Compiler.js";

const Question7 =() => {

    return (
        <>
        <div className="container-fluid">
        <h2>Row with max 1's</h2>
        <h3><b>Description</b></h3>
        <p>Given a boolean 2D array of n x m dimensions where each row is sorted.</p>
        <p>Find the 0-based index of the first row that has the maximum number of 1's.</p>
        <pre><strong>Input:</strong>
        N = 4 , M = 4<br/>
         Arr[][] =0, 1, 1, 1,<br/>
           0, 0, 1, 1,<br/>
           1, 1, 1, 1,<br/>
           0, 0, 0, 0</pre>
        <pre><strong>Output :</strong> 2 <br/>
        <strong>Explanation :</strong> <br/>
        Row 2 contains 4 1's (0-basedindexing).</pre>
        </div>
        
        <div>
          <Compiler />
        </div>
        </>
)
}

export default Question7;