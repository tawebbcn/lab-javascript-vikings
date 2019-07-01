// Soldier
function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;
}

// //------------------------------------
Soldier.prototype.attack = function() {
return this.attack = this.strength;
}
Soldier.prototype.receiveDamage = function(damage) {
this.health = this.health - damage;
}
// //------------------------------------
// // Viking -     A SOLDIER WITH AN ADDITIONAL PROPERTY, THEIR NAME 
Viking.prototype = Object.create(Soldier.prototype)

function Viking(name, health, strength){
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.receiveDamage = function(damage) {
        this.health -= damage;
            if(this.health>0) {
                return this.name+' has received '+damage+' points of damage'
            } else {
                return this.name+' has died in act of combat'
            };
    };
    this.battleCry = function() {
        return 'Odin Owns You All!'
    };
};

// // Saxon
Saxon.prototype = Object.create(Soldier.prototype)

function Saxon (health, strength){
    this.health = health;
    this.strength = strength;
    this.receiveDamage = function(damage) {
        this.health -= damage;
            if(this.health>0) {
                return 'A Saxon has received '+damage+' points of damage'
            } else {
                return 'A Saxon has died in combat'
            };
    };
};

//  War

function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];
    this.addViking = function(Viking) {
        this.vikingArmy.push(Viking)
    };
    this.addSaxon = function(Saxon) {
        this.saxonArmy.push(Saxon)
    };
    this.vikingAttack = function() {
        var rand = [Math.floor(Math.random()*this.saxonArmy.length)];
        var randVik = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
        var action = this.saxonArmy[rand].receiveDamage(randVik.strength);
        if (this.saxonArmy[rand].health<=0) {
            this.saxonArmy.splice(rand)
        };
        return action;
    };
    this.saxonAttack = function() {
        var rand = [Math.floor(Math.random()*this.vikingArmy.length)];
        var randSax = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
        var action = this.vikingArmy[rand].receiveDamage(randSax.strength);
        if (this.saxonArmy[rand].health<=0) {
            this.saxonArmy.splice(rand)
        };
        return action;
    };
    this.showStatus = function () {
        if(this.saxonArmy.length=0) {
            return 'Vikings have won the war of the century!'
        } else if (this.vikingArmy.length=0) {
            return 'Saxons have fought for their lives and survive another day...'
        } else {
            return 'Vikings and Saxons are still in the thick of battle.'
        }
    }
};
