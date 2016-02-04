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
    <section class="jobs">
      <div>
        <!-- <img src="assets/images/website/thumbs/nissan_kicks.png" />  -->
      </div>
      <div>
        <!-- <img src="assets/images/website/thumbs/metting_murilo.png" />  -->
      </div>
      <div>
        <!-- <img src="assets/images/website/thumbs/custom_made_history.png" />  -->
      </div>
      <div>
        <!-- <img src="assets/images/website/thumbs/nissan_new_versa.png" />  -->
      </div>
      <div>
        <!-- <img src="assets/images/website/thumbs/kiss_shit_project.png" />  -->
      </div>
      <div>
        <!-- <img src="assets/images/website/thumbs/tsi_tech.png" />  -->
      </div>
      <div>
        <!-- <img src="assets/images/website/thumbs/clck.png" />  -->
      </div>
    </section>
    <section class="welcome">
      <p>
        <span>hello,</span>
        <span class="horizontal-line"></span>
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
        <span>living in brazil</span>
      </p>
      <p>
        <span>already work</span>
      </p>
      <p>
        <span>at agencies like</span>
      </p>
      <p>
        <span>ddb brazil and isobar</span>
      </p>
      <p>
        <span>now at a digital</span>
      </p>
      <p>
        <span>production company</span>
      </p>
      <p>
        <span>really love to coding</span>
      </p>
      <p>
        <span>html, css, sass, less</span>
      </p>
      <p>
        <span>javascript, nodejs</span>
      </p>
      <p>
        <span>hate webgl</span>
      </p>
      <p>
        <span>joking!</span>
      </p>
      <p>
        <span>love webgl,</span>
      </p>
      <p>
        <span>php, mysql, swift, java</span>
      </p>
      <p>
        <span>see some projects</span>
      </p>
      <p>
        <span>nissan kicks</span>
        <span class="text-highlight">nissan - lewlara/tbwa - 2016</span>
      </p>
      <p>
        <span>metting murilo</span>
        <span class="text-highlight">huggies - agency mood - 2015</span>
      </p>
      <p>
        <span>custom-made</span>
        <span class="text-highlight">volkswagen trucks - almap bbdo - 2015</span>
      </p>
      <p>
        <span>new versa</span>
        <span class="text-highlight">nissan - lewlara/tbwa - 2015</span>
      </p>
      <p>
        <span>shit project</span>
        <span class="text-highlight">kiss fm - almap bbdo - 2015</span>
      </p>
      <p>
        <span>up tsi</span>
        <span class="text-highlight">volkswagen - almap bbdo - 2015</span>
      </p>
      <p>
        <span>clck</span>
        <span class="text-highlight">personal project - 2015</span>
      </p>
      <p>
        <span>with you want</span>
      </p>
      <p>
        <span>to contact me</span>
      </p>
      <p>
        <span>text me to say</span>
      </p>
      <p>
        <span>hello.</span>
        <span class="text-highlight"><a href="#">linkedin</a> / <a href="#">facebook</a> / <a href="#">github</a></span>
        <span class="text-highlight"><a href="#">danillocastilhocavalcante@gmail.com</a></span>
        <span class="text-highlight"><a href="#">+55 11 96403 6239</a></span>
      </p>
    </section>
    <section class="subtitle">
      <p>
        <span>scroll down to start</span>
      </p>
       <p>
        <span>click to see more about</span>
      </p>
    </section>
  </div>
</body>
</html>