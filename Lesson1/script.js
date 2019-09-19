/*#1*/
let loop = (times = 0, cb = null) => {
  if(cb != null){
    for(let i = 0; i < times; i++){
      cb();
    }
  }
};

/*#2*/
let calculateArea = (width, length) => ({area: width*length, figure: 'Прямоугольник', input: `Ширина: ${width}, Длина: ${length}`});

/*#3*/
class Human{
  constructor(name, age, dateOfBirth){
    this.name = name;
    this.age = age;
    this.dateOfBirth = dateOfBirth;
  }

  displayInfo(){
    return `Name: ${this.name}, Age: ${this.age}, Date of birth: ${this.dateOfBirth}`;
  }
}

class Employee extends Human{
  constructor(name, age, dateOfBirth, salary, department){
    super();
    this.name = name;
    this.age = age;
    this.dateOfBirth = dateOfBirth;
    this.salary = salary,
    this.department = department
  }

  displayInfo(){
    return `${super.displayInfo()}, Salary: ${this.salary}, Department: ${this.department};`;
  }
}

class Developer extends Employee{
  constructor(){
    super();
  }

  makeManager(manager){
    return new Manager(manager);
  }

  deleteManager(manager){ 
    manager.developers = null;
    manager.addDeveloper = null;
    manager.deleteDeveloper = null;
  }
}

class Manager extends Employee{
  constructor(name, age){
    super();
    this.name = name;
    this.age = age;
    this.developers = [1,2,3]
  }

  addDeveloper(){
    this.developers.push(new Developer());
  }
  deleteDeveloper(index, count){
    this.developers.splice(index, count);
  }
}



let Dev = new Employee('Danila', 21, '03.10.1997', 80000, 'Front-End');

let t = new Manager('t', 22);
let dev = new Developer();
