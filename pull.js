function getYearOfBirth(age) {
    if (age < 0) {
    throw new Error ("Age cannot be negative");
    }

    const yearOfBirth = 2019 - age;
    return yearOfBirth;
}

function createGreeting(name, age) {

    return `Hi, my name is ${name} and I'm ${age} years old. I was born in ${getYearOfBirth(age)}`;
}

try {
const  greeting1 = createGreeting("Chris", "29");}
catch (Error) {
    console.log (error.message);
}

console.log(greeting1);
