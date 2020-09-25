// FINESSE TREE CONTROLS

//FINESSE TREE IDENTIFICATION
function setfinesse(Skills,Attributes) {
	this.Skills = Skills
	this.masteryid = 2
	this.masteryname = "Finesse"
	this.Attributes = Attributes
}

// POPULATE ATTRIBUTE ARRAY
Attributes = new Array(123);
var levels = Attributes.length;
var healthper = 1;
var manaper = 1;
for(var i=0; i<=levels; i++) {
	Attributes[i] = new Attribute((i*healthper),(i*manaper));
}

//SET SKILL DESCRIPTIONS
Skills = new Array();

//Precise Weaponry I
Spells = new Array();
Spells[1] = new SpellInfo("Unlocks Shadow Strike and Twisted Claw as charge attacks")
Spells[2] = new SpellInfo("Shadow Strike and Twisted Claw can apply additional damage over time")
Spells[3] = new SpellInfo("Shadow Strike and Twisted Claw generate bonus fate")
Skills[0] = new Skill ("穿刺武器掌握I", 0, Spells, -1, "[武器招式] Unlocks Charge special attacks for Daggers and Faeblades.")

//Dagger Mastery
Spells = new Array();
Spells[1] = new SpellInfo("使用匕首时 +2 物理伤害 & +5% 伤害")
Spells[2] = new SpellInfo("使用匕首时 +3 物理伤害 & +10% 伤害")
Spells[3] = new SpellInfo("使用匕首时 +4 物理伤害 & +15% 伤害")
Spells[4] = new SpellInfo("使用匕首时 +6 物理伤害 & +20% 伤害")
Spells[5] = new SpellInfo("使用匕首时 +8 物理伤害 & +25% 伤害")
Spells[6] = new SpellInfo("使用匕首时 +10 物理伤害 & +30% 伤害")
Skills[1] = new Skill ("匕首专精", 0, Spells, -1, "[被动] Your prowess with Daggers lets you to get the most out of every cut and thrust.")

//Longbow Mastery
Spells = new Array();
Spells[1] = new SpellInfo("使用弓时 +2 物理伤害 & +5% 伤害, +1箭袋容量")
Spells[2] = new SpellInfo("使用弓时 +3 物理伤害 & +10% 伤害, +1箭袋容量")
Spells[3] = new SpellInfo("使用弓时 +4 物理伤害 & +15% 伤害, +1箭袋容量")
Spells[4] = new SpellInfo("使用弓时 +5 物理伤害 & +20% 伤害, +1箭袋容量")
Spells[5] = new SpellInfo("使用弓时 +6 物理伤害 & +25% 伤害, +1箭袋容量")
Spells[6] = new SpellInfo("使用弓时 +7 物理伤害 & +30% 伤害, +1箭袋容量")
Skills[2] = new Skill ("长弓专精", 0, Spells, -1, "[被动] Your skill at archery grants you a large bonus to damage while using a Longbow and increases the number of arrows that can be fired before reloading your quiver.")

//Shadow Flare
Spells = new Array();
Spells[1] = new SpellInfo("使你面前4米范围内的敌人处于硬直状态&造成3点物理伤害，消耗:5魔法值&可以掷出3个飞镖每个造成20穿刺伤害及持续5秒的10点流血伤害，同时消耗5魔法值")
Spells[2] = new SpellInfo("使你面前5米范围内的敌人处于硬直状态&造成5点物理伤害，消耗:7魔法值&可以掷出3个飞镖每个造成35穿刺伤害及持续5秒的10点流血伤害，同时消耗10魔法值")
Spells[3] = new SpellInfo("使你面前5米范围内的敌人处于硬直状态&造成8点物理伤害，消耗:10魔法值&可以掷出5个飞镖每个造成50穿刺伤害及持续5秒的12点流血伤害，同时消耗15魔法值")
Spells[4] = new SpellInfo("使你面前6米范围内的敌人处于硬直状态&造成12点物理伤害，消耗:15魔法值&可以掷出5个飞镖每个造成65穿刺伤害及持续5秒的12点流血伤害，同时消耗20魔法值")
Spells[5] = new SpellInfo("使你面前6米范围内的敌人处于硬直状态&造成17点物理伤害，消耗:20魔法值&可以掷出5个飞镖每个造成70穿刺伤害及持续5秒的14点流血伤害，同时消耗25魔法值")
Skills[3] = new Skill ("暗影闪击", 0, Spells, -1, "[主动] Weaving a burst of shadow magic to wound and stagger enemies in an arc before you. Quickly press the button again to throw a volley of shadowy blades, dealing Pierce and Bleeding Damage.")

