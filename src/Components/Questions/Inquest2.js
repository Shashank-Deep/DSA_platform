import React from "react";
import Compiler from "../Compiler/Compiler.js";

const Inquest2 =() => {
    return (
        <>
        <div className='container-fluid'>
        <h2>Multiply the two number</h2>
        <h3><b>Description</b></h3>
        <p>Given an the two number and you have to find the Multiplication of two number</p>
        <pre><strong>Input:</strong>
        N1 = 3<br />
        N2 = 2</pre>
        <pre><strong>Output :</strong> 1 <br/>
        <strong>Explanation :</strong>
        The remainder of two number is 3 * 2</pre>
        </div>

        <div>
        <Compiler />
        </div>

        </>
    )
}

export default Inquest2;