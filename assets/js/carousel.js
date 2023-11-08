$("*").ready(function() {
    const carousel = $(".slideShow__listSlide");
    
    // Biến tạm
    var countPrev = 1;
    var countNext = 1;
    var is_select = 0;
    var listCurrentLocation = 0;
    // Start add class
    is_selected(carousel.children(), 3);
    locationItem(carousel.children());
    function is_selected(list, quanitySelected = 3, method = "default") {
        //Remove class is_selected 
        for(var key of carousel.children()) {
            $(key).removeClass("is_selected");
        }

        // Add class is_selected when next
        if(method === "next") {
            if(countNext == 0) {
               is_select++;
               is_select += quanitySelected;
            }
            countNext++;
            countPrev = 0;

            var temp = is_select + quanitySelected;
            for(is_select; is_select < temp; is_select++) {
                $(list[is_select]).addClass("is_selected");
                // console.log(is_select);
            }

            checkMaxMinSelect(carousel, is_select);
        } else if(method === "prev") {
            
            // When click prev the first time then process 
            if(countPrev == 0) {
                is_select -= quanitySelected;
                is_select--;
            }
            // Tăng biến để khi nhấn prev lần đầu thì lùi về 3 ô
            countPrev++;
            countNext = 0;

            var temp = is_select - quanitySelected; 
            for(is_select; is_select > temp; is_select--) {
                $(list[is_select]).addClass("is_selected");
                // console.log(is_select);
            }

            checkMaxMinSelect(carousel, is_select);
        } else {
            var temp = is_select + quanitySelected;
            for(is_select; is_select < temp; is_select++) {
                $(list[is_select]).addClass("is_selected");
                // console.log(is_select);
            }
        }

        function checkMaxMinSelect(carouseList, select) {
            if(select > $(carouseList).children().length) {
                is_select = 0;
                is_selected(carousel.children(), 3);
            }
            else if (select < -1) {
                // console.log("chạy");
                is_select = $(carouseList).children().length - 1;
                is_selected(carousel.children(), 3, "prev");
            }
        }
    }
    // End add class
    function locationItem(list, showColumn) {
        var percentLeft = 0;
        for(var key of list) {
            $(key).css("left", `${percentLeft}%`);
            percentLeft += 100/3;
        }
    }

    // Start move 
    // Tăng giảm translateX
    function moveList(list, range, method) {
        if(method === "prev") {
            listCurrentLocation += range;
            $(list).css("transform", `translateX(${listCurrentLocation}%)`);
            checkLocationList(listCurrentLocation);
        } else if (method === "next") {
            listCurrentLocation -= range;
            $(list).css("transform", `translateX(${listCurrentLocation}%)`);
            checkLocationList(listCurrentLocation);
        } else {
            listCurrentLocation = 0;
            $(list).css("transform", `translateX(${listCurrentLocation}%)`);
        }
        console.log(listCurrentLocation);
        function checkLocationList(currentLocation) {
            if(listCurrentLocation > 0 || listCurrentLocation < -300) {
                moveList(moveList(carousel, 100, "default"));
            }
        }
    }
 


    
    $(".slideShow__btn--prev").click(function() {
        is_selected(carousel.children(), 3, "prev");
        moveList(carousel, 100, "prev");
    });

    $(".slideShow__btn--next").click(function() {
        is_selected(carousel.children(), 3, "next");
        moveList(carousel, 100, "next");
    });
});