new WOW().init();

$(function(){
  var lz = {};
  lz.index={
    init:function(){
      var isp = this.isPC();
      if(isp){
          $(".btn-qq").show();
      };
      this.toTop();
      this.clickTop();
    },
    toTop:function(){
      $(window).scroll(function () {
        var scroll_top = $(window).scrollTop();
        if (scroll_top >= 900 && $(".btn-top").css("display")=="none") {
          $(".btn-top").show();
        }else if(scroll_top < 500 && $(".btn-top").css("display")=="block"){
          $(".btn-top").hide();
        }
      });
    },
    clickTop:function(){
      $(".btn-top").on("click",function(){
        window.scrollTo(0,0);
      });
    },
    isPC:function(){
      var userAgentInfo = navigator.userAgent;
      var Agents = ["Android", "iPhone",
          "SymbianOS", "Windows Phone",
          "iPad", "iPod"];
      var flag = true;
      for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
          flag = false;
          break;
        }
      }
      return flag;
    }
  };
  lz.index.init();
});
