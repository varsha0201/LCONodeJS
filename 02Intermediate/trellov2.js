let myTodos = {
    day : 'Mon',
    meetings : 0,
    meetDone : 0,
}

let addmetting = function(todo, meet=0){
    todo.meetings = todo.meetings + meet
}

let doneMetting = function(todo, meet=0){
    todo.meetDone = todo.meetDone - meet
}

let resteDay = function(todo){
    todo.meetings = 0
    todo.meetDone = 0
}

let getSummaryDay = function(todo){
    let meetLeft = todo.meetings + todo.meetDone
    return `You have ${meetLeft} left for a day.`
}


addmetting(myTodos, 8)
doneMetting(myTodos, 5)


console.log(myTodos)
console.log(getSummaryDay(myTodos));