// Binary Search Tree
// Create a BST with the following format:
//         9
//    4        20
// 1     6   15   170

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
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
// console.log(JSON.stringify(traverse(tree.root)));
console.log(tree.lookup(170));
console.log(tree.lookup(2));

// function for checking your work
function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}
