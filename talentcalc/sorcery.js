//SORCERY TREE CONTROLS

//SORCERY TREE IDENTIFICATION
function setsorcery(Skills,Attributes) {
	this.Skills = Skills
	this.masteryid = 3
	this.masteryname = "Sorcery"
	this.Attributes = Attributes
}

// POPULATE ATTRIBUTE ARRAY
Attributes = new Array(123);
var levels = Attributes.length;
var healthper = (2/3);
var manaper = (4/3);
for(var i=0; i<=levels; i++) {
	Attributes[i] = new Attribute((i*healthper),(i*manaper));
}

//SET SKILL DESCRIPTIONS
Skills = new Array();

//Arcane Weaponry I
Spells = new Array();
Spells[1] = new SpellInfo("Unlocks Charged Entropy and Maelstrom as charge attacks")
Spells[2] = new SpellInfo("Charged Entropy and Maelstrom can apply additional damage over time")
Spells[3] = new SpellInfo("Charged Entropy and Maelstrom generate bonus fate")
Skills[0] = new Skill ("Arcane Weaponry I", 0, Spells, -1, "[武器招式] Unlocks Charge special attacks for the Staff and Chakrams")

//Sceptre Mastery
Spells = new Array();
Spells[1] = new SpellInfo("+2 Physical Damage with Sceptres, +5% Damage with Sceptres")
Spells[2] = new SpellInfo("+3 Physical Damage with Sceptres, +10% Damage with Sceptres")
Spells[3] = new SpellInfo("+4 Physical Damage with Sceptres, +15% Damage with Sceptres")
Spells[4] = new SpellInfo("+6 Physical Damage with Sceptres, +20% Damage with Sceptres")
Spells[5] = new SpellInfo("+8 Physical Damage with Sceptres, +25% Damage with Sceptres")
Spells[6] = new SpellInfo("+8 Physical Damage with Sceptres, +30% Damage with Sceptres")
Skills[1] = new Skill ("Sceptre Mastery", 0, Spells, -1, "[被动] Long hours of study and practice enable you to wield Sceptres very effectively.")

//Staff Mastery
Spells = new Array();
Spells[1] = new SpellInfo("+6 Physical Damage with Staves, +5% Damage with Staves")
Spells[2] = new SpellInfo("+7 Physical Damage with Staves, +10% Damage with Staves, +25% effect duration to Staff Chain Finisher, Cost: 1 Mana")
Spells[3] = new SpellInfo("+8 Physical Damage with Staves, +15% Damage with Staves")
Spells[4] = new SpellInfo("+10 Physical Damage with Staves, +20% Damage with Staves, +50% effect duration to Staff Chain Finisher, Cost: 2 Mana")
Spells[5] = new SpellInfo("+12 Physical Damage with Staves, +25% Damage with Staves")
Spells[6] = new SpellInfo("+14 Physical Damage with Staves, +30% Damage with Staves, +50% effect duration to Staff Chain Finisher, Cost: 3 Mana")
Skills[2] = new Skill ("Staff Mastery", 0, Spells, -1, "[被动] You've learned to channel incredible amounts of energy through your Staff, increasing its damage output considerably.")

//Storm Bolt
Spells = new Array();
Spells[1] = new SpellInfo("40 Lightning Damage., Cost: 20 mana")
Spells[2] = new SpellInfo("50 Lightning Damage., Cost: 23 mana")
Spells[3] = new SpellInfo("60 Lightning Damage and 20% Chance to Stun for 3 seconds., Cost: 26 mana")
Spells[4] = new SpellInfo("70 Lightning Damage and 25% Chance to Stun for 4 seconds, Explosion on impact deals 12 Shocking Damage in an area., Cost: 29 mana")
Spells[5] = new SpellInfo("80 Lightning Damage and 30% Chance to Stun for 4 seconds, Explosion on impact deals 15 Shocking Damage in an area., Cost: 32 mana")
Spells[6] = new SpellInfo("90 Lightning Damage and 35% Chance to Stun for 4 seconds, Explosion on impact deals 18 Shocking Damage in an area., Cost: 35 mana")
Skills[3] = new Skill ("Storm Bolt", 0, Spells, -1, "[主动] Launch a burst of electrical energy which deals Lightning and Shocking Damage. At higher levels, it can Stun enemies.")

