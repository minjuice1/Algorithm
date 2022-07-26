/* DLL push - Exercise
implement the following on the DoublyLinkedList class
this function should accept a value add to the end of the DoublyLinkedList
with the given value. it should return the DoublyLinkedList */

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	push(val) {
		let newNode = new Node(val);
		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			newNode.prev = this.tail;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}
}

let DoublyLinkedList = new DoublyLinkedList();
