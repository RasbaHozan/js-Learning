let  arr=[5,7,5,2, 1];
let  i = 0;
   for (i = 0; i < arr.length / 2; i++) {
       if (arr[i] !== arr[arr.length - 1 - i]
       ) {
        console.log("arr is not palindrome") 
        } else { 
            console.log("arr is palindrome")
    }
}