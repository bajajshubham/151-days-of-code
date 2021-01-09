function repeat(n,action){
	for (let i=0; i<n; ++i) {
		action(i);
	}
}

let lables = [];
repeat(5, (i) => {
			labels.push(`Unit ${i+1}`);
});

let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.

function reduce(array,combine,start){
	let current = start;
	for (let element of array) {
    		console.log(element);
      		current = combine(current,element);
    }
  console.log(current);
}

reduce([1, 2, 3, 4, 5, 6], (a,b) => a.concat(b), [] );
reduce(arrays,(a,b) => a.concat(b), [] );

// → [1, 2, 3, 4, 5, 6]

// author code
console.log(arrays.reduce( (flat, current) => flat.concat(current), []));

// Your code here.
function loop(value,test,update,body){
  
	for(;test(value);value = update(value)){
		  body(value);
	}
	
	//console.log(value,"is value"); console.log(test,"is test");
	//console.log(update,"is update"); console.log(body,"is body");
  //  if (!(test(value)) {return false;}
  //  if (!test(value)) {return false;}
  //  body(value);
  //  value = update(value);  
  }
  
  loop(3, n => n > 0, n => n - 1, console.log);
  // → 3
  // → 2
  // → 1

// author code
//code is same with smartness
function loop(start, test, update, body) {
	for (let value = start; test(value); value = update(value)) {
	  body(value);
	}
  }
  
loop(3, n => n > 0, n => n - 1, console.log);

function every(array, test) {
	// Your code here.
	console.log("inside 1");
	for(let element of array){
			if(!test(element)){return false;}
	}
	return true;
  }

  function every(array, test){
	  array.some( (element) => {
		if(!test(element)){return false;}
	  });
	return true;
  }
  
  console.log(every([1, 3, 5], n => n < 10));
  // → true
  console.log(every([2, 4, 16], n => n < 10));
  // → false
  console.log(every([], n => n < 10));
  // → true

// author code
function every(array, predicate) {
	for (let element of array) {
	  if (!predicate(element)) return false;
	}
	return true;
}

function every2(array,test){
	return !array.some( element => !test(element));
}

// Today I copy-pasted code for this last question, oh!!!
function dominantDirection(text) {
	let scripts = countBy(text, char => {
	  let script = characterScript(char.codePointAt(0));
	 // console.log(script,"is script");
	  return script ? script.direction : "none";
	}).filter(({name}) => name != "none");
		
		let count = -Infinity;
		let direction = "";
	  for(let element of scripts){
		  if (element.count > count) {
			  count = element.count;
				direction = element.name;
		  }
	  }
	
	
	return direction;
  }
  
  console.log(dominantDirection("Hello!"));
  // → ltr
  console.log(dominantDirection("Hey, مساء الخير"));
  // → rtl

//author code
// I don't deserve to write the author code for this last exercise task