//Assassin's Art
Spells = new Array();
Spells[1] = new SpellInfo("+10% 潜行攻击的暴击伤害, 解锁匕首和环刃的背刺攻击招式.")
Spells[2] = new SpellInfo("+20% 潜行攻击的暴击伤害, +30% 使用匕首和环刃的的潜行攻击伤害.")
Spells[3] = new SpellInfo("+30% 潜行攻击的暴击伤害, +60% 使用匕首和环刃的的潜行攻击伤害.")
Spells[4] = new SpellInfo("+40% 潜行攻击的暴击伤害, +90% 使用匕首和环刃的的潜行攻击伤害.")
Spells[5] = new SpellInfo("+50% 潜行攻击的暴击伤害, +120% 使用匕首和环刃的的潜行攻击伤害.")
Spells[6] = new SpellInfo("+60% 潜行攻击的暴击伤害, +150% 使用匕首和环刃的的潜行攻击伤害.")
Skills[4] = new Skill ("刺杀艺术", 0, Spells, -1, "[被动] Your deadly grace allows you to deal tremendous amounts of damage from stealth. Unlocks new sneak attacks with Daggers or Faeblades that can instantly kill and unaware enemy if you deal enough damage.")

//Precise Weaponry II
Spells = new Array();
Spells[1] = new SpellInfo("Unlocks Crossfie and Talon Strikes as delayed attacks")
Spells[2] = new SpellInfo("Crossfie and Talon Strikes can apply additional damage over time")
Spells[3] = new SpellInfo("Crossfie and Talon Strikes generate bonus fate")
Skills[5] = new Skill ("穿刺武器掌握II", 5, Spells, 0, "[武器招式] Unlocks Delayed special attacks for Daggers and Faeblades.")

//Faeblade Mastery
Spells = new Array();
Spells[1] = new SpellInfo("使用环刃时 +2 物理伤害 & +5% 伤害")
Spells[2] = new SpellInfo("使用环刃时 +3 物理伤害 & +10% 伤害")
Spells[3] = new SpellInfo("使用环刃时 +4 物理伤害 & +15% 伤害")
Spells[4] = new SpellInfo("使用环刃时 +5 物理伤害 & +20% 伤害")
Spells[5] = new SpellInfo("使用环刃时 +6 物理伤害 & +25% 伤害")
Spells[6] = new SpellInfo("使用环刃时 +7 物理伤害 & +30% 伤害")
Skills[6] = new Skill ("环刃专精", 5, Spells, -1, "[被动] Diligent prectice has granted you mastery over the Faeblades, chief weapon of the Summer Court Fae.")

//Drawpower
Spells = new Array();
Spells[1] = new SpellInfo("使用弓时 +1 穿刺伤害 & +9% 伤害, +1箭袋容量")
Spells[2] = new SpellInfo("使用弓时 +2 穿刺伤害 & +12% 伤害, +1箭袋容量")
Spells[3] = new SpellInfo("使用弓时 +3 穿刺伤害 & +15% 伤害, +1箭袋容量")
Spells[4] = new SpellInfo("使用弓时 +4 穿刺伤害 & +18% 伤害, +1箭袋容量")
Spells[5] = new SpellInfo("使用弓时 +5 穿刺伤害 & +21% 伤害, +1箭袋容量")
Skills[7] = new Skill ("驭弓之力", 5, Spells, 2, "[增强] With you incredible drawpower, each arrow you fire can penetrate even the thickest of armor or carapace. Also increases the size of your quiver.")

