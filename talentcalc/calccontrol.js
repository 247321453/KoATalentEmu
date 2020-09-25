// Talent Calculator Controls
// Might==1, Finesse==2, Sorcery==3

//TRACK POINT INVESTMENT
var Mastery = new Array(3)     // This array stores might[1], finesse[2], sorcery[3]
var AttributesBase = new Array()  // This stores attributes from might[1], finesse[2], sorcery[3] 
var UserSkills = new Array()   // This stores skills purchased in might[1], finesse[2], sorcery[3] 
var TotalSpent = new Array(0,0,0,0) //This stores number of points spent in might[1], finesse[2], sorcery[3] 
var _TotalPoints = 123;      // Total possible build points

//SET UP PAGE VARIABLES
function PageStart() {
	SetPage(1)
	SetPage(2)
	SetPage(3)
}
	
var _Mastery1 = 1
var _Mastery2 = 2
var _Mastery3 = 3

	
//GRAB URL COMPONENTS IF HARD RESET
var _MightSet=""
var _FinSet=""
var _SorcSet=""
if (window.location.search.substring(0,1)=="?") {
	var UrlIn = window.location.search.substring(1);
	UrlIn = UrlIn.split("&")
	_MightSet = UrlIn[0]
	_FinSet = UrlIn[1]
	_SorcSet = UrlIn[2]
}

function SetUserSkills() {
  	this.SkillLevel = new Array(25)
}

//RESET THE CALCULATOR
function SetPage(masteryid,softReset) {	
	if (softReset) { // if we already have a array defined, we are resetting 
    	if (!confirm('你确定要重置此天赋树吗?')) { return false;}
     	TotalSpent[masteryid] = 0
     	for (var y = 0 ; y < UserSkills[masteryid].SkillLevel.length; y++) {
        	if (UserSkills[masteryid].SkillLevel[y]) {
          		TotalSpent[masteryid] = TotalSpent[masteryid] + UserSkills[masteryid].SkillLevel[y]
        	}
      	}
        _TotalPoints = parseInt(_TotalPoints) + TotalSpent[masteryid]
	}
	
	UserSkills[masteryid] = new SetUserSkills()
	
	for (var x = 0; x < (Mastery[masteryid].Skills.length)  ; x++) {
		if (document.getElementById("spell_" + masteryid + '_' + (x))) {
			document.getElementById("spell_" + masteryid + '_' + (x)).innerHTML = "0 / " + (Mastery[masteryid].Skills[x].spells.length - 1)
		}
	}
  
	UpdateSkillStats(masteryid)
    UpdatePlayerAttributes()
	UpdateIcons()
	
	//RECONSTRUCT SPELL LIST
    if (softReset) { DrawSpellList(), DrawDestinyList() } 
	

  	if (!softReset) {
		if (_MightSet.length > 0 && masteryid == _Mastery1) {
      		SetFormFromReturn(_MightSet,_Mastery1)
    	}
    	if (_FinSet.length > 0 && masteryid == _Mastery2) {
     		SetFormFromReturn(_FinSet,_Mastery2)  
    	}
		if (_SorcSet.length > 0 && masteryid == _Mastery3) {
     		SetFormFromReturn(_SorcSet,_Mastery3)  
    	}
		
		_TotalPoints = 123 - TotalSpent[1] - TotalSpent[2] - TotalSpent[3]
		UpdateSkillStats(masteryid)
		UpdatePlayerAttributes(masteryid)
		UpdateIcons()
//		DrawSpellList()
//		DrawDestinyList()
  	}
}

