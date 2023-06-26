import React from "react";
import "./Explore3.css";
import ima7 from "../images/exp10.jpeg";
import ima8 from "../images/expl1.jpeg";
import ima9 from "../images/expl2.jpeg";
import ima10 from "../images/expl3.jpeg"






const Explore1 = () => {
    return (
        <>
            <div className="container my-5">
        <img className="pic" height={230} width={430} src={ima7} alt="" />
        <h2> <font color={800000}> → LINEAR DATA STRUCTURE:</font></h2><font color={800000}> </font>
        <br />
        <p>
          It is a type of data structure where the arrangement of the data follows a linear trend. The data elements are arranged linearly such that the element is directly linked to its previous and the next elements. As the elements are stored linearly, the structure supports single-level storage of data. And hence, traversal of the data is achieved through a single run only.
        </p>
        <h3> <font color={800000}>→ CHARACTERISTICS:</font></h3> 
        <p>
          1. It is a type of data structure where data is stored and managed in a linear sequence. 
          Data elements in the sequence are linked to one after the other.
          <br />
          2. Implementation of the linear structure of data in a computer’s memory is easy as the data is organized sequentially.
          <br />
          3. With the increase in the size of the data structure, the time complexity of the structure increases. </p>
        <div className="container" id="home">
          <div className="row">
            <h3 id="types"> <font color={800000}>→ TYPES:</font></h3> <br />
            <br />
            <div className="card col my-5 mx-4" style={{width: '28rem'}}>
              <img src={ima8} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">→ Stack:</h5>
                <p className="card-text"> Stack is a linear data structure that follows the LIFO (Last-In-First-Out) principle. Stack has one end, whereas the Queue has two ends (front and rear). It contains only one pointer top pointer pointing to the topmost element of the stack. Whenever an element is added in the stack, it is added on the top of the stack, and the element can be deleted only from the stack. In other words, a stack can be defined as a container in which insertion and deletion can be done from the one end known as the top of the stack.
                  <br />
                  <br />
                  →  Some key points related to stack:
                  <br />
                  1. It is called as stack because it behaves like a real-world stack, piles of books, etc. <br />
                  2. A Stack is an abstract data type with a pre-defined capacity, which means that it can store the elements of a limited size.
                </p>
                <a href="https://www.javatpoint.com/linear-vs-non-linear-data-structure" className="btn btn-primary">Learn more</a>
              </div>
            </div>
            <div className="card col my-5 mx-4" style={{width: '28rem'}}>
              <img src={ima9} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">→ Queue:</h5>
                <p className="card-text">A Queue is like a line waiting to purchase tickets, where the first person in line is the first person served. (i.e. First come first serve).
                  Position of the entry in a queue ready to be served, that is, the first entry that will be removed from the queue, is called the front of the queue(sometimes, head of the queue), similarly, the position of the last entry in the queue, that is, the one most recently added, is called the rear (or the tail) of the queue.
                  <br />
                  <br />
                  →  Some key points related to stack:
                  <br />
                  1. Stack is an ordered list of similar data type.
                  <br />
                  2. Stack is a LIFO(Last in First out) structure or we can say FILO(First in Last out).
                  <br />
                  3. Stack is said to be in Overflow state when it is completely full and is said to be in Underflow state if it is completely empty.
                </p>
                <a href="https://www.geeksforgeeks.org/stack-data-structure/" className="btn btn-primary">Learn more</a>
              </div>
            </div>
            <div className="card col my-5 mx-4" style={{width: '28rem'}}>
              <img src={ima10} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">→ Dequeue:</h5>
                <p className="card-text">Deque is a more generalized version of a linear queue. As you know, the linear queue has some restrictions while performing the insertion and deletion of elements. The insertion in a linear queue must happen from the rear end and deletion from the front end. But, in deque, you can perform both insertion and deletion operations at both of its ends. That’s why it is called a Double-Ended Queue (Deque).
                  Deque is data structure that inherits the properties of both queues and stacks
                  <br />
                  <br />
                  →  Some key points related to stack:
                  <br />
                  1. Input-Restricted Deque: It is a deque with some limitations while performing insertion operations.It will perform the deletion at both ends, whereas it performs the insertion at only one end.
                  <br />
                  2. Output-Restricted Deque: It is a deque with some limitations while performing deletion operations.It will perform the insertion at both ends, whereas it performs the deletion of elements at only one end
                </p>
                <a href="https://www.tutorialride.com/data-structures/dequeue-in-data-structure.htm" className="btn btn-primary">Learn more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}

export default Explore1;