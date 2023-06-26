import React from 'react';
import Compiler from "../Compiler/Compiler.js";
const Question22 =() => {

    return (
        <>
        <div className="container-fluid">
        <h2>Height of Binary Tree</h2>
        <h3><b>Description</b></h3>
        <p>Given a binary tree, find its height. </p>
        
        <pre><strong>Input:</strong>
        Root Node = 1<br/>
        Leaf Node = 3, 2;
        </pre>
        <pre><strong>Output :</strong> 2 <br/>
        <strong>Explanation :</strong> <br/>
        Find the level of Binary Tree</pre>
        </div>

        <div>
            <Compiler/>
        </div>

        </>
)
}

export default Question22;