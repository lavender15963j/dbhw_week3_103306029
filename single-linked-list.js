function Node(data) {
  this.data = data;
  this.next = null;
}

function SinglyLinkedList() {
  this.head = null;
  this.tail = null;
  this.numberOfValues = 0;
}

SinglyLinkedList.prototype.add = function(data) {
  var node = new Node(data);
  if(!this.head) {
    this.head = node;
    this.tail = node;
    this.numberOfValues++;
  } else {
    this.tail.next = node;
    this.tail = node;
    this.numberOfValues++;
  }
};

SinglyLinkedList.prototype.remove = function(data) {
  var preNode = this.head;
  var currNode = this.head;
  while(currNode != null){
    if(currNode.data === data){
      if(currNode === this.tail){
        preNode.next = null;
        this.tail = preNode;
      }
      if(currNode === this.head){
        this.head = this.head.next;
      }
      preNode.next = currNode.next
      this.numberOfValues--;
    }else{
      preNode = currNode;
    }
    currNode = currNode.next;
  }
};

SinglyLinkedList.prototype.insertAfter = function(data, toNodeData) {
  var currNode = this.head;
  while(currNode != null){                          //1-way
    if(currNode.data === toNodeData){
      var newNode = new Node(data);
      if(currNode === this.tail){
        currNode.next = newNode;
        this.tail = newNode;
      }
      else{
        newNode.next = currNode.next;
        currNode.next = newNode;
      }
      this.numberOfValues++;
      currNode = currNode.next.next;
    }else{
      currNode = currNode.next;
    }
    /*if(currNode.next != null){                    //2-way
      if(currNode.data === toNodeData){
        var tmpNode = currNode.next;
        currNode.next = new Node(data);
        currNode.next.next = tmpNode;
        this.numberOfValues++;
        currNode = currNode.next.next;
      }else{
        currNode = currNode.next;
      }
    }else{
      if(currNode.data === toNodeData){
        currNode.next = new Node(data);
        this.numberOfValues++;
        this.tail = currNode.next;
      }
      break;
    }*/
  }
};

SinglyLinkedList.prototype.length = function() {
  return this.numberOfValues
};

SinglyLinkedList.prototype.print = function() {
  var liststr = "";
  var currNode = this.head
  while(currNode != null){
    liststr = liststr + currNode.data + " ";
    currNode = currNode.next;
  }
  return liststr.trim();
};


/*
singlyLinkedList.print(); // => ''
singlyLinkedList.add(1);
singlyLinkedList.add(2);
singlyLinkedList.add(3);
singlyLinkedList.add(4);
singlyLinkedList.print(); // => 1 2 3 4
console.log('length is 4:', singlyLinkedList.length()); // => 4
singlyLinkedList.remove(3); // remove value
singlyLinkedList.print(); // => 1 2 4
singlyLinkedList.remove(9); // remove non existing value
singlyLinkedList.print(); // => 1 2 4
singlyLinkedList.remove(1); // remove head
singlyLinkedList.print(); // => 2 4
singlyLinkedList.remove(4); // remove tail
singlyLinkedList.print(); // => 2
console.log('length is 1:', singlyLinkedList.length()); // => 1
singlyLinkedList.add(6);
singlyLinkedList.print(); // => 2 6
singlyLinkedList.insertAfter(3, 2);
singlyLinkedList.print(); // => 2 3 6
singlyLinkedList.insertAfter(4, 3);
singlyLinkedList.print(); // => 2 3 4 6
singlyLinkedList.insertAfter(5, 9); // insertAfter a non existing node
singlyLinkedList.print(); // => 2 3 4 6
singlyLinkedList.insertAfter(5, 4);
singlyLinkedList.insertAfter(7, 6); // insertAfter the tail
singlyLinkedList.print(); // => 2 3 4 5 6 7
singlyLinkedList.add(8); // add node with normal method
singlyLinkedList.print(); // => 2 3 4 5 6 7 8
console.log('length is 7:', singlyLinkedList.length()); // => 7
singlyLinkedList.print(); // => 12 13 14 15 16 17 18
console.log('length is 7:', singlyLinkedList.length()); // => 7
*/


module.exports = {
  SinglyLinkedList : SinglyLinkedList,
  Node : Node
};
