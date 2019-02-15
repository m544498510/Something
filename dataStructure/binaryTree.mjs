import Queue from '../model/Queue';

const binaryTree = {
  root: 'A',
  left: {
    root: 'B',
    left: {
      root: 'D',
      left: {
        root: 'H'
      },
      right: {
        root: 'I'
      }
    },
    right: {
      root: 'E',
      right: {
        root: 'J'
      }
    }
  },
  right: {
    root: 'C',
    left: {
      root: 'F',
      right: {
        root: 'K'
      }
    },
    right: {
      root: 'G'
    }
  }
};

function depthFirstOrder(tree, result = []){
  result.push(tree.root);
  if(tree.left){
    depthFirstOrder(tree.left, result);
  }
  if(tree.right){
    depthFirstOrder(tree.right, result);
  }
  return result;
}
console.log(depthFirstOrder(binaryTree));

function breathFirstOrder(tree){
  const result = [];
  const queue = new Queue();
  queue.push(tree);
  while(!queue.isEmpty()){
    const node = queue.pop();
    result.push(node.root);
    if(node.left){
      queue.push(node.left);
    }
    if(node.right){
      queue.push(node.right);
    }
  }
  return result;
}
console.log(breathFirstOrder(binaryTree));