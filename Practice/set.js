const newSet = new Set(['hello', 'bhavil' ,'hello'])
console.log(newSet);
console.log(typeof (newSet));

console.log(newSet.has('hello'));
console.log(newSet.add('hell'));
console.log(newSet);

const staff = ['waiter' , 'manager' ,'waiter']

const StaffUique = [...new Set(staff)] //spread operator is madad se object ko array kiya
console.log(StaffUique);
console.log(typeof(StaffUique)); //object hai isko array mein convert karna hai

//set store unique elements
//set are iterable
//set are used to check whethere that particular item is there or not.
//in set we cant retreive the values so better to use array