//Envenomed Edge 
Spells = new Array();
Spells[1] = new SpellInfo("15% 几率每击额外造成5点毒素伤害, 持续消耗: 25% 魔法上限")
Spells[2] = new SpellInfo("15% 几率每击额外造成10点毒素伤害, 持续消耗: 25% 魔法上限")
Spells[3] = new SpellInfo("15% 几率每击额外造成15点毒素伤害, 持续消耗: 25% 魔法上限")
Spells[4] = new SpellInfo("15% 几率每击额外造成20点毒素伤害, 持续消耗: 25% 魔法上限")
Spells[5] = new SpellInfo("15% 几率每击额外造成25点毒素伤害, 持续消耗: 25% 魔法上限")
Spells[6] = new SpellInfo("15% 几率每击额外造成30点毒素伤害, 持续消耗: 25% 魔法上限")
Skills[8] = new Skill ("剧毒之刃", 5, Spells, -1, "[持续] The careful application of vile poisons to all your edged weapons and arrowheads allow you to weaken your opponents.")

//Frost Trap
Spells = new Array();
Spells[1] = new SpellInfo("冰霜陷阱造次30点冰系伤害&持续2秒的4点冻疮伤害，消耗:20魔法值")
Spells[2] = new SpellInfo("冰霜陷阱造次35点冰系伤害&持续3秒的6点冻疮伤害，消耗:25魔法值")
Spells[3] = new SpellInfo("冰霜陷阱造次40点冰系伤害&持续4秒的10点冻疮伤害，消耗:30魔法值")
Spells[4] = new SpellInfo("冰霜陷阱造次45点冰系伤害&持续5秒的12点冻疮伤害，消耗:35魔法值")
Skills[9] = new Skill ("冰霜陷阱", 5, Spells, -1, "[主动] Plant a Frost Trap which causes Ice and Freezing damage to all nearby enemies when it explodes. A maximum of 4 traps can be placed at a time.")

//Arrow Storm
Spells = new Array();
Spells[1] = new SpellInfo("解锁攻击招式，格挡时攻击可以向目标及其周围区域射出大量的箭雨，按住攻击键可以持续射出箭雨.+1箭袋容量.")
Spells[2] = new SpellInfo("箭雨造成更多的额外伤害")
Spells[3] = new SpellInfo("箭雨能够更快的恢复你的命运值")
Skills[10] = new Skill ("箭雨风暴", 20, Spells, 7, "[武器招式] Your skill with the Longbow allows you to fire a volley of arrows into the sky, raining death down on your foes. Also increases the size of your quiver.")

//Inoculation 
Spells = new Array();
Spells[1] = new SpellInfo("+10% 毒素抗性")
Spells[2] = new SpellInfo("+20% 毒素抗性e")
Spells[3] = new SpellInfo("+30% 毒素抗性")
Spells[4] = new SpellInfo("+40% 毒素抗性")
Spells[5] = new SpellInfo("+50% 毒素抗性")
Skills[11] = new Skill ("抗体 ", 20, Spells, 8, "[增强] Your extensive experience with Poisons grants you a heightened resistance to their effects.")

