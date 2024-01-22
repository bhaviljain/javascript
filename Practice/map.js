
const arr = [1,4,5,2,9]

// function double(x){
//     return x*2
// }
// const op = arr.map(double)
//dono likh sakte hai
const op = arr.map((x)=>(x*4))

console.log(op);


//map method is used when we want transformation of whole array. means when we want to change the array 


const newMap = new Map();
newMap.set('name' , ['Bhavil','jain'])
newMap.set('age', 23)
console.log(newMap);

newMap.set('open', 11)
.set('close', 23)
.set(true , 'we are open')
.set(false , 'closed')
const arr2 = [1,2]
newMap.set(arr2 , 'test')
const time  = 12
console.log(newMap.get(time > newMap.get('open') && time < newMap.get('close')));
console.log(newMap.get(arr2));

