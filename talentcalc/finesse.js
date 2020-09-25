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
Skills[0] = new Skill ("������������I", 0, Spells, -1, "[������ʽ] Unlocks Charge special attacks for Daggers and Faeblades.")

//Dagger Mastery
Spells = new Array();
Spells[1] = new SpellInfo("ʹ��ذ��ʱ +2 �����˺� & +5% �˺�")
Spells[2] = new SpellInfo("ʹ��ذ��ʱ +3 �����˺� & +10% �˺�")
Spells[3] = new SpellInfo("ʹ��ذ��ʱ +4 �����˺� & +15% �˺�")
Spells[4] = new SpellInfo("ʹ��ذ��ʱ +6 �����˺� & +20% �˺�")
Spells[5] = new SpellInfo("ʹ��ذ��ʱ +8 �����˺� & +25% �˺�")
Spells[6] = new SpellInfo("ʹ��ذ��ʱ +10 �����˺� & +30% �˺�")
Skills[1] = new Skill ("ذ��ר��", 0, Spells, -1, "[����] Your prowess with Daggers lets you to get the most out of every cut and thrust.")

//Longbow Mastery
Spells = new Array();
Spells[1] = new SpellInfo("ʹ�ù�ʱ +2 �����˺� & +5% �˺�, +1��������")
Spells[2] = new SpellInfo("ʹ�ù�ʱ +3 �����˺� & +10% �˺�, +1��������")
Spells[3] = new SpellInfo("ʹ�ù�ʱ +4 �����˺� & +15% �˺�, +1��������")
Spells[4] = new SpellInfo("ʹ�ù�ʱ +5 �����˺� & +20% �˺�, +1��������")
Spells[5] = new SpellInfo("ʹ�ù�ʱ +6 �����˺� & +25% �˺�, +1��������")
Spells[6] = new SpellInfo("ʹ�ù�ʱ +7 �����˺� & +30% �˺�, +1��������")
Skills[2] = new Skill ("����ר��", 0, Spells, -1, "[����] Your skill at archery grants you a large bonus to damage while using a Longbow and increases the number of arrows that can be fired before reloading your quiver.")

//Shadow Flare
Spells = new Array();
Spells[1] = new SpellInfo("ʹ����ǰ4�׷�Χ�ڵĵ��˴���Ӳֱ״̬&���3�������˺�������:5ħ��ֵ&��������3������ÿ�����20�����˺�������5���10����Ѫ�˺���ͬʱ����5ħ��ֵ")
Spells[2] = new SpellInfo("ʹ����ǰ5�׷�Χ�ڵĵ��˴���Ӳֱ״̬&���5�������˺�������:7ħ��ֵ&��������3������ÿ�����35�����˺�������5���10����Ѫ�˺���ͬʱ����10ħ��ֵ")
Spells[3] = new SpellInfo("ʹ����ǰ5�׷�Χ�ڵĵ��˴���Ӳֱ״̬&���8�������˺�������:10ħ��ֵ&��������5������ÿ�����50�����˺�������5���12����Ѫ�˺���ͬʱ����15ħ��ֵ")
Spells[4] = new SpellInfo("ʹ����ǰ6�׷�Χ�ڵĵ��˴���Ӳֱ״̬&���12�������˺�������:15ħ��ֵ&��������5������ÿ�����65�����˺�������5���12����Ѫ�˺���ͬʱ����20ħ��ֵ")
Spells[5] = new SpellInfo("ʹ����ǰ6�׷�Χ�ڵĵ��˴���Ӳֱ״̬&���17�������˺�������:20ħ��ֵ&��������5������ÿ�����70�����˺�������5���14����Ѫ�˺���ͬʱ����25ħ��ֵ")
Skills[3] = new Skill ("��Ӱ����", 0, Spells, -1, "[����] Weaving a burst of shadow magic to wound and stagger enemies in an arc before you. Quickly press the button again to throw a volley of shadowy blades, dealing Pierce and Bleeding Damage.")

