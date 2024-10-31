const N = 50;

NextPrime:
for(let i = 2; i <= N; i++) {

  for(let j = 2; j < i; j++) {
    if (i % j == 0) continue NextPrime; 
  }

  console.log(i);
}


