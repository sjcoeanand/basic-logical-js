const isPalindrome = (item) => {
    let toArray = item.toString().split('');
    console.log("toArray", toArray);
    let reverseString = toArray.reverse().join('')
    console.log("rev", reverseString);
    return (item == reverseString) ? true : false
}
console.log("isPalindrome('abam')", isPalindrome('12121'));