// MIGHT TREE CONTROLS

//DEFINE SKILL FUNCTION
function Skill(name,min_points,spells,prereq,desc) {
	this.name = name
	this.min_points = min_points
	this.desc = desc
	this.spells = spells
	this.prereq = prereq
}

//DEFINE ATTRIBUTE FUNCTION
function Attribute(Health,Mana) {
	this.health = Health
	this.mana = Mana
}

//GRAB SPELL INFORMATION
function SpellInfo(spellinfo) {
	this.spellinfo = spellinfo
}

//MIGHT TREE IDENTIFICATION
function setmight(Skills,Attributes) {
	this.Skills = Skills
	this.masteryid = 1
	this.masteryname = "力量"
	this.Attributes = Attributes
}

// POPULATE ATTRIBUTE ARRAY
Attributes = new Array(123);
var levels = Attributes.length;
var healthper = (4/3);
var manaper = (2/3);
for(var i=0; i<=levels; i++) {
	Attributes[i] = new Attribute((i*healthper),(i*manaper));
}

//SET SKILL DESCRIPTIONS
Skills = new Array();

//Brutal Weaponry I
Spells = new Array();
Spells[1] = new SpellInfo("Unlocks Comet Strike Whirlwind and Minotaur Rush as charge attacks")
Spells[2] = new SpellInfo("Comet Strike Whirlwind and Minotaur Rush can apply additional damage over time")
Spells[3] = new SpellInfo("Comet Strike Whirlwind and Minotaur Rush generate bonus fate")
Skills[0] = new Skill ("蛮力武器掌握I", 0, Spells, -1, "[武器招式] Unlocks charge special attacks for the Longsword, Greatsword, and Hammer.")

//Longsword Mastery
Spells = new Array();
Spells[1] = new SpellInfo("使用长剑时+4点物理伤害&4%伤害")
Spells[2] = new SpellInfo("使用长剑时+5点物理伤害&10%伤害")
Spells[3] = new SpellInfo("使用长剑时+6点物理伤害&15%伤害")
Spells[4] = new SpellInfo("使用长剑时+8点物理伤害&20%伤害")
Spells[5] = new SpellInfo("使用长剑时+10点物理伤害&25%伤害")
Spells[6] = new SpellInfo("使用长剑时+13点物理伤害&30%伤害")
Skills[1] = new Skill ("长剑专精", 0, Spells, -1, "[被动] A combination of perfect form and raw strength lend additional damage to your Longsword attacks.")

//Hammer Mastery
Spells = new Array();
Spells[1] = new SpellInfo("使用战锤时+8物理伤害&5%伤害")
Spells[2] = new SpellInfo("使用战锤时+9物理伤害&10%伤害")
Spells[3] = new SpellInfo("使用战锤时+10物理伤害&15%伤害")
Spells[4] = new SpellInfo("使用战锤时+12物理伤害&20%伤害")
Spells[5] = new SpellInfo("使用战锤时+14物理伤害&25%伤害")
Spells[6] = new SpellInfo("使用战锤时+17物理伤害&30%伤害")
Skills[2] = new Skill ("战锤专精", 0, Spells, -1, "[被动] Raw muscle and a superb sense of balance make you incredibly effective with the mighty Hammer.")

//Harpoon
Spells = new Array();
Spells[1] = new SpellInfo("在14米范围内将敌人抓到你面前同时造成15物理伤害&8穿刺伤害，消耗:20魔法值")
Spells[2] = new SpellInfo("在14米范围内将敌人抓到你面前同时造成20物理伤害&11穿刺伤害，消耗:23魔法值")
Spells[3] = new SpellInfo("在14米范围内将敌人抓到你面前同时造成25物理伤害&14穿刺伤害，消耗:26魔法值")
Spells[4] = new SpellInfo("在14米范围内将敌人抓到你面前同时造成30物理伤害&17穿刺伤害，消耗:30魔法值")
Skills[3] = new Skill ("鱼叉", 0, Spells, -1, "[主动] Snag an enemy and pull it back to you. May have the opposite effect with larger enemies.")

