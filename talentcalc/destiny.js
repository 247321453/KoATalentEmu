// DESTINY LISTING

//DEFINE DESTINY FUNCTION
function Destiny(name,might_points,fin_points,sorc_points,bonus) {
	this.name = name
	this.might_points = might_points
	this.fin_points = fin_points
	this.sorc_points = sorc_points
	this.bonus = bonus
}

//SET DESTINY DESCRIPTIONS
Destinies = new Array();

Destinies[0] = new Destiny("The Fateless One", 0, 0, 0, "None")

Destinies[1] = new Destiny("Brawler", 1, 0, 0, "+15% Melee Attack Damage, +10% Block Efficiency")

Destinies[2] = new Destiny("Fighter", 11, 0, 0, "+17% Melee Attack Damage, +13% Block Efficiency")

Destinies[3] = new Destiny("Soldier", 28, 0, 0, "+20% Melee Attack Damage, +15% Block Efficiency, +10% Stun Duration")

Destinies[4] = new Destiny("Warrior", 49, 0, 0, "+23% Melee Attack Damage, +17% Block Efficiency, +15% Stun Duration")

Destinies[5] = new Destiny("Conqueror", 76, 0, 0, "+25% Melee Attack Damage, +20% Block Efficiency, +17% Stun Duration, +17% Chance to Stun")

Destinies[6] = new Destiny("Warlord", 109, 0, 0, "+30% Melee Attack Damage, +20% Block Efficiency, +20% Stun Duration, +20% Chance to Stun  <BR>&nbsp&nbsp&nbsp Last Stand - Automatically resurrect with 20% Health. Health drains until an enemy is killed.")

Destinies[7] = new Destiny("Rogue", 0, 1, 0, "+10% Ranged Attack Damage, +30% Damage Resistance While Dodging, +5% Piercing Damage")

Destinies[8] = new Destiny("Scout", 0, 11, 0, "+13% Ranged Attack Damage, +35% Damage Resistance While Dodging, +7% Piercing Damage")

Destinies[9] = new Destiny("Hunter", 0, 28, 0, "+15% Ranged Attack Damage, +40% Damage Resistance While Dodging, +5% Chance to Critical Hit, +10% Piercing Damage")

Destinies[10] = new Destiny("Ranger", 0, 49, 0, "+17% Ranged Attack Damage, +45% Damage Resistance While Dodging, +7% Chance to Critical Hit, +13% Piercing Damage")

Destinies[11] = new Destiny("Assassin", 0, 76, 0, "+20% Ranged Attack Damage, +50% Damage Resistance While Dodging, +10% Chance to Critical Hit, +15% Piercing Damage <BR>&nbsp&nbsp&nbsp Evasion - 6% Chance to Avoid Hit")

Destinies[12] = new Destiny("Nightblade", 0, 109, 0, "+30% Ranged Attack Damage, +60% Damage Resistance While Dodging, +12% Chance to Critical Hit, +20% Piercing Damage  <BR>&nbsp&nbsp&nbsp Assassination - +300% Chance to Critical Hit after triggering Evasion, Evasion - 11% Chance to Avoid Hit")

Destinies[13] = new Destiny("Acolyte", 0, 0, 1, "+15% Elemental Damage, +10% Mana Cost Reduction")

Destinies[14] = new Destiny("Initiate", 0, 0, 11, "+17% Elemental Damage, +13% Mana Cost Reduction")

Destinies[15] = new Destiny("Seer", 0, 0, 28, "+20% Elemental Damage, +13% Mana Cost Reduction, +1 Mana Regen Per Second <BR>&nbsp&nbsp&nbsp Blink - Short range Teleport, replaces Dodge.")

Destinies[16] = new Destiny("Sage", 0, 0, 49, "+23% Elemental Damage, +17% Mana Cost Reduction, +1 Mana Regen Per Second, +15% Duration of all Spells  <BR>&nbsp&nbsp&nbsp Ice Blink I - Short range Teleport with Freezing effect, replaces Dodge.")

Destinies[17] = new Destiny("Sorcerer", 0, 0, 76, "+25% Elemental Damage, +20% Mana Cost Reduction, +2 Mana Regen Per Second  <BR>&nbsp&nbsp&nbsp Ice Blink II - Short range Teleport with Freezing effect, replaces Dodge.")

Destinies[18] = new Destiny("Archmage", 0, 0, 109, "+30% Elemental Damage, +25% Mana Cost Reduction, +3 Mana Regen Per Second  <BR>&nbsp&nbsp&nbsp Echoes of Fate - Chance to Spawn Fate Echo Ally per Kill  <BR>&nbsp&nbsp&nbsp Ice Blink III - Short range Teleport with Freezing effect, replaces Dodge.")

Destinies[19] = new Destiny("Duelist", 6, 6, 0, "+15% Melee Attack Damage, +7% Ranged Attack Damage")

Destinies[20] = new Destiny("Warden", 14, 14, 0, "+17% Melee Attack Damage, +10% Ranged Attack Damage, +5% Chance to Critical Hit")

Destinies[21] = new Destiny("Avenger", 25, 25, 0, "+20% Melee Attack Damage, +13% Ranged Attack Damage, +7% Chance to Critical Hit, +10% Piercing Damage")

Destinies[22] = new Destiny("Slayer",38, 38, 0, "+23% Melee Attack Damage, +15% Ranged Attack Damage, +10% Chance to Critical Hit, +13% Piercing Damage, +20% Damage While in Stealth")

