// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
}
Soldier.prototype.attack = function(){
  console.log('ataqueeee')
  return this.strength;
  
}
Soldier.prototype.receiveDamage = function(damage){
  console.log('maeshopupa ioeputa');
  this.health =  this.health - damage;
  
}

// Viking
function Viking() {
  Soldier.call(this);
  
}

// Saxon
function Saxon() {}

// War
function War() {}
