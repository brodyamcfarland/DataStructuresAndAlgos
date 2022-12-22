// Depth First Search Traversal

class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new Node(value); // New Node Created
        if (this.root === null) {
            // If There is no root, create it
            this.root = newNode;
        } else {
            let currentNode = this.root; // If There is a root, start here
            while (true) {
                // Loop through left or right, true always runs
                if (value < currentNode.value) {
                    // Left
                    if (!currentNode.left) {
                        // If there is no node to the left, add it
                        currentNode.left = newNode;
                        return this; // Exit Loop
                    }
                    currentNode = currentNode.left;
                } else {
                    // Right
                    if (!currentNode.right) {
                        // If no node to the right, add it
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }
    lookup(value) {
        if (!this.root) {
            // Check if there is a root node
            return false;
        }
        let currentNode = this.root; // Starting Point
        while (currentNode) {
            // Loop while there is a currentNode
            if (value < currentNode.value) {
                // Left
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                // Right
                currentNode = currentNode.right;
            } else if (currentNode.value === value) {
                // Finding the value
                return currentNode;
            }
        }
        return false; // return false if it is not found
    }
    remove(value) {}
    DFSInorder() {
        return traverseInOrder(this.root, []);
    }
    DFSPreorder() {
        return traversePreOrder(this.root, []);
    }
    DFSPostorder() {
        return traversePostOrder(this.root, []);
    }
}

const traverseInOrder = (node, list) => {
    if (node.left) {
        traverseInOrder(node.left, list);
    }
    list.push(node.value); // list.push in the middle
    if (node.right) {
        traverseInOrder(node.right, list);
    }
    return list;
};

// PreOrder - Only difference is that 'list.push(node.value);' gets called before the conditional statements
const traversePreOrder = (node, list) => {
    console.log(node.value);
    list.push(node.value); // list.push at the beginning
    if (node.left) {
        traversePreOrder(node.left, list);
    }
    if (node.right) {
        traversePreOrder(node.right, list);
    }
    return list;
};

const traversePostOrder = (node, list) => {
    console.log(node.value);
    if (node.left) {
        traversePostOrder(node.left, list);
    }
    if (node.right) {
        traversePostOrder(node.right, list);
    }
    list.push(node.value); // list.push at the very end
    return list;
};

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

console.log(tree.DFSInorder());
console.log(tree.DFSPreorder());
console.log(tree.DFSPostorder());
//         9
//    4        20
// 1     6   15   170
// Inorder - [1, 4, 6, 9, 15, 20, 170]
// Preorder - [9, 4, 1, 6, 20, 15, 170]
// Postorder- [1, 6, 4, 15, 170, 20, 9]
