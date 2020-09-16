var whoIsHere = 'user'

if(whoIsHere === 'user'){
    console.log("Greeting message for 'user'.")
    console.log('Allow access to view all courses.')

} else if(whoIsHere === 'teacher'){
    console.log('Greeting message for teacher.')
    console.log('Allow access to view teachers courses.')
} else{
    console.log('Message: Please verify your email.')
}

//----------------------------------------------------------------------

// Grade problem
// student marks:

// 10- Amazing
// 5 - Good
// 3 - poor
// 0 - fail

var marks = 7
if(marks == 10){
    console.log('Amazing')
} else if (marks >= 5){
    console.log('Good')
} else if( marks >=3 && marks <=5){
    console.log('Poor')
} else{
    console.log('fail')
}