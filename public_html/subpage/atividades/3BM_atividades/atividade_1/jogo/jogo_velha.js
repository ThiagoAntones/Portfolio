		window.onload =	function() { document.getElementById('game').style.visibility = 'hidden' };
		
		function Jogador(nome, forma) {
			this.nome = nome;
			this.forma = forma;
		}
		
		var jogador1, jogador2;
		//Jogador da rodada
		var jogadorAtual;
		var rodadaAtual = localStorage.getItem('rodadaAtual');
		var qtdJogadas = localStorage.getItem('qtd_partidas');
		var formas = ['X', 'O'];
		var index = null;

		/*
			0 1 2
			3 4 5
			6 7 8
		*/
		var tabuleiro = new Array(9);
		
		initGame = function() {
			dadospage();
			dadoscenario();
			var nomeJogador1 = localStorage.getItem('nomePlayers1');
			var nomeJogador2;

			//Verifica Se Possui 1 ou 2 Jogadores, para poder dar nome ao Robo
			if(localStorage.getItem('checkp1') == "true"){
				nomeJogador2 = "God Elísio";
			} else{
				nomeJogador2 = localStorage.getItem('nomePlayers2');
			}
			
			jogador1 = new Jogador(nomeJogador1, 0); //X
			jogador2 = new Jogador(nomeJogador2, 1); //O
			
			jogadorAtual = jogador1;
			++rodadaAtual;
			localStorage.setItem('rodadaAtual', rodadaAtual);
			setLabelJogadorAtual();

			//APOS DEFINIÇÃO DE JOGADORES, EXIBE A DIV E INICIA JOGO
			document.getElementById('game').style.visibility = 'visible';
			
		}

		/*Verifica o Cenario*/
		function dadoscenario(){
			var cenarios = localStorage.getItem('checkCenario');
			if(cenarios == "cenario1"){
				document.body.style.setProperty('background', 'linear-gradient(rgba(17,17,17,0.8), rgba(20,20,20,0.5)), url(../cenario/cenario1.gif)');
			}else if(cenarios == "cenario2"){
				document.body.style.setProperty('background', 'linear-gradient(rgba(17,17,17,0.8), rgba(20,20,20,0.5)), url(../cenario/cenario2.gif)');
			}else if(cenarios == "cenario3"){
				document.body.style.setProperty('background', 'linear-gradient(rgba(17,17,17,0.8), rgba(20,20,20,0.5)), url(../cenario/cenario3.gif)');
			}else if(cenarios == "cenario4"){
				document.body.style.setProperty('background', 'linear-gradient(rgba(17,17,17,0.8), rgba(20,20,20,0.5)), url(../cenario/cenario4.gif)');
			}else if(cenarios == "cenario5"){
				document.body.style.setProperty('background', 'linear-gradient(rgba(17,17,17,0.8), rgba(20,20,20,0.5)), url(../cenario/cenario5.gif)');
			}else if(cenarios == "cenario6"){
				document.body.style.setProperty('background', 'linear-gradient(rgba(17,17,17,0.8), rgba(20,20,20,0.5)), url(../cenario/cenario6.gif)');
			} 				
			document.body.style.setProperty('background-position', 'center center');
			document.body.style.setProperty('background-size', 'cover');
			document.body.style.setProperty('background-position-y', '0%');
			document.body.style.setProperty('background-repeat', 'no-repeat');
		}
		
		/*Verifica as Rodadas*/
		function dadospage(){
			if(rodadaAtual == qtdJogadas){
				//window.location.href = "../initScreen/tela_selecao.html";
				window.location.href = "../telaStatus/tela_status.html";
			}
		}

		/*Reinicia a partida*/
		reset = function() {window.location.reload();}

		/*Seta o nome do jogador da rodada na página HTML*/
		setLabelJogadorAtual = function() {
			document.getElementById('jogadorAtual').innerHTML = 'Jogador atual:  ' + jogadorAtual.nome;
			document.getElementById('rodadaAtual').innerHTML = 'Rodada atual:  ' + rodadaAtual + " de " + qtdJogadas;
		}

		/*Verifica se o tabuleiro está completamente preenchido, se estiver, significa que ninguém venceu a rodada*/
		tabuleiroIsFilled = function() {
			var preenchidos = 0;
				for(var i = 0; i < tabuleiro.length; i++)
					if(tabuleiro[i]	!= undefined) 
						preenchidos++;
				return preenchidos == tabuleiro.length;
		}

		/*Verifica a existência de ocorrências de um mesmo elemento(X ou O) nas linhas do tabuleiro, procurando um vencedor*/
		allElementsInSomeLine = function() {
			for( var i = 0; i < 7; i += 3) {
				if ( tabuleiro[i] == 'X' && tabuleiro[i + 1] == 'X' && tabuleiro[i + 2] == 'X' ) { 
					alert (jogador1.nome + ' Venceu!!!');
					reset();
				}
				if ( tabuleiro[i] == 'O' && tabuleiro[i + 1] == 'O' && tabuleiro[i + 2] == 'O' ) {
					alert (jogador2.nome + ' Venceu!!!');
					reset();
				}
			}
		}

		/*Verifica a existência de ocorrências de um mesmo elemento(X ou O) nas colunas do tabuleiro, procurando um vencedor*/
		allElementsInSomeColumn = function() {
			for( var i = 0; i < 3; i++) {
				if ( tabuleiro[i] == 'X' && tabuleiro[i + 3] == 'X' && tabuleiro[i + 6] == 'X' ) { 
					alert (jogador1.nome + ' Venceu!!!');
					reset();
				}
				if ( tabuleiro[i] == 'O' && tabuleiro[i + 3] == 'O' && tabuleiro[i + 6] == 'O' ) {
					alert (jogador2.nome + ' Venceu!!!');
					reset();
				}
			}

		}

		/*Verifica a existência de ocorrências de um mesmo elemento(X ou O) nas diagonais do tabuleiro, procurando um vencedor*/
		allElementsInSomeDiagonal = function() {
			if ( (tabuleiro[0] == 'X' && tabuleiro[4] == 'X' && tabuleiro[8] == 'X') ||
	 			 (tabuleiro[2] == 'X' && tabuleiro[4] == 'X' && tabuleiro[6] == 'X')) {
					alert (jogador1.nome + ' Venceu!!!');
				reset();
			} else if ( (tabuleiro[0] == 'O' && tabuleiro[4] == 'O' && tabuleiro[8] == 'O') ||
					    (tabuleiro[2] == 'O' && tabuleiro[4] == 'O' && tabuleiro[6] == 'O') ) {
					alert (jogador2.nome + ' Venceu!!!');
				reset();
			} 
		}

		/*IA*/
		/*
			0 1 2
			3 4 5
			6 7 8
		
		InteligenciaA = function(){
			if(jogadorAtual.nome == 'God Elísio'){
				var letra = 'O';
				if(tabuleiro[0] == 'X'){
					var container = document.getElementById('linha0');
						randomica = Math.random(1000,3000);
						randIA = Math.random(0,8);
								container.style.backgroundColor = 'blue';
								setTimeout(() => { setOnCeil(this, randIA);
								container.innerHTML = letra; }, 0)
								setTimeout(() => {container.style.backgroundColor = '#FF0000';}, "1000")
				}  
			}
		}*/

		/*Preenche a célula da tabela HTML escolhida pelo usuário ao clicar, além de cuidar do jogador atual da rodada e chamar as funções
		  de verificação de algum ganhador */
		setOnCeil = function(cel, pos) { 
				if(tabuleiro[pos] == undefined) {
					cel.innerHTML = formas[jogadorAtual.forma];
					tabuleiro[pos] = formas[jogadorAtual.forma];

					//define o jogador da rodada
					(jogadorAtual.forma == 0) ? jogadorAtual = jogador2 : jogadorAtual = jogador1;
					setLabelJogadorAtual();
					//InteligenciaA();

				} else alert('Error. Jogada já Feita =/');

				allElementsInSomeLine();
				allElementsInSomeColumn();
				allElementsInSomeDiagonal();
	
				if ( tabuleiroIsFilled() ) {
					alert ('Empate :(');
					reset();
				}
				
			
		}