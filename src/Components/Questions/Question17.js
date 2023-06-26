import React from "react";
import Compiler from "../Compiler/Compiler.js";
const Question15 = () => {
    return (
        <>
        
        <div className="container-fluid">
        <h2>Reverse a Linked List in groups of given size.</h2>
        <h3><b>Description</b></h3>
        <p>Given a linked list of size N. The task is to reverse every k nodes (where k is an input to the function) in the</p>
        <p>linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should be considered</p>
        <p>as a group and must be reversed (See Example 2 for clarification).</p>
        <pre><strong>Input:</strong>
        1->2->2->4->5->6->7->8     
        <br/>
        K = 4</pre>
        <pre><strong>Output :</strong> 4 2 2 1 8 7 6 5  <br/>
        <strong>Explanation :</strong> <br/>
        <p>The first 4 elements 1,2,2,4 are reversed first </p>
        <p>and then the next 4 elements 5,6,7,8. Hence, the</p>
        <p>resultant linked list is 4->2->2->1->8->7->6->5.</p></pre>
        </div>

        <div>
            <Compiler/>
        </div>

        </>

        
    )
}

export default Question15;