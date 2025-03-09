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

function printListReverseLoop(list) {
    tmp = list;
    arr = [];
    arrRev = [];

    while(tmp)  {
        arr.push(tmp.value);
        tmp = tmp.next;
    }

    arrRev = arr.reverse();

    for ( let i = 0; i < arrRev - 1; i++){
        alert(arr[i]);
    }
}

