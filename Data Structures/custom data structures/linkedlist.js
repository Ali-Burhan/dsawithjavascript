// Linked List is Used to Build Stack or Queue Data Structures
class Node{
    constructor(val){
        this.value = val;
        this.next = null
    }
}


class LinkedLists{
    constructor(){
        this.head = null
        this.size = 0
    }
    isEmtpty(){
        return this.size == 0
    }
    getSize(){
        return this.size
    }
    prepend(val){
        const newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.size += 1
            return newNode
        }
        else{
            const newNode = new Node(val)
            newNode.next = this.head
            this.head = newNode
            this.size += 1
            return newNode
        }
    }
    print(){
        let currNode = this.head
        while(currNode){
            console.log(currNode.value);
            currNode = currNode.next
        }
    }

    append(val){
        if(this.isEmtpty()){
            const newNode = new Node(val)
            this.head = newNode
            this.size += 1
            return "Inserted At Start"
        }
        else{
            let currNode = this.head
            while(currNode.next){
                currNode = currNode.next
            }
            currNode.next = new Node(val)
            this.size += 1
            return "Inserted At End"
        }
    }

    insertAt(val,index){
        if(index < 0 || index > this.size){
            throw new Error("Invalid Index")
        }
        if(index == 0){
            this.prepend(val)
            return
        }else{
            let currNode = this.head
            const newNode = new Node(val)
            for(let i = 1; i<=index-1; i++){
                    currNode = currNode.next
            }
            newNode.next = currNode.next
            currNode.next = newNode
            this.size +=1
            return true
        }

    }
}




const linkedlist = new LinkedLists()
console.log(linkedlist.append(9));
console.log(linkedlist.prepend(4));
console.log(linkedlist.prepend(3));
console.log(linkedlist.prepend(2));
console.log(linkedlist.prepend(1));
console.log(linkedlist.prepend(0));
linkedlist.print()
console.log(linkedlist.append(13));
console.log(linkedlist.append(9));
console.log(linkedlist.append(11));
console.log(linkedlist.insertAt(786,5));
linkedlist.print()