//REPORT SKILLS SPENT, REMAINING, AND CHARLEVEL
function UpdateSkillStats(masteryid) {
	for (var x = 0 ; x <= Mastery.length;x++) {
      	var UpdateText = "剩余点数: " + parseInt(_TotalPoints);
      	var CharLevel =  Math.floor((123 - _TotalPoints )/3);
      	if (CharLevel < 0) CharLevel = 0;
      	if (CharLevel > 40) CharLevel = 40;
      	document.getElementById("pointsremaining").innerHTML =  UpdateText;
    
		TotalSpent[x] = 0
    	if (UserSkills[x]) {
      		for (var y = 0 ; y < UserSkills[x].SkillLevel.length; y++) {
        		if (UserSkills[x].SkillLevel[y]) {
          			TotalSpent[x] = TotalSpent[x] + UserSkills[x].SkillLevel[y]
        		}
      		}
		
		var UpdateTab = Mastery[x].masteryname + " ( " + TotalSpent[x] + " ) ";
		document.getElementById("tab_"+x).innerHTML = UpdateTab;
		
   		}
		
		if (document.getElementById("masterypoints")) {
      		var UpdateText = "力量系已投入点数: " + TotalSpent[1] + "<BR>灵巧系已投入点数: " + TotalSpent[2] + "<BR>法术系已投入点数: " + TotalSpent[3];
      		document.getElementById("masterypoints").innerHTML =  UpdateText;
    	}
		
      	var UpdateText = "当前角色等级: " + CharLevel;
      	document.getElementById("charlevel").innerHTML =  UpdateText;
	}
	
// 	UpdateLinkBack()
}


//UPDATE BASE ATTRIBUTES
function UpdatePlayerAttributes(masteryid) {
	//document.getElementById("health").innerHTML = health;
    //document.getElementById("mana").innerHTML = mana;
	var health = 50;
	var mana = 50;
	document.getElementById("health").innerHTML = Math.round(health);
    document.getElementById("mana").innerHTML = Math.round(mana);
	
    if (_TotalPoints < 123) {
		health = 50 + Mastery[1].Attributes[TotalSpent[1]].health + Mastery[2].Attributes[TotalSpent[2]].health + Mastery[3].Attributes[TotalSpent[3]].health
		mana = 50 + Mastery[1].Attributes[TotalSpent[1]].mana + Mastery[2].Attributes[TotalSpent[2]].mana + Mastery[3].Attributes[TotalSpent[3]].mana
      	document.getElementById("health").innerHTML = Math.round(health);
      	document.getElementById("mana").innerHTML = Math.round(mana);
    }	
}

function AppendMasteryAttributes(masteryid) {

}

//UPDATE ABILITY ICONS
function UpdateIcons() {
	for (var i = 5; i <= 70; i=i+5) {
	for (var j = 0; j <= 26; j++) {
							
		//Might Icons
		if (TotalSpent[1] >= i && document.getElementById("icon_1_" + i + "_" + j)) {
			var newicon = new String("talentcalc/might/" + j + ".gif");
			document.getElementById("icon_1_" + i + "_" + j).src = newicon;
		}
		else if (TotalSpent[1] < i && document.getElementById("icon_1_" + i + "_" + j)) {
			var newicon = new String("talentcalc/might/" + j + "b.gif");
			document.getElementById("icon_1_" + i + "_" + j).src = newicon;
		}
		
		//Finesse Icons
		if (TotalSpent[2] >= i && document.getElementById("icon_2_" + i + "_" + j)) {
			var newicon = new String("talentcalc/finesse/" + j + ".gif");
			document.getElementById("icon_2_" + i + "_" + j).src = newicon;
		}
		else if (TotalSpent[2] < i && document.getElementById("icon_2_" + i + "_" + j)) {
			var newicon = new String("talentcalc/finesse/" + j + "b.gif");
			document.getElementById("icon_2_" + i + "_" + j).src = newicon;
		}
		
		//Sorcery Icons
		if (TotalSpent[3] >= i && document.getElementById("icon_3_" + i + "_" + j)) {
			var newicon = new String("talentcalc/sorcery/" + j + ".gif");
			document.getElementById("icon_3_" + i + "_" + j).src = newicon;
		}
		else if (TotalSpent[3] < i && document.getElementById("icon_3_" + i + "_" + j)) {
			var newicon = new String("talentcalc/sorcery/" + j + "b.gif");
			document.getElementById("icon_3_" + i + "_" + j).src = newicon;
		}
	}}
}

