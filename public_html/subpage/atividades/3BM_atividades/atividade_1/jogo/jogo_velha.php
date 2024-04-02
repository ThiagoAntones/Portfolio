<?php 

$nome = $_POST['nome']; // Aqui estou pegando via POST da outra página e atribuindo o valor na variavel nome

?>

<!DOCTYPE html>
<html lang="pt">
<head>
	<meta charset="UTF-8">
	<title>Teste</title>
</head>
<body>
	<form action="pagina2.php" method="post">
		<label for="nome"></label>
		<!-- Dentro do value eu abri uma tag php para printar dentro do input o valor da variável nome -->
		<input type="text" placeholder="nome aqui" name="nome" id="nome" value="<?php echo $nome ?>">
		<label for="nome"></label>
		<input type="email" placeholder="email aqui" name="email" id="email">
		<input type="submit" value="Enviar">
	</form>
</body>
</html>