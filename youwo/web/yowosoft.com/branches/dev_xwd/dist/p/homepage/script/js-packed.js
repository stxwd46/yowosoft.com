var clientHeight=document.documentElement.clientHeight,init=function(){initPage(),initEvent()},initPage=function(){},initEvent=function(){var a=document.getElementById("to_top");window.onscroll=function(){a.className=document.body.scrollTop+document.documentElement.scrollTop>clientHeight?"show":""},document.addEventListener?a.addEventListener("click",function(){goToTop()}):a.attachEvent("onclick",function(){goToTop()})},goToTop=function(){document.body.scrollTop=0,document.documentElement.scrollTop=0};init();