//Skillul Defense
Spells = new Array();
Spells[1] = new SpellInfo("格挡时+6%伤害抗性")
Spells[2] = new SpellInfo("格挡时+8%伤害抗性")
Spells[3] = new SpellInfo("格挡时+11%伤害抗性")
Spells[4] = new SpellInfo("格挡时+15%伤害抗性")
Spells[5] = new SpellInfo("格挡时+20%伤害抗性， 解锁[武器招式] 盾击 - 用盾猛烈冲击敌人，使对方暴露出弱点给你机会连击")
Skills[4] = new Skill ("完美防御", 0, Spells, -1, "[被动] Your masterful use of shields greatly increases your damage resistance while blocking. At the higest level, you unlock a special shield bash move. [Active]")

//Brutal Weaponry II
Spells = new Array();
Spells[1] = new SpellInfo("Unlocks Phantom Edge Guillotine and Spine Bender as attacks from Block")
Spells[2] = new SpellInfo("Phantom Edge Guillotine and Spine Bender can apply additional damage over time")
Spells[3] = new SpellInfo("Phantom Edge Guillotine and Spine Bender generate bonus fate")
Skills[5] = new Skill ("蛮力武器掌握II", 5, Spells, 0, "[Weapon] Unlocks special attacks from Block for the Longsword, Greatsword, and Hammer.")

//Greatsword Mastery
Spells = new Array();
Spells[1] = new SpellInfo("使用巨剑时+8物理伤害&5%伤害")
Spells[2] = new SpellInfo("使用巨剑时+9物理伤害&10%伤害")
Spells[3] = new SpellInfo("使用巨剑时+10物理伤害&15%伤害")
Spells[4] = new SpellInfo("使用巨剑时+12物理伤害&20%伤害")
Spells[5] = new SpellInfo("使用巨剑时+14物理伤害&25%伤害")
Spells[6] = new SpellInfo("使用巨剑时+17物理伤害&30%伤害")
Skills[6] = new Skill ("巨剑专精", 5, Spells, -1, "[被动] Your brute strength enables you to wield the greatsword with spectacular results.")

//Quake
Spells = new Array();
Spells[1] = new SpellInfo("每次震击造成24-42点物理伤害，消耗:14魔法值")
Spells[2] = new SpellInfo("每次震击造成32-54点物理伤害，消耗:15魔法值")
Spells[3] = new SpellInfo("每次震击造成40-66点物理伤害，消耗:16魔法值")
Spells[4] = new SpellInfo("每次震击造成48-78点物理伤害，消耗:18魔法值")
Spells[5] = new SpellInfo("每次震击造成56-90点物理伤害，消耗:20魔法值")
Skills[7] = new Skill ("震击", 5, Spells, -1, "[主动] Smash the ground to cause a tremor, damaging enemies in the area. Cast the spell rapidly in succession to chain up to 3 attacks.")

//Adrenaline Surge
Spells = new Array();
Spells[1] = new SpellInfo("30%概率回复20%生命值，并且10秒内伤害+30%，CD:300秒")
Spells[2] = new SpellInfo("40%概率回复20%生命值，并且10秒内伤害+40%，CD:300秒")
Spells[3] = new SpellInfo("50%概率回复20%生命值，并且10秒内伤害+50%，CD:300秒")
Spells[4] = new SpellInfo("60%概率回复20%生命值，并且10秒内伤害+60%，CD:300秒")
Spells[5] = new SpellInfo("70%概率回复20%生命值，并且10秒内伤害+70%，CD:300秒")
Skills[8] = new Skill ("激素迸发", 5, Spells, -1, "[被动] The threat of immediate death grants you a chance for a surge of health and a short span of greatly increased damage whenever your health falls below 25%.")

//Hardy Constitution
Spells = new Array();
Spells[1] = new SpellInfo("+5%生命值上限,3%元素抗性")
Spells[2] = new SpellInfo("+8%生命值上限, 5%元素抗性")
Spells[3] = new SpellInfo("+11%生命值上限, 7%元素抗性")
Spells[4] = new SpellInfo("+14%生命值上限, 9%元素抗性")
Spells[5] = new SpellInfo("+17%生命值上限, 11%元素抗性")
Spells[6] = new SpellInfo("+20%生命值上限, 13%元素抗性")
Skills[9] = new Skill ("强韧体质", 5, Spells, 4, "[增强] Your durable nature enables you to survive nearly anything, from sword wounds to magic flames.")