//Icy Explosion
Spells = new Array();
Spells[1] = new SpellInfo("冰霜陷阱造成额外10点伤害，且有20%几率晕眩敌人3秒")
Spells[2] = new SpellInfo("冰霜陷阱造成额外15点伤害，且有25%几率晕眩敌人3秒")
Spells[3] = new SpellInfo("冰霜陷阱造成额外20点伤害，且有30%几率晕眩敌人4秒")
Spells[4] = new SpellInfo("冰霜陷阱造成额外25点伤害，且有35%几率晕眩敌人4秒")
Spells[5] = new SpellInfo("冰霜陷阱造成额外30点伤害，且有40%几率晕眩敌人5秒")
Skills[12] = new Skill ("寒冰爆弹", 20, Spells, 9, "[增强] Your roguish ingenuity allows you to build Frost Traps that deal additional damage and disorient your enemies.")

//Lunge
Spells = new Array();
Spells[1] = new SpellInfo("10 物理伤害, 消耗: 40 魔法值")
Spells[2] = new SpellInfo("20 物理伤害, 消耗: 45 魔法值")
Spells[3] = new SpellInfo("30 物理伤害, 消耗: 50 魔法值")
Spells[4] = new SpellInfo("40 物理伤害, 消耗: 55 魔法值")
Spells[5] = new SpellInfo("50 物理伤害, 消耗: 60 魔法值")
Skills[13] = new Skill ("瞬步", 20, Spells, -1, "[主动] Lunge past your foes with preternatural speed to attack them from behind.")

//Precise Weaponry III
Spells = new Array();
Spells[1] = new SpellInfo("Unlocks Cross Slash and Cyclone as attacks from dodge")
Spells[2] = new SpellInfo("Cross Slash and Cyclone can apply additional damage over time")
Spells[3] = new SpellInfo("Cross Slash and Cyclone generate bonus fate")
Skills[14] = new Skill ("穿刺武器掌握III", 35, Spells, 5, "[武器招式] Unlocks special attacks from Dodge for Daggers and Faeblades.")

//Smoke Bomb
Spells = new Array();
Spells[1] = new SpellInfo("烟幕弹造成7点伤害&晕眩敌人2秒，此时你可以保持6秒潜行状态。消耗:40魔法值")
Spells[2] = new SpellInfo("烟幕弹造成10点伤害&晕眩敌人3秒，此时你可以保持6秒潜行状态。消耗:45魔法值")
Spells[3] = new SpellInfo("烟幕弹造成14点伤害&晕眩敌人4秒，此时你可以保持6秒潜行状态。消耗:50魔法值")
Spells[4] = new SpellInfo("烟幕弹造成19点伤害&晕眩敌人5秒，此时你可以保持6秒潜行状态。消耗:55魔法值")
Skills[15] = new Skill ("烟幕弹", 35, Spells, -1, "[主动] Throw down a smokescreen to stun enemies and blind them to your presence for a short furation.")

//Barbed Arrows
Spells = new Array();
Spells[1] = new SpellInfo("你的每一次射击有 10% 几率造成持续5秒80点伤害的流血伤害，+1箭袋容量")
Spells[2] = new SpellInfo("你的每一次射击有 12% 几率造成持续5秒90点伤害的流血伤害，+1箭袋容量")
Spells[3] = new SpellInfo("你的每一次射击有 14% 几率造成持续5秒100点伤害的流血伤害，+1箭袋容量")
Spells[4] = new SpellInfo("你的每一次射击有 17% 几率造成持续5秒1100点伤害的流血伤害，+1箭袋容量")
Spells[5] = new SpellInfo("你的每一次射击有 20% 几率造成持续5秒120点伤害的流血伤害，+1箭袋容量")
Skills[16] = new Skill ("獠牙之箭", 35, Spells, 10, "[增强] By affixing small barbs to your arrows, each Longbow shot has a chance to deal heavy Bleeding Damage to your foes. Also increases the size of your quiver.")

