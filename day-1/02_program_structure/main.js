function numberORNot(number)
{
    if(Number.isNaN(number)){
            console.log("number is:",number,NaN);
            return true;
    }
}


function power(number,limit)
{
    if(numberORNot(number) | numberORNot(limit))
    {
        return;
    }

    let result = 0;
    let count = 1;

    console.log("recieved: ",number);

    while(count <= limit)
    {
      	let temp=0;
        for(var xi=1; xi<=count; xi++){
            temp += number;
        }
      	result += temp;

        console.log("result: ",result,"for: 2^",count);
        count+=1;
     	result = 0;
    }

}

power(2,10);
/*
-> +
recieved:  2
result:  2 for: 2^ 1
result:  4 for: 2^ 2
result:  6 for: 2^ 3
result:  8 for: 2^ 4
result:  10 for: 2^ 5
result:  12 for: 2^ 6
result:  14 for: 2^ 7
result:  16 for: 2^ 8
result:  18 for: 2^ 9
result:  20 for: 2^ 10
-> *
recieved:  2
result:  2 for: 2^ 1
result:  4 for: 2^ 2
result:  8 for: 2^ 3
result:  16 for: 2^ 4
result:  32 for: 2^ 5
result:  64 for: 2^ 6
result:  128 for: 2^ 7
result:  256 for: 2^ 8
result:  512 for: 2^ 9
result:  1024 for: 2^ 10

 */


function power2(number,power)
{
    let result = 1;
    
    for(let counter = 0; counter < 10; counter +=1)
        result *=2;

    console.log(result);
}

for(let counter = 20; ; counter +=1)
{
    if( (counter % 7) == 0)
    {
        console.log(counter); break;
    }
}

function loopATraingle(number)
{
    if(numberORNot(numberORNot)) return

    let characterToPrint = "#"

    //-> infiinte loop
    // while(characterToPrint.length !== number)
    // {
    //     console.log(characterToPrint);
    //     characterToPrint += characterToPrint;
    // }


    for(let count = 0;count<number;count+=1){
            console.log(characterToPrint);
            characterToPrint +=characterToPrint;
    }

}


loopATraingle(7);

function loopATraingle(number)
{    
       let characterToPrint = "#" 
       let temp = characterToPrint;
    for(;temp.length<=number;){
       	console.log(temp);
       	temp +=characterToPrint;
    }

}
// author's code
for(let line="#"; line.length < 8; line+="#")
        console.log(line);

loopATraingle(7);

function fizzbuzzPrint()
{
  
	for(let num = 1; num<101; ++num)
    {
      	let toPrint = num;
        let buzz = num % 5 == 0 ? true : false ;
      	let fizz = num % 3 == 0 ? true : false ;
		let fizzBuzz = buzz && fizz ? true : false;
 		
      	if(fizzBuzz) toPrint = "fizzbuzz";
      	else if ( buzz && !fizz)  toPrint = "buzz";
      	else if ( fizz ) toPrint = "fizz";
      	
      	console.log(toPrint);
  	
    }
  
}  
fizzbuzzPrint();
// author's code
for (let n=1; n<=100; n++)
{
    let output = "";
    if (n%3==0) output += "Fizz";
    if (n%5==0) output += "Buzz";
    console.log(output || n);
}


function chessBoard(width,height)
{
	width = width ||  8 ;
  	height = height || 8;
  	const chessBoardCharac = ["#"," "];
	// i
  
    for(let xi = 1; xi<=width; ++xi)
    {
      
	  let line = "";
      let chessBoardCharacIndex = 0;
      if( xi % 2 != 0 ) chessBoardCharacIndex = 1;
     	
      for(let yi=1; yi<=height; ++yi)
      {
       
		line += chessBoardCharac[chessBoardCharacIndex];
       	chessBoardCharacIndex = chessBoardCharacIndex == 0 ? 1 : 0;
      }
      
      console.log(line);
    
    }    
}

chessBoard(2,30);

// author's code
//this time copy paste
let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);         