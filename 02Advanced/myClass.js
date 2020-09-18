class User {
    constructor(firstName, lastName, credits){
        this.firstName = firstName;
        this.lastName = lastName;
        this.credits = credits;
    }

    getFullName(){
        let fullname = `${this.firstName} ${this.lastName} is my full name.`;
        return fullname;
    }

}

class Teacher extends User{
    constructor(firstName, lastName, credits, subject){
        super(firstName, lastName, credits);
        this.subject = subject;

    }
    getFullName(){
        let fullname = `${this.firstName} ${this.lastName} is my full name and I teach ${this.subject}.`;
        return fullname;
    }
}


const john = new Teacher('John', 'Anderson', 34, 'English');
// console.log(john);
console.log(john.getFullName());


// const sammy = new User();
// console.log(sammy);