//Enduring Agony 
Spells = new Array();
Spells[1] = new SpellInfo("+20% 流血伤害和毒素的效果 & 10%暗影闪击伤害")
Spells[2] = new SpellInfo("+30% 流血伤害和毒素的效果 & 20%暗影闪击伤害")
Spells[3] = new SpellInfo("+40% 流血伤害和毒素的效果 & 30%暗影闪击伤害")
Spells[4] = new SpellInfo("+55% 流血伤害和毒素的效果 & 40%暗影闪击伤害")
Spells[5] = new SpellInfo("+70% 流血伤害和毒素的效果 & 50%暗影闪击伤害")
Skills[17] = new Skill ("持久灾难", 35, Spells, 3, "[增强] Secret techniques enable you to extend the duration of all Poison and Bleeding attacks. Also increases Shadow Flare damage.")

//Blade Honing
Spells = new Array();
Spells[1] = new SpellInfo("+10% 暴击伤害, 持续消耗: 15% 蓝上限")
Spells[2] = new SpellInfo("+15% 暴击伤害, 持续消耗: 15% 蓝上限")
Spells[3] = new SpellInfo("+20% 暴击伤害, 持续消耗: 15% 蓝上限")
Spells[4] = new SpellInfo("+25% 暴击伤害, 持续消耗: 15% 蓝上限")
Spells[5] = new SpellInfo("+30% 暴击伤害, 持续消耗: 15% 蓝上限")
Skills[18] = new Skill ("刀片", 35, Spells, -1, "[持续] The razor sharp blades of your weapons cut into your foes with ease. While this Ability is active, Critical Hit Damage for Longswords, Daggers, Faeblades, and Greatswords substantially increased.")

//Precise Weaponry IV
Spells = new Array();
Spells[1] = new SpellInfo("Unlocks Punishment and Savage Wing as attacks from parry")
Spells[2] = new SpellInfo("Punishment and Savage Wing can apply additional damage over time")
Spells[3] = new SpellInfo("Punishment and Savage Wing generate bonus fate")
Skills[19] = new Skill ("穿刺武器掌握IV", 50, Spells, 14, "[武器招式] Unlocks special attacks from Parry for Daggers and Faeblades.")

//Poison Bomb 
Spells = new Array();
Spells[1] = new SpellInfo("给烟幕弹增加持续5秒的30点毒素伤害，增加消耗:10魔法值")
Spells[2] = new SpellInfo("给烟幕弹增加持续5秒的35点毒素伤害，增加消耗:12魔法值")
Spells[3] = new SpellInfo("给烟幕弹增加持续5秒的40点毒素伤害，增加消耗:14魔法值")
Spells[4] = new SpellInfo("给烟幕弹增加持续5秒的45点毒素伤害，增加消耗:16魔法值")
Skills[20] = new Skill ("毒气弹", 50, Spells, 15, "[增强] Further tinkering has enabled you to add a deadly Poison cloud to the effects of your Smoke Bomb.")

//Scattershot
Spells = new Array();
Spells[1] = new SpellInfo("Release 1 charged and 2 uncharged arrows from the Bow's Charged Shot, Increases max arrows by 1")
Spells[2] = new SpellInfo("Release 3 charged arrows from the Bow's Charged Shot, Increases max arrows by 1")
Spells[3] = new SpellInfo("Release 3 charged and 2 uncharged arrows from the Bow's Charged Shot, Increases max arrows by 1")
Spells[4] = new SpellInfo("Release 5 charged arrows from the Bow's Charged Shot, Increases max arrows by 1")
Spells[5] = new SpellInfo("Release 5 charged and 2 uncharged arrows from the Bow's Charged Shot, Increases max arrows by 1")
Spells[6] = new SpellInfo("Release 7 charged arrows from the Bow's Charged Shot, Increases max arrows by 1")
Skills[21] = new Skill ("多重射击", 50, Spells, 16, "[武器招式] Your skill with Longbows enables you to fire multiple arrows simultaneously. Also increases the size of your quiver.")

