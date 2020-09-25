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
	this.masteryname = "����"
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
Skills[0] = new Skill ("������������I", 0, Spells, -1, "[������ʽ] Unlocks charge special attacks for the Longsword, Greatsword, and Hammer.")

//Longsword Mastery
Spells = new Array();
Spells[1] = new SpellInfo("ʹ�ó���ʱ+4�������˺�&4%�˺�")
Spells[2] = new SpellInfo("ʹ�ó���ʱ+5�������˺�&10%�˺�")
Spells[3] = new SpellInfo("ʹ�ó���ʱ+6�������˺�&15%�˺�")
Spells[4] = new SpellInfo("ʹ�ó���ʱ+8�������˺�&20%�˺�")
Spells[5] = new SpellInfo("ʹ�ó���ʱ+10�������˺�&25%�˺�")
Spells[6] = new SpellInfo("ʹ�ó���ʱ+13�������˺�&30%�˺�")
Skills[1] = new Skill ("����ר��", 0, Spells, -1, "[����] A combination of perfect form and raw strength lend additional damage to your Longsword attacks.")

//Hammer Mastery
Spells = new Array();
Spells[1] = new SpellInfo("ʹ��ս��ʱ+8�����˺�&5%�˺�")
Spells[2] = new SpellInfo("ʹ��ս��ʱ+9�����˺�&10%�˺�")
Spells[3] = new SpellInfo("ʹ��ս��ʱ+10�����˺�&15%�˺�")
Spells[4] = new SpellInfo("ʹ��ս��ʱ+12�����˺�&20%�˺�")
Spells[5] = new SpellInfo("ʹ��ս��ʱ+14�����˺�&25%�˺�")
Spells[6] = new SpellInfo("ʹ��ս��ʱ+17�����˺�&30%�˺�")
Skills[2] = new Skill ("ս��ר��", 0, Spells, -1, "[����] Raw muscle and a superb sense of balance make you incredibly effective with the mighty Hammer.")

//Harpoon
Spells = new Array();
Spells[1] = new SpellInfo("��14�׷�Χ�ڽ�����ץ������ǰͬʱ���15�����˺�&8�����˺�������:20ħ��ֵ")
Spells[2] = new SpellInfo("��14�׷�Χ�ڽ�����ץ������ǰͬʱ���20�����˺�&11�����˺�������:23ħ��ֵ")
Spells[3] = new SpellInfo("��14�׷�Χ�ڽ�����ץ������ǰͬʱ���25�����˺�&14�����˺�������:26ħ��ֵ")
Spells[4] = new SpellInfo("��14�׷�Χ�ڽ�����ץ������ǰͬʱ���30�����˺�&17�����˺�������:30ħ��ֵ")
Skills[3] = new Skill ("���", 0, Spells, -1, "[����] Snag an enemy and pull it back to you. May have the opposite effect with larger enemies.")

//Skillul Defense
Spells = new Array();
Spells[1] = new SpellInfo("��ʱ+6%�˺�����")
Spells[2] = new SpellInfo("��ʱ+8%�˺�����")
Spells[3] = new SpellInfo("��ʱ+11%�˺�����")
Spells[4] = new SpellInfo("��ʱ+15%�˺�����")
Spells[5] = new SpellInfo("��ʱ+20%�˺����ԣ� ����[������ʽ] �ܻ� - �ö����ҳ�����ˣ�ʹ�Է���¶����������������")
Skills[4] = new Skill ("��������", 0, Spells, -1, "[����] Your masterful use of shields greatly increases your damage resistance while blocking. At the higest level, you unlock a special shield bash move. [Active]")

//Brutal Weaponry II
Spells = new Array();
Spells[1] = new SpellInfo("Unlocks Phantom Edge Guillotine and Spine Bender as attacks from Block")
Spells[2] = new SpellInfo("Phantom Edge Guillotine and Spine Bender can apply additional damage over time")
Spells[3] = new SpellInfo("Phantom Edge Guillotine and Spine Bender generate bonus fate")
Skills[5] = new Skill ("������������II", 5, Spells, 0, "[Weapon] Unlocks special attacks from Block for the Longsword, Greatsword, and Hammer.")