//Assassin's Art
Spells = new Array();
Spells[1] = new SpellInfo("+10% Ǳ�й����ı����˺�, ����ذ�׺ͻ��еı��̹�����ʽ.")
Spells[2] = new SpellInfo("+20% Ǳ�й����ı����˺�, +30% ʹ��ذ�׺ͻ��еĵ�Ǳ�й����˺�.")
Spells[3] = new SpellInfo("+30% Ǳ�й����ı����˺�, +60% ʹ��ذ�׺ͻ��еĵ�Ǳ�й����˺�.")
Spells[4] = new SpellInfo("+40% Ǳ�й����ı����˺�, +90% ʹ��ذ�׺ͻ��еĵ�Ǳ�й����˺�.")
Spells[5] = new SpellInfo("+50% Ǳ�й����ı����˺�, +120% ʹ��ذ�׺ͻ��еĵ�Ǳ�й����˺�.")
Spells[6] = new SpellInfo("+60% Ǳ�й����ı����˺�, +150% ʹ��ذ�׺ͻ��еĵ�Ǳ�й����˺�.")
Skills[4] = new Skill ("��ɱ����", 0, Spells, -1, "[����] Your deadly grace allows you to deal tremendous amounts of damage from stealth. Unlocks new sneak attacks with Daggers or Faeblades that can instantly kill and unaware enemy if you deal enough damage.")

//Precise Weaponry II
Spells = new Array();
Spells[1] = new SpellInfo("Unlocks Crossfie and Talon Strikes as delayed attacks")
Spells[2] = new SpellInfo("Crossfie and Talon Strikes can apply additional damage over time")
Spells[3] = new SpellInfo("Crossfie and Talon Strikes generate bonus fate")
Skills[5] = new Skill ("������������II", 5, Spells, 0, "[������ʽ] Unlocks Delayed special attacks for Daggers and Faeblades.")

//Faeblade Mastery
Spells = new Array();
Spells[1] = new SpellInfo("ʹ�û���ʱ +2 �����˺� & +5% �˺�")
Spells[2] = new SpellInfo("ʹ�û���ʱ +3 �����˺� & +10% �˺�")
Spells[3] = new SpellInfo("ʹ�û���ʱ +4 �����˺� & +15% �˺�")
Spells[4] = new SpellInfo("ʹ�û���ʱ +5 �����˺� & +20% �˺�")
Spells[5] = new SpellInfo("ʹ�û���ʱ +6 �����˺� & +25% �˺�")
Spells[6] = new SpellInfo("ʹ�û���ʱ +7 �����˺� & +30% �˺�")
Skills[6] = new Skill ("����ר��", 5, Spells, -1, "[����] Diligent prectice has granted you mastery over the Faeblades, chief weapon of the Summer Court Fae.")

//Drawpower
Spells = new Array();
Spells[1] = new SpellInfo("ʹ�ù�ʱ +1 �����˺� & +9% �˺�, +1��������")
Spells[2] = new SpellInfo("ʹ�ù�ʱ +2 �����˺� & +12% �˺�, +1��������")
Spells[3] = new SpellInfo("ʹ�ù�ʱ +3 �����˺� & +15% �˺�, +1��������")
Spells[4] = new SpellInfo("ʹ�ù�ʱ +4 �����˺� & +18% �˺�, +1��������")
Spells[5] = new SpellInfo("ʹ�ù�ʱ +5 �����˺� & +21% �˺�, +1��������")
Skills[7] = new Skill ("Ԧ��֮��", 5, Spells, 2, "[��ǿ] With you incredible drawpower, each arrow you fire can penetrate even the thickest of armor or carapace. Also increases the size of your quiver.")

//Envenomed Edge 
Spells = new Array();
Spells[1] = new SpellInfo("15% ����ÿ���������5�㶾���˺�, ��������: 25% ħ������")
Spells[2] = new SpellInfo("15% ����ÿ���������10�㶾���˺�, ��������: 25% ħ������")
Spells[3] = new SpellInfo("15% ����ÿ���������15�㶾���˺�, ��������: 25% ħ������")
Spells[4] = new SpellInfo("15% ����ÿ���������20�㶾���˺�, ��������: 25% ħ������")
Spells[5] = new SpellInfo("15% ����ÿ���������25�㶾���˺�, ��������: 25% ħ������")
Spells[6] = new SpellInfo("15% ����ÿ���������30�㶾���˺�, ��������: 25% ħ������")
Skills[8] = new Skill ("�綾֮��", 5, Spells, -1, "[����] The careful application of vile poisons to all your edged weapons and arrowheads allow you to weaken your opponents.")

//Frost Trap
Spells = new Array();
Spells[1] = new SpellInfo("��˪�������30���ϵ�˺�&����2���4�㶳���˺�������:20ħ��ֵ")
Spells[2] = new SpellInfo("��˪�������35���ϵ�˺�&����3���6�㶳���˺�������:25ħ��ֵ")
Spells[3] = new SpellInfo("��˪�������40���ϵ�˺�&����4���10�㶳���˺�������:30ħ��ֵ")
Spells[4] = new SpellInfo("��˪�������45���ϵ�˺�&����5���12�㶳���˺�������:35ħ��ֵ")
Skills[9] = new Skill ("��˪����", 5, Spells, -1, "[����] Plant a Frost Trap which causes Ice and Freezing damage to all nearby enemies when it explodes. A maximum of 4 traps can be placed at a time.")

