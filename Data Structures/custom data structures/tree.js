class Node{
    constructor(value){
        this.value = value
        this.right = null
        this.left = null
    }
}


class BST{
    constructor(){
        this.root = null
    }
    isEmpty(){
        return this.root == null
    }
    insert(value){
        const newNode = new Node(value)
        if(this.isEmpty()){
            this.root = newNode
        }else{
            this.insertNode(this.root,newNode)
        }
    }

    insertNode(root,newNode){
        if(newNode.value < root.value){
            if(root.left === null){
                root.left = newNode
            }else{
                this.insertNode(root.left,newNode)
            }
        }else{
            if(root.right === null){
                root.right = newNode
            }else{
                this.insertNode(root.right,newNode)
            }
        }
    }
    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right)
        }
    }
}



const Tree = new BST()

Tree.insert(15)
Tree.insert(19)
Tree.insert(12)
Tree.insert(20)
Tree.insert(18)
Tree.insert(16)
Tree.insert(8)
Tree.insert(2)
Tree.insert(9)
console.log("Pre Order");
Tree.preOrder(Tree.root)
console.log("In Order");
Tree.inOrder(Tree.root)