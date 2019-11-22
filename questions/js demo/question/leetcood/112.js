
function depth(treeRoot, target) {
  const result = [];
  helper(treeRoot, [], target, result);
  return result;
}

function helper(node, tmp, target, result) {
  const val = node.val;
  tmp.push(val);
  
  if(target - val === 0){
    result.push([...tmp]);
    return true;
  }
  
  if(node.left){
    helper(node.left, tmp, target - val, result);
    tmp.length -= 1;
  }
  
  if(node.right){
    helper(node.right, tmp, target -val, result);
    tmp.length -= 1;
  }
}

const binaryTree = {
  val: 5,
  left: {
    val: 4,
    left: {
      val: 11,
      left: {
        val: 7
      },
      right: {
        val: 2
      }
    }
  },
  right: {
    val: 8,
    left: {
      val: 13,
    },
    right: {
      val: 4,
      right: {
        val: 5
      }
    }
  }
};

console.log(depth(binaryTree, 22));


