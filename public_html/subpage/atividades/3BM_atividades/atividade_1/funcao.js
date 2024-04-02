var jogador = 'X';
var empate = 0;


function vJogo (id){
	var src = vSrc(id);
	var pc = document.getElementById('pc').checked;
	

	if (src=="branco.jpg") {
		document.getElementById(id).src="images/" + jogador + ".png";

		empate++;

	if (vencedor()){
		alert("Fim do jogo! Parabéns !!!  Venceu o "+ jogador );
	
	
		return;
	}	

	if(empate >= 9){
	alert("Empate !!!");

	
	return;

}



		if (jogador =='X') {
			jogador = 'O';
		}else{
			jogador = 'X';
		}
	}
	if(pc && jogador == 'O'){
		vJogo(computadorJoga());
	}
}
function computadorJoga(){
	if (vSrc('cel4')=='branco.jpg') {
		return 'cel4' ;
	}
	
	return 'cel' + (Math.floor(Math.random()*9)+1);

}
function vSrc(id){
	var src = document.getElementById(id).src;
	return src.substring(src.length -10, src.length);
}	
function vencedor (){
	if ((vSrc('cel0')==vSrc('cel1')) && (vSrc('cel0')== vSrc('cel2')) && vSrc('cel0') !='branco.jpg') {
		return true;
	}
	if ((vSrc('cel3')==vSrc('cel4')) && (vSrc('cel3')== vSrc('cel5')) && vSrc('cel3') !='branco.jpg') {
		return true;
	}
	if ((vSrc('cel6')==vSrc('cel7')) && (vSrc('cel6')== vSrc('cel8')) && vSrc('cel6') !='branco.jpg') {
		return true;
	}
	if ((vSrc('cel0')==vSrc('cel3')) && (vSrc('cel0')== vSrc('cel6')) && vSrc('cel0') !='branco.jpg') {
		return true;
	}
	if ((vSrc('cel1')==vSrc('cel4')) && (vSrc('cel1')== vSrc('cel7')) && vSrc('cel1') !='branco.jpg') {
		return true;
	}
	if ((vSrc('cel2')==vSrc('cel5')) && (vSrc('cel2')== vSrc('cel8')) && vSrc('cel2') !='branco.jpg') {
		return true;
	}
	if ((vSrc('cel0')==vSrc('cel4')) && (vSrc('cel0')== vSrc('cel8')) && vSrc('cel0') !='branco.jpg') {
		return true;
	}
	if ((vSrc('cel2')==vSrc('cel4')) && (vSrc('cel2')== vSrc('cel6')) && vSrc('cel2') !='branco.jpg') {
		return true;
	}
	
	
	return false;
}



function novoJogo(){
	location.reload();
}