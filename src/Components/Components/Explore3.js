import React from "react";

import "./Explore3.css";
import ima15 from "../images/treebased_ds.jpeg";
import ima16 from "../images/exp21.jpeg";
import ima17 from "../images/exp22.jpeg";
import ima18 from "../images/exp23.jpeg";

const Explore3 = () => {
    return (
        <>
            <div className="container my-5">
        <img className="pic" height={230} width={430} src={ima15} alt="" />
        <h2> <font color={800000}> → TREE BASED DATA STRUCTURE:</font></h2><font color={800000}> </font>
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
              <img src={ima16} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">→ Binary Tree:</h5>
                <p className="card-text">A binary tree is a tree data structure in which each parent node can have at most two children. Each node of a binary tree consists of three items:
                  <br />
                  Data item
                  <br />
                  Address of left child
                  <br />
                  Address of right child
                  <br />
                  <br />
                  →  Some key points related to stack:
                  <br />
                  1. At each level of i, the maximum number of nodes is 2i.<br />
                  2. The height of the tree is defined as the longest path from the root node to the leaf node. The tree which is shown above has a height equal to 3. Therefore, the maximum number of nodes at height 3 is equal to (1+2+4+8) = 15. In general, the maximum number of nodes possible at height h is (20 + 21 + 22+….2h) = 2h+1 -1.
                </p>
                <a href="https://www.geeksforgeeks.org/introduction-to-tree-data-structure-and-algorithm-tutorials/" className="btn btn-primary">Learn more</a>
              </div>
            </div>
            <div className="card col my-5 mx-4" style={{width: '28rem'}}>
              <img src={ima17} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">→ AVL Tree:</h5>
                <p className="card-text">
                  AVL Tree can be defined as height balanced binary search tree in which each node is associated with a balance factor which is calculated by subtracting the height of its right sub-tree from that of its left sub-tree.
                  Tree is said to be balanced if balance factor of each node is in between -1 to 1, otherwise, the tree will be unbalanced and need to be balanced.v
                  <br />
                  <br />
                  →  Some key points related to stack:
                  <br />
                  1. Each tree has a root node (at the top)
                  <br />
                  2. Each child node has zero, one, or two child nodes
                  <br />
                  3. For each node, its left descendants are less than the current node, which is less than the right descendants
                </p>
                <a href="https://www.geeksforgeeks.org/avl-tree-set-1-insertion/" className="btn btn-primary">Learn more</a>
              </div>
            </div>
            <div className="card col my-5 mx-4" style={{width: '28rem'}}>
              <img src={ima18} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">→ Traversal Tree:</h5>
                <p className="card-text">Traversal is a process to visit all the nodes of a tree and may print their values too. Because, all nodes are connected via edges (links) we always start from the root (head) node. That is, we cannot randomly access a node in a tree. There are three ways which we use to traverse a tree −
                  <br />
                  <br />
                  In-order Traversal: This tree traversal technique follows the rule- “Left Data Right,” i.e., we will start traversing from the tree’s root node and go deeper and deeper into the left subtree in a recursive manner.
                  After reaching the left-most node, we will visit the current node and go to the left-most node of its right subtree (if it exists)
                  <br />
                  <br />
                  Pre-order Traversal: Current node first and then go to the left sub-tree, and after covering every node of the left sub-tree, we will move towards the right sub-tree recursively in the same manner.
                  <br />
                  <br />
                  Post-order Traversal: This traversal technique follows the rule- “Left Right Data” i.e. we will go to the left sub-tree first and after covering every node of the left sub-tree, we will move towards the right sub-tree and then visit the current node recursively.
                  <br />
                </p>
                <a href="https://www.javatpoint.com/tree-traversal" className="btn btn-primary">Learn more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}

export default Explore3;