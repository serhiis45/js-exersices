let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

function printListLoop(list) {
    tmp = list;

    while(tmp)  {
        alert(tmp.value);
        tmp = tmp.next;
    }
}

function printListRec(list) {
    alert(list.value);

    if(list.next) {
        printListRec(list.next);
    }
}