//Greatsword Mastery
Spells = new Array();
Spells[1] = new SpellInfo("ʹ�þ޽�ʱ+8�����˺�&5%�˺�")
Spells[2] = new SpellInfo("ʹ�þ޽�ʱ+9�����˺�&10%�˺�")
Spells[3] = new SpellInfo("ʹ�þ޽�ʱ+10�����˺�&15%�˺�")
Spells[4] = new SpellInfo("ʹ�þ޽�ʱ+12�����˺�&20%�˺�")
Spells[5] = new SpellInfo("ʹ�þ޽�ʱ+14�����˺�&25%�˺�")
Spells[6] = new SpellInfo("ʹ�þ޽�ʱ+17�����˺�&30%�˺�")
Skills[6] = new Skill ("�޽�ר��", 5, Spells, -1, "[����] Your brute strength enables you to wield the greatsword with spectacular results.")

//Quake
Spells = new Array();
Spells[1] = new SpellInfo("ÿ��������24-42�������˺�������:14ħ��ֵ")
Spells[2] = new SpellInfo("ÿ��������32-54�������˺�������:15ħ��ֵ")
Spells[3] = new SpellInfo("ÿ��������40-66�������˺�������:16ħ��ֵ")
Spells[4] = new SpellInfo("ÿ��������48-78�������˺�������:18ħ��ֵ")
Spells[5] = new SpellInfo("ÿ��������56-90�������˺�������:20ħ��ֵ")
Skills[7] = new Skill ("���", 5, Spells, -1, "[����] Smash the ground to cause a tremor, damaging enemies in the area. Cast the spell rapidly in succession to chain up to 3 attacks.")

//Adrenaline Surge
Spells = new Array();
Spells[1] = new SpellInfo("30%���ʻظ�20%����ֵ������10�����˺�+30%��CD:300��")
Spells[2] = new SpellInfo("40%���ʻظ�20%����ֵ������10�����˺�+40%��CD:300��")
Spells[3] = new SpellInfo("50%���ʻظ�20%����ֵ������10�����˺�+50%��CD:300��")
Spells[4] = new SpellInfo("60%���ʻظ�20%����ֵ������10�����˺�+60%��CD:300��")
Spells[5] = new SpellInfo("70%���ʻظ�20%����ֵ������10�����˺�+70%��CD:300��")
Skills[8] = new Skill ("���رŷ�", 5, Spells, -1, "[����] The threat of immediate death grants you a chance for a surge of health and a short span of greatly increased damage whenever your health falls below 25%.")

//Hardy Constitution
Spells = new Array();
Spells[1] = new SpellInfo("+5%����ֵ����,3%Ԫ�ؿ���")
Spells[2] = new SpellInfo("+8%����ֵ����, 5%Ԫ�ؿ���")
Spells[3] = new SpellInfo("+11%����ֵ����, 7%Ԫ�ؿ���")
Spells[4] = new SpellInfo("+14%����ֵ����, 9%Ԫ�ؿ���")
Spells[5] = new SpellInfo("+17%����ֵ����, 11%Ԫ�ؿ���")
Spells[6] = new SpellInfo("+20%����ֵ����, 13%Ԫ�ؿ���")
Skills[9] = new Skill ("ǿ������", 5, Spells, 4, "[��ǿ] Your durable nature enables you to survive nearly anything, from sword wounds to magic flames.")

//Concussive Force
Spells = new Array();
Spells[1] = new SpellInfo("+20% �˺� vs. ��ѣ����")
Spells[2] = new SpellInfo("+30% �˺� vs. ��ѣ����")
Spells[3] = new SpellInfo("+40% �˺� vs. ��ѣ����")
Spells[4] = new SpellInfo("+50% �˺� vs. ��ѣ����")
Spells[5] = new SpellInfo("+60% �˺� vs. ��ѣ����")
Skills[10] = new Skill ("�𵴳��", 20, Spells, -1, "[����] Mastery over the art of blunt trauma gives you increased damage versus Stunned enemies.")

