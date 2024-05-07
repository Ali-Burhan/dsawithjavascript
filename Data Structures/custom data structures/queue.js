class Queue{
    constructor(){
        this.items = []
    }
    enqueue(val){
        this.items.push(val)
    }
    dequeue(){
        return this.items.shift()
    }
    isEmpty(){
        return this.items.length === 0
    }
    peek(){
        return this.isEmpty()?"Empty Queue":this.items[0]
    }
    size(){
        return this.items.length
    }
    print(){
        for(let i = 0; i <= this.items.length-1; i++){
            console.log(this.items[i]);
        }
    }
}


// const queue = new Queue()

// console.log(queue.peek());
// queue.enqueue(1)
// queue.enqueue(5)
// queue.enqueue(2)
// queue.enqueue(4)
// queue.enqueue(3)
// queue.print()
// queue.dequeue()
// queue.dequeue()
// queue.dequeue()
// console.log(queue.peek());
// queue.dequeue()
// queue.dequeue()
// queue.print()
// console.log(queue.isEmpty());





/**************************************************************Queues With Objects********************************************************************************/

class QueueOBJ{
    constructor(){
        this.items = {}
        this.rear = -1
        this.front = -1
    }
    isEmpty(){
        return this.front == -1
    }
    enqueue(val){
        if(this.rear == -1 && this.front == -1){
            this.rear++;
            this.front++;
        this.items[this.rear] = val
        }else{
            this.rear++;
        this.items[this.rear] = val
        }
    }
    dequeue(){
        if (this.isEmpty()) {
            return "Queue is Empty"
        }
        else if(this.front > this.rear){
            return "All Items Are Removed"
        }
        else{
            let value =  this.items[this.front]
            delete this.items[this.front]
            this.front++
        }
    }

    print(){
        if(this.isEmpty()){
            console.log("Queue is Empty");
        }
        else{
            for(let val of Object.values(this.items)){
                console.log(val);
            }
        }
    }

}


const queueobj = new QueueOBJ()
queueobj.enqueue(3)
queueobj.enqueue(3)
queueobj.enqueue(3)
queueobj.enqueue(3)
queueobj.print()
queueobj.dequeue()
queueobj.dequeue()
queueobj.dequeue()
queueobj.dequeue()
console.log(queueobj.dequeue())
queueobj.print()


























/**************************************************************Circular Queues********************************************************************************/