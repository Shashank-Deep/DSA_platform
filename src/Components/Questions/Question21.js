import React from 'react';
import Compiler from "../Compiler/Compiler.js";
const Question21 =() => {

    return (
        <>
        <div className="container-fluid">
        <h2>Reverse Level Order Traversal</h2>
        <h3><b>Description</b></h3>
        <p>Given a binary tree of size N, find its reverse level order traversal. ie- the traversal must begin from the last level. </p>
       <p>It is given that all array elements are distinct</p>
        <pre><strong>Input:</strong>
        Root Node = 1<br/>
        Leaf Node = 3, 2;
        </pre>
        <pre><strong>Output :</strong> 3 2 1 <br/>
        <strong>Explanation :</strong> <br/>
        Traversing level 1 : 3 2<br/> 
        Traversing level 0 : 1</pre>
        </div>

        <div>
            <Compiler />
        </div>

        </>
)
}

export default Question21;