//Aftershock
Spells = new Array();
Spells[1] = new SpellInfo("����˺�+10% & 20% �������һ���ܹ���ѣ����3�룬��������:10ħ��ֵ")
Spells[2] = new SpellInfo("����˺�+20% & 25% �������һ���ܹ���ѣ����3�룬��������:12ħ��ֵ")
Spells[3] = new SpellInfo("����˺�+30% & 30% �������һ���ܹ���ѣ����4�룬��������:14ħ��ֵ")
Spells[4] = new SpellInfo("����˺�+40% & 35% �������һ���ܹ���ѣ����4�룬��������:16ħ��ֵ")
Spells[5] = new SpellInfo("����˺�+50% & 40% �������һ���ܹ���ѣ����5�룬��������:18ħ��ֵ")
Skills[11] = new Skill ("����", 20, Spells, 7, "[��ǿ] The final hit of your Quake attack causes lasting tremors which can Stun your foes, and all Quake damage is increased.")

//Relentless Assault
Spells = new Array();
Spells[1] = new SpellInfo("����������6�룬�ڼ���Ļ���ֵ-50%������:25ħ��ֵ")
Spells[2] = new SpellInfo("����������8�룬�ڼ���Ļ���ֵ-40%������:30ħ��ֵ")
Spells[3] = new SpellInfo("����������10�룬�ڼ���Ļ���ֵ-30%������:35ħ��ֵ")
Spells[4] = new SpellInfo("����������13�룬�ڼ���Ļ���ֵ-20%������:40ħ��ֵ")
Spells[5] = new SpellInfo("����������16�룬�ڼ���Ļ���ֵ-150%������:45ħ��ֵ")
Spells[6] = new SpellInfo("����������20�룬�ڼ���Ļ���ֵ������٣�����:50ħ��ֵ")
Skills[12] = new Skill ("������", 20, Spells, -1, "[����] Grants a short-term resistance to interruption at the expense of armor, allowing you to shrug off blows while taking slightly more damage.")

//Power Strike
Spells = new Array();
Spells[1] = new SpellInfo("+5% ������")
Spells[2] = new SpellInfo("+10% ������")
Spells[3] = new SpellInfo("+15% ������")
Spells[4] = new SpellInfo("+20% ������")
Spells[5] = new SpellInfo("+25% ������")
Skills[13] = new Skill ("��������", 20, Spells, 8, "[��ǿ] You achieve new heights of focus while an Adrenaline Surge is in effect, increaing your chance to deal Critical Hits.")

//Brutal Weaponry III
Spells = new Array();
Spells[1] = new SpellInfo("Unlocks Horizon Edge and Gravedigger as attacks from dodge")
Spells[2] = new SpellInfo("Horizon Edge and Gravedigger can apply additional damage over time")
Spells[3] = new SpellInfo("Horizon Edge and Gravedigger generate bonus fate")
Skills[14] = new Skill ("������������III", 35, Spells, 5, "[������ʽ] Unlocks special attacks from Dodge for the Longsword and Greatsword.")

//Bulwark
Spells = new Array();
Spells[1] = new SpellInfo("+1% ������ѣʹ�ý���������������ĵ���")
Spells[2] = new SpellInfo("+2% ������ѣʹ�ý���������������ĵ���")
Spells[3] = new SpellInfo("+3% ������ѣʹ�ý���������������ĵ���")
Spells[4] = new SpellInfo("+4% ������ѣʹ�ý���������������ĵ���")
Spells[5] = new SpellInfo("+5% ������ѣʹ�ý���������������ĵ���")
Skills[15] = new Skill ("���ݷ���", 35, Spells, -1, "[����] Your impenetrable defenses often surprise your foes, stunning them as their blows bounce off you in a fierce melee.")

