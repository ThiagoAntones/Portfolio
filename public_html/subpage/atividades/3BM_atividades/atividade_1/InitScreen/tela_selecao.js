const button = document.getElementById('button_j');
const checkPlayer1 = document.getElementById("player1");
const checkPlayer2 = document.getElementById("player2");
const player1 = document.getElementById("nomePlayers1");
const player2 = document.getElementById("nomePlayers2");
const qtdPartidas = document.getElementById("qtd_partidas");

checkPlayer1.disabled = true;

function PlayersGame(){
	if(checkPlayer1.checked){
		player1.disabled = false;
		player2.disabled = true;
	}else if(checkPlayer2.checked){
		player1.disabled = false;
		player2.disabled = false;
	}else return false;
}

function CheckCenario(){
const cenario1 = document.getElementById("cenario1");	
const cenario2 = document.getElementById("cenario2");	
const cenario3 = document.getElementById("cenario3");	
const cenario4 = document.getElementById("cenario4");	
const cenario5 = document.getElementById("cenario5");	
const cenario6 = document.getElementById("cenario6");	

	if(cenario1.checked){
		localStorage.setItem("checkCenario","cenario1");
	}else if(cenario2.checked){
		localStorage.setItem("checkCenario","cenario2");
	}else if(cenario3.checked){
		localStorage.setItem("checkCenario","cenario3");
	}else if(cenario4.checked){
		localStorage.setItem("checkCenario","cenario4");
	}else if(cenario5.checked){
		localStorage.setItem("checkCenario","cenario5");
	}else if(cenario6.checked){
		localStorage.setItem("checkCenario","cenario6");
	}
	//alert(localStorage.getItem("checkCenario"))
}

function StoregeDados(){
const p1 = document.getElementById("nomePlayers1").value;
const p2 = document.getElementById("nomePlayers2").value;
const qtdP = document.getElementById("qtd_partidas").value;
var rodadaAtual = 0;

console.log("Jogador 1:", p1);
console.log("Jogador 2:", p2);
console.log("Quantidade Partidas:", qtdP);

localStorage.setItem('rodadaAtual', rodadaAtual);
localStorage.setItem("nomePlayers1",p1);
localStorage.setItem("nomePlayers2",p2);
localStorage.setItem("qtd_partidas",qtdP);
}

button.addEventListener('click', (event) => {
	event.preventDefault()

	var ccp1;
	var cp1 = 2;
	var cp2 = 2;
	var p1 = 2;
	var p2 = 2;
	var qtdp = 2;

	if(qtdPartidas.value == ""){
		qtdPartidas.style.background = "#D4D4D4";
		qtdPartidas.classList.add("errorInput");
		qtdp = 0
	}else if(qtdPartidas.value <= "0"){
		qtdPartidas.style.background = "#D4D4D4";
		qtdPartidas.classList.add("errorInput");
		qtdp = 0
	}else {
		qtdPartidas.style.background = "white";
		qtdPartidas.classList.remove("errorInput");
		qtdp = 1
	}
	
	if(checkPlayer1.checked == false && checkPlayer2.checked == false){
		alert("Selecione Quantos Players Jogaram 1 ou 2!");
		cp1 = 0
		cp2 = 0
	}else{
		cp1 = 1
		cp2 = 1
	}

	if(checkPlayer1.checked == true && checkPlayer2.checked == false){
		if(player1.value == ""){
			player1.style.background = "#D4D4D4";
			player1.classList.add("errorInput");
			p1 = 0
		}else {
			ccp1 = true;
			localStorage.setItem("checkp1",ccp1);
			player1.style.background = "white";
			player1.classList.remove("errorInput");
			p1 = 1
		}
	}
	
	if(checkPlayer1.checked == false && checkPlayer2.checked == true){
		localStorage.removeItem("checkp1",ccp1);
		if(player1.value == "" && player2.value == ""){
			player1.style.background = "#D4D4D4";
			player1.classList.add("errorInput");
			player2.style.background = "#D4D4D4";
			player2.classList.add("errorInput");
			p1 = 0
			p2 = 0
		}else {
			player1.style.background = "white";
			player1.classList.remove("errorInput");
			player2.style.background = "white";
			player2.classList.remove("errorInput");
			p1 = 1
			p2 = 1
		}
		
		if(player1.value == ""){
			player1.style.background = "#D4D4D4";
			player1.classList.add("errorInput");
			p1 = 0
		}else {
			player1.style.background = "white";
			player1.classList.remove("errorInput");
			p1 = 1
		}
		
		if(player2.value == ""){
			player2.style.background = "#D4D4D4";
			player2.classList.add("errorInput");
			p2 = 0
		}else {
			player2.style.background = "white";
			player2.classList.remove("errorInput");
			p2 = 1
		}
	}
	
	if (qtdp == 1 && cp1 == 1 && cp2 == 1 && p1 == 1) {
		if(p2 == 1){
			CheckCenario();
			window.location.href = "../loading/tela_loading.html";
			StoregeDados();
		}else if(p2 == 2){
			CheckCenario();
			window.location.href = "../loading/tela_loading.html";
			StoregeDados();
		}
	}
})