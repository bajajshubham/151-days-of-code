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