//Battle Frenzy
Spells = new Array();
Spells[1] = new SpellInfo("+10% �˺�����ɵ���һ������ʱ, +20% �˺����������ɵ��ڶ�������ʱ. ս���񱩳���10�룬ûɱ��һ������������Чʱ��. ��������: 30% ħ��ֵ����")
Spells[2] = new SpellInfo("40% �˺����������ɵ�����������ʱ. ս���񱩳���11�룬ûɱ��һ������������Чʱ��. ��������: 30% ħ��ֵ����")
Spells[3] = new SpellInfo("60% �˺����������ɵ����ĸ�����ʱ. ս���񱩳���12�룬ûɱ��һ������������Чʱ��. ��������: 30% ħ��ֵ����")
Spells[4] = new SpellInfo("80% �˺����������ɵ����������ʱ. ս���񱩳���13�룬ûɱ��һ������������Чʱ��. ��������: 30% ħ��ֵ����")
Spells[5] = new SpellInfo("100% �˺����������ɵ�����������ʱ. ս���񱩳���14�룬ûɱ��һ������������Чʱ��. ��������: 30% ħ��ֵ����")
Skills[16] = new Skill ("ս����", 35, Spells, -1, "[����] Go into a berserker rage, dealing greater and greater amounts of damage with each enemy you defeat in a short time.")

//Vengeance
Spells = new Array();
Spells[1] = new SpellInfo("+10% ���ʷ����˺� ")
Spells[2] = new SpellInfo("+12% ���ʷ����˺� ")
Spells[3] = new SpellInfo("+14% ���ʷ����˺� ")
Spells[4] = new SpellInfo("+16% ���ʷ����˺� ")
Spells[5] = new SpellInfo("+18% ���ʷ����˺� ")
Spells[6] = new SpellInfo("+20% ���ʷ����˺� ")
Skills[17] = new Skill ("����֮��", 35, Spells, 12, "[��ǿ] Your refined battle techniques allow you to reflect damage back at your opponents whenever Relentless Assault is in effect.")

//Brutal Weaponry IV
Spells = new Array();
Spells[1] = new SpellInfo("Unlocks Riposte Gut Thrust and Crushing Blow as attacks from parry")
Spells[2] = new SpellInfo("Riposte Gut Thrust and Crushing Blow can apply additional damage over time")
Spells[3] = new SpellInfo("Riposte Gut Thrust and Crushing Blow generate bonus fate")
Skills[18] = new Skill ("������������IV", 50, Spells, 14, "[������ʽ] Unlocks special attacks from Parry for the Longsword, Greatsword, and Hammer.")

//Stoneskin
Spells = new Array();
Spells[1] = new SpellInfo("+4% ���� & �����˺�������ս���񱩳���ʱ����")
Spells[2] = new SpellInfo("+8% ���� & �����˺�������ս���񱩳���ʱ����")
Spells[3] = new SpellInfo("+12% ���� & �����˺�������ս���񱩳���ʱ����")
Spells[4] = new SpellInfo("+16% ���� & �����˺�������ս���񱩳���ʱ����")
Spells[5] = new SpellInfo("+20% ���� & �����˺�������ս���񱩳���ʱ����")
Skills[19] = new Skill ("ʯ��", 50, Spells, 16, "[��ǿ] Your unquenchable rage grants you Physical and Piercing damage resistance while Battle Frenzy is active.")

//Bloodlust
Spells = new Array();
Spells[1] = new SpellInfo("������������ʱ��ÿ�ι�����20%������ȡ����22����ֵ")
Spells[2] = new SpellInfo("������������ʱ��ÿ�ι�����20%������ȡ����24����ֵ")
Spells[3] = new SpellInfo("������������ʱ��ÿ�ι�����20%������ȡ����26����ֵ")
Spells[4] = new SpellInfo("������������ʱ��ÿ�ι�����20%������ȡ����28����ֵ")
Spells[5] = new SpellInfo("������������ʱ��ÿ�ι�����20%������ȡ����30����ֵ")
Skills[20] = new Skill ("��Ѫ", 50, Spells, 17, "[��ǿ] While Relentless Assault is in effect, each of your strikes may grant you a measure of renewed vigor.")

