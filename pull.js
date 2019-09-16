function getYearOfBirth(age) {
     if (age < 0) {
    throw new Error ("Age cannot be negative");
    }

    const yearOfBirth = 2019 - age;
    return yearOfBirth;
}

function createGreeting(name, age) {

    if (!(typeof(name) === "string")) {
        throw new Error ("Name must be a string");
    }
    else if (!(typeof(age) === "number")) {
        throw new Error ("Age must be a number");
    }

    return `Hi, my name is ${name} and I'm ${age} years old. I was born in ${getYearOfBirth(age)}`;
}

try {
    const  greeting1 = createGreeting("Chris", 29);
    console.log(greeting1);
}
catch (error) {
    console.log (error.message);
}

