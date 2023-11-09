// 1 - Write a code which can give grades to students according to theirs scores:
// 	80-100, A
// 	70-89, B
// 	60-69, C
// 	50-59, D
// 	0-49, F



let inputScore = Number(prompt("Enter the student's score:")); 


let calculateGrade=(score)=>{
  if (score >= 80 && score <= 100) {
    return "A";
  } else if (score >= 70 && score < 80) {
    return "B";
  } else if (score >= 60 && score < 70) {
    return "C";
  } else if (score >= 50 && score < 60) {
    return "D";
  } else if (score >= 0 && score < 50) {
    return "F";
  } else {
    return "Invalid score";
  }
}
let score = parseFloat(inputScore);
if (!isNaN(score)) {
  let grade = calculateGrade(score);
  console.log("The student's grade is: ${grade}");
} else {
  console.log("Invalid input. Please enter a valid score.");
}


// 2 - Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// 	September, October or November, the season is Autumn.
// 	December, January or February, the season is Winter.
// 	March, April or May, the season is Spring
// 	June, July or August, the season is Summer



// const userInput = prompt("Enter a month (e.g., January, February, etc.):").toLowerCase();

// if (userInput === "september" || userInput === "october" || userInput === "november") {
//     console.log("The season is Autumn.");
// } else if (userInput === "december" || userInput === "january" || userInput === "february") {
//     console.log("The season is Winter.");
// } else if (userInput === "march" || userInput === "april" || userInput === "may") {
//     console.log("The season is Spring.");
// } else if (userInput === "june" || userInput === "july" || userInput === "august") {
//     console.log("The season is Summer.");
// } else {
//     console.log("Invalid input. Please enter a valid month.");
// }





// 3 - Check if a day is weekend day or a working day. Your script will take day as an input.

//  	What is the day  today? Saturday
//   	Saturday is a weekend.

//   	What is the day today? saturDaY
//   	Saturday is a weekend.

//   	What is the day today? Friday
//   	Friday is a working day.

//   	What is the day today? FrIDAy
//   	Friday is a working day.



    // let userInput = prompt("What is the day today?").toLowerCase();

    // if (userInput === "saturday" || userInput === "sunday") {
    //     console.log("${userInput} is a weekend.");
    // } else if (userInput === "monday" || userInput === "tuesday" || userInput === "wednesday" || userInput === "thursday" || userInput === "friday") {
    //     console.log("${userInput} is a working day.");
    // } else {
    //     console.log("Invalid input. Please enter a valid day.");
    // }



//     
// 4 - Write a program which tells the number of days in a month.

// Enter a month: January
// January has 31 days.

// Enter a month: JANUARY
// January has 31 day

// Enter a month: February
// February has 28 days.

// Enter a month: FEbruary
// February has 28 days.

// const monthInput = prompt("Enter a month:").toLowerCase();

// let daysInMonth;

// if (monthInput === "january" || monthInput === "march" || monthInput === "may" || monthInput === "july" || monthInput === "august" || monthInput === "october" || monthInput === "december") {
//     daysInMonth = 31;
// } else if (monthInput === "april" || monthInput === "june" || monthInput === "september" || monthInput === "november") {
//     daysInMonth = 30;
// } else if (monthInput === "february") {
//     daysInMonth = "28 days";
// } else {
//     daysInMonth = "Invalid month";
// }

// console.log("${monthInput.charAt(0).toUpperCase() + monthInput.slice(1)} has ${daysInMonth}."");
