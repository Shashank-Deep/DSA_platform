import React from "react";
import Compiler from "../Compiler/Compiler.js";
const Question15 = () => {
    return (
        <>
        
        <div className="container-fluid">
        <h2>Detect Loop in linked list</h2>
        <h3><b>Description</b></h3>
        <p>Given a linked list of N nodes. The task is to check if the linked list has a loop. Linked list can contain self loop.</p>
        
        <pre><strong>Input:</strong>
        N = 3 <br/>
        value[] = 1,3,4 <br/>
        x(position at which tail is connected) = 2</pre>
        <pre><strong>Output :</strong> True<br/>
        <strong>Explanation :</strong> <br/>
        <p>In above test case N = 3.</p>
        <p>The linked list with nodes N = 3 is</p>
        <p>given. Then value of x=2 is given which</p>
        <p>means last node is connected with xth</p>
        <p>node of linked list. Therefore, there</p>
        <p>exists a loop</p></pre>
        </div>

        <div>
            <Compiler/> 
        </div>

        </>

        
    )
}

export default Question15;