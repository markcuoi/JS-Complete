class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    var newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  find(data) {
    let currentNode = this.root;
    while (currentNode.data !== data) {
      if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
      if (currentNode === null) {
        return null;
      }
    }
    return currentNode;
  }

  contain(data) {
    let currentNode = this.root;

    while (currentNode) {
      if (data === currentNode.data) {
        return true;
      } else if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return false;
  }

  min() {
    let currentNode = this.root;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }

    return currentNode.data;
  }

  max() {
    let currentNode = this.root;
    while (currentNode.right) {
      currentNode = currentNode.right;
    }

    return currentNode.data;
  }

  // depth first search - branch by branch
  // in-order
  // left, root, right
  // 2, 3, 12, 15, 28, 36, 39
  dfsInOrder() {
    let result = [];

    const traverse = (node) => {
      // if left child exists, go left again
      if (node.left) traverse(node.left);
      // capture root node value
      result.push(node.data);
      // if right child exists, go right again
      if (node.right) traverse(node.right);
    };

    traverse(this.root);
    return result;
  }

  // pre-order
  // root, left, right
  // 15, 3, 2, 12, 36, 28, 39
  dfsPreOrder() {
    let result = [];

    const traverse = (node) => {
      // capture root node value
      result.push(node.data);
      // if left child exists, go left again
      if (node.left) traverse(node.left);
      // if right child exists, go right again
      if (node.right) traverse(node.right);
    };

    traverse(this.root);
    return result;
  }
  // post-order
  // left, right, root
  // 2, 12, 3, 28, 39, 36, 15
  dfsPostOrder() {
    let result = [];

    const traverse = (node) => {
      // if left child exists, go left again
      if (node.left) traverse(node.left);
      // if right child exists, go right again
      if (node.right) traverse(node.right);
      // capture root node value
      result.push(node.data);
    };

    traverse(this.root);
    return result;
  }

  // breadth first search - level by level
  // use a queue!
  // 15, 3, 36, 2, 12, 28, 39
  bfs() {
    let result = [];
    let queue = [];
    queue.push(this.root);
    while (queue.length) {
      let currentNode = queue.shift();

      result.push(currentNode.data);

      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    return result;
  }

  remove(data) {
    const removeNode = function (node, data) {
      if (node == null) {
        return null;
      }
      if (data == node.data) {
        // node has no children
        if (node.left == null && node.right == null) {
          return null;
        }
        // node has no left child
        if (node.left == null) {
          return node.right;
        }
        // node has no right child
        if (node.right == null) {
          return node.left;
        }
        // node has two children
        var tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };
    this.root = removeNode(this.root, data);
  }
}

const BST = new BinarySearchTree();
BST.insert(15);

BST.insert(3);
BST.insert(36);
BST.insert(2);
BST.insert(12);
BST.insert(28);

BST.insert(39);

console.log(BST.find(3));
console.log(BST.dfsInOrder());
