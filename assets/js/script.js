$("*").ready(function() {
    // Tắt menu mobile
    $(".nav-mobile-close-btn").click(function() {
        $(".nav-mobile").css("display","none");
        // bật nút Mobile khi bật menu
        if($(window).width() < 1024) {
            $(".header__primary-btn-mobile").css("display","block");
        }
    });
    // Bật menu mobile
    $(".header__primary-btn-mobile").click(function() {
        $(".nav-mobile").css("display","flex");
        // tắt nút Mobile khi bật menu
        $(".header__primary-btn-mobile").css("display","none");
    });

    $(window).resize(function() {
        if($(window).width() > 1024) {
            $(".header__primary-btn-mobile").css("display","none");
        } else {
            $(".header__primary-btn-mobile").css("display","block");
        }
    });


    // Đếm lượt truy cập
    if(localStorage.getItem("countLogin") == null) {
        localStorage.setItem("countLogin",1);
        $(".footer_info-number-count").html(`1`);
    } else {
       var totalCount = localStorage.getItem("countLogin");
       totalCount++;
       localStorage.setItem("countLogin",`${totalCount}`);
       $(".footer_info-number-count").html(`${totalCount}`);
    }

    // Hiện thị nút scroll lên trên nếu scroll xuống thấp
    $(window).scroll(function() {
        var totalHeight = $(document).height();
        $(window).scrollTop(function(index,currentposition) {
            if(currentposition > totalHeight / 2 ) {
                $(".scrollTop").fadeIn().css("display","flex");
            } else {
                $(".scrollTop").fadeOut();
            }
        });
    })
    $(".scrollTop").click(function() {
        $("html").animate({ scrollTop: 0}, 600);
        return false;
    });

    // Phóng to ảnh khi nhấn vô 
    $(".product-details__info-img-primary-wrapper").click(function() {
        $(".product__slide").fadeIn().css("display","flex");
    });

     // Tắt khi nhấn close
     $(".product__slide-close").click(function() {
        $(".product__slide").fadeOut();
    });

    // Slide khi phóng to ảnh
    var arrayImg = [
        "8-108-yellow-herring-nigiri.png",
        "sm-19.png"
    ];
    var count = 0;
    
    $(".product-details__prev").click(function() {
        if(count > 0 && count <= arrayImg.length - 1 ) {
            count--;
            $(".product__slide-img-primary-img").attr("src",`./assets/img/${arrayImg[count]}`);
        } else {
            count = arrayImg.length - 1;
            $(".product__slide-img-primary-img").attr("src",`./assets/img/${arrayImg[count]}`);
        }
    });

    $(".product-details__next").click(function() {
        if(count < arrayImg.length - 1 ) {
            count++;
            $(".product__slide-img-primary-img").attr("src",`./assets/img/${arrayImg[count]}`);
        } else {
            count = 0;
            $(".product__slide-img-primary-img").attr("src",`./assets/img/${arrayImg[count]}`);
        }
    });

    // Thay đổi ảnh khi nhấn ở tab side
    $(".product-details__info-img").click(function(e) {
        var img = $(e.target).attr("src");
        $(".product-details__info-img-primary").attr("src",`${img}`);
        $(".product-details__info-img").removeClass("product-details__info-img--active");
        $(e.target).addClass("product-details__info-img--active");
    })
})