//Concussive Force
Spells = new Array();
Spells[1] = new SpellInfo("+20% 伤害 vs. 晕眩敌人")
Spells[2] = new SpellInfo("+30% 伤害 vs. 晕眩敌人")
Spells[3] = new SpellInfo("+40% 伤害 vs. 晕眩敌人")
Spells[4] = new SpellInfo("+50% 伤害 vs. 晕眩敌人")
Spells[5] = new SpellInfo("+60% 伤害 vs. 晕眩敌人")
Skills[10] = new Skill ("震荡冲击", 20, Spells, -1, "[被动] Mastery over the art of blunt trauma gives you increased damage versus Stunned enemies.")

//Aftershock
Spells = new Array();
Spells[1] = new SpellInfo("震击伤害+10% & 20% 概率最后一击能够晕眩敌人3秒，增加消耗:10魔法值")
Spells[2] = new SpellInfo("震击伤害+20% & 25% 概率最后一击能够晕眩敌人3秒，增加消耗:12魔法值")
Spells[3] = new SpellInfo("震击伤害+30% & 30% 概率最后一击能够晕眩敌人4秒，增加消耗:14魔法值")
Spells[4] = new SpellInfo("震击伤害+40% & 35% 概率最后一击能够晕眩敌人4秒，增加消耗:16魔法值")
Spells[5] = new SpellInfo("震击伤害+50% & 40% 概率最后一击能够晕眩敌人5秒，增加消耗:18魔法值")
Skills[11] = new Skill ("余震", 20, Spells, 7, "[增强] The final hit of your Quake attack causes lasting tremors which can Stun your foes, and all Quake damage is increased.")

//Relentless Assault
Spells = new Array();
Spells[1] = new SpellInfo("无情打击持续6秒，期间你的护甲值-50%，消耗:25魔法值")
Spells[2] = new SpellInfo("无情打击持续8秒，期间你的护甲值-40%，消耗:30魔法值")
Spells[3] = new SpellInfo("无情打击持续10秒，期间你的护甲值-30%，消耗:35魔法值")
Spells[4] = new SpellInfo("无情打击持续13秒，期间你的护甲值-20%，消耗:40魔法值")
Spells[5] = new SpellInfo("无情打击持续16秒，期间你的护甲值-150%，消耗:45魔法值")
Spells[6] = new SpellInfo("无情打击持续20秒，期间你的护甲值不会减少，消耗:50魔法值")
Skills[12] = new Skill ("无情打击", 20, Spells, -1, "[主动] Grants a short-term resistance to interruption at the expense of armor, allowing you to shrug off blows while taking slightly more damage.")

//Power Strike
Spells = new Array();
Spells[1] = new SpellInfo("+5% 暴击率")
Spells[2] = new SpellInfo("+10% 暴击率")
Spells[3] = new SpellInfo("+15% 暴击率")
Spells[4] = new SpellInfo("+20% 暴击率")
Spells[5] = new SpellInfo("+25% 暴击率")
Skills[13] = new Skill ("猛力攻击", 20, Spells, 8, "[增强] You achieve new heights of focus while an Adrenaline Surge is in effect, increaing your chance to deal Critical Hits.")

//Brutal Weaponry III
Spells = new Array();
Spells[1] = new SpellInfo("Unlocks Horizon Edge and Gravedigger as attacks from dodge")
Spells[2] = new SpellInfo("Horizon Edge and Gravedigger can apply additional damage over time")
Spells[3] = new SpellInfo("Horizon Edge and Gravedigger generate bonus fate")
Skills[14] = new Skill ("蛮力武器掌握III", 35, Spells, 5, "[武器招式] Unlocks special attacks from Dodge for the Longsword and Greatsword.")

