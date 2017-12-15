var guziki = document.getElementsByClassName('button').length;
console.log(guziki);

for (x = 0; x < guziki; x++) {
	var tekst = document.getElementsByClassName('button')[x].innerText;
	console.log(tekst);
}
