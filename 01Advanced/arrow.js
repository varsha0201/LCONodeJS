// const Hello = () => {
//     console.log('Hello');
// }

// Hello()

// const todos =  [{
//     title: 'Buy Bread',
//     isDone : true,
// }, {
//     title : 'Go to gym',
//     isDone : true,
// }, {
//     title : 'record the video',
//     isDone : false,
// }]

// const thingsDone = todos.filter((todo) => todo.isDone === true)

// const thingsNotDone = todos.filter((todo) => {
//      return todo.isDone === false
// });

// console.log(thingsNotDone);


// console.log(thingsDone);

const cameras = {
    price : 600,
    weight : 20000,
    myDes : function (){
        return ` This cannon camera is of ${this.price}.`
    }
}

console.log(cameras.myDes());