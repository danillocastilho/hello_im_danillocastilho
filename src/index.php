<?php
  $WEBSITE_PATH = '';

  $http_host = $_SERVER['HTTP_HOST'];
  switch ( $http_host ) {
    case 'localhost':       // Default dev host
    case 'localhost:8888':  // Default MAMP Apache server
    case 'localhost:3000':  // Default Browser Sync proxy url
        $WEBSITE_PATH = "http://$http_host/";
      break;
  }
?>

<!DOCTYPE html>
<html lang="pt">
<head>
	<meta charset="UTF-8">
	<title>Danillo Castilho</title>
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta http-equiv="X-UA-Compatible" content="chrome=1" />

  <link rel="apple-touch-icon" href="<?php echo $WEBSITE_PATH; ?>assets/images/icons/apple_default.png">
  <link rel="apple-touch-icon" sizes="76x76" href="<?php echo $WEBSITE_PATH; ?>assets/images/icons/apple_76.png">
  <link rel="apple-touch-icon" sizes="120x120" href="<?php echo $WEBSITE_PATH; ?>assets/images/icons/apple_120.png">
  <link rel="apple-touch-icon" sizes="152x152" href="<?php echo $WEBSITE_PATH; ?>assets/images/icons/apple_152.png">

  <meta http-equiv="content-type" content="text/html;charset=utf-8" >
  <meta http-equiv="cache-control" content="Public">
  <meta http-equiv="content-language" content="pt-BR">
  <meta content="follow,index" name="robots">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black">
  <link rel="shortcut icon" href="<?php echo $WEBSITE_PATH; ?>assets/images/icons/icon.png" type="image/png">
  <link rel="icon" href="<?php echo $WEBSITE_PATH; ?>assets/images/icons/icon.png" type="image/png">
  <meta name="description" content="">
  <meta name="keywords" content="s">

  <meta property="og:locale" content="pt_BR">
  <meta property="og:title" content="">
  <meta property="og:description" content="">
  <meta property="og:site_name" content="">
  <meta property="og:image" content="<?php echo $WEBSITE_PATH; ?>assets/images/share/share.jpg">
  <meta property="og:image:type" content="image/png">
  <meta property="og:image:width" content="470">
  <meta property="og:image:height" content="242">

  <link rel="stylesheet" href="css/style.css">
  <script src="js/vendors.js"></script>
  <script src="js/main.js"></script>
</head>
<body>  
	<div class="app">
    <section class="welcome">
      <p>
        <span>hello,</span>
        <span class="highlight">scroll down to start</span>
      </p>
      <p>
        <span>my name is</span>
      </p>
      <p>
        <span>danillo castilho</span>
      </p>
      <p>
        <span>i'm a</span>
      </p>
      <p>
        <span>creativy developer</span>
      </p>
      <p>
        <span>in Brazil</span>
      </p>
    </section>
  </div>
</body>
</html>