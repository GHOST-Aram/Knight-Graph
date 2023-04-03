import {KnightGraph} from './module/knight-graph.js'
export class Finder {

    /**
     * Start position of the knight
     *  @param {*} start 
     * 
     * The position on board at which the knight is supposed to move
     * @param {*} target 
     * 
     */
    constructor(start, target){
        this.start = start
        this.target = target
    }
    /**
     * 
     *
     * This function traces the path of the Knight from the start position to the
     * target square using BFS algorithm
     */
    findPath(){
        //Set start node as visited
        this.start.visited = true

        //Create a KnightGraph object
        const graph = new KnightGraph(this.start)

        //Create an array of all the adjacent nodes
        const neighbors = [
            graph.topTopLeft, graph.topTopRight,
            graph.leftTopLeft, graph.leftBottomLeft,
            graph.rightTopRight, graph.rightBottomRight,
            graph.bottomBottomLeft, graph.bottomBottomRight
        ]

        //Now we loop through the neighbors for our target square
        neighbors.forEach(node => {

            // If node is not null
            if(node){

            //Assign parents to each node
            node.parent = this.start

            //Mark node as visited
            node.visited = true

            //Trace target square
            const matchedNode = compareNodes(node, this.target)

            //If target is found in the graph
            if(matchedNode){
                //Back track path from target to start
                const path = backTrackPath(matchedNode, this.start)
        
                return path
            }
        }
        })

        //Recursively trace the path until its found 
        // starting from current node
        neighbors.forEach(node => {findPath(node, this.target)})

    }

    /**
     * Check if a node properties are equal to target properties
     * REturn node if match is found otherwise return false
     */
    compareNodes(node){
        if(node.file === this.target.file && node.rank === this.target.rank)
            return node
        else return false
    }


    /**
     * 
     * @param {*} node 
     * Traces path backward in reverse from node through parents
     * upto the start node 
     * Returns an array of coordinates og the path
     */
    backTrackPath(node){
        //Create array of cordinate and initialize it with start cordinates
        const coordinates = [[this.file, this.rank]]

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