import React from "react";
import Compiler from "../Compiler/Compiler.js";
const Question13 = () => {
    return (
        <>
             
        <div className="container-fluid">
        <h2>Value equal to index value</h2>
        <h3><b>Description</b></h3>
        <p>Given an array Arr of N positive integers. Your task is to find the elements whose value is</p>
        <p>It is given that all array elements are distinct</p>
        <pre><strong>Input:</strong>equal to that of its index value ( Consider 1-based indexing ).
        N = 5 <br/>
        arr[] = 15 2 45 12 7</pre>
        <pre><strong>Output :</strong> 2 <br/>
        <strong>Explanation :</strong> <br/>
        Only Arr[2] = 2 exists here.</pre>
        </div>

        <div >
            <Compiler/>
        </div>

       

        </>
    )
}

export default Question13;