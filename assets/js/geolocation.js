var x = document.getElementById("geolocation-map");
var y = $(".geolocation-header");
function getLocation() {
    if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
    x.innerHTML = "Trình duyệt của bạn không hỗ trợ Geolocation.";
    }
}

function showPosition(position) {
    console.log(position);
    window.open(`https://www.google.com/maps/dir/${position.coords.latitude},${position.coords.longitude}/72+L%C3%AA+Th%C3%A1nh+T%C3%B4n,+B%E1%BA%BFn+Ngh%C3%A9,+Qu%E1%BA%ADn+3,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh,+Vi%E1%BB%87t+Nam/@11.5222076,107.4017339,9z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x31752f058d5037e9:0x39a61f00452fade4!2m2!1d106.7019901!2d10.7780202?hl=vi-VN`);
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
        x.innerHTML = "Người dùng từ chối cấp quyền định vị."
        break;
        case error.POSITION_UNAVAILABLE:
        x.innerHTML = "Không có thông tin vị trí."
        break;
        case error.TIMEOUT:
        x.innerHTML = "Hết thời gian gửi yêu cầu định vị."
        break;
        case error.UNKNOWN_ERROR:
        x.innerHTML = "Lỗi chưa xác định."
        break;
    }
}  
