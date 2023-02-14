// (example 1)
/*
var cohortOneStudents = ["Sable", "David", "Joey", "Nick", "Tommy", "Connor", "Charles", "Russ", "Bobby", "Josh", "Nikki", "Matt", "Dale", "Sydney"]

for (var i = 0; i <cohortOneStudents.length; i++){
    console.log(cohortOneStudents[i]);
}
*/
//----------------------------------------------------------------------------------

// (example 2)
/*
var hobbies = ["Running", "Reading", "Coding", "Learning", "Cooking"]

for (var i = 0; i < hobbies.length; i++){
    console.log(`One of my interests is: ${hobbies[i]}.`);
}
*/
//----------------------------------------------------------------------

//(example 3)

var hobbies = ["Running", "Reading", "Coding", "Learning", "Cooking"]

for (var i = 0; i < hobbies.length; i++){
    if (i === 2){
        console.log(`My absolute favorite interest is: ${hobbies[2]}.`)
    } else {
     console.log(`One of my interests is: ${hobbies[i]}.`);
    }
}
