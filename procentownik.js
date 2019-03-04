//#============================#
//# Procentownik by Wassermage #
//#        Wersja: 1.1         #
//#============================#

Math.decimal = function(a,b)
{
	var c = Math.pow(10,b);
	var d = Math.round(a*c)/c;
	return d;
}

function hpMenu() {
  var m = document.getElementById("life1");
  m.onclick = showLifeAlert;
  
  function showLifeAlert() {
    mAlert("Testowy komunikat");
  }
}

function setProcentValue()
{
 // Procent HP
	var hp = Math.decimal(hero.hp/hero.maxhp*100, 1);
 // Liczba HP
	var health = hero.hp
	if (health >= 1000000000) {
      var health2 = Math.decimal((health/1000000000),2) + "b"
    } else if (health >= 1000000) {
      var health2 = Math.decimal((health/1000000),2) + "m"
	} else if (health >= 10000) {
      var health2 = Math.decimal((health/1000),2) + "k"
    } else {
      var health2 = health
    }
  // Procent XP
	var exp1 = Math.pow(hero.lvl-1, 4);
	var exp2 = Math.pow(hero.lvl, 4);
	var exp = Math.decimal((hero.exp-exp1)/(exp2-exp1)*100, 1);
  // Liczba XP
  	var experience = hero.exp
    if (experience > 1000000000) {
      var experience2 = Math.decimal((experience/1000000000),2) + "b"
    } else if (experience > 1000000) {
      var experience2 = Math.decimal((experience/1000000),2) + "m"
    } else if (experience > 10000) {
      var experience2 = Math.decimal((experience/1000),2) + "k"
    } else {
      var experience2 = experience
    }

	$("#hpProcent").html(hp+"% <strong>("+health2+")</strong>").attr("tip", $("#life1").attr("tip"));
	$("#expProcent").html(exp+"% <strong>("+experience2+")</strong>").attr("tip", $("#exp1").attr("tip"));
}
 
$("<span id='hpProcent'></span>").css({position:'absolute', 'z-index':'303', width:114, textAlign:'center', 'font-size':'10px'}).appendTo("#life1");
$("<span id='expProcent'></span>").css({position:'absolute', 'z-index':'303', width:114, textAlign:'center', 'font-size':'10px'}).appendTo("#exp1");
setInterval("setProcentValue()", 500);

window.setInterval(hpMenu, 210);