//Mysterious Toxins
Spells = new Array();
Spells[1] = new SpellInfo("+10%几率当中毒的敌人死亡时触发毒云效果, 毒云可以造成 150 点毒素伤害")
Spells[2] = new SpellInfo("+20%几率当中毒的敌人死亡时触发毒云效果, 毒云可以造成 175 点毒素伤害")
Spells[3] = new SpellInfo("+30%几率当中毒的敌人死亡时触发毒云效果, 毒云可以造成 200 点毒素伤害")
Spells[4] = new SpellInfo("+40%几率当中毒的敌人死亡时触发毒云效果, 毒云可以造成 225 点毒素伤害")
Spells[5] = new SpellInfo("+50%几率当中毒的敌人死亡时触发毒云效果, 毒云可以造成 250 点毒素伤害")
Skills[22] = new Skill ("神秘毒素", 50, Spells, 11, "[增强] The skilled mixing of obscure toxins allows your Poison attacks to propagate to other enemies.")

//Gambit
Spells = new Array();
Spells[1] = new SpellInfo("7 traps are dispersed across the field in a 5 meter radius each trap deals 80 Damage, Cost: 80 Mana, Holding the attack increases the output to 18 traps, Cost: 120 Mana")
Spells[2] = new SpellInfo("7 traps are dispersed across the field in a 5 meter radius each trap deals 90 Damage, Cost: 80 Mana, Holding the attack increases the output to 18 traps, Cost: 120 Mana")
Spells[3] = new SpellInfo("7 traps are dispersed across the field in a 5 meter radius each trap deals 100 Damage, Cost: 80 Mana, Holding the attack increases the output to 18 traps, Cost: 120 Mana")
Spells[4] = new SpellInfo("7 traps are dispersed across the field in a 5 meter radius each trap deals 110 Damage, Cost: 80 Mana, Holding the attack increases the output to 18 traps, Cost: 120 Mana")
Spells[5] = new SpellInfo("7 traps are dispersed across the field in a 5 meter radius each trap deals 120 Damage, Cost: 80 Mana, Holding the attack increases the output to 18 traps, Cost: 120 Mana")
Spells[6] = new SpellInfo("7 traps are dispersed across the field in a 5 meter radius each trap deals 130 Damage, Cost: 80 Mana, Holding the attack increases the output to 18 traps, Cost: 120 Mana")
Skills[23] = new Skill ("Gambit", 70, Spells, -1, "[主动] With an acrobatic leap, you ditribute explosives across the battlefield that damage and launch enemies.")

//Paralytic Poisons
Spells = new Array();
Spells[1] = new SpellInfo("+2% 击晕中毒的敌人5秒")
Spells[2] = new SpellInfo("+4% 击晕中毒的敌人5秒")
Spells[3] = new SpellInfo("+6% 击晕中毒的敌人5秒")
Spells[4] = new SpellInfo("+8% 击晕中毒的敌人5秒")
Skills[24] = new Skill ("麻痹毒素", 70, Spells, 22, "[增强] You have discovered long-hidden secrets of poisoncraft, enabling your poison attacks to temporarily stun your opponents.")

//Execution
Spells = new Array();
Spells[1] = new SpellInfo("对处于流血伤害敌人的每次攻击有10%几率造成额外100点伤害")
Spells[2] = new SpellInfo("对处于流血伤害敌人的每次攻击有11%几率造成额外120点伤害")
Spells[3] = new SpellInfo("对处于流血伤害敌人的每次攻击有12%几率造成额外140点伤害")
Spells[4] = new SpellInfo("对处于流血伤害敌人的每次攻击有13%几率造成额外160点伤害")
Spells[5] = new SpellInfo("对处于流血伤害敌人的每次攻击有14%几率造成额外180点伤害")
Skills[25] = new Skill ("终结", 70, Spells, -1, "[Passive] With anatomical precision, you deal out higher damage to bleeding foes.")

// LOAD FINESSE INTO MASTERY ARRAY
Mastery[2] = new setfinesse(Skills,Attributes)