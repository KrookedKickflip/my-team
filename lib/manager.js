// Import 'Employee' constructor
const Employee = require("./Employee")

// 'Manager' constructor that extends from 'Employee' constructor
class Manager extends Employee{
    constructor(id, name, email, info){
        super(id, name, email)
        this.info = info
    }
    getInfo() {
        return this.info
    }
    getRole(){
        return "Manager"
    }
}
module.exports = Manager