//Arcane Weaponry II
Spells = new Array();
Spells[1] = new SpellInfo("Unlocks Mage's Vortex and Warding Blast as attacks from Block")
Spells[2] = new SpellInfo("Unlocks Mage's Vortex and Warding Blast can apply additional damage over time")
Spells[3] = new SpellInfo("Unlocks Mage's Vortex and Warding Blast generate bonus fate")
Skills[4] = new Skill ("Arcane Weaponry II", 5, Spells, 0, "[武器招式] Unlocks special attacks from Block for the Staff and Sceptre.")

//Chakram Mastery
Spells = new Array();
Spells[1] = new SpellInfo("+2 Physical Damage with Chakrams, +5% Damage with Chakrams")
Spells[2] = new SpellInfo("+3 Physical Damage with Chakrams, +10% Damage with Chakrams")
Spells[3] = new SpellInfo("+4 Physical Damage with Chakrams, +15% Damage with Chakrams")
Spells[4] = new SpellInfo("+6 Physical Damage with Chakrams, +20% Damage with Chakrams")
Spells[5] = new SpellInfo("+8 Physical Damage with Chakrams, +25% Damage with Chakrams")
Spells[6] = new SpellInfo("+10 Physical Damage with Chakrams, +30% Damage with Chakrams")
Skills[5] = new Skill ("Chakram Mastery", 5, Spells, -1, "[被动] Your unique mix of arcane and martial talent enables you to deal incredible damage with Chakrams.")

//Sphere of Protection
Spells = new Array();
Spells[1] = new SpellInfo("+5% Damage Resistance while active. Sustained Cost: 30% Mana")
Spells[2] = new SpellInfo("+6% Damage Resistance while active. Sustained Cost: 30% Mana")
Spells[3] = new SpellInfo("+7% Damage Resistance while active. Sustained Cost: 30% Mana")
Spells[4] = new SpellInfo("+8% Damage Resistance while active. Sustained Cost: 30% Mana")
Spells[5] = new SpellInfo("+10% Damage Resistance while active. Sustained Cost: 30% Mana")
Spells[6] = new SpellInfo("+12% Damage Resistance while active. Sustained Cost: 30% Mana")
Skills[6] = new Skill ("Sphere of Protection", 5, Spells, -1, "[持续] While active, Sphere of Protection creates a magical barrier that blocks a percentage of damage from each imcoming attack.")

//Mark of Flame
Spells = new Array();
Spells[1] = new SpellInfo("Tag up to 3 targets. When, executed Mark of Flame deals 100 Fire Damage and 10 Burning Damage. Cost to Mark: 10 Mana. Cost to Execute: 30 Mana")
Spells[2] = new SpellInfo("Tag up to 3 targets. When, executed Mark of Flame deals 130 Fire Damage and 15 Burning Damage. Cost to Mark: 10 Mana. Cost to Execute: 33 Mana")
Spells[3] = new SpellInfo("Tag up to 4 targets. When, executed Mark of Flame deals 160 Fire Damage and 20 Burning Damage. Cost to Mark: 10 Mana. Cost to Execute: 36 Mana")
Spells[4] = new SpellInfo("Tag up to 4 targets. When, executed Mark of Flame deals 190 Fire Damage and 25 Burning Damage. Cost to Mark: 10 Mana. Cost to Execute: 39 Mana")
Spells[5] = new SpellInfo("Tag up to 5 targets. When, executed Mark of Flame deals 220 Fire Damage and 30 Burning Damage. Cost to Mark: 10 Mana. Cost to Execute: 42 Mana")
Skills[7] = new Skill ("Mark of Flame", 5, Spells, -1, "[主动] Tap the button to tag your targets with a magical Mark. Press and hold the button to detonate all Marked enemies with a fiery explosion.")

//Conservative Casting
Spells = new Array();
Spells[1] = new SpellInfo("All Casting costs reduced by 3%")
Spells[2] = new SpellInfo("All Casting costs reduced by 6%")
Spells[3] = new SpellInfo("All Casting costs reduced by 9%")
Spells[4] = new SpellInfo("All Casting costs reduced by 12%")
Spells[5] = new SpellInfo("All Casting costs reduced by 15%")
Skills[8] = new Skill ("Conservative Casting", 5, Spells, -1, "[被动] Having unlocked countless arcane secrets, you are able to power your Abilities with far less Mana.")

