var blueScrollOption = {
    cursorwidth: "8px",
    cursorcolor: "#9f9fa0",
    cursorborder: "0px",
    cursorborderradius: "8px",
    scrollspeed: 20,
    horizrailenabled:false
  };
var discussScrollOption = {
    cursorwidth: "8px",
    cursorcolor: "#ffde14",
    cursorborder: "0px",
    cursorborderradius: "8px",
    scrollspeed: 20,
    horizrailenabled:false
  };
var considerScrollOption = {
    cursorwidth: "8px",
    cursorcolor: "#96d6ee",
    cursorborder: "0px",
    cursorborderradius: "8px",
    scrollspeed: 20,
    horizrailenabled:false
  };
var agreeScrollOption = {
    cursorwidth: "8px",
    cursorcolor: "#26ad4a",
    cursorborder: "0px",
    cursorborderradius: "8px",
    scrollspeed: 20,
    horizrailenabled:false
  };
/* jshint devel:true */
var upadteScroller = function(){
  $(".activity-window .content, .landing-page-section .list-steps, .agree .board-content-scroll, .discuss .board-content-scroll, .consider .board-content-scroll").getNiceScroll().resize();
}
//lemon cup
function setPercenLemon(id, percen){
  cup = $(id);
  cup.find(".percen-rule").css("height", "calc(50% * " + (percen / 100) + ")");
  cup.find(".content .percen span").text(percen + "%");
  if(percen == 0){
    cup.find(".percen-rule").hide();
  }else{
    cup.find(".percen-rule").show();
  }
}
//get viewport
function getViewportOffset($e) {
  var $window = $(window),
    scrollLeft = $window.scrollLeft(),
    scrollTop = $window.scrollTop(),
    offset = $e.offset(),
    rect1 = { x1: scrollLeft, y1: scrollTop, x2: scrollLeft + $window.width(), y2: scrollTop + $window.height() },
    rect2 = { x1: offset.left, y1: offset.top, x2: offset.left + $e.width(), y2: offset.top + $e.height() };
  return {
    left: offset.left - scrollLeft,
    top: offset.top - scrollTop,
    insideViewport: rect1.x1 < rect2.x2 && rect1.x2 > rect2.x1 && rect1.y1 < rect2.y2 && rect1.y2 > rect2.y1
  };
}
function showTooltip(parent, text){
  msg = $(".msg-tooltip");
  msg.find(".text").text(text);
  msg.css('top', getViewportOffset(parent).top - msg.height() - 25).css('left', getViewportOffset(parent).left - msg.width() / 2 + parent.width() / 2).fadeIn();


}
setInterval(function(){
  setPercenLemon("#mary", Math.round(Math.random() * 100));
}, 1000)
setInterval(function(){
  setPercenLemon("#john", Math.round(Math.random() * 100));
}, 1000)
setInterval(function(){
  setPercenLemon("#frankky", Math.round(Math.random() * 100));
}, 1000)

