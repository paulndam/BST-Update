class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  find(value) {
    if (!this.root) return false;

    let current = this.root;
    const foundIt = false;

    while (current && !foundIt) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }

    return false;
  }

  contain(value) {
    if (!this.root) return false;

    let current = this.root;
    let foundIt = false;

    while (current && !foundIt) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        foundIt = true;
      }
    }
    if (!foundIt) {
      return undefined;
    }
    return current;
  }
}

const tree = new BinarySearchTree();
tree.insert(50);
tree.insert(25);
tree.insert(65);
tree.insert(20);
tree.insert(35);
tree.insert(55);
tree.insert(75);

console.log(`----------  Inserting ------------`);
console.log(tree);

console.log(`----------  Finding ------------`);
console.log(tree.find(20));
console.log(tree.find(30));
console.log(`---------- Contains ------------`);
console.log(tree.contain(20));
console.log(tree.contain(300));
