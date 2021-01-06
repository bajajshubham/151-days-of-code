// these inputs produces this result
// this parameter produces the body
const power = (base,exponent) => {
    let result = 1;

    for(let count=0; count<exponent; ++count)
        result *= base;

    return result;
}
// power(2,10) -> 1024 
// power(2,11) -> 2048
// power(2,64) -> 18446744073709552000
// now funny approximations power(2,512) -> 1.3407807929942597e+154

function power(base,exponent)
{
    if ( exponent == 0 )
    {
        return 1;
    }else{
        return base * power(base,exponent-1);
    }

}

function zeroPaddedLabeling(animal,label)
{
    let animalString = String(animal);
    while (animalString.length < 3) animalString += "0";
    console.log(`${animalString} ${label}`);
}


function printFarmInventory()
{
    zeroPaddedLabeling();
}

// Your code here.
function min(number1,number2)
{
 	return number1 < number2 ? number1 : number2 ;	 
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

// Your code here.
function isEven(num)
{
  	//console.log("init-entry:",num);
  	if ( num < 0  ) return false;
 	if ( num == 0 ) return true;
  	if ( num == 1 ) return false;
  	//console.log("entry-2",num-2);
  	return isEven(num-2);
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??

// Your code here.
function countCharacter(astring,characterToBeCounted)
{
  let count = 0;
  for(let xi=0; xi<astring.length; ++xi){
  	if(astring[xi]===characterToBeCounted) ++count;
  }
  return count;
}

function countChar(astring,characterToBeCounted)
{
	return countCharacter(astring,characterToBeCounted);
}

//console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4

// author's code
function isEven(n)
{
    if ( n == 0 )      return true;
    else if ( n == 1 ) return false;
    else if ( n <  0)  return isEven(-n);
    else               return isEven(n-2);
}




