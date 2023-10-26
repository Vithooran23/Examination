// Q1
var a = {};
console.log(a);

// Q2
var person = {
    name: "Vithooran",
    age: 24,
    introduceYou: function() {
      console.log("Hello, my name is " + name );
    }
  };
  person.introduceYou();

//  Q3.
// Method 1
function greenStudent(student) {
    console.log("Hello " + student.name + ", welcome to the Coding School");
  }
  var student1 = {
    name: "Vithooran",
  };
  greenStudent(student1);

//   Method 2
  var introduceYou1 = function greenStudent1(student2) {
    console.log("Hello " + student2.name + ", welcome to the Coding School");
    
  }
  var student1 = {
        name: "Vithooran",
      };
      introduceYou1(student1);

// Method 3
      var object ={
        greetStudent2:function(student) {
            console.log(`Hello ${student.name}, Welcome to the coding scholl`);
        }
      }
      object.greetStudent2({name:"Vithooran"})


  

//Q4
var person1 = {
    firstName: "Vithooran",
    lastName: "Kandeeparaja",
    age: 24
  };
  console.log("First Name: " + person1.firstName);
  console.log("Last Name: " + person1.lastName);
  console.log("Age: " + person1.age);
  console.log("First Name: " + person1["firstName"]);
  console.log("Last Name: " + person1["lastName"]);
  console.log("Age: " + person1["age"]);

// Q5
  var person2 = {
    name: "Vithooran",
    age: 23,
  };
  person2.email = "john@example.com";
  console.log(person2);

//   Q6
const myObject = {
    name: "Vithooran",
    age: 24,
    city: "Jaffna"
  };
  console.log(myObject);
  delete myObject.city;
  console.log(myObject);

//Q7
// Sample object
const person3 = {
    name: "Piran",
    age: 30,
    job: "Developer",
  };
  // Method 1: Using hasOwnProperty()
  const propertyName1 = "age";
  if (person3.hasOwnProperty(propertyName1)) {
    console.log(`The property "${propertyName1}" exists in the object.`);
  } else {
    console.log(`The property "${propertyName1}" does not exist in the object.`);
  }
  // Method 2: Using the 'in' operator
  const propertyName2 = "location";
  if (propertyName2 in person3) {
    console.log(`The property "${propertyName2}" exists in the object.`);
  } else {
    console.log(`The property "${propertyName2}" does not exist in the object.`);
  }
// Q8
const student = {
    name: "Santhu",
    age: 20,
    studentID: "12230731",
  };
  const course = {
    courseName: "JavaScript",
    courseCode: "Python",
    instructor: "Professor Niroopana",
  };
  const studentCourse = { ...student, ...course };
  console.log(studentCourse);
// Q9.
const person_c = {
    name: "Shanu",
    age: 21,
    job: "Developer"
  };
  // Method 1: Using hasOwnProperty()
  if (person_c.hasOwnProperty("address")) {
    console.log("address is there");
  } else {
    console.log("address not found");
  }
  // Method 2: Using the 'in' operator
  if ("address" in person_c) {
    console.log("address is there");
  } else {
    console.log("address not found");
  }
  //Q10
  const book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
  };
  // Convert the object to a JSON string
  const bookJSON = JSON.stringify(book);
  console.log(bookJSON);
// Q11. 
  const students = [
    {
      name: "Thsa",
      age: 20,
      gpa: 3.5,
    },
    {
      name: "Ketha",
      age: 22,
      gpa: 3.8,
    },
    {
      name: "Tharsan",
      age: 19,
      gpa: 3.2,
    },
  ];
    console.log(students[0].name);
  console.log(students[1].age);
  console.log(students[2].gpa);