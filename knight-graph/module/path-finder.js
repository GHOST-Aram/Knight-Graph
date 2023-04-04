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
        this.count = 0
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
        
        //get an array of all the adjacent nodes
        const neighbors = graph.getNeighbors()
        //keeps track of target if found
        let targetFound = null

        //Now we loop through the neighbors looking for our target square
        neighbors.forEach(neighbor => {
            
            // If neighbor is not null
            if(!neighbor.visited){
                
                //Assign parents to each neighbor
                neighbor.parent = start
                
                //Mark neighbor as visited
                neighbor.visited = true
                
                //If target is found in the graph
                if(this.isTarget(neighbor))
                targetFound = neighbor
            } 
        })

        if(targetFound !== null){
            //Back track path from target to start
            return this.#backTrackPath(targetFound)

        } 
        else{
            // Recursively trace the path until its found 
            // starting from current node
            neighbors.forEach(node => {this.findPath(node)})

        }
    }

    /**
     * Check if a node properties are equal to target properties
     * REturn node if match is found otherwise return false
    */
   isTarget(node){
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
       
        //
        let current = node
        do{
            //Push cordinates into array
            coordinates.unshift([current.file, current.rank])

            //Advance backwards
            current = current.parent
        }while(current !== null && current.visited)

        //Return array of coordinates
        return coordinates
    }
} 