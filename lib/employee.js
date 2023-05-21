class Employee {
    constructor(id, name, email, info, job = 'Employee') {
        this.id = id;
        this.name = name;
        this.email = email;
        this.info = info;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    getInfo() {
        return this.info;
    }
    getRole() {
        return "Employee";
    }
}

module.exports = Employee;