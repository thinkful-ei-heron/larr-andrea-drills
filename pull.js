function getYearOfBirth(age) {

    const yearOfBirth = 2019 - age;
    return yearOfBirth;
}

function createGreeting(name, age) {

    return `Hi, my name is ${name} and I'm ${age} years old. I was born in ${getYearOfBirth(age)}`;
}

const  greeting1 = createGreeting("Chris", "29");
console.log(greeting1);