//GRAB SPELL INFORMATION
function GetSpellText(masteryid,skillid) {
	var rankid = 0
	if (UserSkills[masteryid]) {
	 	if (isNaN(UserSkills[masteryid].SkillLevel[skillid])) { 
			UserSkills[masteryid].SkillLevel[skillid] = 0 
		}
      	rankid = UserSkills[masteryid].SkillLevel[skillid] // get users current skillrank
	}
	var strHTML = ""
	strHTML = "<div id='spellname'>" + Mastery[masteryid].Skills[skillid].name + "</div>"
	strHTML = strHTML + "<div id='spelldesc'>" + Mastery[masteryid].Skills[skillid].desc + "</div><BR>"
		
	// show current rank
	if (rankid > 0) {
		strHTML = strHTML + "<div id='currentranklevel'>当前等级: " + (rankid) + "</div>"
		strHTML = strHTML + "<div id='currentspell'>" + Mastery[masteryid].Skills[skillid].spells[rankid].spellinfo.replace(/,/g,"<br>") + "</div><BR>"
	}
	
	// show next rank
	if (Mastery[masteryid].Skills[skillid].spells[rankid + 1]) {
		strHTML = strHTML + "<div id='nextranklevel'>下一级: " + (rankid + 1) + "</div>"
		strHTML = strHTML + "<div id='nextspell'>" + Mastery[masteryid].Skills[skillid].spells[rankid + 1].spellinfo.replace(/,/g,"<br>") + "</div><BR>"
	}
	
	// display prereq ability
	if (Mastery[masteryid].Skills[skillid].prereq >= 0 && UserSkills[masteryid].SkillLevel[Mastery[masteryid].Skills[skillid].prereq] <= 0 ) {
		strHTML = strHTML + "<BR><div id='prereq'>需求: " + Mastery[masteryid].Skills[Mastery[masteryid].Skills[skillid].prereq].name + "</div>"
	}
	
	// display point requirement
	if (Mastery[masteryid].Skills[skillid].min_points > TotalSpent[masteryid]) {
		strHTML = strHTML + "<div id='reqpoints'>需要 " + Mastery[masteryid].Skills[skillid].min_points + " 点投入在 " + Mastery[masteryid].masteryname + "</div>"
	}
	
	return strHTML
}

	
//DISPLAY TALENT TOOLTIPS
function DrawSpell(masteryid,skillid) {	
	var SpellText = GetSpellText(masteryid,skillid)
//GENERATE A TOOLTIP DIV
	if (!document.getElementById("tip")) {
		var divtip = document.createElement("div")
		divtip.setAttribute('id',"tip")
		document.body.appendChild(divtip)	
	}
	
//ADJUST TOOLTIP POSITIONING
	document.getElementById("tip").style.position = "absolute";	
	var ColWidth = document.getElementById("spell_" + masteryid + '_' + skillid).offsetWidth
	document.getElementById("spell_" + masteryid + '_' + skillid).style.position = "absolute";
	var TableLeft = document.getElementById("spell_" + masteryid + '_' + skillid).offsetLeft + ColWidth;
	var TableTop = document.getElementById("spell_" + masteryid + '_' + skillid).offsetTop;
	document.getElementById("spell_" + masteryid + '_' + skillid).style.position = "relative";
	
	//DERIVE USER VIEWPORT
	if (window.innerWidth > 1000) {
		var TipLeft = TableLeft + ((window.innerWidth - 1000)/2) + 50
		var TipTop = TableTop-50   //250
	}
	else {
		var TipLeft = TableLeft - 50   //70
		var TipTop = TableTop + (window.innerWidth/4)
	}
	
	divtip = document.getElementById("tip")	
	divtip.innerHTML = SpellText
	divtip.style.left = TipLeft+"px";
	divtip.style.top = TipTop+"px";
}

