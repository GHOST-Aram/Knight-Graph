import {KnightGraph} from "./knight-graph.js";

export class Finder {

    /**
     *  
     * 
     * The position on board at which the knight is supposed to move
     * @param {*} target 
     * 
     */
    constructor(target){
        this.target = target
    }
    /**
     * 
    *
    * This function traces the path of the Knight from the start position to the
    * target square using BFS algorithm
    */
   findPath(start){

        //Set start node as visited
        start.visited = true

        //Create a KnightGraph object
        const graph = new KnightGraph(start)

        //Create an array of all the adjacent nodes
        let neighbors = [
            graph.topTopLeft, graph.topTopRight,
            graph.leftTopLeft, graph.leftBottomLeft,
            graph.rightTopRight, graph.rightBottomRight,
            graph.bottomBottomLeft, graph.bottomBottomRight
        ]

        //Eliminate null neighbors
        neighbors = neighbors.filter(neighbor => {
            return neighbor !== null
        })
        let targetFound = null
        //Now we loop through the neighbors looking for our target square
        neighbors.forEach(node => {

            // If node is not null
            if(!node.visited){

            //Assign parents to each node
            node.parent = start

            //Mark node as visited
            node.visited = true

           
            //If target is found in the graph
            if(this.isFound(node))
                targetFound = node
        }
        })

        if(targetFound !== null){
            //Back track path from target to start
            return this.#backTrackPath(targetFound)

        } else{
            neighbors.forEach(node => {this.findPath(node)})

        }
        

        // //Recursively trace the path until its found 
        // // starting from current node

    }

    /**
     * Check if a node properties are equal to target properties
     * REturn node if match is found otherwise return false
    */
   isFound(node){
       return node.file === this.target.file && node.rank === this.target.rank
      
    }
    
    
    /**
     * 
     * @param {*} node 
     * Traces path backward in reverse from node through parents
     * upto the start node 
     * Returns an array of coordinates og the path
    */
   #backTrackPath(node){
       
       //Create array of cordinate and initialize it with start cordinates
       const coordinates = []
       
        //Path will be recorded backwards 
        let backwardCordinates = []

        //
        let current = node
        do{
            //Push cordinates into array
            backwardCordinates.push([current.file, current.rank])

            //Advance backwards
            current = current.parent
        }while(current !== null && current.visited)


        //Reverse the array and add its element to cordinates array
        for(let i = backwardCordinates.length - 1; i >= 0; i--){
            coordinates.push(backwardCordinates[i])
        }
        
        //Return array of coordinates
        return coordinates
    }
} 