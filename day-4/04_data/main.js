// Your code here.
function range(start,end,step=start<end?1:-1){
    //	console.log("step:",step);
    //	if ( step == undefined) step = 1;
        let array = [];
        if ( step < 0 )
              for(;start>=end; start += step) array.push(start);
      else
              for(;start<=end; start += step) array.push(start);
        return array;
  }
  
  function sum(array){
      let sum = 0;
        for (let number of array ) sum+=number;
        return sum;
  }
  
  console.log(range(1, 10));
  // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  //console.log(range(5, 2, -1));
  // → [5, 4, 3, 2]
  console.log((range(1, 10, 2)),sum(range(1, 10, 2)));
  // → 55
  console.log((range(5,2,-1)),sum(range(5,2,-1)));

// author's code

// Your code here.
//1 -> pure function (less faster)
//2 -> side effects  (more faster)

function reverseArray(array){
	if ( array == undefined ) return [];
  	if ( array.length == 1 ) return array;
  	
  	let reversedArray = [];
 	
  //	if ( lengthOFOriginalArray % 2 == 0 ) lengthOFOriginalArray/=2;
 // 	else lengthOFOriginalArray = (lengthOFOriginalArray-1)/2;
   	
  	for(let lengthOFOriginalArray = array.length-1; lengthOFOriginalArray>-1; --lengthOFOriginalArray){
    	reversedArray.push(array[lengthOFOriginalArray]);
    }
  
  	
  	//array.slice(0,lengthOFOriginalArray).
  	//concat(array.slice(lengthOFOriginalArray,));
  	
  	return reversedArray;
}

function reverseArrayInPlace(array){
	let count = 0;
 	for ( let len = array.length-1; len >= (array.length/2); --len){
      	let temp = array[len];
    	  array[len] = array[count];
      	array[count] = temp;
      	count+=1;
    }
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4,5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

//author's code
function reverseArrayInPlace(array)
{
  for(let i=0; i<Math.floor(array.length/2); ++i)
  {
    let old = array[i];
    array[i] = array[array.length -1 -i];
    array[array.length -1 -i] = old;
  }
  return array;
}


// Your code here.
function arrayToList([val,...array]){
    if (val == null) return null;
    let list = {
      value : val,
        rest  : null
  };
  list.rest = arrayToList(array);		
    return list;
}

function listToArray(list){
    let array = [];		
    
    if ( list != null ) {
  let {value,rest} = list;
    array.push(value);
    array = array.concat(listToArray(rest));
  }

    return array;
}

function prepend(val,list){
let newList = {value:val,
              rest:list}
return newList;
}

function nth(list,number){
    if ( number < 0 ) return undefined;
    if ( list == null ) return undefined;
    
    let {value,rest} = list; 	
    
    if ( number === 0 ) return value;
    
    return nth(rest,number-1);
        
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 5));
// → 20

//author's code
function arrayToList(array){
  let list = null;
  for (let i=array.length-1; i>=0; --i){
    list = {value:array[i],rest:list};
  }
  return list;
}

function listToArray(list){
  let array = [];
  for(let node=list; node; node = node.rest)
  {
    array.push(node.value);
  }
  return array;
}

function nth(list,n){
  if (!list) return undefined;
  else if (n==0) return list.value;
  else return nth(list.rest,n-1);
}


//failed code
// Your code here.
function deepEqual(objA,objB){ 
  if ( !((typeof objA === "object" && objA != null) && 
              (typeof objB === "object" && objB != null)) ){
    return objA === objB;  
  }
  
  let keysOFA = Object.keys(objA);let keysOFB = Object.keys(objB);

  if ( keysOFA.length !== keysOFB.length ) return false;

  keysOFA.map( (aitem,index) => {
      let bitem = keysOFB[index];
    if ( aitem !== bitem ) return false;
      console.log("valuesA:",objA[aitem],"valuesB:",objB[bitem]);
      deepEqual(objA[aitem],objB[bitem]);
  });

return "!";
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true

// author-code
function deepEqual(a,b){
  if (a===b) return true;
  
  if (a==null || typeof a != "object" || b==null || typeof b != "object") return false;
  
  let keysA = Object.keys(a), keysB = Object.keys(b);

  if ( keysA.length !== keysB.length ) return false;

  for (let key of keysA){
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }

  return true;

}