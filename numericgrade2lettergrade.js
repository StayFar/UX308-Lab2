// This program *converts* **numeric grade** to **letter grade**

function getLetterGrade(grade) {
    if (grade >= 100) {
      console.log("You got an A+.");
    } else if (grade >= 95) {
      console.log("You got a A+.");
    } else if (grade >= 90) {
      console.log("You got a A+.");
    } else if (grade >= 85) {
      console.log("You got a A.");
    } else if (grade >= 80) {
        console.log("You got a A-.");  
    } else if (grade >= 79) {
        console.log("You got a B+.");    
    } else if (grade >= 75) {
        console.log("You got a B.");    
    } else if (grade >= 70) {
        console.log("You got a B-.");
    } else if (grade >= 69) {
        console.log("You got a C+.");
    } else if (grade >= 65) {
        console.log("You got a C.");  
    } else if (grade >= 60) {
        console.log("You got a C-.");  
    } else if (grade >= 59) {
        console.log("You got a D+.");
    } else if (grade >= 55) {
        console.log("You got a D.");
    } else if (grade >= 50) {
        console.log("You got a D-.");
    } else {
      console.log("You got an F.");
    }
  }
  const numericGrade = 100; // Replace this value with the grade to test
getLetterGrade(numericGrade);