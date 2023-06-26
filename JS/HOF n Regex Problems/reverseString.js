let input = "Hello World"

setTimeout(() => {
    console.log(Array.from(input).reverse().join(""));
},2000)