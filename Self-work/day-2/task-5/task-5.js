//Arry References

let arr1 = ['a', 'b'];

let arr2 =['a','b']

console.log(arr1==arr2)
// output false.

console.log(arr1===arr2);
// false.
// जब आप एक Array बनाते हैं (let arr1 = ['a', 'b']), तो यह मेमोरी में एक नया ऑब्जेक्ट बनाता है।
// जब आप दूसरा Array बनाते हैं (let arr2 = ['a', 'b']), तो वह भी एक नया ऑब्जेक्ट बनाता है, भले ही दोनों का कंटेंट एक जैसा हो।
// अब जब आप arr1 == arr2 या arr1 === arr2 करते हैं, तो JavaScript रेफरेंस (यानी मेमोरी में उनका पता/identity) तुलना करता है, ना कि उनका actual content.


let arr = ['a', 'b'];

let arrCopy = arr;
console.log(arrCopy);
arrCopy.push('c');
console.log(arr);
console.log(arr==arrCopy);
// जब आप let arrCopy = arr; करते हैं, तो shallow copy होती है, यानी reference copy होता है।
// क्योंकि दोनों वेरिएबल्स एक ही array को point कर रहे हैं, इसलिए उनका reference equal है then true ।


// constant Arrays
const a=[1,2,3];

a.push(4);
console.log(a);

a.pop();
console.log(a);

// a=[1,2,3];
// console.log(a);



// Nested Arrays

let nums = [[2,3],[3,6],[4,8]];
console.log(nums);

console.log(nums[0]);
console.log(nums[0][1]);
console.log(nums[1][1]);
console.log(nums[2][1]);














