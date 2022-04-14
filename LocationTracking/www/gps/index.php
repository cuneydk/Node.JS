<?php require_once('header.php') ?>

<body id="page-top" class="landing-page no-skin-config">
    
<div class="navbar-wrapper">
    <nav class="navbar navbar-dark bg-dark" role="navigation">
        <div class="container">
            <?php if(isset($_COOKIE["UserInfo"])) { $status=explode("=", $_COOKIE["UserInfo"]); if ($status[3]=="Admin"){?>
            <a class="navbar-brand" href="usersAdmin.php">KULLANICI PANELİ</a>
            <?php }} ?>
            <div class="navbar-header page-scroll">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar">
                    <i class="fa fa-bars"></i>
                </button>
            </div>
            <div class="collapse navbar-collapse justify-content-end" id="navbar">
                <ul class="nav navbar-nav navbar-right">
                    <li><a class="nav-link page-scroll" href="#page-top">ANASAYFA</a></li>
                    <?php if(!isset($_COOKIE["UserInfo"])) { ?>
                    <li><a class="nav-link page-scroll" href="login.php">GIRIS</a></li>
                    <li><a class="nav-link page-scroll" href="register.php">KAYIT OL</a></li>
                    <?php }else{ ?>
                    <li><a class="nav-link page-scroll" href="http://localhost:8000/">ARACLARIM</a></li>
                    <li><a class="nav-link page-scroll" href="logout.php">CIKIS</a></li>
                    <?php } ?>
                </ul>
            </div>
        </div>
    </nav>
</div>
<div id="inSlider" class="carousel slide" data-ride="carousel" >
    <ol class="carousel-indicators">
        <li data-target="#inSlider" data-slide-to="0" class="active"></li>
        <li data-target="#inSlider" data-slide-to="1"></li>
    </ol>
    <div class="carousel-inner" role="listbox">
        <div class="carousel-item active">
            <div class="container">
                <div class="carousel-caption">
                    <h1>Gerçek zamanlı<br/>
                        konum takibi<br/></h1>
                        <p>
                        <a class="btn btn-danger" href="./IEEE-rapor-YL2-P1.pdf" target="_blank" role="button">Kullanım Kılavuzu</a>
                    </p>
                </div>

                <div class="carousel-image wow zoomIn">
                    <img src="assets/img/landing/smartphone.png" alt="gsm"/>
                </div>

            </div>

            <div class="header-back one"></div>

        </div>
        <div class="carousel-item">
            <div class="container">
                <div class="carousel-caption blank">
                    <h1>Yazılım <br/>Laboratuvarı</h1>
                    <p>200201132 - Muhammet Cüneyd Kurtbaş</p>
                    <p>190201084 - Rana Dudu Kabak</p>
                </div>
            </div>

            <div class="header-back two"></div>
        </div>
    </div>
    <a class="carousel-control-prev" href="#inSlider" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#inSlider" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    </a>
</div>


<script src="assets/js/jquery-3.1.1.min.js"></script>
<script src="assets/js/popper.min.js"></script>
<script src="assets/js/bootstrap.js"></script>
<script src="assets/js/plugins/metisMenu/jquery.metisMenu.js"></script>
<script src="assets/js/plugins/slimscroll/jquery.slimscroll.min.js"></script>

<script src="assets/js/inspinia.js"></script>
<script src="assets/js/plugins/pace/pace.min.js"></script>
<script src="assets/js/plugins/wow/wow.min.js"></script>

                <div>
                    <center>
                    <img src="assets/img/landing/Yazlab2-1-mimari.jpg" alt="gsm"/> </center>
                </div>
<script>

    $(document).ready(function () {

        $('body').scrollspy({
            target: '#navbar',
            offset: 80
        });

        // Page scrolling feature
        $('a.page-scroll').bind('click', function(event) {
            var link = $(this);
            $('html, body').stop().animate({
                scrollTop: $(link.attr('href')).offset().top - 50
            }, 500);
            event.preventDefault();
            $("#navbar").collapse('hide');
        });
    });

    var cbpAnimatedHeader = (function() {
        var docElem = document.documentElement,
            header = document.querySelector( '.navbar-default' ),
            didScroll = false,
            changeHeaderOn = 200;
        function init() {
            window.addEventListener( 'scroll', function( event ) {
                if( !didScroll ) {
                    didScroll = true;
                    setTimeout( scrollPage, 250 );
                }
            }, false );
        }
        function scrollPage() {
            var sy = scrollY();
            if ( sy >= changeHeaderOn ) {
                $(header).addClass('navbar-scroll')
            }
            else {
                $(header).removeClass('navbar-scroll')
            }
            didScroll = false;
        }
        function scrollY() {
            return window.pageYOffset || docElem.scrollTop;
        }
        init();

    })();

    new WOW().init();



</script>

</body>