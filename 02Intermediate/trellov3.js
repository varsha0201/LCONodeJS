// let myTodos = {
//     day: 'Monday',
//     meetings : 0,
//     meetingDone : 0,


//     addMeeting: function(){
//         console.log(this);
//     }
// }

// let myTodosTwo ={
//     day : 'Tuesday',
//     meetings : 12,
//     meetingDone : 3,

//     addMeeting: function(){
//         console.log(this);
//     }
// }



// myTodos.addMeeting()
// myTodosTwo.addMeeting()


let myTodos ={
    day : 'Wensday',
    meetings : 0,
    meetingDone: 0,


    addMeeting : function(num){
        this.meetings = this.meetings + num
    },

    DoneMeetings : function(num){
        this.meetingDone = this.meetingDone - num
    },

    summary : function(num){
        daymeetings = this.meetings + this.meetingDone
        return `Meetings for the day are ${daymeetings}.`
    }
}

myTodos.addMeeting(10)
myTodos.DoneMeetings(5)

console.log(myTodos)

console.log(myTodos.summary())
