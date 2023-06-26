import React from "react";
import Compiler from "../Compiler/Compiler.js";
const Inquest1 =() => {
    return (
        <>
        <div className='container-fluid'>
        <h2>Find the difference</h2>
        <h3><b>Description</b></h3>
        <p>Find the difference of two number such that if number is <strong>a > b</strong></p>
        <p>the substract the number till it get reaches to the <strong> >=1 </strong></p>
        <p>Else print b.</p>
        <pre><strong>Input:</strong><br/>
        N1 = 5<br />
        N2 = 2</pre>
        <pre><strong>Output :</strong> 1 <br/>
        <strong>Explanation :</strong>
        The difference of  two number is 5-2, 3-2=1<br/></pre>
        </div>

        <div>
        <Compiler />
        </div>

        </>
    )
}

export default Inquest1;