const roads = [
  "Alice's House-Bob's House",   "Alice's House-Cabin",
  "Alice's House-Post Office",   "Bob's House-Town Hall",
  "Daria's House-Ernie's House", "Daria's House-Town Hall",
  "Ernie's House-Grete's House", "Grete's House-Farm",
  "Grete's House-Shop",          "Marketplace-Farm",
  "Marketplace-Post Office",     "Marketplace-Shop",
  "Marketplace-Town Hall",       "Shop-Town Hall"
];

function buildGraph(edges) {
  let graph = Object.create(null);
  function addEdge(from, to) {
    if (graph[from] == null) {
      graph[from] = [to];
    } else {
      graph[from].push(to);
    }
  }
  for (let [from, to] of edges.map(r => r.split("-"))) {
    //console.log(from,"is from",to,"is to");
    addEdge(from, to);
    addEdge(to, from);
  }
  return graph;
}
//console.log(roads);
const roadGraph = buildGraph(roads);
//console.log(roadGraph);

class VillageState {
  constructor(place, parcels) {
    this.place = place;
    this.parcels = parcels;
  }

  move(destination) {
    if (!roadGraph[this.place].includes(destination)) {
      return this;
    } else {
      let parcels = this.parcels.map(p => {
        if (p.place != this.place) return p;
        return {place: destination, address: p.address};
      }).filter(p => p.place != p.address);
      return new VillageState(destination, parcels);
    }
  }
}
//console.log(roadGraph);

function runRobot(state, robot, memory) {
  for (let turn = 0;; turn++) {
    if (state.parcels.length == 0) {
      //console.log(`Done in ${turn} turns`);
      return turn;
    }
   // console.log(state,"is state init");
    let action = robot(state, memory);
   // console.log(action,"is randomRobot-state-and-memory");
    state = state.move(action.direction);
    memory = action.memory;
    //console.log(`Moved to ${action.direction}`); 

  } 
}

function randomPick(array) {
  let choice = Math.floor(Math.random() * array.length);
  //console.log(array,"is array",choice,"is choice");
  return array[choice];
}

function randomRobot(state) {
  return {direction: randomPick(roadGraph[state.place])};
}
//console.log(Math.floor(Math.random()*10));
let first = new VillageState( 
  "Post Office", [{place: "Post Office", address:["Alice's House","Farm"],}] 
);

//console.log(randomRobot(first));

VillageState.random = function(parcelCount=2){
	let parcels = [];
  	//console.log("VillageState.random");
  
  	for(let i=0;i<parcelCount;++i){
    	let address = randomPick(Object.keys(roadGraph));
      	
      	let place;
      	do{
          place = randomPick(Object.keys(roadGraph)); 
          //console.log(address,"is address");
          //console.log(place,"is place");
        }while(place==address);
      	parcels.push({place,address});
      	//console.log(parcels,"is parcels");
    }
  
	return new VillageState("Post Office",parcels);
}

//runRobot(VillageState.random(),randomRobot);
const mailRoute = [
  "Alice's House", "Cabin", "Alice's House", "Bob's House",
  "Town Hall", "Daria's House", "Ernie's House",
  "Grete's House", "Shop", "Grete's House", "Farm",
  "Marketplace", "Post Office"
];

function routeRobot(state,memory){
  		//console.log(state,"is-state");
  		//console.log(memory,"is-memory",memory[0],"is-0",memory.slice(1),"is-slice-1");
		if(memory.length==0){
        	memory = mailRoute;
        }
  
  return {direction:memory[0],memory:memory.slice(1)};
}

//runRobot(VillageState.random(),routeRobot,[]);

//search can't fail => --graph-is-fully-connected
function findRoute(graph,from,to){
	console.log(graph,"is graph",from,"is from",to,"is to");
  	let work = [{at:from,route:[]}];
  	console.log(work,"is work");
  	for(let i=0; i<work.length; i++){
    	let {at,route}= work[i];
      	console.log(at,"is at",route,"is route");
      	for(let place of graph[at]){
        	console.log(place,"is place");
          	if(place==to) return route.concat(place);
          	if(!work.some(w => w.at == place)){
            	work.push({at:place,route:route.concat(place)});
            }
        }
    }
}

function goalOrientedRobot({place,parcels},route){
  	console.log("---goal-oriented---")
  	console.log(place,"is place",parcels,"is parcels",route,"is route");
		if(route.length == 0){
        	let parcel = parcels[0];
          	//console.log(parcel,"is parcel");
          	if(parcel.place != place){
              	route = findRoute(roadGraph,place,parcel.place);
            }else{
            	route = findRoute(roadGraph,place,parcel.address);
            }
        }
  		console.log("---goal-oriented---"); 
  		console.log(route[0],"is direction",route.slice(1),"is memory");
  		return {direction:route[0],memory:route.slice(1)};
}

runRobot(VillageState.random(2),goalOrientedRobot,[]);