//REMOVE INACTIVE TOOLTIPS
function KillTip() {
	if (document.getElementById("tip")) {
		elm = document.getElementById("tip")
		document.body.removeChild(elm)
	}
}

//ADD POINTS TO TALENTS ON MOUSECLICK
function AddPoint(bolCtrl,bolShft,masteryid,button,skillid) {
   
	var Points = 1;
	
	//FILL THE SKILL ON SHIFT-CLICK
	if (bolShft) {
		Points = (Mastery[masteryid].Skills[skillid].spells.length - UserSkills[masteryid].SkillLevel[skillid] - 1)
	}
	
	//REDIRECT TO RemovePoint ON RIGHT-CLICK
	if (button == 2 ) 
	{
	RemovePoint(bolCtrl,bolShft,masteryid,skillid)
	return false;
	}

	if (isNaN(UserSkills[masteryid].SkillLevel[skillid])) { 
		UserSkills[masteryid].SkillLevel[skillid] = 0 
	}
	
	//ALLOW INVESTMENT IF SKILL IS NOT MAXED
	if(TotalSpent[1] + TotalSpent[2] + TotalSpent[3] + Points <= 123){
		if (UserSkills[masteryid].SkillLevel[skillid] + Points < Mastery[masteryid].Skills[skillid].spells.length) {
			// MAKE SURE THE PREREQUISITE IS MET, THIS ORIGINALLY USED <=_SkillLevel
			if (Mastery[masteryid].Skills[skillid].min_points <= TotalSpent[masteryid]) {
				var PreReq = Mastery[masteryid].Skills[skillid].prereq
				// IF A PREREQ IS FOUND, MAKE SURE THE USER HAS A POINT IN IT, OR IF NO PREREQ
				if ((PreReq >= 0 && UserSkills[masteryid].SkillLevel[PreReq] > 0) || PreReq < 0) {
					// IF ITS SAFE, SUBTRACT A POINT FROM THE POOL, ADD IT TO THE SKILL
					_TotalPoints = _TotalPoints - Points
					TotalSpent[masteryid] = TotalSpent[masteryid] + Points
					UserSkills[masteryid].SkillLevel[skillid] = UserSkills[masteryid].SkillLevel[skillid] + Points
						
					document.getElementById("spell_" + masteryid + '_' + skillid).innerHTML = UserSkills[masteryid].SkillLevel[skillid] + " / " + (Mastery[masteryid].Skills[skillid].spells.length - 1)
					UpdateSkillStats(masteryid)
						
					UpdatePlayerAttributes(masteryid)
					UpdateIcons()
						
					DrawSpell(masteryid,skillid)   		
//					DrawSpellList()
//					DrawDestinyList()
					
				}
			}
		}
	}
}




