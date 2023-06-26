import React from 'react';
import Compiler from "../Compiler/Compiler.js";

const Question20 =() => {

    return (
        <>
        <div className="container-fluid">
        <h2>Level order traversal</h2>
        <h3><b>Description</b></h3>
        <p>Given a binary tree, find its level order traversal.</p>
        <p>Level order traversal of a tree is breadth-first traversal for the tree.</p>
        <pre><strong>Input:</strong>
        Root Node = 1<br/>
        Leaf Node = 3, 2;
        </pre>
        <pre><strong>Output :</strong> 1 2 3 <br/>
        <strong>Explanation :</strong> <br/>
        Traverse the tree from left to right</pre>
        </div>

        <div>
            <Compiler />
        </div>

        </>
)
}

export default Question20;