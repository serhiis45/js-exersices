// Task: use the for loop to output even numbers from 2 to 10.

// 1st implementation
for(let i = 2; i <= 10; i++) {
    if( i % 2 == 0 ) {
        console.log(i);
    }
}

// 2nd implementation
let i = 2;
while(i < 11) {
    if( i % 2 == 0 ) {
        console.log(i);
    }
    i++;
}