//Arrow Storm
Spells = new Array();
Spells[1] = new SpellInfo("����������ʽ����ʱ����������Ŀ�꼰����Χ������������ļ��꣬��ס���������Գ����������.+1��������.")
Spells[2] = new SpellInfo("������ɸ���Ķ����˺�")
Spells[3] = new SpellInfo("�����ܹ�����Ļָ��������ֵ")
Skills[10] = new Skill ("����籩", 20, Spells, 7, "[������ʽ] Your skill with the Longbow allows you to fire a volley of arrows into the sky, raining death down on your foes. Also increases the size of your quiver.")

//Inoculation 
Spells = new Array();
Spells[1] = new SpellInfo("+10% ���ؿ���")
Spells[2] = new SpellInfo("+20% ���ؿ���e")
Spells[3] = new SpellInfo("+30% ���ؿ���")
Spells[4] = new SpellInfo("+40% ���ؿ���")
Spells[5] = new SpellInfo("+50% ���ؿ���")
Skills[11] = new Skill ("���� ", 20, Spells, 8, "[��ǿ] Your extensive experience with Poisons grants you a heightened resistance to their effects.")

//Icy Explosion
Spells = new Array();
Spells[1] = new SpellInfo("��˪������ɶ���10���˺�������20%������ѣ����3��")
Spells[2] = new SpellInfo("��˪������ɶ���15���˺�������25%������ѣ����3��")
Spells[3] = new SpellInfo("��˪������ɶ���20���˺�������30%������ѣ����4��")
Spells[4] = new SpellInfo("��˪������ɶ���25���˺�������35%������ѣ����4��")
Spells[5] = new SpellInfo("��˪������ɶ���30���˺�������40%������ѣ����5��")
Skills[12] = new Skill ("��������", 20, Spells, 9, "[��ǿ] Your roguish ingenuity allows you to build Frost Traps that deal additional damage and disorient your enemies.")

//Lunge
Spells = new Array();
Spells[1] = new SpellInfo("10 �����˺�, ����: 40 ħ��ֵ")
Spells[2] = new SpellInfo("20 �����˺�, ����: 45 ħ��ֵ")
Spells[3] = new SpellInfo("30 �����˺�, ����: 50 ħ��ֵ")
Spells[4] = new SpellInfo("40 �����˺�, ����: 55 ħ��ֵ")
Spells[5] = new SpellInfo("50 �����˺�, ����: 60 ħ��ֵ")
Skills[13] = new Skill ("˲��", 20, Spells, -1, "[����] Lunge past your foes with preternatural speed to attack them from behind.")

//Precise Weaponry III
Spells = new Array();
Spells[1] = new SpellInfo("Unlocks Cross Slash and Cyclone as attacks from dodge")
Spells[2] = new SpellInfo("Cross Slash and Cyclone can apply additional damage over time")
Spells[3] = new SpellInfo("Cross Slash and Cyclone generate bonus fate")
Skills[14] = new Skill ("������������III", 35, Spells, 5, "[������ʽ] Unlocks special attacks from Dodge for Daggers and Faeblades.")

//Smoke Bomb
Spells = new Array();
Spells[1] = new SpellInfo("��Ļ�����7���˺�&��ѣ����2�룬��ʱ����Ա���6��Ǳ��״̬������:40ħ��ֵ")
Spells[2] = new SpellInfo("��Ļ�����10���˺�&��ѣ����3�룬��ʱ����Ա���6��Ǳ��״̬������:45ħ��ֵ")
Spells[3] = new SpellInfo("��Ļ�����14���˺�&��ѣ����4�룬��ʱ����Ա���6��Ǳ��״̬������:50ħ��ֵ")
Spells[4] = new SpellInfo("��Ļ�����19���˺�&��ѣ����5�룬��ʱ����Ա���6��Ǳ��״̬������:55ħ��ֵ")
Skills[15] = new Skill ("��Ļ��", 35, Spells, -1, "[����] Throw down a smokescreen to stun enemies and blind them to your presence for a short furation.")

