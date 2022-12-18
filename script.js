const num1 = 69;
const num2 = 14;
const num3 = 37.5;
const num4 = 94;
const side1 = 14;
const side2 = 64;
const side3 = 37;

// exe 1

// Print “Number is even” if the num1 is divisible by 2.
// Else print “Number is odd” if the num1 returns a remainder when divided by 2.

if (num1 % 2 == 0) {
    console.log("Number is even");
} else {
    console.log("number is odd");
}

// exe 2
const variable2 = "81";
// check if variable2 is number.
// if true print “Variable is not a number”
// if false print “Variable is a valid number”
// search about isNan()

if (isNaN(variable2)) {
    console.log("Variable is not a number");
} else {
    console.log("Variable is a valid number");
}

// exe 3

// Print "num1 is the largest" if num1>num2.
// Print "num2 is the largest" if num1<num2.
// Else print "num1 and num2 are equal".

if (num1 > num2) {
    console.log("num1 is the largest");
} else if (num2 > num1) {
    console.log("num2 is the largest");
} else {
    console.log("num1 and num2 are equal");
}

// exe 4

// Print num1 is the largest if num1>num2 and num1>num3.
// Print num2 is the largest if num2>num1 and num2>num3.
// Else print num3.

if (num1 > num2 && num1 > num3) {
    console.log("num1 is the largest");
} else if (num2 > num1 && num2 > num3) {
    console.log("num2 is the largest");
} else {
    console.log("num3 is the largest");
}

// exe 5

// Print “Equilateral triangle.” if values for all side1, side2 and side3 are equal.
// Print “Isosceles triangle.” if values for side1 is equal to side2 or side2 is equal to side3
// Else “Scalene triangle.” since values of all sides are unequal.

if (side1 === side2 === side3) {
    console.log("Equilateral triangle.");
} else if (side1 === side2 || side2 === side3) {
    console.log("Isosceles triangle.");
} else {
    console.log("Scalene triangle");
}

// exe 6
const start = 11;
const end = 70;
// Print “Between the range” if num4 is between start and end values
// Else Print “Outside the range” since num is outside start and end values.

if (num4 >= 11 && num4 <= 70) {
    console.log("Between the range");
} else {
    console.log("Outside the range");
}

// exe 7
const operator = "module";
// Print result of num1+num2 if operation is “add”
// Print result of num1-num2 if operation is “subtract”
// Print result of num1*num2 if operation is “multiply”
// Print result of num1/num2 if operation is “divide”
// Print result of num1%num2 if operation is “modulus”
// Else print “Invalid operation”


switch (operator) {
    case "add": console.log(num1 + num2);
        break;
    case "subsract": console.log(num1 - num2);
        break;
    case "multiply": console.log(num1 * num2);
        break;
    case "divide": console.log(num1 / num2);
        break;
    case "modulus": console.log(num1 % num2);
        break;
    default: console.log("Invalid operation");
}

// exe 8
const year = 2024;
// If year is divisble by 4 and not divisble by 100 then print “leap year”.
// Or if year is divisible by 400 then print “leap year”.
// Else print “not a leap year”.

if (year % 4 == 0 && year % 100 !== 0 || year % 400 == 0) {
    console.log("leap Year");
} else {
    console.log("Not a leap year");
}

// exe 9
const mark = 73;
// Print “S grade” if marks is between 90 and 100.
// Print “A grade” if marks is between 80 and 90.
// Print “B grade” if marks is between 70 and 80.
// Print “C grade” if marks is between 60 and 70.
// Print “D grade” if marks is between 50 and 60.
// Print “E grade” if marks is between 40 and 50.
// Print “Student has failed” if marks is between 0 and 40.
// Else print “Invalid marks”.

if (mark > 90 && mark <= 100) {
    console.log("S grade");
} else if (mark > 80 && mark <= 90) {
    console.log("A grade");
} else if (mark > 70 && mark <= 80) {
    console.log("B grade");
} else if (mark > 60 && mark <= 70) {
    console.log("C grade");
} else if (mark > 50 && mark <= 60) {
    console.log("D grade");
} else if (mark > 40 && mark <= 50) {
    console.log("E grade");
} else if (mark >= 0 && mark <= 40) {
    console.log("Student has failed");
} else {
    console.log("Invalid marks");
}

// exe 10
const month = 2;
// If month is outside the range of 1 and 12 print “Invalid month”.
// If month is equal to 2 ie, February print “29 days” if leap year else print “28 days” .
// Else if month is equal to 4, 6, 9 or 11 print “30 days”.
// Else print “31 days”.


if (month >= 1 && month <= 12) {
    if (month == 2 && year % 4 == 0) {
        console.log("29 days");
    } else if (month == 2) {
        console.log("28 days")
    } else if (month == 4 || month == 6 || month == 9 || month == 11)
        console.log("30 days");
} else {
    console.log("31 days")
}

if (month <= 1 && month >= 12) {
    console.log("Invalid month");
}
