//copied-authors-code
//my result graph is going down
//I am starting to believe the value of space-repetition
//aysnchronicity is different 
//my concepts and base is weak

function Promise_all(promises) {
  console.log(promises," -is--promises-");
  return new Promise((resolve, reject) => {
    let results = [];
    let pending = promises.length;
    console.log(pending,"pending--length");
    for (let i = 0; i < promises.length; i++) {
      console.log(promises[i],"promises[",i,"]");
      promises[i].then(result => {
        results[i] = result;
        pending--;
        if (pending == 0) resolve(results);
      }).catch(reject);
    }
    if (promises.length == 0) resolve(results);
  });
}

// Test code.
Promise_all([]).then(array => {
  console.log("This should be []:", array);
});
function soon(val) {
  return new Promise(resolve => {
    setTimeout(() => resolve(val), Math.random() * 500);
  });
}
Promise_all([soon(1), soon(2), soon(3)]).then(array => {
  console.log("This should be [1, 2, 3]:", array);
});
Promise_all([soon(1), Promise.reject("X"), soon(3)]).then(array => {
  console.log("We should not get here");
}).catch(error => {
  if (error != "X") {
    console.log("Unexpected failure:", error);
  }
});

//not able to understand 11.2 exercise problem
//author's code
//basic's are not strong
