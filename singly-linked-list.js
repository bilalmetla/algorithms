
class Node {
    constructor(val){
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList {
    constructor(){
        this.length = 0
        this.head = null
        this.tail = null
    }

    /**
     * accept new value and create a new node
     * if there is no head property then set the head and tail this new node
     * otherwise set the next property on node 
     * 
     */
    push(val){
        let newnode = new Node(val)
        if(!this.head){
            this.head = newnode
            this.tail = newnode
        }else{
            this.tail.next = newnode
            this.tail = newnode
        }
        this.length++
        return this
    }

    /**
     * removing the last element from the list
     * loop through until the tail but keep track of one node behinde.
     * which gives us second last node.
     */
    pop(){
        if(this.length === 0){
            return ''
        }
        let current = this.head
        if(this.length === 1 ){
           
            this.tail = null  
            this.head = null  
        }else{
            let previousNode = this.head
            while(current.next){
                previousNode = current
                current = current.next   
                
            }
        
            this.tail = previousNode
            this.tail.next = null
        }
        this.length--
        return current.val

    }

    traverse(){
        let current = this.head 
        while(current){
            console.log(current)
            current = current.next
        }
    }
    /**
     * shift: remove first element from head.
     * basically remove the head and make new head the next node.
     * 
     */
    shift(){
        if(this.length === 0){
            return undefined
        }

        let currentHead = this.head 
        this.head = currentHead.next
        currentHead.next = null
        this.length--
        if(this.length === 0){
            this.tail = null
        }
        return currentHead
    }

    /**
     * unshift adding a new node at begning of list.
     * pseudocode: 
     * keep the current head / old head
     * move current head to new node.
     * set the newnode next to current head/old head
     */
    unshift(val){
        let newNode = new Node(val)
        if(this.length === 0){
            this.head = newNode
            this.tail = newNode
        }else{
            let oldHead = this.head 
            this.head = newNode
            this.head.next = oldHead
        }
        
        this.length++
        return newNode
    }

    


}


const list = new SinglyLinkedList()
list.push('hi')
list.push('bilal')
list.push('91')

//exports.list = list
// .load ./singly-linked-list.js
//console.log(list)