//Barbed Arrows
Spells = new Array();
Spells[1] = new SpellInfo("���ÿһ������� 10% ������ɳ���5��80���˺�����Ѫ�˺���+1��������")
Spells[2] = new SpellInfo("���ÿһ������� 12% ������ɳ���5��90���˺�����Ѫ�˺���+1��������")
Spells[3] = new SpellInfo("���ÿһ������� 14% ������ɳ���5��100���˺�����Ѫ�˺���+1��������")
Spells[4] = new SpellInfo("���ÿһ������� 17% ������ɳ���5��1100���˺�����Ѫ�˺���+1��������")
Spells[5] = new SpellInfo("���ÿһ������� 20% ������ɳ���5��120���˺�����Ѫ�˺���+1��������")
Skills[16] = new Skill ("���֮��", 35, Spells, 10, "[��ǿ] By affixing small barbs to your arrows, each Longbow shot has a chance to deal heavy Bleeding Damage to your foes. Also increases the size of your quiver.")

//Enduring Agony 
Spells = new Array();
Spells[1] = new SpellInfo("+20% ��Ѫ�˺��Ͷ��ص�Ч�� & 10%��Ӱ�����˺�")
Spells[2] = new SpellInfo("+30% ��Ѫ�˺��Ͷ��ص�Ч�� & 20%��Ӱ�����˺�")
Spells[3] = new SpellInfo("+40% ��Ѫ�˺��Ͷ��ص�Ч�� & 30%��Ӱ�����˺�")
Spells[4] = new SpellInfo("+55% ��Ѫ�˺��Ͷ��ص�Ч�� & 40%��Ӱ�����˺�")
Spells[5] = new SpellInfo("+70% ��Ѫ�˺��Ͷ��ص�Ч�� & 50%��Ӱ�����˺�")
Skills[17] = new Skill ("�־�����", 35, Spells, 3, "[��ǿ] Secret techniques enable you to extend the duration of all Poison and Bleeding attacks. Also increases Shadow Flare damage.")

//Blade Honing
Spells = new Array();
Spells[1] = new SpellInfo("+10% �����˺�, ��������: 15% ������")
Spells[2] = new SpellInfo("+15% �����˺�, ��������: 15% ������")
Spells[3] = new SpellInfo("+20% �����˺�, ��������: 15% ������")
Spells[4] = new SpellInfo("+25% �����˺�, ��������: 15% ������")
Spells[5] = new SpellInfo("+30% �����˺�, ��������: 15% ������")
Skills[18] = new Skill ("��Ƭ", 35, Spells, -1, "[����] The razor sharp blades of your weapons cut into your foes with ease. While this Ability is active, Critical Hit Damage for Longswords, Daggers, Faeblades, and Greatswords substantially increased.")

//Precise Weaponry IV
Spells = new Array();
Spells[1] = new SpellInfo("Unlocks Punishment and Savage Wing as attacks from parry")
Spells[2] = new SpellInfo("Punishment and Savage Wing can apply additional damage over time")
Spells[3] = new SpellInfo("Punishment and Savage Wing generate bonus fate")
Skills[19] = new Skill ("������������IV", 50, Spells, 14, "[������ʽ] Unlocks special attacks from Parry for Daggers and Faeblades.")

//Poison Bomb 
Spells = new Array();
Spells[1] = new SpellInfo("����Ļ�����ӳ���5���30�㶾���˺�����������:10ħ��ֵ")
Spells[2] = new SpellInfo("����Ļ�����ӳ���5���35�㶾���˺�����������:12ħ��ֵ")
Spells[3] = new SpellInfo("����Ļ�����ӳ���5���40�㶾���˺�����������:14ħ��ֵ")
Spells[4] = new SpellInfo("����Ļ�����ӳ���5���45�㶾���˺�����������:16ħ��ֵ")
Skills[20] = new Skill ("������", 50, Spells, 15, "[��ǿ] Further tinkering has enabled you to add a deadly Poison cloud to the effects of your Smoke Bomb.")

//Scattershot
Spells = new Array();
Spells[1] = new SpellInfo("Release 1 charged and 2 uncharged arrows from the Bow's Charged Shot, Increases max arrows by 1")
Spells[2] = new SpellInfo("Release 3 charged arrows from the Bow's Charged Shot, Increases max arrows by 1")
Spells[3] = new SpellInfo("Release 3 charged and 2 uncharged arrows from the Bow's Charged Shot, Increases max arrows by 1")
Spells[4] = new SpellInfo("Release 5 charged arrows from the Bow's Charged Shot, Increases max arrows by 1")
Spells[5] = new SpellInfo("Release 5 charged and 2 uncharged arrows from the Bow's Charged Shot, Increases max arrows by 1")
Spells[6] = new SpellInfo("Release 7 charged arrows from the Bow's Charged Shot, Increases max arrows by 1")
Skills[21] = new Skill ("�������", 50, Spells, 16, "[������ʽ] Your skill with Longbows enables you to fire multiple arrows simultaneously. Also increases the size of your quiver.")

