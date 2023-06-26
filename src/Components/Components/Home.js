import React from 'react';
import "./Home.css";
// import ima3 from '../images/greybg.jpeg'
// import ima1 from "../images/DSALOGO.jpg"
import ima2 from "../images/DSapic.webp"


// const mystyle = {
    
//     backgroundColor: "#FFE7CC",
  
//   };



const Home =() => {

    return (
        <>
    
    {/* <div style={mystyle}> */}
        <div className='container' id='mains'>
        <div className="container text-center" id="home" >
          <div className="row my-5 py-5 border-1">
            <div className="col w-100 h-100" id="Title">
              <h1 className="text-center text-primary my-4 font-monospace mainhead">Welcome to <br /> Our platform</h1>
              <p className="text-dark "> </p><h5> Want to improve your programming skills? </h5>
              <h6>Learn Data Structure and Algorithms by practicing all patterns of questions <br /> with the help of video lectures and clean articles.</h6> <p />
              {/* <button type="button" className="btn btn-info w-25 my-2" id="btnn">Login</button> */}
            </div>
            <div className="col" id="Title2">
              <img src={ima2} className="img-fluid border-2 burder h-100 w-80" alt="Main-Logo" />
            </div>
          </div> 
        </div>

  
        <div id='whitebox'>
        <div className="container1" id="container1" style={{backgroundColor:"white"}}>
        <br/>
        <br/>
          <h1> What is Data structures and algorithms</h1> <br /> 
          <p>
            -&gt; <b> Data Structures </b>: Data Structure is a way of collecting and organising data in such a way that we can perform <br />
            operations on these data in an effective way.
            Data Structures is about rendering data elements <br /> in terms of some relationship, for better organization and storage.
          </p>
          <br />
          <p>
            -&gt; <b> Algorithms </b>: An algorithm is a finite set of instructions or logic, written in order, to accomplish a certain <br />
            predefined task.
            Algorithm is not the complete code or program, it is just the core logic(solution) of a problem,
            <br /> which can be expressed either as an informal high level description as pseudocode or using a flowchart.
          </p>
        </div>
      </div>
      </div>
      <section id="container2">
        <div className="container">
          <h1>Why learn Data Structures and Algorithms?</h1>
          <p>
            {/* Array, Linked List, Stack, Queues, Searching, Sorting, Tree, Graph…  <br> */}
            {/* Do you have questions that why should I study all the above-complicated stuff if it has absolutely no use in real life??
       Why do companies ask questions related to data structures and algorithms if it’s not useful in a daily job??  */}
            <br /> 
            <b>-&gt; </b>Data structures are used to represent the internal states of a computer system and the algorithms used to manipulate these states. <br />
            <b>-&gt; </b>Algorithms are the procedures that a computer system uses to manipulate its data, whether for computational purposes or for input or output by another process. <br />
            <b>-&gt; </b>Data structures are not limited to just being used solely for the efficient storage of data within a computer system; they can also be used as efficient functional tools for performing computations. <br />
            <b>-&gt; </b>Because they help handle efficiency in computations, they are crucial in many fields of computer science, such as artificial intelligence and machine learning.
          </p>
        </div>
      </section>

       <section id='contact-us'>


       </section>

      <footer>
        <div className='center'>
         Copyright © techgeek.com. All rights reserved!
        </div>
      </footer>
        
        </>
    )
}

export default Home;