$("*").ready(function (){
    function carousel(listSlide, colItem = 1) {
        var carousel = $(listSlide); // Khai báo class bao bọc item
        var carouselWidth = $(carousel).width();
        // $(carousel).css("width", `${}`)
        
        var slideItems = $(carousel).children();

        // Get width của một item
        var slideItemWidth = $(slideItems).width();

        // Set width của các item
        // $(slideItems).css("width",`${slideItemWidth}`);
        // Set width của carousel
        $(carousel).css("width", `${slideItemWidth} * ${slideItems.length}px`)
        

        var percentCol = 100 / colItem;
        var currentPercent = 0;  
        var position = 0; // translateX 
        var selected = 0;
        for(var key of slideItems) {
            $(key).css("left",`${0 + currentPercent}%`);
            currentPercent += percentCol;
            // console.log(percentCol)
        }

        // nút next
        $(".slideShow__btn--next").click(function(e) {
            position -= 100;
            selected += 3;
            currentPercent = 0;
            if(selected < carousel.children().length) {
                is_selected(selected)
                carousel.css("transform", `translateX(${position}%)`);
                carousel.css("transform").split(", ")[4];
            } else {
                selected = 0;
                position = 0;
                is_selected(selected);
                carousel.css("transform", `translateX(${position}%)`);
                console.log(currentPercent);
                currentPercent = 0;
                for(var key of slideItems) {
                    $(key).css("left",`${0 + currentPercent}%`);
                    currentPercent += percentCol;
                }
            }

            // for(var key of slideItems) {
            //     $(key).css("left",`${0 + currentPercent}%`);
            //     currentPercent += percentCol;
            //     // console.log(percentCol)
            // }
        });

        // nút prev
        $(".slideShow__btn--prev").click(function(e) {
            position += 100;
            selected += 3;
            currentPercent = 0;
            if(selected < carousel.children().length) {
                is_selected(selected, "desc")
                carousel.css("transform", `translateX(${position}%)`);
                carousel.css("transform").split(", ")[4];
                console.log("prev");
            } else {
                console.log("case dc chạy");
                selected = 0;
                position = 0;
                is_selected(selected, "desc");
                carousel.css("transform", `translateX(${position}%)`);
            }

            for(var key of slideItems) {
                if(carousel.children().hasClass(".is-selected")) {

                }
                console.log(currentPercent);
                $(key).css("left",`-${0 + currentPercent}%`);
                currentPercent += percentCol;
            }

            // for(var key in slideItems) {
            //     if(slideItems.hasOwnProperty(key)) { 
            //         if(key >= 2) {
            //             console.log(currentPercent)
            //             $(key).css("left",`-${0 + currentPercent}%`);
            //             currentPercent += percentCol;
            //         } else {
            //             currentPercent += percentCol;
            //         }
            //     }
            // }
        });

        function is_selected(index, sort = "desc") {
            var temp = index + colItem;
            // Xóa tất cả class is-selected
            for(var i = 0; i < carousel.children().length; i++) {
                $(carousel.children()[i]).removeClass("is-selected");
            }
            
            if(sort == "asc") {
                // Thêm vào class selected theo thứ tự tăng dần
                console.log("asc");
                for(index; index < temp; index++) {
                    $(carousel.children()[index]).addClass("is-selected");
                }
            }
            // else {
            //     // Thêm vào class selected theo thứ tự giảm dần
            //     indexDesc = carousel.children().length - ;
            //     for(indexDesc; indexDesc > carousel.children().length - temp; indexDesc--) {
            //         console.log("For", index);
            //         $(carousel.children()[index]).addClass("is-selected");
            //     }
            // }
        }

        is_selected(selected);

    }

    carousel(".slideShow__listSlide", 3);
});