import React from "react";
import Compiler from "../Compiler/Compiler.js";
const Question15 = () => {
    return (
        <>
        
        <div className="container-fluid">
        <h2>Remove loop in Linked List</h2>
        <h3><b>Description</b></h3>
        <p>Given a linked list of N nodes such that it may contain a loop.</p><br/>
        <p>A loop here means that the last node of the link list is connected to the node at position X(1-based index).</p>
        <p>If the link list does not have any loop, X=0.</p>
        <p>Remove the loop from the linked list, if it is present, i.e. unlink the last node which is forming the loop.</p>
        <pre><strong>Input:</strong><br/>
        N = 3 <br/>
        value[] = 1,3,4 <br/>
        X = 2<br/>
        </pre>
        <pre><strong>Output :</strong> 1 <br/>
        <strong>Explanation :</strong> <br/>
        A loop is present. If you remove it 
        successfully, the answer will be 1. </pre>
        </div>
        <div>
            <Compiler/>
        </div>
        </>

        
    )
}

export default Question15;