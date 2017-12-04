'use strict';


function whoAmI(name, age) {
  console.log(`Hi my name is ${name} and I'm ${age} years old`);
  const yob = yearOfBirth(age);
  console.log(`I was born in ${yob}`);
}

function yearOfBirth(age){
 return 2017-age;
}

whoAmI('Jeff', 5);