//Bulwark
Spells = new Array();
Spells[1] = new SpellInfo("+1% 几率晕眩使用近距离武器攻击你的敌人")
Spells[2] = new SpellInfo("+2% 几率晕眩使用近距离武器攻击你的敌人")
Spells[3] = new SpellInfo("+3% 几率晕眩使用近距离武器攻击你的敌人")
Spells[4] = new SpellInfo("+4% 几率晕眩使用近距离武器攻击你的敌人")
Spells[5] = new SpellInfo("+5% 几率晕眩使用近距离武器攻击你的敌人")
Skills[15] = new Skill ("壁垒防御", 35, Spells, -1, "[被动] Your impenetrable defenses often surprise your foes, stunning them as their blows bounce off you in a fierce melee.")

//Battle Frenzy
Spells = new Array();
Spells[1] = new SpellInfo("+10% 伤害当你干掉第一个敌人时, +20% 伤害当你连续干掉第二个敌人时. 战争狂暴持续10秒，没杀死一个敌人重置有效时间. 持续消耗: 30% 魔法值上限")
Spells[2] = new SpellInfo("40% 伤害当你连续干掉第三个敌人时. 战争狂暴持续11秒，没杀死一个敌人重置有效时间. 持续消耗: 30% 魔法值上限")
Spells[3] = new SpellInfo("60% 伤害当你连续干掉第四个敌人时. 战争狂暴持续12秒，没杀死一个敌人重置有效时间. 持续消耗: 30% 魔法值上限")
Spells[4] = new SpellInfo("80% 伤害当你连续干掉第五个敌人时. 战争狂暴持续13秒，没杀死一个敌人重置有效时间. 持续消耗: 30% 魔法值上限")
Spells[5] = new SpellInfo("100% 伤害当你连续干掉第六个敌人时. 战争狂暴持续14秒，没杀死一个敌人重置有效时间. 持续消耗: 30% 魔法值上限")
Skills[16] = new Skill ("战争狂暴", 35, Spells, -1, "[主动] Go into a berserker rage, dealing greater and greater amounts of damage with each enemy you defeat in a short time.")

//Vengeance
Spells = new Array();
Spells[1] = new SpellInfo("+10% 几率反射伤害 ")
Spells[2] = new SpellInfo("+12% 几率反射伤害 ")
Spells[3] = new SpellInfo("+14% 几率反射伤害 ")
Spells[4] = new SpellInfo("+16% 几率反射伤害 ")
Spells[5] = new SpellInfo("+18% 几率反射伤害 ")
Spells[6] = new SpellInfo("+20% 几率反射伤害 ")
Skills[17] = new Skill ("复仇之力", 35, Spells, 12, "[增强] Your refined battle techniques allow you to reflect damage back at your opponents whenever Relentless Assault is in effect.")

//Brutal Weaponry IV
Spells = new Array();
Spells[1] = new SpellInfo("Unlocks Riposte Gut Thrust and Crushing Blow as attacks from parry")
Spells[2] = new SpellInfo("Riposte Gut Thrust and Crushing Blow can apply additional damage over time")
Spells[3] = new SpellInfo("Riposte Gut Thrust and Crushing Blow generate bonus fate")
Skills[18] = new Skill ("蛮力武器掌握IV", 50, Spells, 14, "[武器招式] Unlocks special attacks from Parry for the Longsword, Greatsword, and Hammer.")

//Stoneskin
Spells = new Array();
Spells[1] = new SpellInfo("+4% 穿刺 & 物理伤害抗性在战争狂暴持续时间内")
Spells[2] = new SpellInfo("+8% 穿刺 & 物理伤害抗性在战争狂暴持续时间内")
Spells[3] = new SpellInfo("+12% 穿刺 & 物理伤害抗性在战争狂暴持续时间内")
Spells[4] = new SpellInfo("+16% 穿刺 & 物理伤害抗性在战争狂暴持续时间内")
Spells[5] = new SpellInfo("+20% 穿刺 & 物理伤害抗性在战争狂暴持续时间内")
Skills[19] = new Skill ("石肤", 50, Spells, 16, "[增强] Your unquenchable rage grants you Physical and Piercing damage resistance while Battle Frenzy is active.")

