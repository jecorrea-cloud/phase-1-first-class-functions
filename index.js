// //First class functions 

// //Define functions
//   function runFiveMiles() {
//     console.log('Go for a five-mile run');
//   } 

//   function liftWeights() {
//     console.log('Pump iron');
//   }
  
// //Define a calling function with a callback parameter
//   function exerciseRoutine(postRunActivity) {
//     runFiveMiles();
//     postRunActivity();
//   } 


//   function Monday() {
//     exerciseRoutine(liftWeights);
//   }

/* Syntax to use inline functions as parameters

exerciseRoutine(function() {
  console.log('Stretch! Work that core!');
});

OR

exerciseRoutine(() => {
  console.log('Stretch! Work that core!');
});

OR

exerciseRoutine(()=>console.log(`Stretch! Work that core!`));

*/

/*To make a function return another named one

First make a named one:

function morningRoutine(exercise) {
  let breakfast;

  if (exercise === liftWeights) {
    breakfast = 'protein bar';
  } else if (exercise === swimFortyLaps) {
    breakfast = 'kale smoothie';
  } else {
    breakfast = 'granola';
  }

  exerciseRoutine(exercise);

  return function() {
    console.log(`Nom nom nom, this ${breakfast} is delicious!`);
  }
}

Create the calling function:

const afterExercise = morningRoutine(liftWeights);

afterExercise;

To properly call it:

afterExercise();

*/


  
//   function Tuesday() {
//     console.log('Go for a five-mile run');
//     console.log('Swim 40 laps');
//   }
  
//   function Wednesday() {
//     console.log('Go for a five-mile run');
//     console.log('Go for a five-mile run');
//   }
  
//   function Thursday() {
//     console.log('Go for a five-mile run');
//     console.log('Pump iron');
//   }
  
//   function Friday() {
//     console.log('Go for a five-mile run');
//     console.log('Swim 40 laps');
//   } 

function callback(){
  return `This string belongs to a callback function`;
}
function receivesAFunction(cb) {
  cb();
}
receivesAFunction(callback);


function returnsANamedFunction(){
  return  (function namedFunction () {`Named function`;}) ;
}



function returnsAnAnonymousFunction(){ return function () {`This statement belongs to an anonymous function`;}}