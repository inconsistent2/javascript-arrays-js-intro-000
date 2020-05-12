var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray (myArray,addition) {
[addition,...myArray];
return myArray
}

destructivelyAddElementToBeginningOfArray = (myArray,addition) =>
myArray.unshift (addition)
return myArray

addElementToEndOfArray = (myArray,addition) =>
[myArray,...addition]
return myArray

destructivelyAddElementToEndOfArray = (myArray,addition)=>
myArray.push (addition)

accessElementInArray = (myArray,position) =>
return myArray[position]

destructivelyRemoveElementFromBeginningOfArray = myArray =>
myArray.shift;
return myArray

removeElementFromBeginningOfArray = myArray =>
return myArray.slice(1);
return myArray

destructivelyRemoveElementFromEndOfArray = myArray =>
myArray.pop()
return myArray

removeElementFromEndOfArray = myArray =>
return myArray.slice(0,myArray.length-1)