// REMOVE POINTS ON RIGHT-MOUSE CLICK
function RemovePoint(bolCtrl,bolShft,masteryid,skillid) {

	if (isNaN(UserSkills[masteryid].SkillLevel[skillid])) { 
		UserSkills[masteryid].SkillLevel[skillid] = 0 
	}

	var Points = 1;
	
	// SHIFT-CLICK TO CLEAR ALL RANKS
	if (bolShft) {
		Points = UserSkills[masteryid].SkillLevel[skillid];
	}	
	
	// VERIFY THAT THIS ISNT BEING USED AS A PREREQ
	for (var x = 0; x < (Mastery[masteryid].Skills.length)  ; x++) {
		if (Mastery[masteryid].Skills[x].prereq == skillid && UserSkills[masteryid].SkillLevel[x] > 0) {
			// THE USER MUST LEAVE AT LEAST ONE RANK
			if (UserSkills[masteryid].SkillLevel[skillid] - Points == 0) { 
				return false ;
			} 
		}
	}

	// MAKE SURE ITS SAFE TO REMOVE A RANK
	if (UserSkills[masteryid].SkillLevel[skillid] - 1 >= 0) {
		_TotalPoints = _TotalPoints + Points
		TotalSpent[masteryid] = TotalSpent[masteryid] - Points
		UserSkills[masteryid].SkillLevel[skillid] = UserSkills[masteryid].SkillLevel[skillid] - Points 
		document.getElementById("spell_" + masteryid + '_' + skillid).innerHTML = UserSkills[masteryid].SkillLevel[skillid] + " / " + ((Mastery[masteryid].Skills[skillid].spells.length)  - 1)
		
		UpdateSkillStats(masteryid)
		UpdatePlayerAttributes(masteryid)
		UpdateIcons()
		DrawSpell(masteryid,skillid)
//		DrawSpellList()
//		DrawDestinyList()
	}
}


//DRAW SPELL LIST BELOW THE TREE
/*
function DrawSpellList() {
	
	var SpellList = ""
 	var SpellFound = false;

	for (var y = 0 ; y < Mastery.length; y++ ) {
   		if (Mastery[y]) {
      		SpellList = SpellList + "<div id='masteryname'><u>" + Mastery[y].masteryname + "</u></div>"
      		for (var x = 0; x < (Skills.length)  ; x++) {
      			
				if (UserSkills[y]) 
           		spellrank = UserSkills[y].SkillLevel[x];
          		else
            	spellrank = 0;
          
				if (Mastery[y].Skills[x].spells[spellrank]) {
      		  	SpellFound = true;
				
      			if (document.getElementById("verbose").checked) {
             	SpellList = SpellList + "<hr noshade size=1>"
            	}
				
            	SpellList = SpellList + "<strong>" + Mastery[y].Skills[x].name + "</strong>: (Rank: " + UserSkills[y].SkillLevel[x] + " / " + (Mastery[y].Skills[x].spells.length - 1) + ")<BR>" 
            	
				if (document.getElementById("verbose").checked) {
              	SpellList = SpellList + Mastery[y].Skills[x].desc + "<BR>"
        		SpellList = SpellList + Mastery[y].Skills[x].spells[spellrank].spellinfo + "<BR>"
       			}
      		  }
      		}
      	SpellList = SpellList + "<BR>"
     	}
  	}
  
	//IF NO SPELLS HAVE BEEN SELECTED, SAY SO
	if (!SpellFound) { SpellList = 'No Abilities Selected' }
	document.getElementById("spells").innerHTML = SpellList;	
}
*/

//DRAW AVAILABLE DESTINIES
/*
function DrawDestinyList() {
	var DestinyList = ""
	DestinyList = "<div id='masteryname'><u> Destinies Unlocked </u></div>"

	for (var i = 0 ; i < Destinies.length; i++ ) {
		if(Destinies[i].might_points <= TotalSpent[1] && Destinies[i].fin_points <= TotalSpent[2] && Destinies[i].sorc_points <= TotalSpent[3]) {
			DestinyList = DestinyList + "<strong>" + Destinies[i].name + "</strong>: " + Destinies[i].bonus + "<BR>"
		}
	}
	document.getElementById("destinies").innerHTML = DestinyList;
}
*/

// CONTROL TABBED TREE SWITCHING
var tabCount=3;

function loadTree(i) {
	for (var j=1; j <= tabCount; ++j) {
		if( i==j ) { 
			activateTab(i); 
		}
		else { deactivateTab(j);  }
	}
}

function activateTab(i) {
document.getElementById( "masterytree_" + i).style.display="block";
document.getElementById("tab_" + i).style.backgroundImage="url(talentcalc/tabactive.gif)";
}

