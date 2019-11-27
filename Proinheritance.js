document.getElementById("heading").innerHTML="Prototype Inheritance";

function Person(first, last, age, gender, interests) {
    this.name = {
      first,
      last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  };

  Person.prototype.greeting = function() {
    alert('Hi! I\'m ' + this.name.first + '.');
  };


  let person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);


  function Teacher(first, last, age, gender, interests, subject) {
    Person.call(this, first, last, age, gender, interests);
  
    this.subject = subject;
  }

  Teacher.prototype=Object.create(Person.prototype);
  Teacher.prototype.constructor=Teacher;

  Teacher.prototype.greeting = function() {
    let prefix;
  
    if (this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
      prefix = 'Mr.';
    } else if (this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
      prefix = 'Mrs.';
    } else {
      prefix = 'Mx.';
    }
  
    alert('Hello. My name is ' + prefix + ' ' + this.name.last + ', and I teach ' + this.subject + '.');
  };