$(document).ready(function(){
  $("body").click(function(){
    $(".msg-tooltip").fadeOut();
    // $("body").unbind("click");
  })
  $("body").on("keypress", ".editable input[type=text]", function(){
    this.style.width = ((this.value.length + 1) * 8) + 'px';
  });
  $(".editable input[type=text]").each(function(){
    this.style.width = ((this.value.length + 1) * 8) + 'px';
  });
  //hide activity
  $('.activity-window .btn-avtivity-show').click(function(){
    $('.activity-window').removeClass('min');
    upadteScroller();
  });
  $('.activity-window .btn-avtivity-show').click(function(){
    $('.activity-window').removeClass('min');
    upadteScroller();
  });
  $('.activity-window .btn-avtivity-hide').click(function(){
    $('.activity-window').addClass('min');
    upadteScroller();
  });
  $("#main").height($(window).height() - $("#header").height());

  //ninescroll
  $(".activity-window .content, .landing-page-section .list-steps, textarea").niceScroll(blueScrollOption);
  $(".agree .board-content-scroll").niceScroll(agreeScrollOption);
  $(".discuss .board-content-scroll").niceScroll(discussScrollOption);
  $(".consider .board-content-scroll").niceScroll(considerScrollOption);


  //modal animation
  $("body").on("click", ".modal-overlay", function(){
    $(this).parents(".modal").fadeOut();
  })
  //board animation
  $(".board-section").on("click", "a.edit", function(){
    $(this).parents(".card-content").find(".overlay").show();
  })
  $(".board-section").on("click", "a.btn-edit-large", function(){
    $($(this).attr("data-modal")).fadeIn();
  })
  $(".board-section").on("click", ".overlay a.btn-close", function(e){
    $(this).parents(".overlay").hide();
  })
  $("body").on("click", ".msg-tooltip a.btn-close", function(e){
    $(this).parents(".msg-tooltip").hide();
  })
  $(".board-section").on("click", ".card-message a.btn-close", function(e){
    $(this).parents(".card").fadeOut();
  })
  $(".board-section").on("click", "a.btn-case-study", function(){
    $(this).parents(".board-wrap").find(".board-popup").hide();
    $(this).parents(".board-wrap").find(".board-popup.case-study").show();
  })
  $(".board-section").on("click", "a.btn[data-action=show-note]", function(){
    $(this).parents(".board-wrap").find(".board-popup").hide();
    $(this).parents(".board-wrap").find(".board-popup.note").show();
  })

  $(".board-section").on("click", "a.btn-history-large", function(){
    $(this).parents(".board-wrap").find(".board-popup").hide();
    $(this).parents(".board-wrap").find(".board-popup.history").show();
  })
  $(".board-section").on("click", "a.btn-folder", function(){
    $(this).parents(".board-wrap").find(".board-popup.archive").show();
  })
  $(".board-section").on("click", ".board-popup a.btn-close", function(){
    if($(this).parents(".overlay").length == 0){
      $(this).parents(".board-popup").hide();
    }
  })
  $(".board-min-container a").hide();
  $(".board-section").on("click", "a.btn-avtivity-hide", function(){
    var cb = $(this);
    //hide parent board
    cb.parents(".board").removeClass("show").addClass("hide");
    //count board is show to change grid
    var count = $(".board.show").length;
    $(".board-container")
      .removeClass("col-1-1")
      .removeClass("col-1-2")
      .removeClass("col-1-3")
      .addClass("col-1-" + count);
    if(count == 1){ 
      $(".board.show a.btn-avtivity-hide").hide();//.attr("disabled", "");
    }else{
      $(".board.show a.btn-avtivity-hide").show();//.removeAttr("disabled");
    }
    $(".board-min-container a").hide();
    $(".board.hide").each(function(){
      $(".board-min-container ." + $(this).attr("data-type")).show();
    });
    $(".board-container").attr("data-consider", $(".board.consider.show").length)
    .attr("data-discuss", $(".board.discuss.show").length)
    .attr("data-agree", $(".board.agree.show").length);
    upadteScroller();
  })  
  $(".board-section").on("click", ".board-min-container a", function(){
    $(this).hide();
    $(".board-section .board." + $(this).attr('data-type')).removeClass("hide").addClass("show")
    var count = $(".board.show").length;
    $(".board-container")
      .removeClass("col-1-1")
      .removeClass("col-1-2")
      .removeClass("col-1-3")
      .addClass("col-1-" + count);
    if(count == 1){ 
      $(".board.show a.btn-avtivity-hide").hide();//.attr("disabled", "");
    }else{
      $(".board.show a.btn-avtivity-hide").show();//.removeAttr("disabled");
    }
    $(".board-min-container a").hide();
    $(".board.hide").each(function(){
      $(".board-min-container ." + $(this).attr("data-type")).show();
    });
    $(".board-container").attr("data-consider", $(".board.consider.show").length)
    .attr("data-discuss", $(".board.discuss.show").length)
    .attr("data-agree", $(".board.agree.show").length);
    upadteScroller();
    })

  //pick agreement
    $("body").on("click", ".agreement .select-control .head", function(){
      $(this).parent(".select-control").toggleClass("open")  
    })
    $("body").on("click", ".agreement .select-control li", function(){
      $(this).parents(".select-control").find("li").removeClass("selected");
      $(this).addClass("selected");
      $(this).parents(".select-control").toggleClass("open") ;
      $(this).parents(".select-group").find(".select-type").attr("data-type", $(this).find(".icon").attr("data-type")).find(".num").text($(this).find(".icon").attr("data-number"));

      window.location = $(this).attr("data-href");
    })


    //pick agreement
    $("body").on("click", ".select-filter .select-control .head", function(){
      $(this).parent(".select-control").toggleClass("open")  
    })
    $("body").on("click", ".select-filter .select-control li", function(){
      $(this).parents(".select-control").find("li").removeClass("selected");
      $(this).addClass("selected");
      $(this).parents(".select-control").toggleClass("open") ;
      $(this).parents(".select-group").find(".select-type").attr("data-type", $(this).find(".icon").attr("data-type")).find(".num").text($(this).find(".icon").attr("data-number"));
      $(".discuss #card-type.card-wrapper").hide();
      $(".discuss #card-list.card-wrapper").show();
    })

    //show board
    // $(".landing-page-section .icon.edit").click(function(){
    //   $(".board-section").show();
    //   $(".board-section #card-type, .board-section #card-list").show();
    //   $(".board-section #discuss-tool").hide();
    //   if($(this).attr("data-type") == "equity"){
    //     $(".board-section #card-type, .board-section #card-list").hide();
    //     $(".board-section #discuss-tool").show();
    //   }
    // })
    $(".logo").click(function(){
      $(".board-section").hide();
      $(".landing-page-section").show();
    })
    //add discuss action
    $(".btn-add-discuss").click(function(){
      $(".discuss #card-list.card-wrapper").hide();
      $(".discuss #card-type.card-wrapper").show();
    })
    $(".card-comfirm .btn").click(function(){
      $(this).parents(".card-comfirm").fadeOut();
      $(this).parents(".card.active").removeClass("active");
    })
})
$("[data-modal=equity]").click(function(){
  $("#equity-modal").fadeIn(function(){
    showTooltip($(".show-tooltip"), "Please assign a value to the contributions that you have made to date.");
  });
})

$(document).ready(function(){
  var url = window.location.href;
  if(url.indexOf("demo-standard")!=-1){
    showTooltip($('.demo-tt-1'), "You can not agree this item as you have all already agreed on a name.");
  }
  if(url.indexOf("demo-detail")!=-1){
    
  }

  num = parseInt(window.location.hash.replace('#', ''));
  $(".board-navigator .select-control ul li").eq(num - 1).addClass("selected");
  $(".board-navigator .select-type").attr("data-type", $(".board-navigator .select-control ul li").eq(num - 1).find("span.icon").attr("data-type"));
  $(".board-navigator .select-group .num").text(num);
  $(".agreements-list a").eq(num - 1).addClass("active");

})