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
		var node = new Node(val);
		if (this.head === null) {
			this.head = node;
			this.tail = this.head;
		} else {
			this.tail.next = node;
			node.prev = this.tail;
			this.tail = node;
		}
		this.length++;
		return this;
	}
	pop() {
		if (this.length === 0) return undefined;
		let poppedNode = this.tail;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.tail = poppedNode.prev;
			this.tail.next = null;
			poppedNode.prev = null;
		}
		this.length--;
		return poppedNode;
	}
	shift() {
		if (this.length === 0) return undefined;
		let oldHead = this.head;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.head = oldHead.next;
			this.head.prev = null;
			oldHead.next = null;
		}
		this.length--;
		return oldHead;
	}
	get(index) {
		if (index < 0 || index >= this.length) return null;
		let count, current;
		if (index <= this.length / 2) {
			count = 0;
			current = this.head;
			while (count !== index) {
				current = current.next;
				count++;
			}
		} else {
			count = 0;
			current = this.length - 1;
			while (count !== index) {
				current = current.prev;
				count--;
			}
		}
		return current;
	}
	remove(index) {
		if (index < 0 || index >= this.length) return undefined;
		if (index === 0) return this.unshift();
		if (index === this.length - 1) return this.pop();

		let removeNode = this.get(index);
		let beforeNode = removeNode.prev;
		let afterNode = removeNode.next;

		afterNode.prev = beforeNode;
		beforeNode.next = afterNode;
		removeNode.next = null;
		removeNode.prev = null;

		this.length--;
		return removeNode;
	}
}
