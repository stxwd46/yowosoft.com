var clientHeight = document.documentElement.clientHeight;

var init = function() {
    initPage();
    initEvent();
};

var initPage = function() {};

var initEvent = function() {
    var toTopDiv = document.getElementById('to_top');
    window.onscroll = function(e) {
        if ((document.body.scrollTop + document.documentElement.scrollTop) > clientHeight) {
            toTopDiv.className = 'show';
        } else {
            toTopDiv.className = '';
        }
    };

    if (document.addEventListener) {
        toTopDiv.addEventListener('click', function() {
            goToTop();
        });
    } else {
        toTopDiv.attachEvent('onclick', function() {
            goToTop();
        });
    }
};

var goToTop = function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

init();