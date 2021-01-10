class Vec{
	
    constructor(x,y){
      this.x = x; 
        this.y = y;
  }
    
    get length(){
      return Math.sqrt( (this.x*this.x)+(this.y*this.y) );
  }

    plus(Vector){
      return new Vec(this.x+Vector.x,this.y+Vector.y);
  }

    minus(Vector){
      return new Vec(this.x-Vector.x,this.y-Vector.y);
  }
    
}


console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5

//author's code
class Vec {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    plus(other) {
      return new Vec(this.x + other.x, this.y + other.y);
    }
  
    minus(other) {
      return new Vec(this.x - other.x, this.y - other.y);
    }
  
    get length() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
  }
  
  console.log(new Vec(1, 2).plus(new Vec(2, 3)));
  // → Vec{x: 3, y: 5}
  console.log(new Vec(1, 2).minus(new Vec(2, 3)));
  // → Vec{x: -1, y: -1}
  console.log(new Vec(3, 4).length);
  // → 5

class Group {
    // Your code here.
    constructor() { this.members = []; }
    
    add(value){
          if(!this.has(value)){
              this.members.push(value);
          }
    }
    
    has(value){
      if( (this.members.indexOf(value)) === -1 ) { return false; }
      return true;
    }
    
    delete(value){
            if(this.has(value)){
              this.members = this.members.filter( (item) => item!==value );
          }
    }
    
    static from([start,end]){
      let newGroup = new Group();
        for(;start<=end;++start){
            newGroup.add(start);
      }
      return newGroup;
    }
    
  }
  
  let group = Group.from([10, 20]);
  console.log(group.has(10));
  // → true
  console.log(group.has(30));
  // → false
  group.add(10);
  group.delete(10);
  console.log(group.has(10));
  // → false

  //author's code
  class Group {
    constructor() {
      this.members = [];
    }
  
    add(value) {
      if (!this.has(value)) {
        this.members.push(value);
      }
    }
  
    delete(value) {
      this.members = this.members.filter(v => v !== value);
    }
  
    has(value) {
      return this.members.includes(value);
    }
  
    static from(collection) {
      let group = new Group;
      for (let value of collection) {
        group.add(value);
      }
      return group;
    }
  }
  
  let group = Group.from([10, 20]);
  console.log(group.has(10));
  // → true
  console.log(group.has(30));
  // → false
  group.add(10);
  group.delete(10);
  console.log(group.has(10));

  //not working
  // Your code here (and the code from the previous exercise)
class Group {
    // Your code here.
    constructor() { this.members = []; }
    
    add(value){
      if(!this.has(value)){
              this.members.push(value);
          }
    }
    
    has(value){
      if( (this.members.indexOf(value)) === -1 ) { return false; }
      return true;
    }
    
    delete(value){
            if(this.has(value)){
              this.members = this.members.filter( (item) => item!==value );
          }
    }
    
    static from(array){
      let newGroup = new Group();
        for (let element of array) { newGroup.add(element) }
      return newGroup;
    }
  
  }
  
  class GroupIterator{
      constructor(group){
          this.group = group;
      }
    
        next(){
          if ( this.group.members.length === 0 ) return { done:true }
            let value = this.group.members.shift();
            return {value,done:false}
      }
  }
  
  Group.prototype[Symbol.Iterator] = function(){
      return new GroupIterator(this);
  }
  
  
  let group = Group.from([10, 20]);
  console.log(group.has(10));
  // → true
  console.log(group.has(30));
  // → false
  group.add(10);
  group.delete(10);
  console.log(group.has(10));
  // → false
  
  //
  for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
  }
  // → a
  // → b
  // → c

  //author's code
  class Group{
    constructor() {this.members=[]}
    add(value){ if(!has(value)) {this.members.push(value)} }
    delete(value){ this.members = this.members.filter(v => {v!==value})}
    has(value) { return this.members.includes(value);}
    static from(collection){
        let group = new Group;
        for(let value of collection){
            group.add(value);
        }
        return group;
    }
    [Symbol.Iterator](){
        return new GroupIterator(this);
    }
  }

  class GroupIterator{
    constructor(group){
        this.group = group;
        this.position = 0;
    }
    next(){
        if(this.position >= this.members.length){
            return {done:true}
        }else{
            let result = {
                value:this.group.members[this.position],
                done:false,
            }
            this.position++;
            return result;
        }
    }
  }

  for(let value of Group.from[10,20,30]){
      console.log(value);
  }

  let map = {one: true, two: true, hasOwnProperty: true,};
  // Fix this call
  console.log(map.hasOwnProperty("one"));
  console.log(Object.keys(map).includes("one"))
  // → true

//author's code
console.log(Object.prototype.hasOwnProperty(map,"one"));