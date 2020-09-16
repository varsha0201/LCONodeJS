// let myYoutueVideo ={
//     title: 'Loos in JavaScript',
//     videoLenght: 15,
//     videoAuthor: 'Varsha',
//     videoDescription: 'This is the long video description.'
// }

// console.log(myYoutueVideo);

// console.log(`This is the video by '${myYoutueVideo.videoAuthor}' on '${myYoutueVideo.title}'.`);

//-----------------------------------------------------------------------

// let Course = {
//     courseName : 'JavaScript',
//     coursePrice : '$20',
//     courseAuthor : 'Varsha',
//     courseDescription : 'This is course for Advanced student.'
// }

// console.log(`Hey, new course has arrived by '${Course.courseAuthor}' on '${Course.courseName}' for only '${Course.coursePrice}'.`);

let myYoutueVideoOne ={
    title: 'Loos in JavaScript',
    videoLenght: 15,
    videoAuthor: 'Varsha',
    videoDescription: 'This is the long video description.'
}

let myYoutueVideoTwo ={
    title: 'Function in JavaScript',
    videoLenght: 15,
    videoAuthor: 'Varsha',
    videoDescription: 'This is the long video description.'
}


// let changeVideoLenght = function(myobject){
//     console.log(`This is the fucntion ${myobject.videoLenght} is this.`);
// }

// changeVideoLenght(myYoutueVideoOne);

let returnVideos = function(myobject1){
    return{
        formatOne :`This is the title ${myobject1.title}.`,
        formatTwo: `This is the title ${myobject1.title}.`,
    }
}

// console.log(returnVideos(myYoutueVideoOne));
let adOne = returnVideos(myYoutueVideoTwo)
console.log(adOne.formatTwo);