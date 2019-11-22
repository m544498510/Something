import LinkedList from '../../model/LinkedList.mjs';

const l1 = new LinkedList(2);
l1.add(4);
l1.add(3);

const l2 = new LinkedList(5);
l2.add(6);
l2.add(4);

//must console [7,0,8]
console.log(addLinkedList(l1, l2).toArray());

function addLinkedList(l1, l2) {
  const result = new LinkedList();
  let node1 = l1.head;
  let node2 = l2.head;
  let carry = 0;
  
  while (node1 || node2 || carry){
    const val1 = node1 ? node1.value : 0;
    const val2 = node2 ? node2.value : 0;
    let sum = val1 + val2 + carry;
    carry = 0;
    if(sum >= 10){
      sum = sum % 10;
      carry = 1;
    }
    result.add(sum);
    node1 = node1.next;
    node2 = node2.next;
  }
  return result;
}


