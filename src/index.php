<?php
  $http_host = $_SERVER['HTTP_HOST'];
  $WEBSITE_PATH = "http://$http_host/";
  switch ( $http_host ) {
    case 'localhost':       // Default dev host
    case 'localhost:8888':  // Default MAMP Apache server
    case 'localhost:3000':  // Default Browser Sync proxy url
        $WEBSITE_PATH = "http://$http_host/";
      break;
  }
?>

<!DOCTYPE HTML>
<html lang="pt">
<head>
	<meta charset="UTF-8">
	<title>Hello I'm Danillo Castilho</title>
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta http-equiv="X-UA-Compatible" content="chrome=1" />

  <link rel="apple-touch-icon" href="<?php echo $WEBSITE_PATH; ?>assets/images/icons/apple_default.png?v=1.0">
  <link rel="apple-touch-icon" sizes="76x76" href="<?php echo $WEBSITE_PATH; ?>assets/images/icons/apple_76.png?v=1.0">
  <link rel="apple-touch-icon" sizes="120x120" href="<?php echo $WEBSITE_PATH; ?>assets/images/icons/apple_120.png?v=1.0">
  <link rel="apple-touch-icon" sizes="152x152" href="<?php echo $WEBSITE_PATH; ?>assets/images/icons/apple_152.png?v=1.0">

  <meta http-equiv="content-type" content="text/html;charset=utf-8" >
  <meta http-equiv="cache-control" content="Public">
  <meta http-equiv="content-language" content="pt-BR">
  <meta content="follow,index" name="robots">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black">
  <link rel="shortcut icon" href="<?php echo $WEBSITE_PATH; ?>assets/images/icons/icon.png?v=1.0" type="image/png">
  <link rel="icon" href="<?php echo $WEBSITE_PATH; ?>assets/images/icons/icon.png?v=1.0" type="image/png">
  <meta name="description" content="Hello, I'm Danillo Castilho a head of technology, creative developer and freelancer living in São Paulo, Brazil.">
  <meta name="keywords" content="danillo, castilho, danillo castilho, danillo castilho cavalcante, head of technology, front-end developer, developer, creative developer">

  <meta property="og:locale" content="pt_BR">
  <meta property="og:title" content="Hello, I'm Danillo Castilho">
  <meta property="og:description" content="a head of technology, creative developer and freelancer living in São Paulo, Brazil.">
  <meta property="og:site_name" content="Hello, I'm Danillo Castilho">
  <meta property="og:image" content="<?php echo $WEBSITE_PATH; ?>assets/images/share/share.png?v=1.0">
  <meta property="og:image:type" content="image/png">
  <meta property="og:image:width" content="470">
  <meta property="og:image:height" content="242">

  <link rel="stylesheet" href="css/style.css">
  <script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-50230219-7', 'auto');
    ga('send', 'pageview');

  </script>
  <script src="js/vendors.js"></script>
  <script src="js/main.js"></script>
