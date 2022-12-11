setTimeout(() => {
    console.log("hello");
    document.title = "Hello the title is changed";
},2000);

let fName = "Hangthim";
let lName ='Limbu';
let fullName = ${fName} ${lName};  //THis all is declaring variable
const country = "Nepal";
let rollNo = 21;
let isMale = true;


function handleButtonClick(greetText, rollNumber, isMale)   
 {
    console.log("here");
    let time = new Date();
    // alert(greetText);//calling through parameter
    let gender = isMale ? "Male" : "Female";
    alert(`Hi ${greetText}, The time is ${time}. Your roll number is ${rollNumber}. Your gender is ${gender}`);//This is `tilt`ed commaed string
    // here greenText is the parameter sent in the function handleButtonClick
 }