Destinies[23] = new Destiny("Blademaster",55, 55, 0, "+25% Melee Attack Damage, +20% Ranged Attack Damage, +12% Chance to Critical Hit, +15% Piercing Damage, +25% Damage While in Stealth  <BR>&nbsp&nbsp&nbsp Cut Throat - +15% Physical Damage, +1% Chance to Steal Health, Gold drops as 20% of Damage for 5 seconds when striking fallen enemies.")

Destinies[24] = new Destiny("Guardian", 6, 0, 6, "+10% of Damage Received as Mana, +15% Elemental Resistance")

Destinies[25] = new Destiny("Battlemage", 12, 0, 12, "+13% of Damage Received as Mana, +17% Elemental Resistance, +10% Melee Attack Damage <BR>&nbsp&nbsp&nbsp Blink - Short range teleport, replaces Dodge.")

Destinies[26] = new Destiny("Crusader", 25, 0, 25, "+15% of Damage Received as Mana, +20% Elemental Resistance, +15% Melee Attack Damage <BR>&nbsp&nbsp&nbsp Blink - Short range teleport, replaces Dodge.")

Destinies[27] = new Destiny("Paragon", 38, 0, 38, "+20% of Damage Received as Mana, +23% Elemental Resistance, +17% Melee Attack Damage, +10% Total Armor <BR>&nbsp&nbsp&nbsp Blink - Short range teleport, replaces Dodge.")

Destinies[28] = new Destiny("Champion", 55, 0, 55, "+25% of Damage Received as Mana, +25% Elemental Resistance, +20% Melee Attack Damage, +15% Total Armor <BR>&nbsp&nbsp&nbsp Blink - Short range teleport, replaces Dodge. <BR>&nbsp&nbsp&nbsp Harmonic Overload - Chance to produce elemental projectiles per Kill.")

Destinies[29] = new Destiny("Disciple", 0, 6, 6, "+15% Elemental Damage, +7% Piercing Damage")

Destinies[30] = new Destiny("Arcanist", 0, 14, 14, "+17% Elemental Damage, +10% Piercing Damage, +5% Chance to Critical Hit <BR>&nbsp&nbsp&nbsp Dread - Guaranteed to Critical Hit vs. enemies in Panic. <BR>&nbsp&nbsp&nbsp Blink - Short range teleport, replaces Dodge.")

Destinies[31] = new Destiny("Warlock", 0, 25, 25, "+20% Elemental Damage, +13% Piercing Damage, +7% Chance to Critical Hit, +1 Mana Regen Per Second <BR>&nbsp&nbsp&nbsp Dread - Guaranteed to Critical Hit vs. enemies in Panic. <BR>&nbsp&nbsp&nbsp Poison Blink - Short range teleport dealing Poison Damage, replaces Dodge.")

Destinies[32] = new Destiny("Spellcloak", 0, 38, 38, "+23% Elemental Damage, +15% Piercing Damage, +10% Chance to Critical Hit, +2 Mana Regen Per Second <BR>&nbsp&nbsp&nbsp Dread - Guaranteed to Critical Hit vs. enemies in Panic. <BR>&nbsp&nbsp&nbsp Poison Blink - Short range teleport dealing Poison Damage, replaces Dodge.")

Destinies[33] = new Destiny("Shadowcaster", 0, 55, 55, "+25% Elemental Damage, +20% Piercing Damage, +12% Chance to Critical Hit, +2 Mana Regen Per Second <BR>&nbsp&nbsp&nbsp Dread - Guaranteed to Critical Hit vs. enemies in Panic. <BR>&nbsp&nbsp&nbsp Poison Blink - Short range teleport dealing Poison Damage, replaces Dodge. <BR>&nbsp&nbsp&nbsp Drain Mana - Critical Hits restore Mana")

Destinies[34] = new Destiny("Seeker", 2, 2, 2, "+7% Melee Attack Damage, +7% Ranged Attack Damage, +7% Magic Attack Damage <BR>&nbsp&nbsp&nbsp Equip Requirements reduced by half.")

Destinies[35] = new Destiny("Wayfarer", 4, 4, 4, "+10% Melee Attack Damage, +10% Ranged Attack Damage, +10% Magic Attack Damage, +1 to All Skills <BR>&nbsp&nbsp&nbsp Equip Requirements reduced by half.")

Destinies[36] = new Destiny("Adventurer", 10, 10, 10, "+13% Melee Attack Damage, +13% Ranged Attack Damage, +13% Magic Attack Damage, +5% Total Damage Resistance, +1 to All Skills <BR>&nbsp&nbsp&nbsp Equip Requirements reduced by half.")

Destinies[37] = new Destiny("Prodigy", 17, 17, 17, "+15% Melee Attack Damage, +15% Ranged Attack Damage, +15% Magic Attack Damage, +7% Total Damage Resistance, +1 to All Skills, +5% Chance to Critical Hit <BR>&nbsp&nbsp&nbsp Equip Requirements reduced by half.")

Destinies[38] = new Destiny("Polymath", 26, 26, 26, "+17% Melee Attack Damage, +17% Ranged Attack Damage, +17% Magic Attack Damage, +10% Total Damage Resistance, +2 to All Skills, +7% Chance to Critical Hit <BR>&nbsp&nbsp&nbsp Equip Requirements reduced by half.")

Destinies[39] = new Destiny("Universalist", 37, 37, 37, "+20% Melee Attack Damage, +20% Ranged Attack Damage, +20% Magic Attack Damage, +12% Total Damage Resistance, +3 to All Skills, +10% Chance to Critical Hit <BR>&nbsp&nbsp&nbsp Equip Requirements reduced by half. <BR>&nbsp&nbsp&nbsp Mastery of Arms - Unlocks all Weapon Mastery Abilities")


