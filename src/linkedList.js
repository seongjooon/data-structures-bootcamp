/*
 * Complexity: 시간 복잡도에 대해서 생각해보세요.
 */

var LinkedList = function () {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function (value) {
    const newNode = Node(value);
    if (!list.head) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function () {
    const curHeadValue = list.head.value;
    if (!curHeadValue) return undefined;
    list.head = list.head.next;

    return curHeadValue;
  };

  list.contains = function (target) {
    let currentNode = list.head;

    while (currentNode) {
      if (currentNode.value === target) return true;
      currentNode = currentNode.next;
    }

    return false;
  };

  return list;
};

var Node = function (value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};
