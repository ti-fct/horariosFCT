$(document).ready(function() {
    if (/Android|iPhone|iPad|iPod|Silk|BlackBerry|Windows Phone/i.test(navigator.userAgent)) {
        $(window).on('load', function() {
            setTimeout(function() {
                if (screenfull.isEnabled) {
                    screenfull.request();
                }
            }, 1000);
        });
    }
});