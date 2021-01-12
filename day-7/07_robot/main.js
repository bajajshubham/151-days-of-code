function compareRobots(robot1, memory1, robot2, memory2) {
    //console.log(robot1,"is robot-1",memory1,"is robot-1-memory");
    //console.log(robot2,"is robot-2",memory2,"is robot-2-memory");
    
    let tasks = 100;
    let villageInitialState = new VillageState.random(tasks);
    //console.log(villageInitialState,"is inital-village-state");
    
   let turns_by_robot1 = runRobot(villageInitialState,robot1,memory1);
   let turns_by_robot2 = runRobot(villageInitialState,robot2,memory2);
   console.log(turns_by_robot1,turns_by_robot2);
  }
  
  compareRobots(routeRobot, [], goalOrientedRobot, []);

//author's code
function compareRobots(robot1,memory1,robot2,memory2){
  let total1 = 0, total2 = 0;
  for(let i=1; i<=100; i++){
    let state = new VillageState.random(i);
    total1+=runRobot(state,robot1,memory1);
    total2+=runRobot(state,robot2,memory2);
  }
  console.log(`Robot 1 needed ${total1 / 100} steps per task`)
  console.log(`Robot 2 needed ${total2 / 100} steps per task`)
}

//I haven't understood this code
//author's code
function lazyRobot({place, parcels}, route) {
  if (route.length == 0) {
    // Describe a route for every parcel
    let routes = parcels.map(parcel => {
      if (parcel.place != place) {
        return {route: findRoute(roadGraph, place, parcel.place),
                pickUp: true};
      } else {
        return {route: findRoute(roadGraph, place, parcel.address),
                pickUp: false};
      }
    });

    // This determines the precedence a route gets when choosing.
    // Route length counts negatively, routes that pick up a package
    // get a small bonus.
    function score({route, pickUp}) {
      return (pickUp ? 0.5 : 0) - route.length;
    }
    route = routes.reduce((a, b) => score(a) > score(b) ? a : b).route;
  }

  return {direction: route[0], memory: route.slice(1)};
}

class PGroup {
  // Your code here
  
  static get empty(){
    console.log("---inside-empty---");
  	let group = new PGroup();
    group.members = [];
    console.log(group,"is-group");
    console.log("---outside-empty---");
    return group;
  }
  
  add(value){
    	console.log("---inside-add---");
    	let group = new PGroup();
    	group.members = [];
    	if(!this.has(value)){
          		group.members.push(value);
        }
    	console.log(this.members,"is-this-members");
    	this.members.forEach( v => group.members.push(v) );
    	console.log(group,"is-group");
    	console.log("---outside-add---");
    	return group;
  }
  
  delete(value){
    console.log("---inside-delete---");
    let group = new PGroup();
    group.members = [];
    if(this.has(value)){
      	console.log(this.members.filter(v => v!=value),"is-filtered");
      	group.members.push(this.members.filter(v => v!=value));
    }
    console.log(group,"is-group");
    console.log("---outside-delete---");
    return group;
  }
  
  has(value){
    console.log("---inside-has---");
  	if(this.members.some(v => v==value)){
        console.log("---outside-has---",true,value);
    	return true;
    }
    console.log("---outside-has---",false,value);
    return false;
  }
  
}

let a = PGroup.empty.add("a");
console.log(a,"is-a");
let ab = a.add("b");
console.log(ab,"is-ab");
let b = ab.delete("a");
console.log(b,"is-b");
console.log(b.has("b"));
// → true
console.log(a.has("b"));
// → false
console.log(b.has("a"));
// → false

//author's code
class PGroup{
  constructor(members){
    this.members=members;
  }

  add(value){
    if(this.has(value)) return this;
    return new PGroup(this.members.concat([value]));
  }

  delete(value){
    if(!this.has(value)) return this;
    return new PGroup(this.members.filter(v => v!==value));
  }

  has(value){
    return this.members.includes(value);
  }

}

PGroup.empty = new PGroup([]);
console.log(PGroup);
let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");

console.log(b.has("b"));
// → true
console.log(a.has("b"));
// → false
console.log(b.has("a"));
// → false  