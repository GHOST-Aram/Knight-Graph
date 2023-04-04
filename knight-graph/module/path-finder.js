import {KnightGraph} from "./knight-graph.js";
import { Queue } from "../data-module/queue.js";


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
        //Mark start square as visited
        start.visited = true

        //Instanciate queue
        const collection = new Queue()

        //Enqueue start
        collection.enqueue(start)
        let round = 0
        //Search for target node in queue contents 
        while(!collection.isEmpty()){
            
            //Dequeue nodes
            const currentSquare = collection.dequeue()
            // console.log(currentSquare)

            /**
             * Check current square against target square
             * If match is found, return path
             */
            if(this.isTarget(currentSquare))
                return this.#backTrackPath(currentSquare)


            //Create a KnightGraph of current square
            const graph = new KnightGraph(currentSquare)

            // Get adjacent squares that are possible knights next moves
            const adjacentSquares = graph.getNeighbors()

            /**
             * Set Currrent square as parent square for all adjacent squares
             * and enqueue all adjacent squares 
             */
            adjacentSquares.forEach(
                square => {
                    if(!square.visited){
                        square.parent = currentSquare//Set parent

                        // Mark as visited
                        square.visited = true

                        
                        //Add to queue    
                        collection.enqueue(square)
                        
                    }
                    
                })
                round ++
                if(round === 1){
                    // console.log(collection)
                    break
                }
            // Keep going until you find the target square
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