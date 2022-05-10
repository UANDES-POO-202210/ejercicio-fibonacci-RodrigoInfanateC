
let fs = require('fs');

fs.readFile('text.txt', 'utf-8', (err, data) => {
  if(err) {
    console.log('error: ', err);
  } else {
    console.log(data);
  }
  let numero = data;
  console.log(fibonacci(numero));
});

function fibonacci(n){
    if (n == 0){
        return 0;
    }
    if (n == 1){
        return 1;
    }
    else {
        return fibonacci(n-1) + fibonacci(n-2);
    }
}