//War Cry
Spells = new Array();
Spells[1] = new SpellInfo("6���ڽ��͵���20%�˺�������:15ħ��ֵ")
Spells[2] = new SpellInfo("8���ڽ��͵���25%�˺�������:15ħ��ֵ")
Spells[3] = new SpellInfo("10���ڽ��͵���30%�˺�������:15ħ��ֵ")
Spells[4] = new SpellInfo("12���ڽ��͵���35%�˺�������:15ħ��ֵ")
Spells[5] = new SpellInfo("14���ڽ��͵���40%�˺�������:15ħ��ֵ")
Spells[6] = new SpellInfo("16���ڽ��͵���45%�˺�������:15ħ��ֵ")
Skills[21] = new Skill ("ս��", 50, Spells, -1, "[����] Let loose a terrifying cry that intimidates enemies, reducing their Damage output. Can be upgraded to knock down enemies.")

//Celerity
Spells = new Array();
Spells[1] = new SpellInfo("+5% �����ٶȵ�����ս����״̬��")
Spells[2] = new SpellInfo("+10% �����ٶȵ�����ս����״̬��")
Spells[3] = new SpellInfo("+15% �����ٶȵ�����ս����״̬��")
Skills[22] = new Skill ("Ѹ��", 70, Spells, 19, "[��ǿ] Unbridled rage propels you to inhuman speed while in a Battle Frenzy.")

//Wrath
Spells = new Array();
Spells[1] = new SpellInfo("Each impulse of Wrath does 50 Physical Damage, the final hit does 150 Physical Damage, Cost: 100 mana +10 per impulse")
Spells[2] = new SpellInfo("Each impulse of Wrath does 55 Physical Damage, the final hit does 180 Physical Damage, Cost: 110 mana +10 per impulse")
Spells[3] = new SpellInfo("Each impulse of Wrath does 60 Physical Damage, the final hit does 210 Physical Damage, Cost: 120 mana +10 per impulse")
Spells[4] = new SpellInfo("Each impulse of Wrath does 65 Physical Damage, the final hit does 240 Physical Damage, Cost: 130 mana +10 per impulse")
Spells[5] = new SpellInfo("Each impulse of Wrath does 70 Physical Damage, the final hit does 270 Physical Damage, Cost: 140 mana +10 per impulse")
Spells[6] = new SpellInfo("Each impulse of Wrath does 75 Physical Damage, the final hit does 300 Physical Damage, Cost: 150 mana +10 per impulse")
Skills[23] = new Skill ("��������", 70, Spells, 11, "[����] Jump skyward, hurling nearby enemies along with you into the air and slamming them back down. Button mash to increase damage.")

//Terror
Spells = new Array();
Spells[1] = new SpellInfo("-10% ���˻���ֵ")
Spells[2] = new SpellInfo("-20% ���˻���ֵ")
Spells[3] = new SpellInfo("-30% ���˻���ֵ, 10% ����ʹ���˿ֻ�")
Spells[4] = new SpellInfo("-40% ���˻���ֵ, 12% ����ʹ���˿ֻ�")
Spells[5] = new SpellInfo("-50% ���˻���ֵ, 14% ����ʹ���˿ֻ�")
Spells[6] = new SpellInfo("-60% ���˻���ֵ, 16% ����ʹ���˿ֻ�")
Skills[24] = new Skill ("����", 70, Spells, 21, "[��ǿ] Your War Cry gains the ability to reduce enemy Armor, opening foes up for your attacks and sometimes causing them to panic.")

// LOAD MIGHT INTO MASTERY ARRAY
Mastery[1] = new setmight(Skills,Attributes)