//Summon Faer Gorta
Spells = new Array();
Spells[1] = new SpellInfo("Summon a Faer Gorta, Cost: 50 Mana")
Spells[2] = new SpellInfo("Summoned Faer Gorta has +10% Health and Total Damage, Cost: 60 Mana")
Spells[3] = new SpellInfo("Summoned Faer Gorta has +25% Health and Total Damage, Cost: 65 Mana")
Spells[4] = new SpellInfo("Summoned Faer Gorta has +50% Health and Total Damage, Cost: 70 Mana")
Spells[5] = new SpellInfo("Summoned Faer Gorta has +75% Health and Total Damage, Cost: 75 Mana")
Spells[6] = new SpellInfo("Summoned Faer Gorta has +100% Health and Total Damage, Cost: 80 Mana")
Skills[9] = new Skill ("Summon Faer Gorta", 20, Spells, -1, "[主动] Use magic to rapidly construct a Faer Gorta who will fight by your side. Summon lasts for 120 seconds.")

//Healing Surge
Spells = new Array();
Spells[1] = new SpellInfo("Restores 20% HP upon cast, 10% HP by charging, and 10% HP upon completion. Costs 30% Max Mana to Cast, and up to 20% Max Mana to sustain the charge.")
Spells[2] = new SpellInfo("Restores 20% HP upon cast, 20% HP by charging, and 10% HP upon completion. Costs 30% Max Mana to Cast, and up to 20% Max Mana to sustain the charge.")
Spells[3] = new SpellInfo("Restores 20% HP upon cast, 30% HP by charging, and 10% HP upon completion. Costs 30% Max Mana to Cast, and up to 20% Max Mana to sustain the charge.")
Spells[4] = new SpellInfo("Restores 20% HP upon cast, 40% HP by charging, and 10% HP upon completion. Costs 30% Max Mana to Cast, and up to 20% Max Mana to sustain the charge.")
Spells[5] = new SpellInfo("Restores 20% HP upon cast, 50% HP by charging, and 10% HP upon completion. Costs 30% Max Mana to Cast, and up to 20% Max Mana to sustain the charge.")
Skills[10] = new Skill ("Healing Surge", 20, Spells, -1, "[主动] Your magic knits together flesh and bone, healing your wounds. Holding the button longer restores more health.")

//Chain Lightning
Spells = new Array();
Spells[1] = new SpellInfo("+10% chance for Shocking Damage to propogate between enemies, Storm Bolt damage increased by 10%")
Spells[2] = new SpellInfo("+20% chance for Shocking Damage to propogate between enemies, Storm Bolt damage increased by 20%")
Spells[3] = new SpellInfo("+30% chance for Shocking Damage to propogate between enemies, Storm Bolt damage increased by 30%")
Spells[4] = new SpellInfo("+40% chance for Shocking Damage to propogate between enemies, Storm Bolt damage increased by 40%")
Spells[5] = new SpellInfo("+50% chance for Shocking Damage to propogate between enemies, Storm Bolt damage increased by 50%")
Skills[11] = new Skill ("Chain Lightning", 20, Spells, 3, "[增强] Increases Storm Bolt damage, and causes Shocking Damage to bounce between your enemies more frequently.")

//Ice Barrage
Spells = new Array();
Spells[1] = new SpellInfo("Fires 5 projectiles dealing 15 Ice Damage and 3 Freezing Damage each, Cost: 25 mana")
Spells[2] = new SpellInfo("Fires 5 projectiles dealing 18 Ice Damage and 4 Freezing Damage each, Cost: 30 mana")
Spells[3] = new SpellInfo("Fires 7 projectiles dealing 21 Ice Damage and 4 Freezing Damage each, Cost: 35 mana")
Spells[4] = new SpellInfo("Fires 7 projectiles dealing 24 Ice Damage and 5 Freezing Damage each, Cost: 40 mana")
Spells[5] = new SpellInfo("Fires 9 projectiles dealing 27 Ice Damage and 5 Freezing Damage each, Cost: 45 mana")
Skills[12] = new Skill ("Ice Barrage", 20, Spells, -1, "[主动] Sends a scattered blast of Ice Shards into the air to crash down on your foes, dealing Ice and Freezing Damage.")

//Arcane Weaponry III
Spells = new Array();
Spells[1] = new SpellInfo("Unlocks Arcane Fury and Elemental Escape as attacks from dodge")
Spells[2] = new SpellInfo("Arcane Fury and Elemental Escape can apply additional damage over time")
Spells[3] = new SpellInfo(" Arcane Fury and Elemental Escape generate bonus fate")
Skills[13] = new Skill ("Arcane Weaponry III", 35, Spells, 4, "[武器招式] Unlocks delayed special attacks for the Staff and Chakram")

//Transference
Spells = new Array();
Spells[1] = new SpellInfo("+25% chance to siphon Health")
Spells[2] = new SpellInfo("+35% chance to siphon Health")
Spells[3] = new SpellInfo("+45% chance to siphon Health")
Spells[4] = new SpellInfo("+55% chance to siphon Health")
Spells[5] = new SpellInfo("+70% chance to siphon Health")
Skills[14] = new Skill ("Transference", 35, Spells, 9, "[增强] Summoned Faer Gorta's attacks have a chance to siphon Health from enemies and send it to you.")


