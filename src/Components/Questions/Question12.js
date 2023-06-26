import React from "react";
import Compiler from "../Compiler/Compiler.js";
const Question12 = () => {
    return (
        <>
        <div className="container-fluid">
        <h2>First and last occurrences of x</h2>
        <h3><b>Description</b></h3>
        <p>Given a sorted array arr containing n elements with possibly duplicate elements, </p>
       <p> the task is to find indexes of first and last occurrences of an element x in the given array.</p>
        <pre><strong>Input:</strong>
        n=9, x=5 <br/>
        arr[] = 1, 3, 5, 5, 5, 5, 67, 123, 125 </pre>
        <pre><strong>Output :</strong> 2 5 <br/>
        <strong>Explanation :</strong> <br/>
        First occurrence of 5 is at index 2 and last
        occurrence of 5 is at index 5.</pre>
        </div>

        <div>
            <Compiler/>
        </div>

        </>

    )
}

export default Question12;