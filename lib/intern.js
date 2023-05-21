// Import 'Employee' constructor
const Employee = require("./Employee")

// 'Intern' constructor that extends from 'Employee' constructor
class Intern extends Employee{
    constructor(id, name, email, info){
        super(id, name, email)
        this.info = info
    }
    getInfo() {
        return this.info
    }
    getRole(){
        return "Intern"
    }
}
module.exports = Intern