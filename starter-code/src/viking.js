// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
}
Soldier.prototype.attack = function () {
  return this.strength;
}

Soldier.prototype.receiveDamage = function (dam) {
  this.health -= dam;
}

// Viking
function Viking (name, health, strength) {
  this.name = name;
  Soldier.call(this, health, strength)
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function (dam) {
  this.health -= dam;
  if (this.health > 0) return `${this.name} has received ${dam} points of damage`;
  return `${this.name} has died in act of combat`;
}

Viking.prototype.battleCry = function () {
  return 'Odin Owns You All!'
}


// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage = function (dam) {
  this.health -= dam;
  if (this.health > 0) return `A Saxon has received ${dam} points of damage`;
  return `A Saxon has died in combat`;
}

// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

War.prototype.addViking = function(viking) {
  this.vikingArmy.push(viking);
}

War.prototype.addSaxon = function(saxon) {
  this.saxonArmy.push(saxon);
}

War.prototype.vikingAttack = function() {
  var damage = this.vikingArmy[Math.floor(Math.random()*(this.vikingArmy.length))].attack();
  var saxon = Math.floor(Math.random()*(this.saxonArmy.length));
  this.saxonArmy[saxon].receiveDamage(damage);
  if (this.saxonArmy[saxon].health <= 0) this.saxonArmy.splice(saxon,1);
}

War.prototype.saxonAttack = function () {
  var damage = this.saxonArmy[Math.floor(Math.random()*(this.vikingArmy.length))].attack();
  var viking = Math.floor(Math.random()*(this.saxonArmy.length));
  this.vikingArmy[viking].receiveDamage(damage);
  if (this.vikingArmy[viking].health <= 0) {
    this.vikingArmy.splice(viking,1);
  }
}

War.prototype.showStatus = function () {
  if(this.saxonArmy.length == 0) return 'Vikings have won the war of the century!';
  if(this.vikingArmy.length == 0) return 'Saxons have fought for their lives and survive another day...';
  return 'Vikings and Saxons are still in the thick of battle.';
}