</head>
<body>  
	<div class="app">
    <section class="background">
      <div class="layer-1">
      </div>
      <div class="layer-2">
      </div>
      <div class="layer-3">
      </div>
    </section>

    <section class="about">
      <div class="container">
        <div class="text-view">
          <p>
            <span>Hello, </span><span>I'm Danillo Castilho</span>
          </p>
          <div class="details">
            <p class="big">
              <span class="opaque title">
                scroll down <img src="./assets/images/website/arrow_down.png" />
              </span>
            </p>
          </div>
          <div class="background"></div>
        </div>
        <div class="text-view">
          <p>
            a head of technology,
          </p>
          <div class="background"></div>
        </div>
        <div class="text-view">
          <p>
            creative developer
          </p>
          <div class="background"></div>
        </div>
        <div class="text-view">
          <p>
            and freelancer
          </p>
          <div class="background"></div>
        </div>
        <div class="text-view">
          <p>
            <span>living in </span><span>São Paulo, Brazil</span>
          </p>
          <div class="background"></div>
        </div>
        <div class="text-view">
          <p>
            <span>with a </span><span>large background</span>
          </p>
          <div class="background"></div>
        </div>
        <div class="text-view">
          <p>
            <span>in web </span><span>development for</span>
          </p>
          <div class="background"></div>
        </div>
        <div class="text-view">
          <p>
            advertising industry
          </p>
          <div class="background"></div>
        </div>
        <div class="text-view">
          <p>
            <span>I'm working at </span><span>the goodfellas</span>
          </p>
          <div class="background"></div>
        </div>
        <div class="text-view">
          <p>
            <span>a digital production </span><span>company</span>
          </p>
          <div class="background"></div>
        </div>
        <div class="text-view">
          <p>
            <span>I worked </span><span>for companies</span>
          </p>
          <div class="background"></div>
        </div>
        <div class="text-view">
          <p>
            <span>like </span><span>DDB Brazil and Isobar</span>
          </p>
          <div class="background"></div>
        </div>
        <div class="text-view">
          <p>
            <span>and brands </span><span>including</span>
          </p>
          <div class="background"></div>
        </div>
        <div class="text-view">
          <p class="small">
            <span>
              Fiat
            </span>
            <span class="opaque">
              Volkswagen
            </span>
            <span>
              Huggies
            </span>
            <span class="opaque">
              Whirlpool
            </span>
            <span>
              Honda Autos
            </span>
            <span class="opaque">
              Hewlett-Packard
            </span>
            <span>
              Samsung Electronics
            </span>
            <span class="opaque">
              Visa
            </span>
            <span>
              Nissan
            </span>
            <span class="opaque">
              Rede Globo
            </span>
            <span>
              Fedex
            </span>
            <span class="opaque">
              Intel
            </span>
            <span>
              Tam airlines
            </span>
            <span class="opaque">
              Gol airlines
            </span>
          </p>
          <div class="background"></div>
        </div>
        <div class="text-view">
          <p>
            take a look at
          </p>
          <div class="background"></div>
        </div>
        <div class="text-view">
          <p>
            my last projects
          </p>
          <div class="background"></div>
        </div>
        <div class="text-view">
          <p>
            
          </p>
          <div class="background"></div>
        </div>
      </div>
    </section>

    <section class="contact">
      <div class="container">
        <div class="text-view">
          <p>
            I've also won awards
          </p>
          <div class="background"></div>
        </div>
        <div class="text-view">
          <p>
             for global clients
          </p>
          <div class="background"></div>
        </div>
        <div class="text-view">
          <p>
            <span>in creative </span><span>festivals such as</span>
          </p>
          <div class="background"></div>
        </div>
        <div class="text-view">
          <p class="small">
            <span class="opaque">
              D&AD
            </span>
            <span>
              The Webby Awards
            </span>
            <span class="opaque">
              Wave Festival
            </span>
            <span>
              Tomorrow Awards
            </span>
            <span class="opaque">
              El Sol
            </span>
            <span>
              El Ojo Iberoamerica
            </span>
            <span class="opaque">
              Effie Awards
            </span>
            <span>
              CCSP
            </span>
            <span class="opaque">
              Colunistas Brazil
            </span>
            <span>
              Cannes Lions.
            </span>
          </p>
          <div class="background"></div>
        </div>
        <div class="text-view">
          <p>
            feel free to contact me
          </p>
          <div class="background"></div>
        </div>
        <div class="text-view">
          <p>
            and say hello.
          </p>
          <div class="details">
            <p class="big">
              <span class="opaque title">
                <a href="mailto:danillocastilhocavalcante@gmail.com" target="_self">danillocastilhocavalcante@gmail.com</a>
                <br />
                <a href="https://www.facebook.com/danillo.c.cavalcante" target="_blank">facebook</a> - <a href="https://br.linkedin.com/in/danillocastilhocavalcante" target="_blank">linkedin</a> - <a href="https://github.com/danillocastilho" target="_blank">github</a>
              </span>
            </p>
          </div>
          <div class="background"></div>
        </div>
      </div>
    </section>

    <section class="work">
      <div class="container">

        <div class="text-view no-effect">
          <div class="thumb" style="background-image: url(assets/images/website/thumbs/landscape/magic_words/picture_1.jpg)">
            <div class="bar top"></div>
            <div class="bar bottom"></div>

          </div>
          <div class="background"></div>
          <div class="work_title">
            <p class="big">
              <span class="opaque title">
                almap bbdo - hewlett-packard
              </span>
              <span>
                magic words
              </span>
            </p>
          </div>
        </div>

        <div class="text-view no-effect">
          <div class="thumb" style="background-image: url(assets/images/website/thumbs/landscape/magic_words/picture_2.jpg)">
            <div class="bar top"></div>
            <div class="bar bottom"></div>

          </div>
          <div class="background"></div>
          <div class="work_title">
            <p class="medium">
              <span class="opaque title">
                my role
              </span>
              <span>
                head of technology, creative developer and front-end developer
              </span>
            </p>
          </div>
        </div>

        <div class="text-view no-effect">
          <div class="thumb" style="background-image: url(assets/images/website/thumbs/landscape/magic_words/picture_3.jpg)">
            <div class="bar top"></div>
            <div class="bar bottom"></div>

          </div>
          <div class="background"></div>
          <div class="work_title">
            <p class="medium">
              <span class="opaque title">
                technology
              </span>
              <span>
                html5, css3, javascript, php and node js
              </span>
            </p>
          </div>
        </div>

        <div class="text-view no-effect">
          <div class="thumb" style="background-image: url(assets/images/website/thumbs/landscape/magic_words/picture_4.jpg)">
            <div class="bar top"></div>
            <div class="bar bottom"></div>

          </div>
          <div class="background"></div>
          <div class="work_title">
            <p class="medium">
              <span class="opaque title">
                visit
              </span>
              <span>
                <a href="https://www.hpmagicwords.com.br/#en" target="_blank">hpmagicwords.com.br</a>
              </span>
            </p>
          </div>
        </div>

        <div class="text-view no-effect">
          <div class="thumb" style="background-image: url(assets/images/website/thumbs/landscape/magic_words/picture_5.jpg)">
            <div class="bar top"></div>
            <div class="bar bottom"></div>

          </div>
          <div class="background"></div>
          <div class="work_title">
            <p class="big">
              <span class="opaque title">
                
              </span>
              <span>
                
              </span>
            </p>
            <div class="details">
              <!-- <p class="big">
                <span class="opaque title">
                  click to see more details
                </span>
              </p> -->
            </div>
          </div>
        </div>

        <div class="text-view no-effect">
          <div class="thumb" style="background-image: url(assets/images/website/thumbs/landscape/magic_words/picture_6.jpg)">
            <div class="bar top"></div>
            <div class="bar bottom"></div>

          </div>
          <div class="background"></div>
          <div class="work_title">
            <p class="big">
              <span class="opaque title">
                
              </span>
              <span>
                
              </span>
            </p>
            <div class="details">
              <!-- <p class="big">
                <span class="opaque title">
                  click to see more details
                </span>
              </p> -->
            </div>
          </div>
        </div>

        <div class="text-view no-effect">
          <div class="thumb">
            <div class="bar top"></div>
            <div class="bar bottom"></div>

          </div>
          <div class="background"></div>
          <div class="work_title">
            <p class="big">
              <span class="opaque title">
                
              </span>
              <span>
                
              </span>
            </p>
          </div>
        </div>

        <div class="text-view no-effect">
          <div class="thumb" style="background-image: url(assets/images/website/thumbs/landscape/safety_screen/picture_1.jpg)">
            <div class="bar top"></div>
            <div class="bar bottom"></div>

          </div>
          <div class="background"></div>
          <div class="work_title">
            <p class="big">
              <span class="opaque title">
                leo burnett dubai - samsung
              </span>
              <span>
                safety screen
              </span>
            </p>
          </div>
        </div>

        <div class="text-view no-effect">
          <div class="thumb" style="background-image: url(assets/images/website/thumbs/landscape/safety_screen/picture_2.jpg)">
            <div class="bar top"></div>
            <div class="bar bottom"></div>

          </div>
          <div class="background"></div>
          <div class="work_title">
            <p class="medium">
              <span class="opaque title">
                my role
              </span>
              <span>
                head of technology and android developer
              </span>
            </p>
          </div>
        </div>

        <div class="text-view no-effect">
          <div class="thumb" style="background-image: url(assets/images/website/thumbs/landscape/safety_screen/picture_3.jpg)">
            <div class="bar top"></div>
            <div class="bar bottom"></div>

          </div>
          <div class="background"></div>
          <div class="work_title">
            <p class="medium">
              <span class="opaque title">
                technology
              </span>
              <span>
                java for android
              </span>
            </p>
          </div>
        </div>

        <div class="text-view no-effect">
          <div class="thumb" style="background-image: url(assets/images/website/thumbs/landscape/safety_screen/picture_4.jpg)">
            <div class="bar top"></div>
            <div class="bar bottom"></div>

          </div>
          <div class="background"></div>
          <div class="work_title">
            <p class="medium">
              <span class="opaque title">
                awards
              </span>
              <span>
                dubai lynx - 2016 - mobile - bronze
              </span>
            </p>
          </div>
        </div>

        <div class="text-view no-effect">
          <div class="thumb" style="background-image: url(assets/images/website/thumbs/landscape/safety_screen/picture_5.jpg)">
            <div class="bar top"></div>
            <div class="bar bottom"></div>

          </div>
          <div class="background"></div>
          <div class="work_title">
            <p class="medium">
              <span class="opaque title">
                download the app
              </span>
              <span>
                <a href="http://samsungsafetyscreen.com" target="_blank">samsungsafetyscreen.com</a>
              </span>
            </p>
          </div>
        </div>

        <div class="text-view no-effect">
          <div class="thumb">
            <div class="bar top"></div>
            <div class="bar bottom"></div>

          </div>
          <div class="background"></div>
          <div class="work_title">
            <p class="big">
              <span class="opaque title">
                
              </span>
              <span>
                
              </span>
            </p>
          </div>
        </div>

        <div class="text-view no-effect">
          <div class="thumb" style="background-image: url(assets/images/website/thumbs/landscape/metting_murilo/picture_1.jpg)">
            <div class="bar top"></div>
            <div class="bar bottom"></div>

          </div>
          <div class="background"></div>
          <div class="work_title">
            <p class="big">
              <span class="opaque title">
                mood - huggies
              </span>
              <span>
                metting murilo
              </span>
            </p>
          </div>
        </div>

        <div class="text-view no-effect">
          <div class="thumb" style="background-image: url(assets/images/website/thumbs/landscape/metting_murilo/picture_2.jpg)">
            <div class="bar top"></div>
            <div class="bar bottom"></div>

          </div>
          <div class="background"></div>
          <div class="work_title">
            <p class="medium">
              <span class="opaque title">
                my role
              </span>
              <span>
                head of technology
              </span>
            </p>
          </div>
        </div>

        <div class="text-view no-effect">
          <div class="thumb" style="background-image: url(assets/images/website/thumbs/landscape/metting_murilo/picture_3.jpg)">
            <div class="bar top"></div>
            <div class="bar bottom"></div>

          </div>
          <div class="background"></div>
          <div class="work_title">
            <p class="medium">
              <span class="opaque title">
                technology
              </span>
              <span>
                3D modeling and print
              </span>
            </p>
          </div>
        </div>

        <div class="text-view no-effect">
          <div class="thumb" style="background-image: url(assets/images/website/thumbs/landscape/metting_murilo/picture_4.jpg)">
            <div class="bar top"></div>
            <div class="bar bottom"></div>

          </div>
          <div class="background"></div>
          <div class="work_title">
            <p class="medium">
              <span class="opaque title">
                awards
              </span>
              <span>
                cannes lions - 2015 - health - gold
                <br />
                cannes lions - 2015 - health - silver
                <br />
                cannes lions - 2015 - creative data - bronze
              </span>
            </p>
          </div>
        </div>

        <div class="text-view no-effect">
          <div class="thumb" style="background-image: url(assets/images/website/thumbs/landscape/metting_murilo/picture_5.jpg)">
            <div class="bar top"></div>
            <div class="bar bottom"></div>

          </div>
          <div class="background"></div>
          <div class="work_title">
            <p class="medium">
              <span class="opaque title">
                watch
              </span>
              <span>
                <a href="https://vimeo.com/131024172" target="_blank">click here to watch the movie</a>
              </span>
            </p>
          </div>
        </div>

        <div class="text-view no-effect">
          <div class="thumb" style="background-image: url(assets/images/website/thumbs/landscape/metting_murilo/picture_6.jpg)">
            <div class="bar top"></div>
            <div class="bar bottom"></div>

          </div>
          <div class="background"></div>
          <div class="work_title">
            <p class="medium">
              <span class="opaque title">
                
              </span>
              <span>
                
              </span>
            </p>
          </div>
        </div>

        <div class="text-view no-effect">
          <div class="thumb">
            <div class="bar top"></div>
            <div class="bar bottom"></div>

          </div>
          <div class="background"></div>
          <div class="work_title">
            <p class="medium">
              <span class="opaque title">
                
              </span>
              <span>
                
              </span>
            </p>
          </div>
        </div>

        <div class="text-view no-effect">
          <div class="thumb" style="background-image: url(assets/images/website/thumbs/landscape/custom_made_story/picture_1.jpg)">
            <div class="bar top"></div>
            <div class="bar bottom"></div>

          </div>
          <div class="background"></div>
          <div class="work_title">
            <p class="big">
              <span class="opaque title">
                almap bbdo - volkswagen
              </span>
              <span>
                custom made story
              </span>
            </p>
          </div>
        </div>

        <div class="text-view no-effect">
          <div class="thumb" style="background-image: url(assets/images/website/thumbs/landscape/custom_made_story/picture_2.jpg)">
            <div class="bar top"></div>
            <div class="bar bottom"></div>

          </div>
          <div class="background"></div>
          <div class="work_title">
            <p class="medium">
              <span class="opaque title">
                my role
              </span>
              <span>
                head of technology, creative developer and front-end developer
              </span>
            </p>
          </div>
        </div>

        <div class="text-view no-effect">
          <div class="thumb" style="background-image: url(assets/images/website/thumbs/landscape/custom_made_story/picture_3.jpg)">
            <div class="bar top"></div>
            <div class="bar bottom"></div>

          </div>
          <div class="background"></div>
          <div class="work_title">
            <p class="medium">
              <span class="opaque title">
                technology
              </span>
              <span>
                html, css, javascript and actionscript3
              </span>
            </p>
          </div>
        </div>

        <div class="text-view no-effect">
          <div class="thumb" style="background-image: url(assets/images/website/thumbs/landscape/custom_made_story/picture_4.jpg)">
            <div class="bar top"></div>
            <div class="bar bottom"></div>

          </div>
          <div class="background"></div>
          <div class="work_title">
            <p class="medium">
              <span class="opaque title">
                awards
              </span>
              <span>
                cannes lions - 2015 - film craft script - silver
                <br />
                colunistas - 2015 - automotive products and services - bronze
              </span>
            </p>
          </div>
        </div>

        <div class="text-view no-effect">
          <div class="thumb" style="background-image: url(assets/images/website/thumbs/landscape/custom_made_story/picture_5.jpg)">
            <div class="bar top"></div>
            <div class="bar bottom"></div>

          </div>
          <div class="background"></div>
          <div class="work_title">
            <p class="medium">
              <span class="opaque title">
                visit
              </span>
              <span>
                <a href="http://filmesobmedida.com.br" target="_blank">filmesobmedida.com.br</a>
              </span>
            </p>
          </div>
        </div>

        <div class="text-view no-effect">
          <div class="thumb" style="background-image: url(assets/images/website/thumbs/landscape/custom_made_story/picture_6.jpg)">
            <div class="bar top"></div>
            <div class="bar bottom"></div>

          </div>
          <div class="background"></div>
          <div class="work_title">
            <p class="medium">
              <span class="opaque title">
                
              </span>
              <span>
                
              </span>
            </p>
          </div>
        </div>

        <div class="text-view no-effect">
          <div class="thumb">
            <div class="bar top"></div>
            <div class="bar bottom"></div>

          </div>
          <div class="background"></div>
          <div class="work_title">
            <p class="medium">
              <span class="opaque title">
                
              </span>
              <span>
                
              </span>
            </p>
          </div>
        </div>

        <div class="text-view no-effect">
          <div class="thumb" style="background-image: url(assets/images/website/thumbs/landscape/live_store/picture_1.jpg)">
            <div class="bar top"></div>
            <div class="bar bottom"></div>

          </div>
          <div class="background"></div>
          <div class="work_title">
            <p class="big">
              <span class="opaque title">
                isobar brazil - fiat
              </span>
              <span>
                live store
              </span>
            </p>
          </div>
        </div>

        <div class="text-view no-effect">
          <div class="thumb" style="background-image: url(assets/images/website/thumbs/landscape/live_store/picture_2.jpg)">
            <div class="bar top"></div>
            <div class="bar bottom"></div>

          </div>
          <div class="background"></div>
          <div class="work_title">
            <p class="medium">
              <span class="opaque title">
                my role
              </span>
              <span>
                creative technologist and front-end developer
              </span>
            </p>
          </div>
        </div>

        <div class="text-view no-effect">
          <div class="thumb" style="background-image: url(assets/images/website/thumbs/landscape/live_store/picture_3.jpg)">
            <div class="bar top"></div>
            <div class="bar bottom"></div>

          </div>
          <div class="background"></div>
          <div class="work_title">
            <p class="medium">
              <span class="opaque title">
                technology
              </span>
              <span>
                html5, css3, javascript, actionscript 3, real time protocol
              </span>
            </p>
          </div>
        </div>

        <div class="text-view no-effect">
          <div class="thumb" style="background-image: url(assets/images/website/thumbs/landscape/live_store/picture_4.jpg)">
            <div class="bar top"></div>
            <div class="bar bottom"></div>

          </div>
          <div class="background"></div>
          <div class="work_title">
            <p class="medium">
              <span class="opaque title">
                awards
              </span>
              <span>
                the webby awards - 2015 - interactive advertising - winner
                <br />
                cannes lions - 2014 - innovation - gold
                <br />
                cannes lions - 2014 - media - bronze
                <br />
                10+ international awards
              </span>
            </p>
          </div>
        </div>

        <div class="text-view no-effect">
          <div class="thumb" style="background-image: url(assets/images/website/thumbs/landscape/live_store/picture_5.jpg)">
            <div class="bar top"></div>
            <div class="bar bottom"></div>

          </div>
          <div class="background"></div>
          <div class="work_title">
            <p class="medium">
              <span class="opaque title">
                visit
              </span>
              <span>
                <a href="http://livestore.fiat.com.br" target="_blank">livestore.fiat.com.br</a>
              </span>
            </p>
          </div>
        </div>

      </div>
    </section>

    <section class="navigation">
      <div class="border">
        <div class="bar left"></div>
        <div class="bar top"></div>
        <div class="bar right"></div>
        <div class="bar bottom"></div>
      </div>
      <div class="graphs">
        <div class="graph graph-1"></div>
        <div class="graph graph-2"></div>
      </div>
      <div class="bar-background right">
      </div>
      <div class="bar-scroll right">
      
      </div>
    </section>
  </div>
</body>
</html>