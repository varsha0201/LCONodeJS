let isVerified = true
let isLoggIn = true
let hasPaymentToken = true
let isGuest = true

if(isVerified && isLoggIn && hasPaymentToken){
    console.log('Greeting message to user')
} else if (isVerified || isLoggIn){
    console.log('All free preview')
} else{
    console.log('Message: Please enter your credentials.')
}