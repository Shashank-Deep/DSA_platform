import React from "react";
import Compiler from "../Compiler/Compiler.js";

//Linked list ka hai
const Question15 = () => {
    return (
        <>
        
        <div className="container-fluid">
        <h2>Reverse a Linked List</h2>
        <h3><b>Description</b></h3>
        <p>Given an array arr[] and the task is to find the smallest element in the given unsorted array. </p>
       <p>It is given that all array elements are distinct</p>
        <pre><strong>Input:</strong>
        Head of following linked list<br/>
        1->2->3->4->NULL </pre>
        <pre><strong>Output :</strong> 4-3-2-1-NULL<br/>
        <strong>Explanation :</strong> <br/>
        Reverse the linked list</pre>
        </div>

        <div>
            <Compiler/>
        </div>

        </>

        
    )
}

export default Question15;