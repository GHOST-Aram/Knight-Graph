export class Node {
    constructor(file, rank){
        if(((file => 1) && (file <= 8)) && ((rank => 1) && (rank <= 8))){
            this.rank = rank
            this.file = file
        }
        else{
            this.rank = null
            this.file = null
        }
    }
}
const node = new Node()
console.log(node)