// my code
function my_intro()
{
    var total  = 0;
    var count = 1;
    for(var compare=count; compare!==0; compare= compare - 11)
    {
        if(compare === 0)
        {
            return(console.log("compare is zero and total is: ",total));
        }

        total = total + count;
        count = count + 1;
    }

}

let total = 0, count = 1;
while(count <= 10){
    total +=count;
    count +=1;
}

console.log(total);

function sum(numbers)
{
    let sum = 0;
    numbers.map( (value) => {
        sum +=value;
    });

    return sum;
}

function range(start,end)
{
    let numbers = [];
    for(var xi=start; xi<=end; xi++)
    {
        numbers.unshift(xi);
    }
    return numbers;
}

console.log("sum(range(start,end)):",sum(range(1,10)));

// author's code
// handles reverse range: range(10,1,step)
function arange(start,end,step)
{
    if(step == null) step = 1;
    var array = [];
    var i = start;
    
    if(step > 0 )
    {
        for(; i<=end; i+=step)  
            array.push(i);

    }else{
        for(; i>=end; i+=step)
            array.push(i);
    }

    return array;
}

function sum(array)
{
    var total = 0;
    for(var i=0; i<array.length; i++)
        total += array[i];
    return total;
}

