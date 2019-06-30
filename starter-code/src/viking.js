// Soldier
function Soldier (health, strength) {
    this.health=health;
    this.strength=strength;
}    

Soldier.prototype.attack = function (){
    return this.strength;
};
Soldier.prototype.receiveDamage = function (theDamage){
    this.health=this.health-theDamage;
}
// Viking
function Viking (name, health, strength) {
    Soldier.call(this, health, strength);
    this.name=name;
  }
Viking.prototype = Object.create(Soldier.prototype);

Viking.prototype.constructor=Viking;
Viking.prototype.receiveDamage = function (theDamage){
    this.health=this.health-theDamage;
    if (this.health > 0){
        return this.name + ' has received ' + theDamage + ' points of damage';
    }
    else {
    return this.name + ' has died in act of combat';
    }
}
Viking.prototype.battleCry = function () {
    return 'Odin Owns You All!';
}



// Saxon
function Saxon (health,strength) {
    Soldier.call(health,strength);
    this.health=health;
    this.strength=strength;
}
Saxon.prototype = Object.create(Soldier.prototype);

Soldier.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage = function (theDamage) {
    this.health=this.health - theDamage;

    if (this.health > 0){
        return  'A Saxon has received ' + theDamage + ' points of damage';
    }
    else {
    return 'A Saxon has died in combat';
    }
}

// War
function War() {

    this.vikingArmy=[];
    this.saxonArmy=[];
}

War.prototype.addViking = function (Viking){
    this.vikingArmy.push(Viking);

}

War.prototype.addSaxon = function (Saxon){
    this.saxonArmy.push(Saxon);

}

War.prototype.vikingAttack = function(){
    this.randomSaxon = Math.floor(Math.random()*this.saxonArmy.length);
    this.saxon = this.saxonArmy[this.randomSaxon];
    this.randomViking = Math.floor(Math.random()*this.vikingArmy.length);
    this.viking = this.vikingArmy[this.randomViking];
    this.damaged = this.saxon.receiveDamage(this.viking.strength);

    if (this.saxon.health <= 0){
    this.saxonArmy.splice(this.randomSaxon,1);
    }

    return this.damaged;

}

War.prototype.saxonAttack = function(){
    this.randomSaxon = Math.floor(Math.random()*this.saxonArmy.length);
    this.saxon = this.saxonArmy[this.randomSaxon];
    this.randomViking = Math.floor(Math.random()*this.vikingArmy.length);
    this.viking = this.vikingArmy[this.randomViking];

    this.damaged = this.viking.receiveDamage(this.saxon.strength);
    
    if (this.viking.health <= 0){
        this.vikingArmy.splice(this.randomViking,1);
    }
    
    return this.damaged;
    
}

War.prototype.showStatus = function(){
    if (this.saxonArmy.length < 1){
        return "Vikings have won the war of the century!";
    }
    else if (this.vikingArmy.length < 1){
        return "Saxons have fought for their lives and survive another day...";
    }
    else{
        return "Vikings and Saxons are still in the thick of battle.";
    }
}