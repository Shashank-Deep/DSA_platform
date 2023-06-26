import React from "react";

import "./Explore2.css";
import ima11 from "../images/Datastructure2.jpeg";
import ima12 from "../images/linkedlist.png";
import ima13 from "../images/hash.png";
import ima14 from "../images/MinHeapAndMaxHeap.png";

const Explore2 = () => {
    return (
        <>
        <div>
        <div className="container-fluid">
        </div>
        <div className="container my-5">
          <img className="pic" height={230} width={430} src={ima11} alt="" />
          <h2> <font color={800000}> → DATA STRCUTURE SET 2: </font></h2><font color={800000}> </font>
          <br />
          <p>Other data structures such as arrays, linked list, stack, and queue are linear data structures that store data sequentially. In order to perform any operation in a linear data structure, the time complexity increases with the increase in the data size. But, it is not acceptable in today's computational world.
            Different tree data structures allow quicker and easier access to the data as it is a non-linear data structure.
          </p>
          <h3> <font color={800000}>→ TERMINOLOGIES:</font></h3> 
          <p>
            1. Node: A node is an entity that contains a key or value and pointers to its child nodes.
            The last nodes of each path are called leaf nodes or external nodes that do not contain a link/pointer to child nodes.
            The node having at least a child node is called an internal node.
            <br />
            <br />
            2. Edge: It is the link between any two nodes.
            <br />
            <br />
            3. Height of a Node: The height of a node is the number of edges from the node to the deepest leaf (ie. the longest path from the node to a leaf node).
          </p>
          <br />
          <div className="container" id="home">
            <h3> <font color={800000}>→ TYPES:</font></h3> 
            <div className="row">
             
              <div className="card col my-5 mx-4" style={{width: '28rem'}}>
                <img src={ima12} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">→ Linked list:</h5>
                  <p className="card-text">A linked list is a linear data structure, in which the elements are not stored at contiguous memory locations. The elements in a linked list are linked using pointers as shown in the below image:
                    <br />
                    In simple words, a linked list consists of nodes where each node contains a data field and a reference(link) to the next node in the list.
                    <br />
                    -&gt; Types of Linked list are:
                    <br />
                    1.Single Linked list. <br />
                    2.Double Linked list. <br />
                    3.Circular Linked list.          
                    <br />
                    <br />
                    → The basic operations that can be performed on linked lists are searching, insertion, deletion, and update.
                    Search operations can be done in O(n) time, while insertion and deletion are done in O(1) time.
                    <br />
                    1. Nodes can be easily deleted and inserted. <br />
                    2. Linked list can be easily implemented in most programming languages.<br />
                    3. The pointers used in linked lists require additional memory.
                  </p>
                  <a href="https://www.javatpoint.com/singly-linked-list" className="btn btn-primary">Learn more</a>
                </div>
              </div>
              <div className="card col my-5 mx-4" style={{width: '28rem'}}>
                <img src={ima13} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">→ Hash Tables:</h5>
                  <p className="card-text">
                    A hash table is different from binary trees and linked lists in the sense that it is implemented with an array.
                    It stores data as key-value pairs. 
                    Each data value in a hash table has a key or index that is produced using a technique known as hashing.
                    <br />
                    <br />
                    →  Some key points related to Hash Tables:
                    <br />
                    1. In hashing, a hash function is used to convert a variable-length value or data into a fixed-length value.
                    <br />
                    2. There are three basic operations that can be performed on hash tables: insertion, searching, and deletion of data values.
                    These operations can usually be completed in O(1) time.
                    <br />
                    3. Hash tables are efficient due to their fast access and are used in many applications,
                    such as address tables, compiler symbol tables, search engines, password look-ups, and file systems
                  </p>
                  <a href="https://www.javatpoint.com/hash-table" className="btn btn-primary">Learn more</a>
                </div>
              </div>
              <div className="card col my-5 mx-4" style={{width: '28rem'}}>
                <img src={ima14} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">→ Heap Data structure:</h5>
                  <p className="card-text">A Heap is a special Tree-based data structure in which the tree is a complete binary tree.
                    <br />
                    <br />
                    Operations of Heap Data Structure:
                    <br />
                    1. Heapify: a process of creating a heap from an array.
                    <br />
                    2. Insertion: process to insert an element in existing heap time complexity O(log N).
                    <br />
                    3. Deletion: deleting the top element of the heap or the highest priority element, and then organizing the heap and returning the element with time complexity O(log N). <br />
                    Peek: to check or find the most prior element in the heap, (max or min element for max and min heap).
                    <br />
                    <br />
                  </p>
                  <a href="https://www.javatpoint.com/heap-data-structure" className="btn btn-primary">Learn more</a>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </div>


        </>)}

export default  Explore2;