class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Primitve multiply failure prob. is 0.8");
  }
}

function reliableMultiply(a, b) {

  let result = 0;
  try{
   ++progress;
   result = primitiveMultiply(a,b);
  }
  catch(e){ 
    console.error("Something went wrong",e)
    ++progress;
  	result = reliableMultiply(a,b);
  }

  return result;
}
let progress = 0;
console.log(reliableMultiply(8, 8));
// → 64

//author's code
function reliableMultiply(a,b){
    for(;;){
        try{
            return primitiveMultiply(a,b);
        }catch(e){
            if(!(e instanceof MultiplicatorUnitFailure)){
                throw e;
            }
        }
    }
    
    const box = {
}
    locked: true,
    unlock() { this.locked = false; },
    lock() { this.locked = true;  },
    _content: [],
    get content() {
      if (this.locked) throw new Error("Locked!");
      return this._content;
    }
  };
  
  function withBoxUnlocked(body) {
    // Your code here.
    try{
       if(box.locked){
            box.unlock();
        }
        body();
    }
  
    finally{
        if(!box.locked){
          box.lock();
      }
    }
  }
  
  withBoxUnlocked(function() {
    box.content.push("gold piece");
  });
  
  try {
    withBoxUnlocked(function() {
      throw new Error("Pirates on the horizon! Abort!");
    });
  } catch (e) {
    console.error("Error raised: ",e);
  }
  console.log(box.locked);
  // → true

  //author's code
  const box = {
    locked: true,
    unlock() { this.locked = false; },
    lock() { this.locked = true;  },
    _content: [],
    get content() {
      if (this.locked) throw new Error("Locked!");
      return this._content;
    }
  };
  
  function withBoxUnlocked(body) {
    let locked = box.locked;
    if (!locked) {
      return body();
    }
  
    box.unlock();
    try {
      return body();
    } finally {
      box.lock();
    }
  }
  
  withBoxUnlocked(function() {
    box.content.push("gold piece");
  });
  
  try {
    withBoxUnlocked(function() {
      throw new Error("Pirates on the horizon! Abort!");
    });
  } catch (e) {
    console.log("Error raised:", e);
  }
  
  console.log(box.locked);
  // → true