// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
}

Soldier.prototype.attack = function() {
  return this.strength;
}
Soldier.prototype.receiveDamage = function(damage) {
  this.health = this.health - damage;
}

// Viking
function Viking(name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.battleCry = function() {
  return "Odin Owns You All!";
}

Viking.prototype.receiveDamage = function(damage) {
  this.health = this.health - damage;
  var res = (this.health <= 0) ? `${this.name} has died in act of combat` : `${this.name} has received ${damage} points of damage`;
  return res;
}

// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage = function(damage) {
  this.health = this.health - damage;
  var res = (this.health <= 0) ? `A Saxon has died in combat` : `A Saxon has received ${damage} points of damage`;
  return res;
}

// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

War.prototype.addViking = function(Viking) {
  this.vikingArmy.push(Viking);
}

War.prototype.addSaxon = function(Saxon) {
  this.saxonArmy.push(Saxon);
};

War.prototype.vikingAttack = function() {
  var saxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
  var viking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
  var attackResult = saxon.receiveDamage(viking.strength);
  if(attackResult === 'A Saxon has died in combat') {
    this.saxonArmy.splice(this.saxonArmy.indexOf(saxon), 1);
  }
  return attackResult;
};

War.prototype.saxonAttack = function() {
  var saxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
  var viking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
  var attackResult = viking.receiveDamage(saxon.strength);
  if(attackResult === viking.name + " has died in act of combat") {
    this.vikingArmy.splice(this.vikingArmy.indexOf(viking), 1);
  }
  return attackResult;
};

War.prototype.showStatus = function() {
  var res = "";
  if(this.saxonArmy.length === 0) {
    res = "Vikings have won the war of the century!";
  }else if(this.vikingArmy.length === 0) {
    res = "Saxons have fought for their lives and survive another day...";
  }else{
    res = "Vikings and Saxons are still in the thick of battle.";
  }
  return res;
};
