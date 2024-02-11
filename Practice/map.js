
// const arr = [1,4,5,2,9]

// // function double(x){
// //     return x*2
// // }
// // const op = arr.map(double)
// //dono likh sakte hai
// const op = arr.map((x)=>(x*4))

// console.log(op);
// function binary(x)
// {
//     return x.toString(2)
// }
// const output = arr.map(binary)
// console.log(output);
// //map method is used when we want transformation of whole array. means when we want to change the array 


const newMap = new Map();
newMap.set('name' , ['Bhavil','jain'])
newMap.set('age', 23)
newMap.set('agee', 21)
newMap.delete('agee')
console.log(newMap);

// // newMap.set('open', 11)
// // .set('close', 23)
// // .set(true , 'we are open')
// // .set(true , 'closed')
// // const arr2 = [1,2]
// // newMap.set(arr2 , 'test')
// // const time  = 12
// // console.log(newMap.get(time > newMap.get('open') && time < newMap.get('close')));
// // console.log(newMap.get(arr2));

// const user = [
//     {name:"Bhavil", lastName: "Jain" },
//     {name:"tick", lastName: "yol"},
//     {name:"Bhavil", lastName: "aaa"},
// ]

// const opp = user.map((x)=>x.name)
// console.log(opp);

let originalArray = [3,1,5,10,2];

// Function to reverse the array without using reverse()
function reverseArray(arr) {
  let start = 0;
  let end = arr.length - 1;

  // Swap elements from start to end
  while (start < end) {
    // Swap elements at start and end indices
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    // Move indices towards each other
    start++;
    end--;
  }
}

// Call the reverseArray function to reverse the original array
reverseArray(originalArray);

// Now, originalArray is reversed
console.log(originalArray);


