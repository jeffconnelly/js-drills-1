'use strict';


function whoAmI(name, age) {
  if (typeof name !== "string" || typeof age !== "number" ){
    console.error("Arguments not valid");
    return;
  }
  console.log(`Hi my name is ${name} and I'm ${age} years old`);
  try{
    const yob = yearOfBirth(age);
    console.log(`I was born in ${yob}`);
  } catch(e){
    console.log(e.message);
  }
}

function yearOfBirth(age){
  if (age <= 0) throw new Error("Age can not be negative");
 return 2017-age;
}

whoAmI("Jeff", "twen");



