function printNumber(n) {
    for(let i = 1; i <= n; i++) {
        if(i%3 === 0 && i%5 === 0 ) {
            console.log('AliandSimbi');
        } else if (i%5 === 0) {
            console.log("Simbi");
        } else if (i%3 === 0) {
            console.log("Ali");
        } else {
            console.log(i);
        }
    }
}

printNumber(100);