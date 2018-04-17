<<<<<<< HEAD

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <title>Student Registration System</title>
    <link href="https://fonts.googleapis.com/css?family=Nanum+Gothic|Questrial" rel="stylesheet" <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <link rel="stylesheet" href="style.css"> 
</head>

<body>
   
   <nav id="heart">
    <ul>
      <li>&#9776; </li>
    </ul>
  </nav>
   

   

	<h1>Login</h1>
	<p id="alert">Please enter your username and PIN.</p>
	<form id ="1" name="formLogin" method="POST" action="/index.php" onsubmit="return logIn()">
	<!--//post data if logIn() does not return false-->
	
		<p><label for="userN">User Name: </label>
		<input type="text" name="userN" id="userN" size="20" maxlength="8" tabindex="1"></p>
		<p><label for="pin">PIN Number: </label>
		<input type="password" name="pin" id="pin" size="20" maxlength="8" tabindex="2"></p>
	
		<input type="submit" class="btn" name="btnLogIn" id="btn" action="submit" value="Log In"  />	
	</form>



    <div class="info">
        <span class="curr">&copy;</span> Henry Fritz 2018 <br>
        <a href="https://henryfritz.xyz">http://henryfritz.xyz</a>
    </div>
    <script src="script.js"></script>
       <?php  
    if (isset($_POST['userN']) & isset($_POST['pin']) ){
$username =  $_POST['userN'];
$pin = $_POST['pin'];
    }
?>
  <script>
    var userN= <?= '"' . $username. '"'; ?>;
    var pin= <?= '"' . $pin. '"'; ?>;
    loggedIn(userN, pin);
    </script>
</body>

</html>


<!--
/* 
Henry Fritz 
2/28/2018
For pedagogical use only
https://henryfritz.xyz/
*/-->
=======

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <title>Student Registration System</title>
    <link href="https://fonts.googleapis.com/css?family=Nanum+Gothic|Questrial" rel="stylesheet" <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <link rel="stylesheet" href="style.css"> 
</head>

<body>
   
   <nav id="heart">
    <ul>
      <li>&#9776; </li>
    </ul>
  </nav>
   

   

	<h1>Login</h1>
	<p id="alert">Please enter your username and PIN.</p>
	<form id ="1" name="formLogin" method="POST" action="/index.php" onsubmit="return logIn()">
	<!--//post data if logIn() does not return false-->
	
		<p><label for="userN">User Name: </label>
		<input type="text" name="userN" id="userN" size="20" maxlength="8" tabindex="1"></p>
		<p><label for="pin">PIN Number: </label>
		<input type="password" name="pin" id="pin" size="20" maxlength="8" tabindex="2"></p>
	
		<input type="submit" class="btn" name="btnLogIn" id="btn" action="submit" value="Log In"  />	
	</form>



    <div class="info">
        <span class="curr">&copy;</span> Henry Fritz 2018 <br>
        <a href="https://henryfritz.xyz">http://henryfritz.xyz</a>
    </div>
    <script src="script.js"></script>
       <?php  
    if (isset($_POST['userN']) & isset($_POST['pin']) ){
$username =  $_POST['userN'];
$pin = $_POST['pin'];
    }
?>
  <script>
    var userN= <?= '"' . $username. '"'; ?>;
    var pin= <?= '"' . $pin. '"'; ?>;
    loggedIn(userN, pin);
    </script>
</body>

</html>


<!--
/* 
Henry Fritz 
2/28/2018
For pedagogical use only
https://henryfritz.xyz/
*/-->
>>>>>>> 2faf6e7e5e6514edb8dac68102161781c2c1f2fd
