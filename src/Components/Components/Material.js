import React from "react";
import "./Material.css";
import ima3 from "../images/dsone.png"
import ima4 from "../images/dstwo - Copy.png"
import ima5 from "../images/dsthree.png"
import ima6 from "../images/dsfour.png"

const Material =() => {

    return (
        <>
        <div id="containerbg">
        <div className="cover"> 
        <div className="box">
          <img className="imj" src={ima3} alt="" />
          <h2>DATA STRUCTURE </h2>
          <p >
            This part consists : <br />
            =&gt; Stack <br />
            =&gt; Queue <br />
            =&gt; Deque <br />
            =&gt; Circular and Priority queue <br />
            <button type="button" className="btn btn-primary"> <a href="/explore1" style={{color:"white"}}>EXPLORE </a> </button>   
          </p>
        </div>
        <div className="box">
          <img className="imj" src={ima4} alt="" />
          <h2>STRUCTURE DS</h2>
          <p >
            This part consists : <br />
            =&gt; Linked List <br />
            =&gt; Hash Table <br />
            =&gt; Heap Data Structure  <br />
            =&gt; Fibbonaci Heap <br />
            <button type="button" className="btn btn-primary"> <a href="/explore2" style={{color:"white"}}> EXPLORE </a> </button>  
          </p>
        </div>
        <div className="box">
          <img className="imj" src={ima5} alt="" />
          <h2>TREE BASED DSA</h2>
          <p >
            This part consists : <br />
            =&gt; Tree Traversal <br />
            =&gt; Binary tree <br />
            =&gt; Binary Search Tree <br />
            =&gt; AVL Tree <br />
            <button type="button" className="btn btn-primary">  <a href="/explore3" style={{color:"white"}}>EXPLORE </a> </button> 
          </p>
        </div>
        <div className="box">
          <img className="imj" src={ima6} alt="" />
          <h2>GRAPH </h2>
          <p>
            This part consists : <br />
            =&gt; DFS Algorithm <br />
            =&gt; Bellman Ford ALgorithm <br />
            =&gt; Breadth FIrst SEArch Algorithm <br />
            =&gt; Adjaceny List <br />
            <button type="button" className="btn btn-primary"> <a href="/explore4" style={{color:"white"}}> EXPLORE </a> </button> 
          </p>
        </div>
      </div>
      </div>
        </>

    )
}

export default Material;