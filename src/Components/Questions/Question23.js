import React from 'react';
import Compiler from "../Compiler/Compiler.js";
const Question23 =() => {

    return (
        <>
        <div className="container-fluid">
        <h2>Invert Binary Tree</h2>
        <h3><b>Description</b></h3>
        <p>Given the root of a binary tree, invert the tree, and return its root.</p>
        
        <pre><strong>Input:</strong>
        root = [4,2,7,1,3,6,9]<br/>
        
        </pre>
        <pre><strong>Output :</strong> [4,7,2,9,6,3,1] <br/>
        <strong>Explanation :</strong> <br/>
        Mirror the binary tree from node</pre>
        </div>
        <div>
            <Compiler/>
        </div>

        </>
)
}

export default Question23;