function deactivateTab(i) {
document.getElementById( "masterytree_" + i).style.display="none";
document.getElementById("tab_" + i).style.backgroundImage="url(talentcalc/tabinactive.gif)";
}

//DISPLAY LINKBACK TO TALENT SPEC
function UpdateLinkBack() {
	var HTML = "http://amalurfoundry.com/calculator?"
	var TempMight = ""
	var TempFin = ""
	var TempSorc = ""

	if (UserSkills[_Mastery1]) {
      //LOOP THROUGH MIGHT TO BUILD URL VARIABLES
      for (var x = 0 ; x <= UserSkills[_Mastery1].SkillLevel.length ; x++) {
      	if (UserSkills[_Mastery1].SkillLevel[x]) {
            TempMight = TempMight + UserSkills[_Mastery1].SkillLevel[x]
            }
        else {
            TempMight = TempMight + "0"
        }
      } 
	}

	 if (UserSkills[_Mastery2]) {
		//LOOP THROUGH FINESSE TO BUILD URL VARIABLES
		for (var x = 0 ; x <= Mastery[_Mastery2].Skills.length ; x++) {
      		if (UserSkills[_Mastery2].SkillLevel[x]) {
            	TempFin = TempFin + UserSkills[_Mastery2].SkillLevel[x]
            	}
        	else {
            	TempFin = TempFin + "0"
          	}
		}
	} 
  
	if (UserSkills[_Mastery3]) {
		//LOOP THROUGH FINESSE TO BUILD URL VARIABLES
		for (var x = 0 ; x <= Mastery[_Mastery3].Skills.length ; x++) {
			if (UserSkills[_Mastery3].SkillLevel[x]) {
            	TempSorc = TempSorc + UserSkills[_Mastery3].SkillLevel[x]
            	}
        	else {
            	TempSorc = TempSorc + "0"
          	}
		}
	}

//	document.getElementById("linkback").value = HTML + TempMight + "&" + TempFin + "&" + TempSorc
}

//USE A CUSTOM URL TO FILL TREE
function SetFormFromReturn(string,masteryid) {

	//Split our input URL into a string array
 	var SpellSet = string.split("")

  	for (var x = 0; x <= SpellSet.length; x++) {
    	UserSkills[masteryid].SkillLevel[x] = parseInt(SpellSet[x])
	//TotalSpent[masteryid] = TotalSpent[masteryid] + parseInt(SpellSet[x])
  	}
  
  // set the form
	for (var x = 0; x < (Mastery[masteryid].Skills.length)  ; x++) {

		if (document.getElementById("spell_" + masteryid + '_' + (x))) {
			if (UserSkills[masteryid].SkillLevel[x]) {
          	if (UserSkills[masteryid].SkillLevel[x] <= ((Mastery[masteryid].Skills[x].spells.length)  - 1 )) {
           	 	document.getElementById("spell_" + masteryid + '_' + (x)).innerHTML = UserSkills[masteryid].SkillLevel[x] + " / " + ((Mastery[masteryid].Skills[x].spells.length)  - 1)
           		TotalSpent[masteryid] = TotalSpent[masteryid] + UserSkills[masteryid].SkillLevel[x]
          	}
          	else {
            document.getElementById("spell_" + masteryid + '_' + (x)).innerHTML = ((Mastery[masteryid].Skills[x].spells.length)  - 1) + " / " + ((Mastery[masteryid].Skills[x].spells.length)  - 1)
            UserSkills[masteryid].SkillLevel[x] = ((Mastery[masteryid].Skills[x].spells.length)  - 1)
            	TotalSpent[masteryid] = TotalSpent[masteryid] + UserSkills[masteryid].SkillLevel[x]
          	}
        }
      	else {
      	 document.getElementById("spell_" + masteryid + '_' + x).innerHTML = "0 / " + ((Mastery[masteryid].Skills[x].spells.length)  - 1)
      	}
		}
	}
}

// disable right click menus
document.oncontextmenu = function(){return false}



