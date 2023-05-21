// Import 'Employee' constructor
const Employee = require("./Employee")

// 'Engineer' constructor that extends from 'Employee' constructor
class Engineer extends Employee{
    constructor(id, name, email, info){
        super(id, name, email, info)
        this.info = info
    }
    getInfo() {
        return this.info
    }
    getRole(){
        return "Engineer"
    }
}
module.exports = Engineer