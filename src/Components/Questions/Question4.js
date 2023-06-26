import React from 'react';
import Compiler from "../Compiler/Compiler.js";
const Question4 =() => {

    return (
        <>
        <div className="container-fluid">
        <h2>Spiral traversal on a Matrix</h2>
        <h3><b>Description</b></h3>
        <p>Given a matrix of size r*c. Traverse the matrix in spiral form. </p>
       
        <pre><strong>Input:</strong>
        r = 4, c = 4 <br/>
        matrix[][] = 
           <br/>1, 2, 3, 4,<br/>
           5, 6, 7, 8,<br/>
           9, 10, 11, 12,<br/>
           13, 14, 15,16</pre>
        <pre><strong>Output : <br/></strong> 1 2 3 4 8 12 16 15 14 13 9 5 6 7 11 10<br/>
        <strong>Explanation :</strong> <br/>
        Traverse the matrix form the the edge side and reached the center of the array</pre>
        </div>

        <div>
            <Compiler/>
        </div>

        </>
)
}

export default Question4;