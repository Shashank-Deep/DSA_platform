import React from "react";

import "./Explore4.css";
import ima19 from "../images/exp30.jpeg";
import ima20 from "../images/exp31.jpeg";
import ima21 from "../images/exp32.jpeg";
import ima22 from "../images/exp33.jpeg";

const Explore4 = () => {
    return (
        <>
            <div className="container my-5">
        <img className="pic" height={230} width={430} src={ima19} alt="" />
        <h2> <font color={800000}> → GRAPH DATA STRUCTURE:</font></h2><font color={800000}> </font>
        <br />
        <p>
          A Graph is a non-linear data structure consisting of vertices and edges. The vertices are sometimes also referred to as nodes and the edges are lines or arcs that connect any two nodes in the graph. More formally a Graph is composed of a set of vertices( V ) and a set of edges( E ). The graph is denoted by G(E, V).
          Graphs are used to solve many real-life problems. Graphs are used to represent networks. The networks may include paths in a city or telephone network or circuit network. Graphs are also used in social networks like linkedIn, Facebook. 
        </p>
        <h3> <font color={800000}>→ COMPONENTS OF GRAPH:</font></h3> 
        <p>
          1. Vertices: Vertices are the fundamental units of the graph. Sometimes, vertices are also known as vertex or nodes. Every node/vertex can be labeled or unlabelled.
          <br />
          <br />
          2. Edges: Edges are drawn or used to connect two nodes of the graph. It can be ordered pair of nodes in a directed graph. Edges can connect any two nodes in any possible way. There are no rules. Sometimes, edges are also known as arcs. Every edge can be labeled/unlabelled.
          <br />
          <br />
          3. If there are numerous edges between a pair of vertices in a graph G= (V, E), the graph is referred to as a multigraph. There are no self-loops in a Multigraph.
          <br />
          <br />
        </p>
        <div className="container" id="home">
          <h3> <font color={800000}>→TYPES:</font></h3> 
          <div className="row">
            
            <div className="card col my-5 mx-4" style={{width: '28rem'}}>
              <img src={ima20} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">→ DFS Algorithm:</h5>
                <p className="card-text">
                  Depth First Traversal (or Search) for a graph is similar to Depth First Traversal of a tree. The only catch here is, that, unlike trees, graphs may contain cycles (a node may be visited twice). To avoid processing a node more than once, use a boolean visited array. A graph can have more than one DFS traversal.
                  <br />
                  <br />
                  →  Steps to solve the problems:
                  <br />
                  1. Create a recursive function that takes the index of the node and a visited array.
                  <br />
                  <br />
                  2. Mark the current node as visited and print the node.
                  <br />
                  <br />
                  3. Traverse all the adjacent and unmarked nodes and call the recursive function with the index of the adjacent node.
                  <br />
                  <a href="https://www.tutorialspoint.com/data_structures_algorithms/depth_first_traversal.htm" className="btn btn-primary">Learn more</a>
                </p></div>
            </div>
            <div className="card col my-5 mx-4" style={{width: '28rem'}}>
              <img src={ima21} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">→ Bellman Ford Algorithm:</h5>
                <p className="card-text">
                  Bellman Ford algorithm helps us find the shortest path from a vertex to all other vertices of a weighted graph.
                  It is similar to Dijkstra's algorithm but it can work with graphs in which edges can have negative weights.
                  <br />
                  <br />
                  →  Steps to solve the problems:
                  <br />
                  1. Start with the weighted graph,choose a starting vertices and assign infinity to all other vertex present.
                  <br />
                  <br />
                  2. Visit each vertex and relax the path distance in they are inaccuarate.
                  <br />
                  <br />
                  3. We need to do this tasks V times beacause in the worst case path length needs to be adjusted V times.
                  <br />
                  <br />
                  4. After all the vertex's path length are been adjusted further check for the negative are present or not.
                  <br />
                </p>
                <a href="https://www.javatpoint.com/bellman-ford-algorithm" className="btn btn-primary">Learn more</a>
              </div>
            </div>
            <div className="card col my-5 mx-4" style={{width: '28rem'}}>
              <img src={ima22} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">→ BFS Algorithm:</h5>
                <p className="card-text">
                  Breadth-first search is a graph traversal algorithm that starts traversing the graph from the root node and explores all the neighboring nodes. Then, it selects the nearest node and explores all the unexplored nodes. While using BFS for traversal, any node in the graph can be considered as the root node.
                  BFS puts every vertex of the graph into two categories - visited and non-visited. It selects a single node in a graph and, after that, visits all the nodes adjacent to the selected node.
                  <br />
                  <br />
                  →  Steps to solve the problems:
                  <br />
                  1. (ready state) for each node in G
                  <br />
                  2. Enqueue the starting node A and set its STATUS = 2 (waiting state)
                  <br />            
                  3. Repeat Steps 4 and 5 until QUEUE is empty
                  <br />        
                  4. Dequeue a node N. Process it and set its STATUS = 3 (processed state).
                  <br />
                  5. Enqueue all the neighbours of N that are in the ready state (whose STATUS = 1) and set
                  their STATUS = 2
                </p>
                <a href="https://www.javatpoint.com/breadth-first-search-algorithm" className="btn btn-primary">Learn more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    );
};

export default Explore4;