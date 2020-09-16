const days = ['Mon', 'Tue', 'Wed', 'Thr', 'Fri','Sat']

// console.log(days[0]);

// days.forEach(function(day, index){
//     console.log(`Start with ${index+1} -- ${day}`);
// })

// for (let index = days.length -1; index >=0; index --){
//     console.log(days[index]);
// }

const myTodo = []

myTodo.push('Buy Bread')
myTodo.push('Go to Gym')
myTodo.push('Record videos')

// myTodo.forEach(function(todo, index){
//     console.log(`Your task no. ${index} is: ${todo}`);
// })

for (let index = myTodo.length -1; index >=0; index --){
    console.log(myTodo[index]);
}