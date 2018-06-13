var team = ["Adeline","Alexandra","Benjamin","Dania","Dylan","Helder","Houssine","Jonathan","Luc","Marc","Marco","Max","Nathan","Océane","Orel","Nicolas","Zakia"];



function clic(){

	var choix = Math.floor(Math.random() * team.length);
	console.log(choix);
	alert(team[choix]);

}
