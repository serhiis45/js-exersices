function unique(arr) {
    let uniqued = [];
    arr.forEach((element) => {
      if(!uniqued.includes(element)) {
        uniqued.push(element);  
      }
    });
    return uniqued;
  }
  
  let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  console.log( unique(strings) ); // Hare, Krishna, :-OX