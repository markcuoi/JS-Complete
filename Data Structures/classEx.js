class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance Method
  // Methods will be added to .prototype property
  calcAge() {
    return 2022 - this.birthYear;
  }

  // setter and getter useful for data validation
  get age() {
    return 2037 - this.birthYear;
  }

  // try to set a property that already exist
  set fullName(name) {
    if (name.includes("")) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static Method
  // useful for helper function about class, or constructor function
  static hey() {
    console.log("Hey Hey");
  }
}

const jessica = new PersonCl("Jessica", 1996);
console.log(jessica);

PersonCl.hey();


class StudentCl extends PersonCl{
  constructor(fullName, birthYear, course){
  // Always needs to happen first
  super(fullName, birthYear)
  this.course = course
}

}


// Encapsulation is to keep some properties and methods private inside the class

// They are not accessible from outside of the class
// First: to prevent code outside of the class to accidentally manipulate our date inside the class
// Second: when we expose only a small interface, a small API consisting only of a few public method
// then we can change all the other internal method with more confidence because we can be sure that 
//the external code does not rely on these private methods therefore our code will not break
// when we do internal changes 

class Account{

  // 2) private fields
  #movements =[]
  
  constructor(owner, currency, pin){
    this.owner = owner
    this.currency=currency
    this.pin=pin

   //protected prop
    this._movements = []
    

    this.locale = navigator.language
  }

  //Public interface
  getMovements(){
    return this._movements
  }

  //public interface
  deposit(val){
    this._movements.push(val)
  }


  withdraw(val){
    this.deposit.push(-val)
  }
}



// For Regular Object in JS
// get: read method as property, but still use calculation before
// set: change value to method as property

// Static class methods are defined on the class itself.
// You cannot call a static method on an object, only on an object class.
// static method  attach to the constructor not
// availabel on property of object






/////////////////////////////////////////////////////////////

const Person = function(firstName, birthYear){
  this.firstName = firstName
  this.birthYear = birthYear
}

Person.prototype.calcAge = function(){
  console.log(2037 = this.birthYear)
}

const Student  = function(firstName, birthYear, course){
  // regular function call, this keyword set to undefined, using call for Person call and set this
  // Call the function and set this keyword inside the function
  Person.call(this ,firstName, birthYear)
  this.course = course
}

// Linking prototype
Student.prototype = Object.create(Person.prototype)

Student.prototype.introduce = function(){
  console.log(`My name ${this.firstName} and i study ${this.course}`)
}

const mike = new Student('Mark', 2020, 'Computer Science')
mike.introduce()
mike.calcAge()
