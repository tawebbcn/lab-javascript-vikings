// Soldier
function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;
    
    this.attack = function () {
        return this.strength;
    }
};

Soldier.prototype.receiveDamage = function(damage) {
        this.health = this.health - damage;
    console.log(this.name + " has received " + damage + "points of damage");
    }


// Viking
function Viking(name ,health, strength) {
    this.name = name;
    
    Soldier.call(this, health, strength);
    
}
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function(damage) {
    
    this.health = this.health - damage;
    if(this.health <= 0) {
        return this.name + " has died in act of combat";
    } else {
        return this.name + " has received " + damage + " points of damage";
    };
    
}

Viking.prototype.battleCry = function () {
    return "Odin Owns You All!";
}

// Saxon
function Saxon(health, strength) {
    
    Soldier.call(this, health, strength);

    this.attack = function () {
        return this.strength;
    }
};

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage = function(damage) {
    
    this.health = this.health - damage;
    if(this.health <= 0) {
        return  "A Saxon has died in combat";
    } else {
        return "A Saxon has received " + damage + " points of damage";
    };
    
}

// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];

}

War.prototype.addViking = function (Viking) {
    this.vikingArmy.push(Viking);
    
}

War.prototype.addSaxon = function (Saxon) {
    this.saxonArmy.push(Saxon);
    
}

War.prototype.vikingAttack = function () {
    //var indexRandomViking = randomViking.indexOf(this.vikingArmy);
    
    var indexRandomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    var randomSaxon = this.saxonArmy[indexRandomSaxon];
    var randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    
    var combatLogs = randomSaxon.receiveDamage(randomViking.strength);
   
    if(combatLogs === "A Saxon has died in combat") {
        this.saxonArmy.splice(indexRandomSaxon,1);
    }

}

War.prototype.saxonAttack = function () {

}