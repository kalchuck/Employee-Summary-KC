const Employee = require("./employeeclass");

class Intern extends Employee{
    constructor(school){
        super(name, id, title);
        this.school = school;

       }
        getSchool(){

        }

        getRole(){
            return Intern;
        }
    }