//Bloodlust
Spells = new Array();
Spells[1] = new SpellInfo("当无情打击激活时，每次攻击有20%几率窃取敌人22生命值")
Spells[2] = new SpellInfo("当无情打击激活时，每次攻击有20%几率窃取敌人24生命值")
Spells[3] = new SpellInfo("当无情打击激活时，每次攻击有20%几率窃取敌人26生命值")
Spells[4] = new SpellInfo("当无情打击激活时，每次攻击有20%几率窃取敌人28生命值")
Spells[5] = new SpellInfo("当无情打击激活时，每次攻击有20%几率窃取敌人30生命值")
Skills[20] = new Skill ("嗜血", 50, Spells, 17, "[增强] While Relentless Assault is in effect, each of your strikes may grant you a measure of renewed vigor.")

//War Cry
Spells = new Array();
Spells[1] = new SpellInfo("6秒内降低敌人20%伤害，消耗:15魔法值")
Spells[2] = new SpellInfo("8秒内降低敌人25%伤害，消耗:15魔法值")
Spells[3] = new SpellInfo("10秒内降低敌人30%伤害，消耗:15魔法值")
Spells[4] = new SpellInfo("12秒内降低敌人35%伤害，消耗:15魔法值")
Spells[5] = new SpellInfo("14秒内降低敌人40%伤害，消耗:15魔法值")
Spells[6] = new SpellInfo("16秒内降低敌人45%伤害，消耗:15魔法值")
Skills[21] = new Skill ("战壕", 50, Spells, -1, "[主动] Let loose a terrifying cry that intimidates enemies, reducing their Damage output. Can be upgraded to knock down enemies.")

//Celerity
Spells = new Array();
Spells[1] = new SpellInfo("+5% 攻击速度当处于战争狂暴状态下")
Spells[2] = new SpellInfo("+10% 攻击速度当处于战争狂暴状态下")
Spells[3] = new SpellInfo("+15% 攻击速度当处于战争狂暴状态下")
Skills[22] = new Skill ("迅捷", 70, Spells, 19, "[增强] Unbridled rage propels you to inhuman speed while in a Battle Frenzy.")

//Wrath
Spells = new Array();
Spells[1] = new SpellInfo("Each impulse of Wrath does 50 Physical Damage, the final hit does 150 Physical Damage, Cost: 100 mana +10 per impulse")
Spells[2] = new SpellInfo("Each impulse of Wrath does 55 Physical Damage, the final hit does 180 Physical Damage, Cost: 110 mana +10 per impulse")
Spells[3] = new SpellInfo("Each impulse of Wrath does 60 Physical Damage, the final hit does 210 Physical Damage, Cost: 120 mana +10 per impulse")
Spells[4] = new SpellInfo("Each impulse of Wrath does 65 Physical Damage, the final hit does 240 Physical Damage, Cost: 130 mana +10 per impulse")
Spells[5] = new SpellInfo("Each impulse of Wrath does 70 Physical Damage, the final hit does 270 Physical Damage, Cost: 140 mana +10 per impulse")
Spells[6] = new SpellInfo("Each impulse of Wrath does 75 Physical Damage, the final hit does 300 Physical Damage, Cost: 150 mana +10 per impulse")
Skills[23] = new Skill ("雷霆乱舞", 70, Spells, 11, "[主动] Jump skyward, hurling nearby enemies along with you into the air and slamming them back down. Button mash to increase damage.")

//Terror
Spells = new Array();
Spells[1] = new SpellInfo("-10% 敌人护甲值")
Spells[2] = new SpellInfo("-20% 敌人护甲值")
Spells[3] = new SpellInfo("-30% 敌人护甲值, 10% 几率使敌人恐慌")
Spells[4] = new SpellInfo("-40% 敌人护甲值, 12% 几率使敌人恐慌")
Spells[5] = new SpellInfo("-50% 敌人护甲值, 14% 几率使敌人恐慌")
Spells[6] = new SpellInfo("-60% 敌人护甲值, 16% 几率使敌人恐慌")
Skills[24] = new Skill ("恐吓", 70, Spells, 21, "[增强] Your War Cry gains the ability to reduce enemy Armor, opening foes up for your attacks and sometimes causing them to panic.")

// LOAD MIGHT INTO MASTERY ARRAY
Mastery[1] = new setmight(Skills,Attributes)