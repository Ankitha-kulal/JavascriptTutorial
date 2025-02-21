//You are creating a website for your college.Create a class User with 2 properties
//name and email. It also has a method called viewData() that allows user to view web data
let DATA = "Secret information";
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    viewData() {
        console.log("data =", DATA);
    }
}

//Create a new class called admin where they can edit

class Admin extends User {
    constructor(name, email) {
        super(name, email);
    }
    editData() {
        DATA = "New edited Value";
    }
}
let student1 = new User("Ankitha", "abc@gmail.com");
let student2 = new User("ABC", "abc1@gmail.com");

let teacher1 = new User("Dean", "dean@gmail.com");
let admin1 = new Admin("admin", "admin@gmail.com");