//Sphere of Reprisal
Spells = new Array();
Spells[1] = new SpellInfo("Spawns 2 projectiles which deal 50 Physical Damage each")
Spells[2] = new SpellInfo("Spawns 2 projectiles which deal 55 Physical Damage each")
Spells[3] = new SpellInfo("Spawns 2 projectiles which deal 60 Physical Damage each")
Spells[4] = new SpellInfo("Spawns 4 projectiles which deal 60 Physical Damage each")
Spells[5] = new SpellInfo("Spawns 4 projectiles which deal 70 Physical Damage each")
Skills[15] = new Skill ("Sphere of Reprisal", 35, Spells, -6, "[增强] While Sphere of Protection is active, ethereal orbs are created around you which deal damage to enemies they hit.")

//Smolder
Spells = new Array();
Spells[1] = new SpellInfo("All Burning Damage increased by +20%, Mark of Flame damage increased by 10%")
Spells[2] = new SpellInfo("All Burning Damage increased by +40%, Mark of Flame damage increased by 20%")
Spells[3] = new SpellInfo("All Burning Damage increased by +60%, Mark of Flame damage increased by 30%")
Spells[4] = new SpellInfo("All Burning Damage increased by +80%, Mark of Flame damage increased by 40%")
Spells[5] = new SpellInfo("All Burning Damage increased by +100%, Mark of Flame damage increased by 50%")
Skills[16] = new Skill ("Smolder", 35, Spells, 7, "[增强] Your mastery over the power of fire allows you to increase the effectiveness of all Burning effects, as well as the Damage done by Mark of Flame.")

//Frostshackle
Spells = new Array();
Spells[1] = new SpellInfo("Increase duration of all Freezing effects by +25%, Ice Barrage damage increased by 10%")
Spells[2] = new SpellInfo("Increase duration of all Freezing effects by +50%, Ice Barrage damage increased by 20%")
Spells[3] = new SpellInfo("Increase duration of all Freezing effects by +75%, Ice Barrage damage increased by 30%")
Spells[4] = new SpellInfo("Increase duration of all Freezing effects by +100%, Ice Barrage damage increased by 40%")
Spells[5] = new SpellInfo("Increase duration of all Freezing effects by +150%, Ice Barrage damage increased by 50%")
Skills[17] = new Skill ("Frostshackle", 35, Spells, 12, "[增强] Your knowledge of eldritch frost allows you to extend the duration of all Freezing effects, slowing enemies down for a longer time. Also increases the Damage caused by Ice Barrage.")

//Arcane Weaponry IV
Spells = new Array();
Spells[1] = new SpellInfo("Unlocks Orbital Blades as an attack from dodge")
Spells[2] = new SpellInfo("Orbital Blades can apply additional damage over time")
Spells[3] = new SpellInfo("Orbital Blades generates bonus fate")
Skills[18] = new Skill ("Arcane Weaponry IV", 50, Spells, 13, "[武器招式] Unlocks dodge special attacks for the Chakrams.")

//Masterful Construction
Spells = new Array();
Spells[1] = new SpellInfo("+7% chance to critical hit, Summon chain attack has 3 hits")
Spells[2] = new SpellInfo("+10% chance to critical hit, Summon chain attack has 3 hits")
Spells[3] = new SpellInfo("+13% chance to critical hit, Summon chain attack has 5 hits")
Spells[4] = new SpellInfo("+16% chance to critical hit, Summon chain attack has 5 hits")
Spells[5] = new SpellInfo("+19% chance to critical hit, Summon chain attack has 7 hits")
Skills[19] = new Skill ("Masterful Construction", 50, Spells, 14, "[增强] Your summoned Faer Gorta swings for more hits in its attack chain and gains a chance to critical hit.")

