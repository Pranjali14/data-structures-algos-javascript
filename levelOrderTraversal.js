class Tree {

    constructor(nodes) {
        this.root = null;
    }




}

class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

function main() {
    const binaryTree = new Tree();
    binaryTree.root = new Node(1);
    binaryTree.root.left = new Node(2);
    binaryTree.root.right = new Node(3);

    binaryTree.root.left.left = new Node(4);
    binaryTree.root.left.left.right = new Node(6);
    binaryTree.root.left.right = new Node(7);
    binaryTree.root.right.right = new Node(5);
    //inorderTravesal(binaryTree.root);
    bottomView(binaryTree.root);
    leftRightTraversal(binaryTree.root);

}

function leftRightTraversal(root) {
    const viewMap = {}
    traversalLeftView(root, viewMap, 0);
    let rightView = [], leftView = [];

    for (key in viewMap) {
        let val = viewMap[key];
        leftView.push(val[0]);
        rightView.push(val[val.length - 1]);
    }

    console.log('leftView : ', leftView, ' rightView : ', rightView);
}

function inorderTravesal(node) {
    if (node === null) {
        return;
    }
    inorderTravesal(node.left);
    console.log(node.value);
    inorderTravesal(node.right);
}

function bottomView(node) {
    // Todo : create a map of last node values while traversing  then get the final values
    let viewMap = {};
    let bottomView = [];
    let topView = [];
    preOrder(node, viewMap, 0);
    const keys = Object.keys(viewMap);
    keys.sort((a, b) => {
        return a - b;
    });
    for (let i = 0; i < keys.length; i++) {
        let val = viewMap[keys[i]];
        bottomView.push(val[val.length - 1]);
        topView.push(val[0]);
    }

    console.log('topView : ', topView, ' bottomView', bottomView);
}

function preOrder(node, bottom, index) {
    if (node === null) {
        return;
    }
    if (bottom[index] !== undefined) {
        bottom[index].push(node.value);
    } else {
        bottom[index] = [];
        bottom[index].push(node.value);
    }
    preOrder(node.left, bottom, index - 1);
    preOrder(node.right, bottom, index + 1);
}

function traversalLeftView(node, left, index) {
    if (node === null) {
        return;
    }
    //inOrderTraversal with always have the left most in the first position in the array
    //get current index and push to the arr
    //increment the index, its the same index for both left and right


    let curIndex = index + 1;
    traversalLeftView(node.left, left, curIndex);
    let arr = left[curIndex - 1] || [];
    arr.push(node.value);

    left[index] = arr;
    traversalLeftView(node.right, left, curIndex);
}

main();