//Mysterious Toxins
Spells = new Array();
Spells[1] = new SpellInfo("+10%���ʵ��ж��ĵ�������ʱ��������Ч��, ���ƿ������ 150 �㶾���˺�")
Spells[2] = new SpellInfo("+20%���ʵ��ж��ĵ�������ʱ��������Ч��, ���ƿ������ 175 �㶾���˺�")
Spells[3] = new SpellInfo("+30%���ʵ��ж��ĵ�������ʱ��������Ч��, ���ƿ������ 200 �㶾���˺�")
Spells[4] = new SpellInfo("+40%���ʵ��ж��ĵ�������ʱ��������Ч��, ���ƿ������ 225 �㶾���˺�")
Spells[5] = new SpellInfo("+50%���ʵ��ж��ĵ�������ʱ��������Ч��, ���ƿ������ 250 �㶾���˺�")
Skills[22] = new Skill ("���ض���", 50, Spells, 11, "[��ǿ] The skilled mixing of obscure toxins allows your Poison attacks to propagate to other enemies.")

//Gambit
Spells = new Array();
Spells[1] = new SpellInfo("7 traps are dispersed across the field in a 5 meter radius each trap deals 80 Damage, Cost: 80 Mana, Holding the attack increases the output to 18 traps, Cost: 120 Mana")
Spells[2] = new SpellInfo("7 traps are dispersed across the field in a 5 meter radius each trap deals 90 Damage, Cost: 80 Mana, Holding the attack increases the output to 18 traps, Cost: 120 Mana")
Spells[3] = new SpellInfo("7 traps are dispersed across the field in a 5 meter radius each trap deals 100 Damage, Cost: 80 Mana, Holding the attack increases the output to 18 traps, Cost: 120 Mana")
Spells[4] = new SpellInfo("7 traps are dispersed across the field in a 5 meter radius each trap deals 110 Damage, Cost: 80 Mana, Holding the attack increases the output to 18 traps, Cost: 120 Mana")
Spells[5] = new SpellInfo("7 traps are dispersed across the field in a 5 meter radius each trap deals 120 Damage, Cost: 80 Mana, Holding the attack increases the output to 18 traps, Cost: 120 Mana")
Spells[6] = new SpellInfo("7 traps are dispersed across the field in a 5 meter radius each trap deals 130 Damage, Cost: 80 Mana, Holding the attack increases the output to 18 traps, Cost: 120 Mana")
Skills[23] = new Skill ("Gambit", 70, Spells, -1, "[����] With an acrobatic leap, you ditribute explosives across the battlefield that damage and launch enemies.")

//Paralytic Poisons
Spells = new Array();
Spells[1] = new SpellInfo("+2% �����ж��ĵ���5��")
Spells[2] = new SpellInfo("+4% �����ж��ĵ���5��")
Spells[3] = new SpellInfo("+6% �����ж��ĵ���5��")
Spells[4] = new SpellInfo("+8% �����ж��ĵ���5��")
Skills[24] = new Skill ("��Զ���", 70, Spells, 22, "[��ǿ] You have discovered long-hidden secrets of poisoncraft, enabling your poison attacks to temporarily stun your opponents.")

//Execution
Spells = new Array();
Spells[1] = new SpellInfo("�Դ�����Ѫ�˺����˵�ÿ�ι�����10%������ɶ���100���˺�")
Spells[2] = new SpellInfo("�Դ�����Ѫ�˺����˵�ÿ�ι�����11%������ɶ���120���˺�")
Spells[3] = new SpellInfo("�Դ�����Ѫ�˺����˵�ÿ�ι�����12%������ɶ���140���˺�")
Spells[4] = new SpellInfo("�Դ�����Ѫ�˺����˵�ÿ�ι�����13%������ɶ���160���˺�")
Spells[5] = new SpellInfo("�Դ�����Ѫ�˺����˵�ÿ�ι�����14%������ɶ���180���˺�")
Skills[25] = new Skill ("�ս�", 70, Spells, -1, "[Passive] With anatomical precision, you deal out higher damage to bleeding foes.")

// LOAD FINESSE INTO MASTERY ARRAY
Mastery[2] = new setfinesse(Skills,Attributes)