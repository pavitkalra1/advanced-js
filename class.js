document.getElementById("heading").innerHTML="Class";

class Person{
    constructor(first,last,age,gender,interests)
    {
        this.name={
            first,last
        };
        this.age=age;
        this.gender=gender;
        this.interests=interests;
    }
}

let person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);

class  Teacher extends Person{
    constructor(first, last, age, gender, interests, subject) {
    super(first, last, age, gender, interests);
    
    this.subject = subject;
  }
}
let teacher1=new Teacher('Dave','grwala',31,'male',['football','cookery'],'mathematics');