//Elemental Rage
Spells = new Array();
Spells[1] = new SpellInfo("Attack 1: deals 90 area Damage and pulls nearby enemies; Cost: 55 mana, Attack 2: deals 130 area Damage; Cost: 55 mana, Attack 3: deals 100 Damage and slows enemies; Cost: 60 mana")
Spells[2] = new SpellInfo("Attack 1: deals 105 area Damage and pulls nearby enemies; Cost: 60 mana, Attack 2: deals 150 area Damage; Cost:60 mana, Attack 3: deals 110 Damage and slows enemies; Cost: 65 mana")
Spells[3] = new SpellInfo("Attack 1: deals 120 area Damage and pulls nearby enemies; Cost: 65 mana, Attack 2: deals 170 area Damage; Cost:65 mana, Attack 3: deals 125 Damage and slows enemies; Cost: 70 mana")
Spells[4] = new SpellInfo("Attack 1: deals 135 area Damage and pulls nearby enemies; Cost: 70 mana, Attack 2: deals 190 area Damage; Cost:70 mana, Attack 3: deals 145 Damage and slows enemies; Cost: 75 mana")
Spells[5] = new SpellInfo("Attack 1: deals 150 area Damage and pulls nearby enemies; Cost: 75 mana, Attack 2: deals 210 area Damage; Cost:75 mana, Attack 3: deals 170 Damage and slows enemies; Cost: 80 mana")
Skills[20] = new Skill ("Elemental Rage", 50, Spells, -1, "[主动] Combine the mystic elements of Fire, Lightning, and Ice into a devastating chain of attacks.")

//Tempest
Spells = new Array();
Spells[1] = new SpellInfo("Deals 360 Lightning Damage and 30 Shocking Damage in an area, Cost: 135 mana")
Spells[2] = new SpellInfo("Deals 400 Lightning Damage and 35 Shocking Damage in an area, Cost: 145 mana")
Spells[3] = new SpellInfo("Deals 440 Lightning Damage and 40 Shocking Damage in an area, Cost: 155 mana")
Spells[4] = new SpellInfo("Deals 480 Lightning Damage and 45 Shocking Damage in an area, Cost: 165 mana")
Spells[5] = new SpellInfo("Deals 520 Lightning Damage and 50 Shocking Damage in an area, Cost: 175 mana")
Skills[21] = new Skill ("Tempest", 50, Spells, 11, "[增强] Hold the buttom for Storm Bolt to summon forth lightning from the heavens, smiting all nearby foes.")

//Sphere of Retribution
Spells = new Array();
Spells[1] = new SpellInfo("Each projectile deals 110 Physical Damage")
Spells[2] = new SpellInfo("Each projectile deals 140 Physical Damage")
Spells[3] = new SpellInfo("Each projectile deals 150 Physical Damage and staggers enemies")
Spells[4] = new SpellInfo("Each projectile deals 160 Physical Damage and staggers enemies")
Spells[5] = new SpellInfo("Each projectile deals 170 Physical Damage and knocks down enemies")
Skills[22] = new Skill ("Sphere of Retribution", 70, Spells, 15, "[增强] Sphere of Protection gains the ability to fire off deadly ethereal splinters when enemies draw near.")

//Meteor
Spells = new Array();
Spells[1] = new SpellInfo("Deals 500 Fire and 75 Burning Damage in an area at your target's location, Cost: 250 mana")
Spells[2] = new SpellInfo("Deals 550 Fire and 80 Burning Damage in an area at your target's location, Cost: 260 mana")
Spells[3] = new SpellInfo("Deals 600 Fire and 85 Burning Damage in an area at your target's location, Cost: 270 mana")
Spells[4] = new SpellInfo("Deals 650 Fire and 90 Burning Damage in an area at your target's location, Cost: 280 mana")
Spells[5] = new SpellInfo("Deals 700 Fire and 95 Burning Damage in an area at your target's location, Cost: 290 mana")
Skills[23] = new Skill ("Meteor", 70, Spells, 16, "[主动] Calls forth a meteor from the skies, dealing massive damage to the area in front of you.")

//Winter's Embrace
Spells = new Array();
Spells[1] = new SpellInfo("10 Ice and 5 Piercing Damage per second for 15 seconds, Cost: 180 mana")
Spells[2] = new SpellInfo("15 Ice and 10 Piercing Damage per second for 15 seconds, Cost: 190 mana")
Spells[3] = new SpellInfo("20 Ice and 15 Piercing Damage per second for 15 seconds, Cost: 200 mana")
Spells[4] = new SpellInfo("25 Ice and 20 Piercing Damage per second for 15 seconds, Cost: 210 mana")
Spells[5] = new SpellInfo("30 Ice and 25 Piercing Damage per second for 15 seconds, Cost: 220 mana")
Skills[24] = new Skill ("Winter's Embrace", 70, Spells, 12, "[增强] Hold the button for Ice Barrage to launch a persistent cloud of ice shards which lasts for a duration. Enemies in the blizzard suffer periodic Ice, Piercing, and Freezing Damage.")

// LOAD SORCERY INTO MASTERY ARRAY
Mastery[3] = new setsorcery(Skills,Attributes)