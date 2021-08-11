window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementsByClass("navbar").style.padding = "30px 10px";
    document.getElementsById("logo").style.fontSize = "25px";
  } else {
    document.getElementsById("navbar").style.padding = "80px 10px";
    document.getElementsById("logo").style.fontSize = "35px";
  }
}